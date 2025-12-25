import { useState, useEffect } from "react";

export default function DemoAnimatedToggle() {
  const [mode, setMode] = useState<"income" | "expense">("income");
  const [translateX, setTranslateX] = useState(0);

  // Animate with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateX(mode === "income" ? 0 : 100);
    }, 150); // delay in ms

    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <div className="flex justify-center relative w-64">
      {/* Sliding background */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-(--sidebar-active-bg) transition-transform ease-in-out"
        style={{
          transform: `translateX(${translateX}%)`,
          transitionDuration: "500ms", // duration
        }}
      />

      {/* Buttons container */}
      <div className="relative flex rounded-full bg-(--surface) p-1 ring-1 ring-(--border)">
        <button
          onClick={() => setMode("income")}
          className={`w-1/2 py-2 rounded-full text-lg font-normal text-center transition-colors duration-300 ${
            mode === "income" ? "text-(--title)" : "text-(--muted)"
          }`}
        >
          Income
        </button>

        <button
          onClick={() => setMode("expense")}
          className={`w-1/2 py-2 rounded-full text-lg font-normal text-center transition-colors duration-300 ${
            mode === "expense" ? "text-(--title)" : "text-(--muted)"
          }`}
        >
          Expense
        </button>
      </div>
    </div>
  );
}
