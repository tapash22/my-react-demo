import { useMemo, useState } from "react";
import { FUNDS_DATA } from "../../store/chart-data";
import { statisticMenu } from "../../store/home-data";
import { EXPENSE_DATA, FUND_COLORS, INCOME_DATA } from "../../store/chart-data";
import { Doughnut } from "react-chartjs-2";
import type { TooltipItem } from "chart.js";
import { cssVar } from "../../utils/cssVar";
import { centerTextPlugin } from "./centerTextPlugin";
import type { FinanceItem } from "../../assets/type/budget-type";
import type { DoughnutChartOptions } from "../../features/type/User";
import { DemoToggleTabs } from "../toggle/DemoToggleTabs";
import { HiDotsHorizontal } from "react-icons/hi";
import { DemoIcon } from "../common-property/DemoIcon";
import { FinanceList } from "../item/FinanceList";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { DropdownProfileCard } from "../cards/DropdownProfileCard";
// import { AnimatePresence, motion } from "framer-motion";
// import DemoAnimatedToggle from "../toggle/DemoAnimatedToggle";
// import { FUND_TABS } from "../../utils/tabData";

type Mode = "income" | "expense";
// type FinanceView = "income" | "expense";

export function StatisticDoughnutChart() {
  // Use mode directly for two tabs
  const [mode, setMode] = useState<Mode>("income");
  const [showMenuCard, setShowMenuCard] = useState<boolean>(false);

  const menuRef = useOutsideClick(() => setShowMenuCard(false));

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
    (fund) => FUND_COLORS[fund.name] ?? "#94a3b8",
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
        enabled: true,
        displayColors: false,
        boxPadding: 10,
        backgroundColor: cssVar("--surface"),
        borderColor: cssVar("--input-border"),
        borderWidth: 1,
        cornerRadius: 10,
        padding: 12,

        titleColor: cssVar("--secondary"),
        bodyColor: cssVar("--secondary"),
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
    <div className="w-full max-w-md mx-auto bg-(--background) rounded-xl py-1 ring-2 ring-(--input-border) ">
      <div className=" w-full h-auto flex flex-col sm:flex-col md:flex-row justify-start items-center p-4 space-y-2 md:space-y-0  gap-2">
        <div className="w-full sm:w-full md:w-auto flex flex-row justify-between items-center ">
          <p className="tracking-wide font-normal text-lg">Statistic</p>
          <div ref={menuRef} className="relative md:hidden">
            <DemoIcon
              icon={HiDotsHorizontal}
              size={24}
              onClick={() => setShowMenuCard(!showMenuCard)}
            />
            {showMenuCard && (
              <DropdownProfileCard
                menuData={statisticMenu}
                navClick={() => setShowMenuCard(showMenuCard)}
              />
            )}
          </div>
        </div>
        <DemoToggleTabs
          tabs={["Income", "Expense"]}
          activeIndex={activeIndex}
          onChange={(index) => setMode(tabs[index])}
          activeBgColor={cssVar("--surface")}
        />

        <div ref={menuRef} className="relative hidden sm:hidden md:flex w-auto">
          <DemoIcon
            icon={HiDotsHorizontal}
            size={24}
            onClick={() => setShowMenuCard(!showMenuCard)}
          />
          {showMenuCard && (
            <DropdownProfileCard
              menuData={statisticMenu}
              navClick={() => setShowMenuCard(showMenuCard)}
            />
          )}
        </div>
      </div>
      {/* <DemoAnimatedToggle /> */}

      {/* Chart */}
      <div className="h-[200px] w-full flex justify-center">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <div className="w-full h-auto space-y-3 p-3  overflow-hidden">
        <FinanceList dataList={dataList} />
      </div>
    </div>
  );
}
