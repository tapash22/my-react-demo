import { Democard } from "../../components/cards/DemoCard";
import { Transaction } from "../Transaction";
import { StatisticDoughnutChart } from "../../components/chart/StatisticDoughnutChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { DemoButton } from "../../components/button/DemoButton";
import card from "../../assets/images/card.jpg";
import { QUICK_ROUTING_PAGES } from "../../store/link-data";
import { DemoList } from "../../components/list/DemoList";
import { DemoIcon } from "../../components/common-property/DemoIcon";
import { NavLink } from "react-router-dom";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";
import { GoalTrackerCard } from "../../components/cards/GoalTrackerCard";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { useRef, useState } from "react";
import { FUNDS_DATA } from "../../store/chart-data";
import { activities, status } from "../../store/home-data";
import { DemoDetailsCard } from "../../components/cards/DemoDetailsCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { Container } from "../../components/layout/Container";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const keys = {
    id: "id",
    name: "name",
    targetDate: "targetDate",
    status: "status",
    currentAmount: "currentAmount",
    targetAmount: "targetAmount",
  } as const;

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
        {/* dashboard top component view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 w-full p-2">
          {status.map((statusData) => (
            <Democard key={statusData.title} statusData={statusData} />
          ))}
        </div>
        {/* dashboard top component view end */}

        {/* dashboard body component view */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full p-2 ">
          {/* 🔹 LEFT */}
          <div className="xl:col-span-1 flex flex-col gap-3 min-w-0 space-y-3">
            <StatisticDoughnutChart />
            <div className="w-full grid justify-center bg-(--surface) rounded-lg ">
              {QUICK_ROUTING_PAGES.length > 0 && (
                <DemoList
                  items={QUICK_ROUTING_PAGES}
                  initialCount={4}
                  direction={false}
                  children={(page) => (
                    <NavLink
                      key={page.path}
                      to={`/dashboard/${page.path}`}
                      className="h-full"
                    >
                      <div className="flex flex-col justify-center items-center w-full h-full scale-90 transition-all duration-500 hover:scale-100 hover:bg-(--background) hover:text-(--muted) px-4 py-2 ">
                        <DemoIcon size={24} icon={page.icon} />
                        <p className="text-sm text-center">{page.name}</p>
                      </div>
                    </NavLink>
                  )}
                />
              )}
            </div>
          </div>
          {/* 🔹 LEFT end*/}

          {/* 🔹 MIDDLE */}
          <div className="xl:col-span-2 flex flex-col gap-3 min-w-0 space-y-3">
            <MonthlyIncomeExpenseLineChart showFill={false} />
            <MonthlyIncomeExpenseLabelChart />
          </div>
          {/* 🔹 MIDDLE end*/}

          {/* 🔹 RIGHT */}
          <div className="hidden xl:block xl:col-span-1 flex-col gap-3 min-w-0 overflow-hidden rounded-xl space-y-3 px-2 ">
            <div className="w-full h-[25vh] ring-2 ring-(--input-border) scale-100 transition-all duration-300 hover:scale-110">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>

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
          </div>
          {/* 🔹 RIGHT end*/}
        </div>
        {/* dashboard body component view end*/}

        {/* dashboard bottom component view */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full h-auto p-2 items-stretch">
          {/* 🔹 LEFT */}
          <div className="xl:col-span-1 flex flex-col gap-5 min-w-0 h-full">
            <div className="p-2 ring-2 ring-(--input-border) rounded-xl flex-1">
              <GoalTrackerCard
                title="Budget Performance"
                path="/dashboard/budget-planning"
                pathTitle="View All"
              />
              <DemoCardWithProgressbar
                fundsData={FUNDS_DATA}
                keys={keys}
                direction={false}
                haveAction={false}
              />
            </div>
          </div>

          {/* 🔹 MIDDLE */}
          <div className="xl:col-span-2 min-w-0 h-full flex">
            <div className="w-full h-full">
              <Transaction />
            </div>
          </div>

          {/* 🔹 RIGHT */}
          <div className="hidden xl:flex xl:col-span-1 flex-col gap-5 min-w-0 h-auto">
            <div className="p-2 ring-2 ring-(--input-border) rounded-xl flex-1">
              <GoalTrackerCard
                title="Saving Plans"
                path="/dashboard/saving-goals"
                pathTitle="Add Plans"
              />
              <DemoCardWithProgressbar
                fundsData={FUNDS_DATA}
                keys={keys}
                direction={false}
                haveAction={false}
              />
            </div>
          </div>
        </div>
        {/* dashboard bottom component view end */}
      </Container>
    </PageLayout>
  );
}
