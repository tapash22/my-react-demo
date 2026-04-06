import type { IconType } from "react-icons";
import { FaRegBell } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoBadgeProps {
  icon?: IconType;
  badgeLengthCount?: number;
  isAvatorbadge?: boolean;
  badgeColor?: string;
  onClick?: () => void;
}
export function DemoBadge({
  icon = FaRegBell,
  badgeLengthCount,
  onClick,
  isAvatorbadge = false,
  badgeColor = "--foreground",
}: DemoBadgeProps) {
  const computedColor = `var(${badgeColor})`;
  return (
    <>
      <span
        className={`absolute ${isAvatorbadge ? "top-1 -right-1 ring-2 ring-(${badgeColor}) min-w-5 min-h-5 text-sm font-semibold tracking-wide " : "-top-2 -right-2 bg-transparent ring-1  ring-(--card-border) min-w-[18px] h-[18px] text-sm font-normal tracking-wide "} text-(--surface)  px-1 rounded-full  flex items-center justify-center object-contain  `}
        style={{
          background: computedColor,
          boxShadow: `0 0 0 2px ${computedColor}`,
        }}
      >
        {badgeLengthCount}
      </span>
      <DemoIcon icon={icon} size={30} onClick={onClick} />
    </>
  );
}
