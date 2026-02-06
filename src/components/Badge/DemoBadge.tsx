import type { IconType } from "react-icons";
import { FaRegBell } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoBadgeProps {
  icon?: IconType;
  badgeLengthCount?: number;
  onClick: () => void;
}
export function DemoBadge({
  icon = FaRegBell,
  badgeLengthCount,
  onClick,
}: DemoBadgeProps) {
  return (
    <>
      <span
        className="
                    absolute -top-2 -right-3 
                    min-w-[18px] h-[18px]
                    px-1
                    rounded-full
                    bg-transparent
                    text-(--foreground)
                    text-[11px]
                    font-semibold
                    flex items-center justify-center
                    ring-2 ring-(--foreground)
                    "
      >
        {badgeLengthCount}
      </span>
      <DemoIcon icon={icon} size={30} onClick={onClick} />
    </>
  );
}
