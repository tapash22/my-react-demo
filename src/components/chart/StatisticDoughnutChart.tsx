import { useMemo, useState } from "react";
import {
  EXPENSE_DATA,
  FUND_COLORS,
  FUNDS_DATA,
  INCOME_DATA,
} from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import type { TooltipItem } from "chart.js";
import { cssVar } from "../../utils/cssVar";
import { centerTextPlugin } from "./centerTextPlugin";
import type {
  DoughnutChartOptions,
  FinanceItem,
} from "../../assets/type/budget-type";
import { DemoToggleTabs } from "../toggle/DemoToggleTabs";
import { HiDotsHorizontal } from "react-icons/hi";
import { DemoIcon } from "../common-property/DemoIcon";
import { AnimatePresence, motion } from "framer-motion";
import { FinanceList } from "../item/FinanceList";
// import DemoAnimatedToggle from "../toggle/DemoAnimatedToggle";
// import { FUND_TABS } from "../../utils/tabData";

type Mode = "income" | "expense";
// type FinanceView = "income" | "expense";

export function StatisticDoughnutChart() {
  // Use mode directly for two tabs
  const [mode, setMode] = useState<Mode>("income");

  // Tabs array
  const tabs: Mode[] = ["income", "expense"];
  const activeIndex = tabs.indexOf(mode);

  const dataList: FinanceItem[] = useMemo(() => {
    return mode === "income" ? INCOME_DATA : EXPENSE_DATA;
  }, [mode]);
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
        spacing: 6,
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
    //using for size
    cutout: "80%",
    plugins: {
      title: {
        text: mode === "income" ? "Total Income" : "Total Expense",
      },
      legend: {
        position: "bottom",
        display: false,
      },
      tooltip: {
        enabled: false,
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
    <div className="w-full max-w-md mx-auto space-y-4 bg-(--background) ring-2 ring-(--input-border) rounded-xl">
      <div className="p-5 flex justify-start items-center gap-2">
        <p className=" tracking-wider font-normal text-lg">Statistic</p>
        <DemoToggleTabs
          tabs={["Income", "Expense"]}
          activeIndex={activeIndex}
          onChange={(index) => setMode(tabs[index])}
          activeBgColor={cssVar("--surface")}
        />
        <DemoIcon icon={HiDotsHorizontal} size={30} />
      </div>
      {/* <DemoAnimatedToggle /> */}

      {/* Chart */}
      <div className="h-[200px] w-full flex justify-center px-5">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <div className="w-full h-auto space-y-3 p-5  overflow-hidden">
        <FinanceList dataList={dataList} />
      </div>
    </div>
  );
}
