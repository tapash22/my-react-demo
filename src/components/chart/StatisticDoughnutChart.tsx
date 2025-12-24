import { useState } from "react";
import { FUND_COLORS, FUNDS_DATA } from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { cssVar } from "../../utils/cssVar";

type Mode = "income" | "expense";

export function StatisticDoughnutChart() {
  //mode use to show
  const [mode, setMode] = useState<Mode>("income");
  //   data Labels
  const labels = FUNDS_DATA.map((fund) => fund.name);

  //data object color
  const backgroundColor = FUNDS_DATA.map(
    (fund) => FUND_COLORS[fund.name] ?? "#94a3b8"
  );
  //   data values
  const values =
    mode === "income"
      ? FUNDS_DATA.map((fund) => fund.currentAmount)
      : FUNDS_DATA.map((fund) => fund.targetAmount - fund.currentAmount);

  //   chart data
  const data = {
    labels,
    datasets: [
      {
        label: mode === "income" ? "Income" : "Expense",
        data: values,
        backgroundColor: backgroundColor,
        // hoverOffSet: 8,
        borderWidth: 0,
        borderColor: "white",
        // hoverOffset: 8,
        spacing: 4,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    //start from
    rotation: -180,
    // anti-clockwise
    circumference: -360,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: cssVar("--secondary"),
          font: {
            size: 12,
            weight: "normal",
          },
        },
        display: false,
      },
      tooltip: {
        enabled: false,
        // backgroundColor: cssVar("--demo"),
        // borderColor: cssVar("--primary"),
        // borderWidth: 1,
        // cornerRadius: 10,
        // padding: 12,

        // titleColor: cssVar("--secondary"),
        // bodyColor: cssVar("--info"),

        // titleFont: {
        //   size: 13,
        //   weight: "bold",
        // },
        // bodyFont: {
        //   size: 12,
        // },
        // callbacks: {
        //   title: (ctx) => ctx[0].label,
        //   //type declear for tooltip item
        //   label: (ctx: TooltipItem<"doughnut">) =>
        //     `$${Number(ctx.raw).toLocaleString()}`,
        // },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-(--surface) p-1 ring-1 ring-(--border) ">
          <button
            onClick={() => setMode("income")}
            className={`px-5 py-1 rounded-full text-lg font-normal transition-all tracking-wider cursor-pointer
        ${
          mode === "income"
            ? "bg-(--sidebar-active-bg) text-(--title)  ring-1 ring-(--input-border)"
            : "text-(--muted) ring-1 ring-transparent  "
        }`}
          >
            Income
          </button>

          <button
            onClick={() => setMode("expense")}
            className={`px-4 py-1 rounded-full text-lg  transition-all font-normal  tracking-wider cursor-pointer
        ${
          mode === "expense"
            ? "bg-(--sidebar-active-bg) text-(--title) ring-1 ring-(--border) "
            : "text-(--muted) ring-1 ring-transparent  "
        }`}
          >
            Expense
          </button>
        </div>
      </div>

      {/* Chart */}
      <Doughnut data={data} options={options} />
    </div>
  );
}
