import { useState } from "react";
import { motion } from "framer-motion";

interface DemoExpandableSearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  initialWidth?: string; // e.g., "w-32"
  expandedWidth?: string; // e.g., "w-full sm:max-w-xs"
}

export function DemoExpandableSearch({
  value,
  onChange,
  placeholder = "Search...",
  initialWidth = "w-32",
  expandedWidth = "w-full sm:max-w-xs",
}: DemoExpandableSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Convert Tailwind width classes to CSS widths
  const parseWidth = (twClass: string) => {
    if (twClass === "w-32") return "8rem";
    if (twClass === "w-40") return "10rem";
    if (twClass === "w-48") return "12rem";
    if (twClass.includes("w-full")) return "100%";
    return "8rem";
  };

  // Compute width dynamically on every render
  const expanded = (() => {
    const width = window.innerWidth;
    if (width >= 640 && expandedWidth.includes("sm:max-w-xs")) {
      return isFocused ? 320 : parseWidth(initialWidth); // 20rem ~ 320px
    }
    return isFocused ? window.innerWidth : parseWidth(initialWidth);
  })();

  return (
    <motion.input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="input-search"
      style={{ width: parseWidth(initialWidth) }}
      animate={{
        width: expanded,
        boxShadow: isFocused
          ? "var(--shadow-default)" // use your CSS variable
          : "var(--shadow-light)", // use a lighter shadow variable
      }}
      transition={{
        width: { type: "tween", duration: 0 }, // instant width change on focus
        default: { type: "spring", stiffness: 200, damping: 25 }, // smooth on blur/shadow
      }}
    />
  );
}
