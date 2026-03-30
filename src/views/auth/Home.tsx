import { Democard } from "../../components/cards/DemoCard";
import { Transaction } from "../Transaction";
import { StatisticDoughnutChart } from "../../components/chart/StatisticDoughnutChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { DemoButton } from "../../components/button/DemoButton";
import card from "../../assets/images/card.jpg";
import { QUICK_ROUTING_PAGES } from "../../store/link-data";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { useRef, useState } from "react";
import { FUNDS_DATA } from "../../store/chart-data";
import { activities, status } from "../../store/home-data";
import { DemoDetailsCard } from "../../components/cards/DemoDetailsCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { Container } from "../../components/layout/Container";
import { DemoLinkCardList } from "../../components/cards/DemoLinkCardList";
import { DemoImageCard } from "../../components/cards/DemoImageCard";
import { DemoGoalOverviewCard } from "../../components/cards/DemoGoalOverviewCard";
import { GOAL_KEYS } from "../../features/type/User";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleRecentActivityAction = () => {
    console.log("click");
    setOpenMenu(true);
  };
  return (
    <PageLayout
      header={
        <PageHeaderCard title="Dashboard">
          <div className="flex flex-col sm:flex-row sm:items-center md:items-center gap-3 w-full sm:w-auto md:w-auto">
            <DemoButton
              title="Export Data"
              classTag="rounded-lg text-sm font-medium tracking-wide justify-center  px-4 py-2"
              buttonColor="bg-(--surface)"
              textColor="--foreground"
              widthSize="auto"
            />
            <DemoButton
              title="View Reports"
              classTag="rounded-lg text-sm font-medium tracking-wide inline-flex justify-center px-4 py-2 ring-1 ring-(--surface)"
              buttonColor="bg-(--shadow)"
              textColor="--muted"
              widthSize="auto"
            />
          </div>
        </PageHeaderCard>
      }
    >
      <Container ref={containerRef} direction="column">
        {/* dashboard header content view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 w-full p-2">
          {status.map((statusData) => (
            <Democard key={statusData.title} statusData={statusData} />
          ))}
        </div>
        {/* dashboard header content view end */}

        {/* dashboard body content component view */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full p-2 ">
          {/* LEFT */}
          <div className="xl:col-span-1 flex flex-col gap-3 min-w-0 space-y-3">
            {/* chart with income -expence list */}
            <StatisticDoughnutChart />
            {/* chart with income -expence list end*/}
            {/* page link */}
            <DemoLinkCardList items={QUICK_ROUTING_PAGES} />
            {/* page link end*/}
          </div>
          {/* LEFT end*/}

          {/*  MIDDLE */}
          <div className="xl:col-span-2 flex flex-col gap-3 min-w-0 space-y-3">
            {/* chart */}
            <MonthlyIncomeExpenseLineChart showFill={false} />
            <MonthlyIncomeExpenseLabelChart />
            {/* chart end*/}
          </div>
          {/* MIDDLE end*/}

          {/* RIGHT */}
          <div className="hidden xl:block xl:col-span-1 flex-col gap-3 min-w-0 rounded-xl space-y-3 px-2 ">
            {/* image card */}
            <DemoImageCard image={card} />
            {/* image card end*/}

            {/* recent list */}
            <DemoDetailsCard
              title="Recent Activity"
              onClick={handleRecentActivityAction}
              items={activities}
              keys={{
                name: "name",
                action: "action",
                amount: "amount",
                time: "time",
              }}
            />
            {/* recent list end*/}
          </div>
          {/* RIGHT end*/}
        </div>
        {/* dashboard body content component view end*/}

        {/* dashboard bottom content component view */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full h-auto p-2 items-stretch">
          {/* 🔹 LEFT */}
          {/* goal overview */}
          <DemoGoalOverviewCard
            title="Budget Performance"
            path="/dashboard/budget-planning"
            pathTitle="View All"
            overviewDetails={FUNDS_DATA}
            keys={GOAL_KEYS}
            direction={false}
            haveAction={false}
          />
          {/* goal overview end*/}

          {/* 🔹 MIDDLE */}
          <div className="xl:col-span-2 min-w-0 h-full flex">
            <Transaction />
          </div>

          {/* goal overview */}
          <DemoGoalOverviewCard
            title="Saving Plans"
            path="/dashboard/saving-goals"
            pathTitle="Add Plans"
            overviewDetails={FUNDS_DATA}
            keys={GOAL_KEYS}
            direction={false}
            haveAction={false}
          />
          {/* goal overview end*/}
        </div>
        {/* dashboard bottom content component view end */}
      </Container>
    </PageLayout>
  );
}
