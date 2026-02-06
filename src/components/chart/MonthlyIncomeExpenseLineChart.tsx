import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  getIncomeExpenseData,
  PERIOD_LABEL_MAP,
  PERIOD_OPTIONS,
} from "../../store/budget-data";
import { cssVar } from "../../utils/cssVar";
import type { PeriodType } from "../../assets/type/budget-type";
import { useMemo, useState } from "react";
import { DemoDropdownSelect } from "../dropdown/DemoDropdownSelect";

export function MonthlyIncomeExpenseLineChart() {
  const [period, setPeriod] = useState<PeriodType>("monthly");

  const sourceData = useMemo(() => getIncomeExpenseData(period), [period]);

  const data: ChartData<"line", number[], string> = {
    labels: sourceData.map((item) => item.label),
    datasets: [
      {
        label: "Income",
        data: sourceData.map((item) => item.income),
        borderColor: cssVar("--foreground"),
        backgroundColor: cssVar("--foreground"),
        fill: "start",
        tension: 0.4,
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
        fill: "start",
        tension: 0.4,
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

    // Global animation override for responsiveness/transitions
    animation: {
      duration: 400, // standard chart load animation
    },

    plugins: {
      title: {
        display: true,
        text: `${PERIOD_LABEL_MAP[period]} Income vs Expense`,
        align: "start",
      },
      legend: {
        position: "top",
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
    <div style={{ height: "400px" }}>
      <div className="w-full flex justify-end items-center">
        <DemoDropdownSelect
          value={period}
          options={PERIOD_OPTIONS}
          onChange={setPeriod}
          getLabel={(v) => PERIOD_LABEL_MAP[v]}
        />
      </div>
      <Line data={data} options={options} style={{ height: "250px " }} />
    </div>
  );
}
