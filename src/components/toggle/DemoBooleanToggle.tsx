import { useEffect, useState } from "react";
import { cssVar } from "../../utils/cssVar";

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
    <div className="p-3 ">
      <div className="relative flex w-10 rounded-full ring-2 ring-(--input-border) overflow-hidden">
        {/* Sliding Background */}
        <div
          className="absolute top-0 bottom-0 left-0 rounded-full"
          style={{
            width: "50%",
            transform: `translateX(${translateX}%)`,
            backgroundColor: activeBgColor,
            transition: `transform ${duration}ms ease`,
          }}
        />

        {/* False Button */}
        <button
          onClick={() => onChange(false)}
          className="flex-1 text-center font-semibold h-5 z-10"
          style={{
            color: !value ? cssVar("--foreground") : cssVar("--muted"),
          }}
        ></button>

        {/* True Button */}
        <button
          onClick={() => onChange(true)}
          className="flex-1 text-center font-semibold h-5 z-10"
          style={{
            color: value ? cssVar("--foreground") : cssVar("--muted"),
          }}
        ></button>
      </div>
    </div>
  );
}
