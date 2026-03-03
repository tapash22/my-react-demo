import { useRef } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { categoryExpenses } from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import { FinanceList } from "../../components/item/FinanceList";
import { cssVar } from "../../utils/cssVar";
import type { DoughnutChartOptions } from "../../features/type/User";
import { centerTextPlugin } from "../../components/chart/centerTextPlugin";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { CategoryCard } from "../../components/cards/CategoryCard";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoChip } from "../../components/chip/DemoChip";
// practice gsap with BsThreeDots.js
// import { GsapWithThreeExample } from "../../practice/GsapWithThreeExample";

export default function Reports() {
  const containerRef = useRef<HTMLDivElement>(null);

  // const lastMonth = 2350;
  const values = categoryExpenses.map((expense) => expense.amount);
  const total = values.reduce((sum, i) => sum + i, 0);

  // const difference = total - lastMonth;

  // Determine sign for display
  // const sign = difference >= 0 ? "+" : "-";

  const data = {
    labels: categoryExpenses.map((item) => item.label),
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#4F46E5",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#06B6D4",
          "#A855F7",
        ],
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
    rotation: 90,

    // anti-clockwise
    circumference: -360,
    //total value income / expense
    centerTotal: total,
    //using for size
    cutout: "60%",
    animation: {
      animateRotate: true,
      animateScale: true, // optional smooth scale
      duration: 1000,
      easing: "easeInOutCirc",
    },
    centerText: {
      valueColor: cssVar("--demo"), // total number color
      labelColor: cssVar("--demo"), // title above total color
    },
    plugins: {
      title: {
        text: "Expenses",
        color: "red", // ✅ title color
        font: {
          size: 16,
          family: "Inter, sans-serif",
          weight: "bold",
        },
        align: "center" as const,
        padding: { top: 0, bottom: 10 },
      },
      legend: {
        display: false,
      },
    },
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <PageLayout
      header={
        <PageHeaderCard
          title="Bank Accounts & Cards"
          subtitle="Securely connect your financial accounts"
          visibleDate={false}
        >
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Add Account or Card"
              icon={FaPlus}
              onClick={handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <div
        ref={containerRef}
        className="relative min-h-screen flex gap-3 items-start w-full h-auto p-2"
      >
        <div className="w-2/5 p-2 space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3  bg-(--surface) ">
            <PageHeaderCard
              subtitle="Expenses by Category"
              visibleDate={false}
            />
            <div
              style={{ height: "200px" }}
              className="w-full flex justify-center"
            >
              <Doughnut
                data={data}
                options={options}
                plugins={[centerTextPlugin]}
              />
            </div>
            <div className="w-full h-auto space-y-3 p-2  overflow-hidden">
              <FinanceList dataList={categoryExpenses} direction={false} />
            </div>
            {/* <p className="text-xl font-bold text-(--foreground)">
                    ${stat.value.toLocaleString()}
                  </p> */}
          </div>

          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3  bg-(--surface) ">
            <PageHeaderCard
              title="Budget Analysis"
              subtitle="AI-powered insights and projections for your spending"
              visibleDate={false}
            />
            <div className="w-full h-auto p-5 space-y-2 flex flex-col justify-center items-center bg-(--background) opacity-80 rounded-2xl">
              <div className="flex justify-between items-center  w-full">
                <p className="text-lg font-semibold tracking-wide text-(--muted) ">
                  Credit Utilization
                </p>
                <DemoChip label="95%" />
              </div>
              <DemoLinearProgressBar
                showLabel="Current Spending"
                height="h-1"
                currentAmount={200}
                targetAmount={300}
              />
              <DemoLinearProgressBar
                showLabel="Projected Total"
                height="h-1"
                currentAmount={200}
                targetAmount={300}
              />
            </div>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
        <div className="w-3/5 h-auto p-2 block space-y-5">
          <div className="block w-full rounded-xl p-4 h-96  ring-2 ring-(--input-border)">
            <MonthlyIncomeExpenseLineChart />
          </div>
          <div className="block w-full h-80 ring-2 ring-(--input-border) rounded-xl p-2 ">
            <MonthlyIncomeExpenseLabelChart />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
