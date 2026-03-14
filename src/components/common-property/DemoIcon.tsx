import type { IconType } from "react-icons";

interface DemoIconProps {
  icon: IconType | null;
  size?: number;
  color?: string;
  iconClass?: string;
  dropShadow?: boolean;
  onClick?: () => void;
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

  const colorClass = `text-(${color})`;
  return (
    <Icon
      size={size}
      className={`${colorClass} cursor-pointer ${iconClass} ${dropShadow ? "drop-shadow-[0_0_1px_currentColor]" : ""} `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
