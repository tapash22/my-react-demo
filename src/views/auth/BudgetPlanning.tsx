import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { budgetData } from "../../store/budget-data";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoAvatar } from "../../components/avatar/DemoAvatar";
import { categories } from "../../store/budget-data";
import { useState } from "react";
import { DemoCardExpansion } from "../../components/cards/DemoCardExpansion";

export default function BudgetPlanning() {
  const [budget, setBudget] = useState("");

  const { totalBudget, totalSpent, remaining } = budgetData.stats;
  const { amount, daysRemaining } = budgetData.dailyInsight;

  const statsArray = [
    { label: "Total Budget", value: totalBudget },
    { label: "Total Spent", value: totalSpent },
    { label: "Remaining", value: remaining },
  ];

  const handleClick = () => {
    console.log("click");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
    console.log(budget);
  };

  return (
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      <div className="block w-full h-auto p-2 space-y-5">
        {/* header  */}
        <PageHeaderCard
          title="Budget Planning"
          visibleDate={false}
          children={
            <div className="flex justify-end items-center gap-5">
              <DemoButton title="Export Data" />
              <DemoButton
                title="Add Category"
                icon={FaPlus}
                onClick={() => handleClick}
              />
            </div>
          }
        />
      </div>

      <div className="flex gap-3 items-start w-full h-auto p-2">
        <div className="w-1/3 p-2 sticky top-2 h-fit">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3 py-5 bg-(--surface)">
            <PageHeaderCard title="Budget " />

            <div className="flex justify-between ">
              {statsArray.map((stat) => (
                <div
                  key={stat.label}
                  className="px-2 py-2 bg-(--background) rounded-lg mx-1 flex-1"
                >
                  <p className="text-sm text-(--muted)">{stat.label}</p>
                  <p className="text-xl font-bold text-(--foreground)">
                    ${stat.value.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-2">
              <DemoLinearProgressBar
                targetAmount={totalBudget}
                currentAmount={totalSpent}
                showLabel="Budget Used"
              />
            </div>

            <div className="p-4 rounded-2xl bg-(--surface) flex justify-between items-center w-full border border-(--input-border)">
              <div className="block w-auto p-2 space-y-1">
                <p className="text-sm text-(--muted) font-medium">
                  Daily Budget
                </p>
                <p className="text-lg font-bold text-(--foreground)">
                  ${amount}
                </p>
              </div>
              <p className="text-sm text-(--muted) font-medium tracking-wide">
                for the next {daysRemaining} days
              </p>
            </div>

            <div className="flex flex-col w-full space-y-2 ">
              <p className="text-sm text-(--forground) text-left">
                Top Spending Categories
              </p>
              {budgetData.categories.length > 0 &&
                budgetData.categories.map((budget) => (
                  <DemoLinearProgressBar
                    key={budget.id}
                    targetAmount={budget.targetAmount}
                    currentAmount={budget.currentAmount}
                    children={
                      <div className="flex justify-between items-center py-3 px-2">
                        <div className="w-2/6 flex items-center gap-4">
                          <DemoAvatar icon={budget.icon} size={10} />
                          <span className="text-sm text-(--forground) text-left">
                            {budget.name}
                          </span>
                        </div>
                        <p className="text-sm text-(--forground) text-right">
                          {budget.currentAmount} %
                        </p>
                      </div>
                    }
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="w-2/3 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 ">
            <PageHeaderCard title="Budget Categories " visibleDate={false} />
            <div className="flex justify-between items-center p-2 w-full h-auto">
              <div className="w-1/2 h-auto flex justify-start items-center gap-3 ">
                <p className="text-wrap text-lg font-medium tracking-wider ">
                  Total budget: $3000
                </p>
                |
                <p className="text-wrap text-lg font-medium tracking-wider ">
                  Allocated: $2800
                </p>
              </div>
              <div className="w-1/2 h-auto flex justify-end items-center gap-3 ">
                <p className="text-sm font-normal text-wrap ">Manage Budget:</p>
                <input
                  type="text"
                  placeholder="Search..."
                  value={budget}
                  onChange={handleSearch}
                  className="input-search "
                />
                <DemoButton
                  title="update"
                  icon={FaPlus}
                  onClick={() => handleClick}
                />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              {categories.map((category) => (
                <DemoCardExpansion data={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
