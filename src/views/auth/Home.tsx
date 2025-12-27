import { Democard } from "../../components/cards/DemoCard";
import { SavingGoals } from "./SavingGoals";
import { Transaction } from "../Transaction";
import { StatisticDoughnutChart } from "../../components/chart/StatisticDoughnutChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";

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
    <div className="w-full h-full p-2 m-0 flex flex-col">
      {/* chart start */}
      <div className="block w-full h-auto p-2 space-y-5">
        <StatisticDoughnutChart />
      </div>
      {/* chart start end */}

      {/* bar start */}
      <div className="block w-full h-auto p-2 space-y-5">
        <MonthlyIncomeExpenseLabelChart />
      </div>
      {/* bar start */}

      <div className="block w-full h-auto p-2 space-y-5">
        <MonthlyIncomeExpenseLineChart />
      </div>

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
            <button className="subtitle-small-title text-(--subtitle) bg-(--surface) rounded-lg ring-1 ring-(--card-border) py-2 px-4">
              Export Data
            </button>
            <button className="subtitle-small-title text-gray-200  bg-blue-950 rounded-lg py-2 px-4">
              View Reports
            </button>
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

      {/* table with pagination */}
      <div className="block w-full h-auto p-2 space-y-5">
        <Transaction />
      </div>
      {/* table with pagination end */}

      {/* progress bar */}
      <div className="block w-full h-auto p-2 space-y-5">
        <SavingGoals />
      </div>
      {/* progress bar end */}
    </div>
  );
}
