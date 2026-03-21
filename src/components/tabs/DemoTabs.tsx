import { useEffect, useState, useRef } from "react";

export function DemoTabs({
  tabs,
  activeIndex,
  onChange,
  delay = 50,
  duration = 300,
  activeBgClass = "bg-(--surface)",
  useTabsBorder = false,
}: {
  tabs: { label: string; value?: string }[];
  activeIndex: number;
  onChange: (index: number) => void;
  delay?: number;
  duration?: number;
  activeBgClass?: string;
  useTabsBorder?: boolean;
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

  useEffect(() => {
    console.log("translateX updated:", translateX);
  }, [translateX]);

  return (
    <div
      className={`relative inline-flex rounded-lg 
    ${useTabsBorder ? "border-2 border-(--input-border)" : "shadow-(--shadow-card)"} 
    w-full md:w-auto overflow-x-scroll md:overflow-x-visible`}
    >
      {/* Sliding background */}
      <div
        className={`absolute top-0 left-0 bottom-0 z-0 ${activeBgClass}`}
        style={{
          width: `${activeWidth}px`,
          transform: `translateX(${translateX}px)`,
          transition: `transform ${duration}ms ease, width ${duration}ms ease`,
          borderTopLeftRadius: activeIndex === 0 ? "0.5rem" : 0, // rounded-left only for first tab
          borderBottomLeftRadius: activeIndex === 0 ? "0.5rem" : 0,
          borderTopRightRadius: activeIndex === tabs.length - 1 ? "0.5rem" : 0, // rounded-right only for last tab
          borderBottomRightRadius:
            activeIndex === tabs.length - 1 ? "0.5rem" : 0,
        }}
      />
      {/* Tab buttons */}
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        const isLast = i === tabs.length - 1;
        const isFirst = i === 0;

        // Border for useTabsBorder
        const borderClass =
          useTabsBorder && !isLast ? "border-r border-(--input-border)" : "";

        // Rounded corners only for active first or last tab
        let roundedClass = "";
        if (isActive && useTabsBorder) {
          if (isFirst) roundedClass = "rounded-tl-xl rounded-bl-xl";
          else if (isLast) roundedClass = "rounded-tr-xl rounded-br-xl";
        }

        return (
          <button
            key={tab.label || i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={`p-4 text-center transition-colors duration-300 relative z-10 cursor-pointer
              ${isActive ? "text-(--foreground) text-sm font-bold tracking-wide" : "text-(--muted) text-sm font-medium tracking-wide"}
              ${borderClass} ${roundedClass}`}
            onClick={() => onChange(i)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
