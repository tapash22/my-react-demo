import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { budgetData, statsArray } from "../../store/budget-data";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoAvatar } from "../../components/avatar/DemoAvatar";
import { categories } from "../../store/budget-data";
import { useRef, useState } from "react";
import { DemoCardExpansion } from "../../components/cards/DemoCardExpansion";
import { PageLayout } from "../../components/layout/PageLayout";
import { Container } from "../../components/layout/Container";

export default function BudgetPlanning() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [budget, setBudget] = useState("");

  const { amount, daysRemaining } = budgetData.dailyInsight;

  const handleClick = () => {
    console.log("click");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
    console.log(budget);
  };

  return (
    <PageLayout
      header={
        <PageHeaderCard title="Budget Planning" visibleDate={false}>
          <div className="flex justify-end items-center gap-5">
            <DemoButton title="Export Data" />
            <DemoButton
              title="Add Category"
              icon={FaPlus}
              iconSize={12}
              onClick={() => handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <Container ref={containerRef}>
        {/* left side */}
        <div className="w-full lg:w-1/2 xl:w-1/3 p-2 md:sticky top-2 h-fit">
          <div className="flex flex-col w-full h-auto ring-2 ring-(--border) rounded-xl p-3 space-y-3 py-5 bg-(--background)">
            <PageHeaderCard title="Budget" titleClass="text-lg font-normal" />
            <div className="flex flex-col md:flex-row justify-between w-full ">
              {statsArray.map((stat) => (
                <div
                  key={stat.label}
                  className="px-2 bg-(--background) rounded-lg mx-1 space-y-1"
                >
                  <p className="text-sm font-normal text-(--muted)">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-(--foreground) tracking-wide">
                    ${stat.value.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="px-2 py-1">
              <DemoLinearProgressBar
                targetAmount={budgetData.stats.totalBudget}
                currentAmount={budgetData.stats.totalSpent}
                height="h-2"
                showLabel="Budget Used"
              />
            </div>

            <div className="p-4 my-2 rounded-2xl  bg-(--pick) flex justify-between items-center w-full shadow-(--shadow-card)">
              <div className="block w-auto p-2 space-y-1">
                <p className="text-sm font-normal text-(--muted) tracking-wide">
                  Daily Budget
                </p>
                <p className="text-lg font-bold text-(--foreground)">
                  ${amount}
                </p>
              </div>
              <p className="text-sm font-medium text-(--muted) tracking-wide">
                For the next {daysRemaining} days
              </p>
            </div>

            <div className="flex flex-col w-full space-y-2 p-2 ">
              <p className="text-sm text-(--forground) text-left">
                Top Spending Categories
              </p>
              {budgetData.categories.length > 0 &&
                budgetData.categories.map((budget) => (
                  <DemoLinearProgressBar
                    key={budget.id}
                    targetAmount={budget.targetAmount}
                    currentAmount={budget.currentAmount}
                    height="h-2"
                    children={
                      <div className="flex justify-between items-center py-2 px-2">
                        <div className="w-2/6 flex items-center gap-2">
                          <DemoAvatar icon={budget.icon} size={10} />
                          <span className="text-sm text-(--forground) text-left">
                            {budget.name}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-(--forground) text-right">
                          {budget.currentAmount} %
                        </p>
                      </div>
                    }
                  />
                ))}
            </div>
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-full lg:w-1/2 xl:w-2/3 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-5 space-y-2 ">
            <PageHeaderCard
              title="Budget Categories"
              titleClass="text-lg font-normal"
              visibleDate={false}
            />
            <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-center px-2 w-full h-auto space-y-3">
              <div className="w-full lg:w-full xl:w-1/2 h-auto flex flex-col sm:flex-row justify-start items-center gap-2 ">
                <p className="space-x-1">
                  <span className="text-wrap text-sm font-normal text-(--foreground) tracking-wide">
                    Total budget:
                  </span>
                  <span className="text-sm font-semibold">$3000 </span>
                </p>
                <span className="h-4 w-px bg-red-700 inline-block "></span>
                <p className="space-x-1">
                  <span className="text-wrap text-sm font-normal text-(--foreground) tracking-wide">
                    Allocated:
                  </span>
                  <span className="text-sm font-semibold">$2800</span>
                </p>
              </div>
              <div className="w-full lg:w-full xl:w-1/2 h-auto flex flex-col sm:flex-row  justify-end items-center gap-3">
                <p className="text-sm font-normal tracking-wide whitespace-nowrap">
                  Manage Budget:
                </p>
                <input
                  type="text"
                  placeholder="Search..."
                  value={budget}
                  onChange={handleSearch}
                  className="input-search"
                />
                <DemoButton
                  title="Update"
                  classTag="text-sm font-medium flex items-center p-2 rounded-lg tracking-wide"
                  icon={FaPlus}
                  iconSize={12}
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
        {/* right side end */}
      </Container>
    </PageLayout>
  );
}
