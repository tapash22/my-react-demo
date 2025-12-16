import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";
import { FaCommentDots, FaArrowsAltH } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";

interface DemocardProps {
  title?: string;
  amount: string;
  change: string;
  trend: string;
  icon?: IconType;
  onClick?: () => void;
  dotClick?: () => void;
}

export function Democard({
  title = "",
  amount = "",
  change = "",
  trend = "",
  icon,
  onClick,
  dotClick,
}: DemocardProps) {
  return (
    <div className="bg-(--card-bg) ring-1 ring-(--border) w-full h-auto p-2 rounded-lg flex flex-col space-y-3 ">
      <div className="flex justify-between items-start p-2 w-full h-auto">
        <h2 className="flex flex-col">
          <span className="subtitle-small-title text-(--subtitle)">
            {title}
          </span>
          <span className="section-title text-(--title)">{amount}</span>
        </h2>
        <button className="text-(--primary)  flex justify-center items-center p-3  ">
          <DemoIcon
            size={16}
            icon={icon ? icon : FaArrowsAltH}
            onClick={onClick}
          />
        </button>
      </div>
      <div className="flex justify-between items-start p-2 w-full h-auto">
        <div className="bg-(--background) text-(--foreground) text-sm tracking-wide flex space-x-2 rounded-full py-1 px-4">
          <DemoIcon
            size={20}
            icon={trend === "up" ? GoArrowUpRight : GoArrowDownRight}
          />
          <span className="text-xs tracking-wider">{change}</span>
        </div>
        <div className="flex justify-center items-center p-3 ">
          <DemoIcon icon={HiDotsHorizontal} size={20} onClick={dotClick} />
        </div>
      </div>
    </div>
  );
}
