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
        // Use a semi-transparent version for the fill
        backgroundColor: cssVar("--foreground"),
        fill: true, // 🟢 Enable the area fill
        tension: 0.4, // 3. Keep/Add tension for curves
        pointRadius: 0, // 4. Remove points
        pointHoverRadius: 0, // 5. Remove points on hover
      },
      {
        label: "Expense",
        data: MONTHLY_INCOME_EXPENSE_DATA.map((item) => item.expense),
        borderColor: cssVar("--muted"), // Darker green like your image
        backgroundColor: cssVar("--muted"),
        fill: true, // 🟢 Enable the area fill
        tension: 0.4, // 3. Enable curves
        pointRadius: 0, // 4. Remove points
        pointHoverRadius: 0, // 5. Remove points on hover
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,

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
      },
    },
    scales: {
      y: {
        stacked: true,
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
