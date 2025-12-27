import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { MONTHLY_INCOME_EXPENSE_DATA } from "../../store/budget-data";
import { cssVar } from "../../utils/cssVar";

export function MonthlyIncomeExpenseLineChart() {
  const data = {
    labels: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.month),
    datasets: [
      {
        label: "Income",
        data: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.income),
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
        data: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.expense),
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
        text: "Line Chart Income vs Expense",
        align: "start",
      },
      legend: {
        position: "bottom",
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
          display: false, // ❌ hide x-axis line
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false, // ❌ hide x-axis line
        },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
