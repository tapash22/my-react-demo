import { LuClock3, LuRefreshCcw } from "react-icons/lu";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoButton } from "../button/DemoButton";
import { DemoChip } from "../chip/DemoChip";

export const BillCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-between p-4 bg-(--surface) rounded-xl ring-1 ring-(--input-border)  hover:ring-1 hover:ring-(--muted) lg:space-y-2 xl:space-y-0 ">
      {/* Left Section: Status & Details */}
      <div className="w-full xl:w-auto flex flex-col md:flex-row items-center gap-3">
        {/* Status Indicator */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center items-center space-x-1 ">
            <DemoIcon size={14} icon={LuClock3} color="var(--primary)" />
            <p className="text-xs font-bold text-(--foreground) tracking-wider">
              3d
            </p>
          </div>
          <DemoChip
            label="Due Soon"
            variant="outlined"
            labelSize="tiny"
            className="px-4 sm:px-2 whitespace-nowrap"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-2  space-y-2 sm:space-y-0">
            <h3 className="text-sm font-normal tracking-wide text-(--foreground)">
              Electric Bill
            </h3>
            <DemoChip
              icon={LuRefreshCcw}
              iconSize={14}
              label="Recurring"
              labelSize="tiny"
              className="px-2 uppercase text-(--muted)"
              variant="outlined"
            />
          </div>
          <p className="text-xs text-(--muted) font-normal tracking-wide text-center md:text-start">
            Utilities • Due May 25
          </p>
        </div>
      </div>
      {/* Left Section: Status & Details end*/}

      {/* Right Section: Amount & Action */}
      <div
        className="w-full xl:w-auto flex flex-col sm:flex-col md:flex-row 
                      justify-center md:justify-end lg:justify-between xl:justify-center 
                      items-center md:items-end  xl:items-center 
                      space-x-0 md:space-x-3 space-y-2 md:space-y-0  py-1"
      >
        <span className="text-center text-lg font-medium text-(--muted)">
          $120.35
        </span>
        <DemoButton
          title="Pay Now"
          classTag="w-full md:w-auto flex justify-center 
                    rounded-sm md:px-3 py-2 text-sm font-medium tracking-wide"
        />
      </div>
      {/* Right Section: Amount & Action end */}
    </div>
  );
};
