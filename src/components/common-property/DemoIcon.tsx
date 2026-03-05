import type { IconType } from "react-icons";

interface DemoIconProps {
  icon: IconType | null;
  size?: number;
  color?: string;
  iconClass?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export function DemoIcon({
  icon: Icon,
  size = 20,
  color = "var(--foreground)",
  iconClass,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DemoIconProps) {
  if (!Icon) return null;

  const colorClass = color ? `text-(${color})` : "text-(--foreground)";
  return (
    <Icon
      size={size}
      className={`${colorClass} cursor-pointer ${iconClass}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
