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
import { useState } from "react";
import { FUNDS_DATA } from "../../store/budget-data";
import { activities } from "../../store/budget-data";
import { DemoDetailsCard } from "../../components/cards/DemoDetailsCard";

export default function Home() {
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
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      {/* dashboard top component view */}
      <div className="block w-full h-auto p-2 space-y-5">
        {/* header  */}
        <PageHeaderCard
          title="Dashboard"
          children={
            <div className="flex justify-end items-center gap-5">
              <DemoButton title="Export Data" />
              <DemoButton
                title="View Reports"
                buttonColor="bg-blue-950"
                textColor="text-gray-200"
              />
            </div>
          }
        />
        {/* header end  */}

        <div className="grid grid-cols-4 gap-3 p-2">
          {status.map((item, i) => (
            <Democard
              key={i}
              amount={item.amount}
              title={item.title}
              change={item.change}
              trend={item.trend}
            />
          ))}
        </div>
      </div>
      {/* dashboard top component view end */}

      {/* dashboard body component view */}
      <div className="flex gap-3 items-start w-full h-auto p-2">
        {/* left side */}
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
            <StatisticDoughnutChart />
          </div>
          <div className="w-full  grid shadow-2xl">
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
                    <div className="flex flex-col justify-center items-center bg-transparent hover:bg-(--background) hover:text-(--muted) hover:opacity-80  px-3 py-4 h-full space-y-2 ">
                      <DemoIcon size={16} icon={page.icon} />
                      <span className="tracking-wide text-sm text-center font-normal text-(--forground) ">
                        {page.name}
                      </span>
                    </div>
                  </NavLink>
                )}
              />
            )}
          </div>
        </div>
        {/* left side end */}

        {/* middle side */}
        <div className="w-2/4 h-auto p-2 block space-y-5">
          {/* Line chart */}
          <div className="block w-[780px] h-full rounded-xl p-2">
            <MonthlyIncomeExpenseLineChart />
          </div>
          {/* Line chart end */}
          {/* bar chart */}
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-2 ">
            <MonthlyIncomeExpenseLabelChart />
          </div>
          {/* bar chart end */}
        </div>
        {/* middle side end */}

        {/* right side */}
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
            <img
              src={card}
              alt={card}
              className="bg-cover object-contain w-full"
            />
          </div>

          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
            <GoalTrackerCard
              title="Recent Activity"
              onClick={handleRecentActivityAction}
            />

            {/* //using for dropdown menu */}
            {openMenu && (
              <div className="w-10 h-10 ">
                <p>hi</p>
              </div>
            )}
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
      <div className="flex gap-3 items-start w-full h-auto p-2">
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
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
        <div className="w-2/4 h-auto p-2 block space-y-5">
          {/* table with pagination */}

          <Transaction />
          {/* table with pagination end */}
        </div>
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
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
    </div>
  );
}
