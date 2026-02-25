import { useState } from "react";
import Joyride, {
  ACTIONS,
  EVENTS,
  STATUS,
  type CallBackProps,
  type Step,
} from "react-joyride";
import { GlassTooltip } from "./GlassTooltip";

const TOUR_STORAGE_KEY = "app-tour-step";

interface DemoTourProps {
  steps: Step[];
}

export function DemoTour({ steps }: DemoTourProps) {
  // ✅ Restore step from localStorage
  const [stepIndex, setStepIndex] = useState<number>(() => {
    const saved = localStorage.getItem(TOUR_STORAGE_KEY);
    return saved ? Number(saved) : 0;
  });

  const [run, setRun] = useState<boolean>(true);
  const handleCallback = (data: CallBackProps) => {
    const { status, type, action, index } = data;
    // ✅ Save progress after each step
    if (type === EVENTS.STEP_AFTER) {
      const nextStep = index + 1;
      setStepIndex(nextStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(nextStep));
    }
    // 🔹 BACK
    if (type === EVENTS.STEP_AFTER && data.action === ACTIONS.PREV) {
      const prevStep = index - 1;
      setStepIndex(prevStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(prevStep));
    }
    // ❌ CLOSE BUTTON (X) → treat like skip
    if (action === ACTIONS.CLOSE) {
      localStorage.setItem(TOUR_STORAGE_KEY, String(index - 1));
      setRun(false);
    }

    // ✅ Handle missing target
    if (type === EVENTS.TARGET_NOT_FOUND) {
      const nextStep = index + 1;
      setStepIndex(nextStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(nextStep));
    }

    // ✅ If skipped → SAVE current step
    if (status === STATUS.SKIPPED) {
      localStorage.setItem(TOUR_STORAGE_KEY, String(index));
      setRun(false);
    }

    // ✅ If finished → clear storage
    if (status === STATUS.FINISHED) {
      localStorage.removeItem(TOUR_STORAGE_KEY);
      setRun(false);
    }
  };
  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous
      showSkipButton
      showProgress={false}
      callback={handleCallback}
      tooltipComponent={GlassTooltip}
      styles={{
        options: {
          overlayColor: "rgba(0,0,0,0.7)",
          zIndex: 10000,
        },
      }}
    />
  );
}
