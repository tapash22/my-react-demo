import { useEffect, useLayoutEffect, useState } from "react";
import type { Step } from "../type/User";

interface OnboardingProps {
  steps: Step[];
}

export function Onboarding({ steps }: OnboardingProps) {
  const [onboarding, setOnboarding] = useState({ stepIndex: 0, open: false });
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Open onboarding after DOM mounts
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setOnboarding({ stepIndex: 0, open: true });
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // Position the badge above target
  useLayoutEffect(() => {
    if (!onboarding.open) return;

    const targetEl = steps[onboarding.stepIndex]?.targetRef.current;
    if (!targetEl) return;

    const handle = requestAnimationFrame(() => {
      const rect = targetEl.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY - 10,
        left: rect.left + rect.width / 2,
      });
    });

    return () => cancelAnimationFrame(handle);
  }, [onboarding.stepIndex, onboarding.open, steps]);

  const nextStep = () => {
    if (onboarding.stepIndex < steps.length - 1) {
      setOnboarding({ stepIndex: onboarding.stepIndex + 1, open: true });
    } else setOnboarding({ ...onboarding, open: false });
  };

  const skipStep = () => setOnboarding({ ...onboarding, open: false });

  const step = steps[onboarding.stepIndex];

  if (!onboarding.open || !step?.targetRef.current) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        transform: "translateX(-50%) translateY(-100%)",
        background: "#1D4ED8",
        color: "white",
        padding: "8px 12px",
        borderRadius: 12,
        fontSize: 12,
        fontWeight: "bold",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div>{step.title}</div>
      <div className="text-xs mt-1">{step.content}</div>
      <div className="flex justify-end mt-2 space-x-2">
        <button
          onClick={nextStep}
          className="px-2 py-1 bg-white text-blue-600 rounded text-xs font-semibold"
        >
          Next
        </button>
        <button
          onClick={skipStep}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-semibold"
        >
          Skip
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid #1D4ED8",
        }}
      />
    </div>
  );
}
