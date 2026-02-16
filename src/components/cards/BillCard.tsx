import { LuClock3, LuRefreshCcw } from "react-icons/lu";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoButton } from "../button/DemoButton";
import { DemoChip } from "../chip/DemoChip";

export const BillCard = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-(--surface) rounded-2xl ring-1 ring-(--input-border) shadow-sm">
      {/* Left Section: Status & Details */}
      <div className="flex items-center gap-6">
        {/* Status Indicator */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1 text-(--danger) font-semibold text-sm">
            <DemoIcon size={14} icon={LuClock3} />
            <span>3d</span>
          </div>
          <DemoChip label="Due Soon" variant="outlined" />
        </div>

        {/* Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-bold text-(--foreground)">
              Electric Bill
            </h3>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-green-900/10 text-green-800 rounded-md text-sm font-normal uppercase tracking-wider border border-green-800/20">
              <DemoIcon size={10} icon={LuRefreshCcw} />
              <span>Recurring</span>
            </div>
          </div>
          <p className="text-sm text-(--muted) font-normal">
            Utilities • Due May 25
          </p>
        </div>
      </div>

      {/* Right Section: Amount & Action */}
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold text-(--danger)">$120.35</span>
        <DemoButton title="Pay Now" />
      </div>
    </div>
  );
};
