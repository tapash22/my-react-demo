import { Democard } from "../../components/cards/DemoCard";
import { Transaction } from "../Transaction";
import { StatisticDoughnutChart } from "../../components/chart/StatisticDoughnutChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { DemoButton } from "../../components/button/DemoButton";
import card from "../../assets/images/card.jpg";
import { QUICK_ROUTING_PAGES, status } from "../../store/budget-data";
import { DemoList } from "../../components/list/DemoList";
import { DemoIcon } from "../../components/common-property/DemoIcon";
import { NavLink } from "react-router-dom";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";
import { GoalTrackerCard } from "../../components/cards/GoalTrackerCard";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { useRef, useState } from "react";
import { FUNDS_DATA } from "../../store/budget-data";
import { activities } from "../../store/budget-data";
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
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Export Data"
              classTag="rounded-lg text-sm font-medium tracking-wide px-4 py-2"
              buttonColor="bg-(--surface)"
              textColor="--foreground"
              widthSize="auto"
            />
            <DemoButton
              title="View Reports"
              classTag="rounded-lg text-sm font-medium tracking-wide px-4 py-2 ring-1 ring-(--surface)"
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
        <div className="grid grid-cols-4 gap-3 w-full h-auto p-2">
          {status.map((statusData) => (
            <Democard key={statusData.title} statusData={statusData} />
          ))}
        </div>
        {/* dashboard top component view end */}

        {/* dashboard body component view */}
        <div className="flex gap-5 items-start w-full h-auto p-2">
          {/* left side */}
          <div className="w-1/4 h-auto flex flex-col space-y-5">
            <div className="flex flex-col w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
              <StatisticDoughnutChart />
            </div>
            <div className="w-full grid bg-(--surface) rounded-lg  ">
              {QUICK_ROUTING_PAGES.length && (
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
                      <div
                        className={`flex flex-col justify-center items-center transform scale-80 transition-all duration-700 hover:scale-110  hover:bg-(--background) hover:text-(--muted) p-3 h-full space-y-1 `}
                      >
                        <DemoIcon size={24} icon={page.icon} iconClass="" />
                        <p className="tracking-wide text-sm text-center font-normal  scale-95 hover:scale-100">
                          {page.name}
                        </p>
                      </div>
                    </NavLink>
                  )}
                />
              )}
            </div>
          </div>
          {/* left side end */}

          {/* middle side */}
          <div className="w-2/4 h-full flex flex-col space-y-5">
            {/* Line chart */}
            <div className="block w-auto rounded-xl p-4 h-96  ring-2 ring-(--input-border)">
              <MonthlyIncomeExpenseLineChart showFill={false} />
            </div>
            {/* Line chart end */}
            {/* bar chart */}
            <div className="block w-full h-80 ring-2 ring-(--input-border) rounded-xl p-2 ">
              <MonthlyIncomeExpenseLabelChart />
            </div>
            {/* bar chart end */}
          </div>
          {/* middle side end */}

          {/* right side */}
          <div className="w-1/4 h-auto flex flex-col space-y-5">
            <div className="w-full h-[26vh] ring-2 ring-(--input-border) rounded-xl overflow-hidden">
              <img
                src={card}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full h-auto p-2 ring-2 ring-(--input-border) rounded-xl">
              <GoalTrackerCard
                title="Recent Activity"
                onClick={handleRecentActivityAction}
              />

              {/* //using for dropdown menu */}
              {/* {openMenu && (
                <div className="w-10 h-10 ">
                  <p>hi</p>
                </div>
              )} */}
              {/* //using for dropdown menu end */}

              <DemoDetailsCard
                items={activities}
                keys={{
                  name: "name",
                  action: "action",
                  amount: "amount",
                  time: "time",
                }}
              />
            </div>
          </div>
          {/* right side end */}
        </div>
        {/* dashboard body component view end*/}

        {/* dashboard bottom component view */}
        <div className="flex gap-5 items-start w-full h-auto p-2">
          <div className="w-1/4 h-auto flex flex-col space-y-5">
            <div className="flex flex-col w-full h-auto p-2 ring-2 ring-(--input-border) rounded-xl space-y-1">
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
          <div className="w-2/4 h-auto  flex flex-col space-y-5">
            {/* table with pagination */}

            <Transaction />
            {/* table with pagination end */}
          </div>
          <div className="w-1/4 h-auto  flex flex-col space-y-5">
            <div className="flex flex-col w-full h-auto p-2 ring-2 ring-(--input-border) rounded-xl space-y-1">
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
