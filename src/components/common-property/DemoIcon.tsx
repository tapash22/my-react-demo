import type { IconType } from "react-icons";

interface DemoIconProps {
  icon: IconType;
  size?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export function DemoIcon({
  icon: Icon,
  size = 20,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DemoIconProps) {
  return (
    <Icon
      size={size}
      className="cursor-pointer text-(--foreground)"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
