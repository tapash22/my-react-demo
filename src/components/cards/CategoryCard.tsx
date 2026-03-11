import { FaUser } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoLinearProgressBar } from "../progressbar/DemoLinearProgressBar";
import { DemoCurrency } from "./DemoCurrency";
import { DemoDataCard } from "./DemoDataCard";

export function CategoryCard() {
  return (
    <div className="flex flex-col justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-3 rounded-xl space-y-2  hover:bg-(--sidebar-hover-bg) cursor-pointer">
      <DemoDataCard
        title="title"
        icon={FaUser}
        iconSize={12}
        chipLabel="account"
        chipLabelSize="tiny"
        chipclassName="px-2"
      />

      <div className="flex justify-end items-center gap-2 space-y-1 h-auto w-full">
        <DemoLinearProgressBar
          currentAmount={200}
          targetAmount={300}
          height="h-1"
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
