import { FUNDS_DATA } from "../../store/chart-data";
import { savingsData } from "../../store/saving-data";
import { monthlySavingData } from "../../store/saving-data";
import { useSavingsOverview } from "../../components/hooks/useSavingsOverview";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";
import { FUND_TABS } from "../../utils/tabData";
import { DemoCircleProgressbar } from "../../components/progressbar/DemoCircleProgressBar";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoTabs } from "../../components/tabs/DemoTabs";
import { useRef, useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { DemoMonthlyComparisonCard } from "../../components/cards/DemoMonthlyComparisonCard";
import { DemoFinancialMetricCard } from "../../components/cards/DemoFinancialMetricCard";
import { Container } from "../../components/layout/Container";
// this are gsap practice
// import { GsapExample } from "../../practice/GsapExample";

export default function SavingGoals() {
  // const menuRef = useRef<HTMLLIElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { overallProgress, savingsRate } = useSavingsOverview(
    FUNDS_DATA,
    1200,
    1500,
    6667,
  );

  const keys = {
    id: "id",
    name: "name",
    targetDate: "targetDate",
    status: "status",
    currentAmount: "currentAmount",
    targetAmount: "targetAmount",
  } as const;

  // default active tab
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = FUND_TABS[activeIndex];

  const handleClick = () => {
    console.log("click");
  };

  return (
    <PageLayout
      header={
        <PageHeaderCard title="Saving Goals" visibleDate={false}>
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Add Account or Card"
              icon={FaPlus}
              onClick={handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <Container ref={containerRef}>
        {/* left side card */}
        <div className="w-full lg:w-1/3 p-2 lg:sticky top-2 h-fit">
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-1">
            <PageHeaderCard
              title="Saving Goals"
              titleClass="text-lg font-normal"
              visibleDate={false}
            />

            <DemoCircleProgressbar percentage={overallProgress} />
            {/* Financial Stats */}
            <DemoMonthlyComparisonCard
              items={savingsData}
              showDifference={false}
            />
            {/* Monthly Section */}
            <DemoMonthlyComparisonCard
              title="Monthly Savings"
              items={monthlySavingData}
              showDifference={false}
            />
            {/* Progress Bar */}
            <DemoLinearProgressBar
              showLabel="Progress"
              currentAmount={1200}
              targetAmount={1500}
              height="h-1"
            />
            {/* Progress Bar end */}

            {/* Savings Rate Card */}
            <div className="p-2">
              <DemoFinancialMetricCard
                title="Savings Rate"
                value={savingsRate}
                description="of monthly income"
              />
            </div>
            {/* Savings Rate Card end */}
          </div>
        </div>
        {/* left side card end*/}

        {/* right side */}
        <div className="w-full lg:w-2/3  h-auto p-2 flex flex-col space-y-5">
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <div className="flex flex-col md:flex-row justify-between items-center py-2 ">
              <PageHeaderCard
                title="Savings Overview"
                titleClass="text-lg font-normal"
                visibleDate={false}
              />
              <div className="sticky top-0 z-40 rounded-xl  flex w-fit mx-auto lg:mx-0 justify-center sm:justify-center md:justify-center lg:justify-start">
                <DemoTabs
                  tabs={FUND_TABS}
                  activeIndex={activeIndex}
                  onChange={setActiveIndex}
                  delay={50}
                  duration={300}
                  activeBgClass="bg-(--surface)"
                />
              </div>
            </div>
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto scrollba">
              <DemoCardWithProgressbar
                fundsData={FUNDS_DATA}
                keys={keys}
                status={
                  activeTab.value === "all"
                    ? undefined
                    : (activeTab.value as "active" | "paused" | "completed")
                }
              />
            </div>
            {/* Scrollable content end */}
          </div>
        </div>
        {/* right side end*/}
      </Container>
    </PageLayout>
  );
}
