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
  delay = 100,
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
    <div className="p-5 w-full  mx-auto">
      {/* Parent wrapper with padding */}
      <div className="relative flex w-full rounded-full ring-2 ring-(--input-border) overflow-hidden">
        {/* Sliding background for active tab */}
        <div
          className="absolute flex justify-center items-center top-1 bottom-1 left-1 rounded-full opacity-50"
          style={{
            width: `${98 / tabs.length}%`,
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
              className="flex-1 z-10 text-center font-semibold"
              style={{
                backgroundColor: "transparent",
                color: isActive ? cssVar("--foreground") : cssVar("--muted"),
                padding: "12px 8px",
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
