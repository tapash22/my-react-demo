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
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sliding indicator position
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

  // Smart horizontal scroll (ONLY tabs)
  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    const container = containerRef.current;

    if (currentTab && container) {
      const tabLeft = currentTab.offsetLeft;
      const tabRight = tabLeft + currentTab.offsetWidth;

      const containerScroll = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      if (tabLeft < containerScroll) {
        container.scrollTo({
          left: tabLeft - 16,
          behavior: "smooth",
        });
      } else if (tabRight > containerScroll + containerWidth) {
        container.scrollTo({
          left: tabRight - containerWidth + 16,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
      className="overflow-x-auto overscroll-x-contain touch-pan-x shadow-(--shadow-button) rounded-lg"
    >
      {/* 🔥 INNER WRAPPER (controls background width) */}
      <div
        className={`relative inline-flex rounded-lg
        ${useTabsBorder ? "border-2 border-(--input-border)" : ""}
        snap-x snap-mandatory scroll-smooth `}
      >
        {/* Sliding background */}
        <div
          className={`absolute top-0 left-0 bottom-0 z-0 ${activeBgClass} ${activeBgClass ? "text-(--foreground)" : "text-(--muted)"}`}
          style={{
            width: `${activeWidth}px`,
            transform: `translateX(${translateX}px)`,
            transition: `transform ${duration}ms ease, width ${duration}ms ease`,
            borderTopLeftRadius: activeIndex === 0 ? "0.5rem" : 0,
            borderBottomLeftRadius: activeIndex === 0 ? "0.5rem" : 0,
            borderTopRightRadius:
              activeIndex === tabs.length - 1 ? "0.5rem" : 0,
            borderBottomRightRadius:
              activeIndex === tabs.length - 1 ? "0.5rem" : 0,
          }}
        />

        {/* Tabs */}
        {tabs.map((tab, i) => {
          const isActive = i === activeIndex;
          const isLast = i === tabs.length - 1;
          const isFirst = i === 0;

          const borderClass =
            useTabsBorder && !isLast ? "border-r border-(--input-border)" : "";

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
              onClick={() => onChange(i)}
              className={`shrink-0 snap-start px-4 py-3 whitespace-nowrap
              transition-colors duration-300 relative z-10 cursor-pointer
              ${
                isActive
                  ? "text-(--foreground) text-sm font-bold"
                  : "text-(--muted) text-sm font-medium"
              }
              ${borderClass} ${roundedClass}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
