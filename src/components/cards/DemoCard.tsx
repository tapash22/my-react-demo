import { DemoIcon } from "../common-property/DemoIcon";
import { FaArrowsAltH } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { DemoChip } from "../chip/DemoChip";
import type { StatusData } from "../../features/type/User";

interface DemocardProps {
  statusData: StatusData;
  onClick?: () => void;
  dotClick?: () => void;
}

export function Democard({ statusData, onClick, dotClick }: DemocardProps) {
  return (
    <div className="bg-(--surface) ring-1 ring-(--border)  w-full h-auto p-2 rounded-lg flex flex-col space-y-3 ">
      <div className="flex justify-between items-start p-2 w-full h-auto">
        <h2 className="flex flex-col">
          <p className="subtitle-small-title text-(--subtitle)">
            {statusData.title}
          </p>
          <p className="section-title text-(--title)">{statusData.amount}</p>
        </h2>
        <div className="p-2 bg-(--surface) rounded-lg flex justify-center items-center">
          <DemoIcon
            size={20}
            icon={statusData.icon ? statusData.icon : FaArrowsAltH}
            onClick={onClick}
          />
        </div>
      </div>
      <div className="flex justify-between items-start p-2 w-full h-auto">
        <DemoChip
          labelSize="tiny"
          label={statusData.change}
          iconSize={16}
          variant="outlined"
          icon={statusData.trend === "up" ? GoArrowUpRight : GoArrowDownRight}
        />

        <DemoIcon icon={HiDotsHorizontal} size={20} onClick={dotClick} />
      </div>
    </div>
  );
}
