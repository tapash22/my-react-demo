import { FaUser } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { DemoCurrency } from "./DemoCurrency";
import { DemoDataCard } from "./DemoDataCard";

export function CategoryCard() {
  return (
    <div className="flex flex-col justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-2 rounded-xl hover:bg-(--sidebar-hover-bg) cursor-pointer">
      <DemoDataCard
        title="title"
        icon={FaUser}
        iconSize={12}
        chipLabel="account"
        chipLabelSize="tiny"
        chipclassName="whitespace-nowrap p-1 rounded-sm"
      />

      <div className="flex justify-end items-center h-auto w-full">
        <DemoLinearProgressBar
          currentAmount={200}
          targetAmount={300}
          height="h-1"
          childrenBottom={
            <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-start sm:justify-between lg:items-center py-1 sm:py-0 ">
              <DemoCurrency
                amount={200}
                currencyLabel="Projected"
                currency="TK"
              />

              <div className="flex items-center gap-2">
                <span className="font-medium text-sm tracking-wide">
                  incress
                </span>
                <DemoIcon icon={FaUser} size={10} />
              </div>
            </div>
          }
        >
          <div className="w-full flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between mb-1 lg:mb-0">
            <DemoCurrency amount={200} currencyLabel="Spent" currency="TK" />
            <DemoCurrency amount={300} currencyLabel="Budget" currency="TK" />
          </div>
        </DemoLinearProgressBar>
      </div>
    </div>
  );
}
