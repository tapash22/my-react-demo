import { Democard } from "../../components/cards/DemoCard";
import { Transaction } from "../Transaction";
import { StatisticDoughnutChart } from "../../components/chart/StatisticDoughnutChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { DemoButton } from "../../components/button/DemoButton";
import card from "../../assets/images/card.jpg";
import { QUICK_ROUTING_PAGES } from "../../store/budget-data";
import { DemoList } from "../../components/list/DemoList";
import { DemoIcon } from "../../components/common-property/DemoIcon";
import { NavLink } from "react-router-dom";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";

export default function Home() {
  const date: Date = new Date();

  const formatteddate: string = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    {
      title: "Total Income",
      amount: "$7.8k",
      change: "+1.78%",
      trend: "up",
    },
    {
      title: "Total Expense",
      amount: "$4.3k",
      change: "-1.78%",
      trend: "down",
    },
    {
      title: "Total Savings",
      amount: "$5.6k",
      change: "+1.24%",
      trend: "up",
    },
    {
      title: "Total Investment",
      amount: "$3.75k",
      change: "+66.95%",
      trend: "up",
    },
  ];

  return (
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      {/* dashboard top component view */}
      <div className="block w-full h-auto p-2 space-y-5">
        {/* header title  */}
        <div className="flex justify-between w-full h-auto items-center p-2 ">
          <h2 className="flex flex-col">
            <span className="section-title text-(--title)">Dashboard</span>
            <span className="subtitle-small-title text-(--subtitle)">
              {formatteddate}
            </span>
          </h2>
          <div className="flex justify-end items-center gap-5">
            <DemoButton title="Export Data" />
            <DemoButton
              title="View Reports"
              buttonColor="bg-blue-950"
              textColor="text-gray-200"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 p-2">
          {stats.map((item, i) => (
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
                    <div className="flex flex-col justify-center items-center bg-transparent hover:bg-(--background) hover:opacity-50  px-3 py-4 h-full space-y-2 ">
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
          {/* bar chart */}
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-2 ">
            <MonthlyIncomeExpenseLabelChart />
          </div>
          {/* bar chart end */}

          {/* Line chart */}
          <div className="block w-full h-full rounded-xl p-2">
            <MonthlyIncomeExpenseLineChart />
          </div>
          {/* Line chart end */}
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
            <div className="flex justify-between items-center p-4 w-full">
              <p className="text-lg font-medium tracking-wide text-wrap text-(--forground)">
                Saving Plans
              </p>
              <NavLink
                to={`/dashboard/saving-goals`}
                className="underline tracking-wide text-sm font-semibold text-(--forground)"
              >
                View All
              </NavLink>
            </div>
            <DemoCardWithProgressbar direction={false} />
          </div>
        </div>
        {/* right side end */}
      </div>
      {/* dashboard body component view end*/}

      <div className="flex gap-3 items-start w-full h-auto p-2">
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
            <div className="flex justify-between items-center p-4 w-full">
              <p className="text-lg font-medium tracking-wide text-wrap text-(--forground)">
                Budget Performance
              </p>
              <NavLink
                to={`/dashboard/budget-planning`}
                className="underline tracking-wide text-sm font-semibold text-(--forground)"
              >
                View All
              </NavLink>
            </div>
            <DemoCardWithProgressbar direction={false} />
          </div>
        </div>
        <div className="w-2/4 h-auto p-2 block space-y-5">
          {/* table with pagination */}
          <div className="block w-full h-full rounded-xl p-2 ">
            <Transaction />
          </div>
          {/* table with pagination end */}
        </div>
        <div className="w-1/4 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl ">
            <div className="flex justify-between items-center p-4 w-full">
              <p className="text-lg font-medium tracking-wide text-wrap text-(--forground)">
                Saving Plans
              </p>
              <NavLink
                to={`/dashboard/saving-goals`}
                className="underline tracking-wide text-sm font-semibold text-(--forground)"
              >
                View All
              </NavLink>
            </div>
            <DemoCardWithProgressbar direction={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
