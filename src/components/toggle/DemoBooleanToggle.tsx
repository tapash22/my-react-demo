import { useEffect, useState } from "react";
import { cssVar } from "../../utils/cssVar";
import { DemoButton } from "../button/DemoButton";
import { color } from "framer-motion";

interface DemoBooleanToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  delay?: number;
  duration?: number;
  activeBgColor?: string;
  trueLabel?: string;
  falseLabel?: string;
}

export function DemoBooleanToggle({
  value,
  onChange,
  delay = 50,
  duration = 400,
  activeBgColor = "#10B981",
  trueLabel = "True",
  falseLabel = "False",
}: DemoBooleanToggleProps) {
  const [translateX, setTranslateX] = useState(value ? 100 : 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateX(value ? 100 : 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="flex items-center justify-center w-full">
      <DemoButton
        onClick={() => onChange(!value)}
        // The title updates based on state
        title={value ? trueLabel : falseLabel}
        // Removing default rings and adding a smooth hover scale
        classTag="flex items-center gap-3 bg-transparent ring-0 ring-transparent border-0 hover:scale-105 transition-transform"
      >
        {/* The Toggle Track */}
        <div
          className="relative w-12 h-7 rounded-full transition-colors duration-300 p-0.5 shadow-inner"
          style={{
            // If active, use the prop color; otherwise, use a muted gray
            backgroundColor: value ? activeBgColor : "var(--input-border)",
          }}
        >
          {/* The Sliding Dot */}
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
              value ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </DemoButton>
    </div>
  );
}
