import { FUNDS_DATA } from "../../store/budget-data";
import { useSavingsOverview } from "../../components/hooks/useSavingsOverview";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";
import { FUND_TABS } from "../../utils/tabData";
import { DemoCircleProgressbar } from "../../components/progressbar/DemoCircleProgressBar";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { useState } from "react";

export function SavingGoals() {
  const {
    totalSaved,
    totalGoals,
    // monthlyProgress,
    overallProgress,
    monthlyTarget,
    remaining,
    savedThisMonth,
    savingsRate,
  } = useSavingsOverview(FUNDS_DATA, 1200, 1500, 6667);

  // default active tab
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-evenly items-center gap-5 p-3 bg-(--background) ">
      {/* left side card */}
      <div className="flex flex-col items-center w-1/3 h-full p-5 shadow-(--shadow-card) rounded-xl space-y-2">
        <h3 className="font-bold subtitle-title text-start text-(--foreground) w-full p-3">
          Savings Overview
        </h3>
        <div className="flex justify-center items-center">
          <DemoCircleProgressbar percentage={overallProgress} />
        </div>
        {/* Financial Stats */}
        <div className="space-y-3 text-sm w-full p-3">
          <div className="flex justify-between">
            <span>Total Saved</span>
            <span className="font-semibold">
              ${totalSaved.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Goals</span>
            <span className="font-semibold">
              ${totalGoals.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Remaining</span>
            <span className="font-semibold">${remaining.toLocaleString()}</span>
          </div>
        </div>
        {/* Monthly Section */}
        <div className="space-y-2 text-sm w-full p-3">
          <h3 className="font-bold mb-2 text-start subtitle-title ">
            Monthly Savings
          </h3>
          <div className="flex justify-between">
            <span>Target</span>
            <span>${monthlyTarget.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Saved This Month</span>
            <span>${savedThisMonth.toLocaleString()}</span>
          </div>

          {/* Progress Bar */}
          <DemoLinearProgressBar currentAmount={1200} targetAmount={1500} />
        </div>

        {/* Savings Rate Card */}
        <div className="mt-6 p-4 bg-(--surface) rounded-lg text-center w-full">
          <div className="text-xs uppercase text-(--muted) font-medium">
            Savings Rate
          </div>
          <div className="text-2xl font-bold my-1">{savingsRate}%</div>
          <div className="text-xs text-(--muted)">of monthly income</div>
        </div>
      </div>
      {/* left side card end */}

      {/* right side list */}
      <div className="shadow-(--shadow-card) p-5 w-full h-[620px] rounded-2xl flex flex-col space-y-3 ">
        <div className="flex justify-between items-center shrink-0">
          <p className="text-(--foreground) subtitle-title p-3">Saving Goals</p>

          <ul className="list-none flex ring-2 ring-(--input-border)">
            {FUND_TABS.map((tab, i) => (
              <li
                key={i}
                className={`
            px-4 py-2 cursor-pointer border-r-2 last:border-r-0 subtitle-small-title
            ${
              i === activeIndex
                ? "text-(--foreground) font-bold border-none bg-(--surface)"
                : "text-gray-500 border-(--input-border)"
            }
          `}
                onClick={() => setActiveIndex(i)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto scrollbar">
          <DemoCardWithProgressbar
            status={
              FUND_TABS[activeIndex].value === "all"
                ? undefined
                : FUND_TABS[activeIndex].value
            }
          />
        </div>
      </div>

      {/* right side list end */}
    </div>
  );
}
