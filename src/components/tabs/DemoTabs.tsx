import { useEffect, useState, useRef } from "react";

export function DemoTabs({
  tabs,
  activeIndex,
  onChange,
  delay = 50,
  duration = 300,
  activeBgClass = "bg-(--surface)", // pass Tailwind-style class
}: {
  tabs: { label: string; value?: string }[];
  activeIndex: number;
  onChange: (index: number) => void;
  delay?: number;
  duration?: number;
  activeBgClass?: string;
}) {
  const [translateX, setTranslateX] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTab = tabRefs.current[activeIndex];
      if (currentTab) {
        setTranslateX(currentTab.offsetLeft);
        setActiveWidth(currentTab.offsetWidth);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, tabs.length, delay]);

  return (
    <div className="relative inline-flex rounded-lg ring-2 ring-(--input-border)">
      {/* Sliding background */}
      <div
        className={`absolute top-0 left-0 bottom-0 ${activeBgClass} rounded-lg`}
        style={{
          width: `${activeWidth}px`,
          transform: `translateX(${translateX}px)`,
          transition: `transform ${duration}ms ease, width ${duration}ms ease`,
        }}
      />

      {/* Tab buttons */}
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={tab.label || i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={`px-4 py-3 font-semibold text-center transition-colors duration-300 ${
              isActive ? "text-(--foreground) font-bold" : "text-(--muted)"
            } relative z-10`}
            onClick={() => onChange(i)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
