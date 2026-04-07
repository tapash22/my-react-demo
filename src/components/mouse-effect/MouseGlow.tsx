import { useEffect, useState } from "react";
import { useMousePosition } from "../../features/hook/useMousePosition";
import { useTheme } from "../hooks/useTheme";

export default function MouseGlow() {
  const mouse = useMousePosition();
  const { theme } = useTheme();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Smooth animation (like Brittany site)
  useEffect(() => {
    let raf: number;

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  const glowColor =
    theme === "dark"
      ? "99,102,241" // indigo
      : "79,70,229"; // dark slate for light mode

  const glowOpacity = theme === "dark" ? 0.18 : 0.25;

  return (
    <>
      {/* 🌟 Spotlight Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: `radial-gradient(
            500px at ${pos.x}px ${pos.y}px,
            rgba(${glowColor}, ${glowOpacity}),
            transparent 80%
          )`,
          transition: "background 0.2s ease",
        }}
      />

      {/* 🔵 Cursor Dot (your version upgraded) */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: theme === "dark" ? 0.5 : 0.35,
          boxShadow: `0 0 20px rgba(${glowColor}, 0.4)`,
        }}
      />
    </>
  );
}
