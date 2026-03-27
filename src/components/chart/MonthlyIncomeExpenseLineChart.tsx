import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  getIncomeExpenseData,
  PERIOD_LABEL_MAP,
  PERIOD_OPTIONS,
} from "../../store/chart-data";
import { cssVar } from "../../utils/cssVar";
import type { PeriodType } from "../../assets/type/budget-type";
import { useMemo, useState } from "react";
import { DemoDropdownSelect } from "../dropdown/DemoDropdownSelect";
import { useLeftToRightAnimation } from "../hooks/useLeftToRightAnimation";
interface MonthlyIncomeExpenseLineChartProps {
  showFill?: boolean;
}

export function MonthlyIncomeExpenseLineChart({
  showFill = true,
}: MonthlyIncomeExpenseLineChartProps) {
  const [period, setPeriod] = useState<PeriodType>("monthly");

  const sourceData = useMemo(() => getIncomeExpenseData(period), [period]);

  const plugin = useLeftToRightAnimation(12);

  const data: ChartData<"line", number[], string> = {
    labels: sourceData.map((item) => item.label),
    datasets: [
      {
        label: "Income",
        data: sourceData.map((item) => item.income),
        borderColor: cssVar("--foreground"),
        backgroundColor: cssVar("--foreground"),
        // 🟢 Controlled by props
        fill: showFill ? "start" : false,
        tension: 0.4,
        cubicInterpolationMode: "monotone",
        clip: false,
        pointRadius: 0, // 🟢 Hide by default
        pointHoverRadius: 6, // 🟢 Show on hover (was 0)
        pointBackgroundColor: cssVar("--primary"),
        pointBorderColor: "#fff",
        pointBorderWidth: 5,
      },
      {
        label: "Expense",
        data: sourceData.map((item) => item.expense),
        borderColor: cssVar("--muted"),
        backgroundColor: cssVar("--muted"),
        fill: showFill ? "start" : false,
        tension: 0.4,
        cubicInterpolationMode: "monotone",
        clip: false,

        borderCapStyle: "round",
        borderJoinStyle: "round",

        pointRadius: 0, // 🟢 Hide by default
        pointHoverRadius: 6, // 🟢 Show on hover
        pointHoverBackgroundColor: "red",
        pointBorderColor: "#fff",
        pointBorderWidth: 5,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    // 1. ADD PADDING TO PREVENT CUT EDGES
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 0,
      },
    },

    // 2. REMOVE HOVER DELAY (INSTANT POINTS)
    hover: {
      mode: "index",
      intersect: false,
    },

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      title: {
        display: false,
        text: `${PERIOD_LABEL_MAP[period]} Income vs Expense`,
        align: "start",
      },
      legend: {
        position: "bottom",
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        animation: {
          duration: 300,
        },
      },
    },
    scales: {
      y: {
        // stacked: true,
        beginAtZero: true,
        ticks: { display: false },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-auto h-auto object-contain space-y-0 p-0">
      <div className="w-full flex justify-end items-center relative ">
        <DemoDropdownSelect
          title={PERIOD_LABEL_MAP[period] + " Income vs Expense"}
          value={period}
          options={PERIOD_OPTIONS}
          onChange={setPeriod}
          getLabel={(v) => PERIOD_LABEL_MAP[v]}
        />
      </div>
      <div className="relative grow w-full h-[200px] sm:h-[200px] md:h-[230px] lg:h-[250px]">
        <Line data={data} options={options} plugins={[plugin]} />
      </div>
      {/* <Line data={data} options={options} plugins={[plugin]} /> */}
    </div>
  );
}
