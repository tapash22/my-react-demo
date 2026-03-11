import type { IconType } from "react-icons";
import type { SizeType } from "../../features/type/User";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoChip } from "../chip/DemoChip";

interface DemoDataCardProps {
  title: string;
  titleClass?: string;
  icon?: IconType;
  iconSize?: number;
  chipLabel?: string;
  chipIcon?: IconType;
  chipLabelSize?: SizeType;
  chipclassName?: string;
}
export function DemoDataCard({
  title,
  titleClass,
  icon,
  iconSize = 12,
  chipIcon,
  chipLabel,
  chipLabelSize,
  chipclassName,
}: DemoDataCardProps) {
  return (
    <div className="flex justify-between items-center gap-3 w-full px-3 py-1 h-auto ">
      <div className="w-1/2 h-auto flex justify-start items-center gap-2 ">
        {icon && <DemoIcon icon={icon} size={iconSize} />}
        <h2
          className={`${titleClass ? titleClass : "text-sm font-normal"} tracking-wide`}
        >
          {title}
        </h2>
      </div>
      <h2 className="text-lg font-semibold text-(--forground) flex items-center gap-2"></h2>
      {chipLabel && (
        <DemoChip
          label={chipLabel}
          labelSize={chipLabelSize ?? "tiny"}
          icon={chipIcon}
          className={chipclassName}
        />
      )}
    </div>
  );
}
