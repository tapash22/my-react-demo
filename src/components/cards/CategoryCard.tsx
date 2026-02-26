import { FaUser } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoChip } from "../chip/DemoChip";
import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { DemoCurrency } from "./DemoCurrency";

export function CategoryCard() {
  return (
    <div className="flex flex-col justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-3 rounded-xl space-y-2">
      <div className="flex justify-between items-center gap-3 w-full px-3 h-auto ">
        <h2 className="text-lg font-semibold text-(--forground) flex items-center gap-2">
          <DemoIcon icon={FaUser} size={12} />
          <span className="text-sm font-normal tracking-wide">title</span>
        </h2>
        <DemoChip label="account" labelSize="tiny" />
      </div>

      <div className="flex justify-end items-center gap-2 space-y-1 h-auto w-full">
        <DemoLinearProgressBar
          currentAmount={200}
          targetAmount={300}
          childrenBottom={
            <div className="w-full flex justify-between items-center ">
              <DemoCurrency
                amount={200}
                currencyLabel="Projected"
                currency="TK"
              />

              <p className="flex items-center gap-2">
                <span className="font-medium text-sm tracking-wide">
                  incress
                </span>
                <DemoIcon icon={FaUser} size={10} />
              </p>
            </div>
          }
        >
          <div className="w-full flex justify-between">
            <DemoCurrency amount={200} currencyLabel="Spent" currency="TK" />
            <DemoCurrency amount={300} currencyLabel="Budget" currency="TK" />
          </div>
        </DemoLinearProgressBar>
      </div>
    </div>
  );
}
