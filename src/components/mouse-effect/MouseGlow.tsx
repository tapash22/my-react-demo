import { useMousePosition } from "../../features/hook/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: `radial-gradient(
          600px at ${x}px ${y}px,
          rgba(99,102,241,0.15),
          transparent 80%
        )`,
      }}
    />
  );
}
