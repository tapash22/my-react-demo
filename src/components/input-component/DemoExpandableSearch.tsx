import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { useOutsideClick } from "../hooks/useOutsideClick";
import { FaTimes } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface DemoExpandableSearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  initialWidth?: string;
  expandedWidth?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
  };
  resetKey?: number;
}

export function DemoExpandableSearch({
  value,
  onChange,
  placeholder = "Search...",
  initialWidth = "12rem",
  expandedWidth = {
    xs: "100%",
    sm: "18rem",
    md: "22rem",
    lg: "100%",
  },
  resetKey = 0,
}: DemoExpandableSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  //using for search back to default size
  const inputRef = useRef<HTMLInputElement | null>(null);

  // ===============================
  // SAFE CLOSE FUNCTION (NO SIDE EFFECT CHAINS)
  // ===============================
  const closeSearch = useCallback(() => {
    setIsFocused(false);
  }, []);

  // ===============================
  // OUTSIDE CLICK → ONLY UI STATE
  // ===============================
  const containerRef = useOutsideClick(() => {
    closeSearch();
  });

  // =========================
  // RESET FROM PARENT (FIXED)
  // =========================
  useEffect(() => {
    // STEP 1: state update
    setIsFocused(false);

    // STEP 2: defer DOM mutation to avoid React sync warning
    const id = requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.value = ""; // avoid controlled sync issues
        inputRef.current.blur();
      }
    });

    return () => cancelAnimationFrame(id);
  }, [resetKey]);

  // =========================
  // SCREEN SIZE
  // =========================
  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // =========================
  // ESC KEY
  // =========================
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();

        requestAnimationFrame(() => {
          inputRef.current?.blur();
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeSearch]);

  // =========================
  // WIDTH CALC
  // =========================
  const getWidth = () => {
    if (!isFocused) return initialWidth;
    const w = screenWidth;
    if (w <= 500) return expandedWidth.xs ?? "100%";
    if (w <= 639) return expandedWidth.sm ?? "18rem";
    if (w <= 1023) return expandedWidth.md ?? "22rem";
    return expandedWidth.lg ?? "24rem";
  };

  // =========================
  // CLEAR
  // =========================
  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative inline-flex items-center"
    >
      <motion.input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        className="input-search"
        animate={{
          width: getWidth(),
          boxShadow: isFocused
            ? "var(--shadow-default)"
            : "var(--shadow-light)",
        }}
        transition={{
          width: { type: "tween", duration: 0 },
          default: { type: "spring", stiffness: 200, damping: 25 },
        }}
      />

      {value && isFocused && (
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClear}
          className="absolute right-2 text-gray-500 hover:text-black transition"
        >
          <FaTimes size={14} />
        </button>
      )}
    </motion.div>
  );
}
