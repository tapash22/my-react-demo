import { useState } from "react";
import { FUND_COLORS, FUNDS_DATA } from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import type { TooltipItem } from "chart.js";
import { cssVar } from "../../utils/cssVar";
import { centerTextPlugin } from "./centerTextPlugin";
import type { DoughnutChartOptions } from "../../assets/type/budget-type";
// import DemoAnimatedToggle from "../toggle/DemoAnimatedToggle";
import { DemoToggleTabs } from "../toggle/DemoToggleTabs";
// import { FUND_TABS } from "../../utils/tabData";

type Mode = "income" | "expense";

export function StatisticDoughnutChart() {
  // Use mode directly for two tabs
  const [mode, setMode] = useState<Mode>("income");

  // Tabs array
  const tabs: Mode[] = ["income", "expense"];
  const activeIndex = tabs.indexOf(mode);
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

  //total Calculation
  const total = values.reduce((sum, v) => sum + v, 0);

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

  const options: DoughnutChartOptions = {
    responsive: true,
    //start from
    rotation: -180,
    // anti-clockwise
    circumference: -360,
    //total value income / expense
    centerTotal: total,
    plugins: {
      title: {
        text: mode === "income" ? "Total Income" : "Total Expense",
      },
      legend: {
        position: "bottom",
      },
      tooltip: {
        // enabled: false,
        backgroundColor: cssVar("--demo"),
        borderColor: cssVar("--primary"),
        borderWidth: 1,
        cornerRadius: 10,
        padding: 12,

        titleColor: cssVar("--secondary"),
        bodyColor: cssVar("--info"),

        titleFont: {
          size: 13,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          title: (ctx) => ctx[0].label,
          //type declear for tooltip item
          label: (ctx: TooltipItem<"doughnut">) =>
            `$${Number(ctx.raw).toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* <DemoAnimatedToggle /> */}
      <DemoToggleTabs
        tabs={["Income", "Expense"]}
        activeIndex={activeIndex}
        onChange={(index) => setMode(tabs[index])}
        activeBgColor={cssVar("--surface")} // green for active tab
      />

      {/* Chart */}
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}
