import { Bar } from "react-chartjs-2";
import { MONTHLY_INCOME_EXPENSE_DATA } from "../../store/budget-data";
import type { ChartOptions } from "chart.js";
import { cssVar } from "../../utils/cssVar";

export function MonthlyIncomeExpenseLabelChart() {
  //data
  const data = {
    labels: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.month),
    datasets: [
      {
        label: "Income",
        data: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.income),
        borderRadius: 999,
        borderSkipped: false,
        backgroundColor: cssVar("--surface"),
        // barThickness: 20,
        barPercentage: 0.8, // width of individual bar → leaves gap
        categoryPercentage: 0.4, // total category width → bars closer but padded
      },
      {
        label: "Expense",
        data: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.expense),
        borderRadius: 999,
        borderSkipped: false,
        backgroundColor: cssVar("--surface"),
        // barThickness: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
    ],
  };

  //   chart data
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Income vs Expense",
        align: "start",
      },
      tooltip: {
        backgroundColor: cssVar("--surface"),
        displayColors: false,
        titleMarginBottom: 6,
        titleColor: cssVar("--foreground"),
        bodyColor: cssVar("--foreground"),
        titleAlign: "center",
        bodySpacing: 6,
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label;
          },
          label: (context) => {
            // const icon = context.dataset.label === "Income" ? ":" : ":";
            return ` ${context.dataset.label} : $${context.formattedValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true, // ✅ show month labels
        ticks: {
          display: true, // month text visible
        },
        grid: {
          display: false, // ❌ hide vertical grid
        },
        border: {
          display: false, // ❌ hide x-axis line
        },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: false },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
