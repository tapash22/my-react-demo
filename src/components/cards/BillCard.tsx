import { LuClock3, LuRefreshCcw } from "react-icons/lu";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoButton } from "../button/DemoButton";
import { DemoChip } from "../chip/DemoChip";

export const BillCard = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-(--surface) rounded-xl ring-1 ring-(--input-border)  hover:ring-1 hover:ring-(--muted) ">
      {/* Left Section: Status & Details */}
      <div className="flex items-center gap-3">
        {/* Status Indicator */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center items-center space-x-1 ">
            <DemoIcon size={14} icon={LuClock3} color="--danger" />
            <p className="text-xs font-medium text-(--foreground) tracking-wide">
              3d
            </p>
          </div>
          <DemoChip
            label="Due Soon"
            variant="outlined"
            labelSize="tiny"
            className="px-2"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between space-x-2">
            <h3 className="text-sm font-normal tracking-wide text-(--foreground)">
              Electric Bill
            </h3>
            <DemoChip
              icon={LuRefreshCcw}
              iconSize={14}
              label="Recurring"
              labelSize="tiny"
              className="px-2 uppercase"
              variant="outlined"
            />
          </div>
          <p className="text-xs text-(--muted) font-normal tracking-wide">
            Utilities • Due May 25
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <span className="text-lg font-medium text-(--muted)">$120.35</span>
        <DemoButton
          title="Pay Now"
          classTag="px-3 py-1 text-sm font-medium tracking-wide  rounded-sm "
        />
      </div>
      {/* Right Section: Amount & Action */}
    </div>
  );
};
