import { LuClock3, LuRefreshCcw } from "react-icons/lu";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoButton } from "../button/DemoButton";
import { DemoChip } from "../chip/DemoChip";

export const BillCard = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-(--surface) rounded-2xl ring-1 ring-(--input-border) shadow-sm hover:bg-(--sidebar-active-bg) opacity-90 hover:opacity-100">
      {/* Left Section: Status & Details */}
      <div className="flex items-center gap-6">
        {/* Status Indicator */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1 text-(--danger) font-semibold text-sm">
            <DemoIcon size={14} icon={LuClock3} />
            <span className="font-sm font-semibold text-(--foreground) tracking-wide">
              3d
            </span>
          </div>
          <DemoChip
            label="Due Soon"
            variant="outlined"
            labelSize="tiny"
            className="px-2"
          />
        </div>

        {/* Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-medium tracking-wide text-(--foreground)">
              Electric Bill
            </h3>
            <DemoChip
              icon={LuRefreshCcw}
              iconSize={16}
              label="Recurring"
              labelSize="tiny"
              className="px-1 uppercase"
            />
          </div>
          <p className="text-sm text-(--muted) font-normal tracking-wide">
            Utilities • Due May 25
          </p>
        </div>
      </div>

      {/* Right Section: Amount & Action */}
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold text-(--danger)">$120.35</span>
        <DemoButton
          title="Pay Now"
          classTag="px-3 py-2 text-sm font-normal tracking-wide shadow-(--shadow-default)"
        />
      </div>
    </div>
  );
};
