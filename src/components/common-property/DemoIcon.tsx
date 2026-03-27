import type { IconType } from "react-icons";

interface DemoIconProps {
  icon: IconType | null;
  size?: number;
  color?: string;
  iconClass?: string;
  dropShadow?: boolean;
  onClick?: (e?: React.MouseEvent<SVGElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export function DemoIcon({
  icon: Icon,
  size = 20,
  color = "var(--foreground)",
  iconClass,
  dropShadow = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DemoIconProps) {
  if (!Icon) return null;

  return (
    <Icon
      size={size}
      className={[
        "cursor-pointer transition-all duration-200",
        dropShadow ? "drop-shadow-[0_0_2px_currentColor]" : "",
        iconClass,
      ].join(" ")}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        color,
        fill: "currentColor", // 🔥 IMPORTANT FIX
      }}
    />
  );
}
