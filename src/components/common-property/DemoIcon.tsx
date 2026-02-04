import type { IconType } from "react-icons";

interface DemoIconProps {
  icon: IconType | null;
  size?: number;
  color?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export function DemoIcon({
  icon: Icon,
  size = 20,
  color = "--foreground",
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DemoIconProps) {
  if (!Icon) return null;

  const colorClass = color ? `text-(${color})` : "text-(--foreground)";
  return (
    <Icon
      size={size}
      className={`${colorClass} cursor-pointer`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
