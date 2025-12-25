import { useState, useEffect } from "react";
import { cssVar } from "../../utils/cssVar";

interface ToggleTabsProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  delay?: number; // ms
  duration?: number; // ms
  activeBgColor?: string; // single color for active tab
}

export function DemoToggleTabs({
  tabs,
  activeIndex,
  onChange,
  delay = 50,
  duration = 500,
  activeBgColor = "#10B981",
}: ToggleTabsProps) {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateX(100 * activeIndex);
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, tabs.length, delay]);

  return (
    <div className="p-3 w-full  mx-auto">
      {/* Parent wrapper with padding */}
      <div className="relative flex w-full rounded-full ring-2 ring-(--input-border) overflow-hidden">
        {/* Sliding background for active tab */}
        <div
          className="absolute flex items-center top-1 bottom-1 left-1 right-1 rounded-full"
          style={{
            width: `${97 / tabs.length}%`,
            height: "calc(100%-2)", // adjust height to fit inside container
            transform: `translateX(${translateX}%)`,
            backgroundColor: activeBgColor,
            transition: `transform ${duration}ms ease`,
          }}
        />

        {/* Buttons */}
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab}
              onClick={() => onChange(index)}
              className="flex-1 text-center font-semibold transition-colors duration-300"
              style={{
                backgroundColor: "transparent",
                color: isActive ? cssVar("--foreground") : cssVar("--muted"),
                padding: "5px",
                zIndex: 1,
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
