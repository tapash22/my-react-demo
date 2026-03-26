import { useRef } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { categoryExpenses } from "../../store/expense-data";
import { spendingTips } from "../../store/reports-data";
import { Doughnut } from "react-chartjs-2";
import { FinanceList } from "../../components/item/FinanceList";
import { cssVar } from "../../utils/cssVar";
import type { DoughnutChartOptions } from "../../features/type/User";
import { centerTextPlugin } from "../../components/chart/centerTextPlugin";
import { MonthlyIncomeExpenseLineChart } from "../../components/chart/MonthlyIncomeExpenseLineChart";
import { MonthlyIncomeExpenseLabelChart } from "../../components/chart/MonthlyIncomeExpenseLabelChart";
import { CategoryCard } from "../../components/cards/CategoryCard";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoDataCard } from "../../components/cards/DemoDataCard";
import { DemoPageSectionCard } from "../../components/cards/DemoPageSectionCard";
import { Container } from "../../components/layout/Container";
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
    cutout: "70%",
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
        padding: { top: 0, bottom: 5 },
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
      <Container ref={containerRef}>
        {/* left side */}

        <div className="w-full lg:w-1/2 xl:w-1/3 h-auto space-y-5 p-2">
          {/* Expenses section */}
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="Expenses by Category"
              titleClass="text-lg font-normal"
              visibleDate={false}
            />
            <div
              style={{ height: "150px" }}
              className="w-full flex justify-center"
            >
              <Doughnut
                data={data}
                options={options}
                plugins={[centerTextPlugin]}
              />
            </div>
            <FinanceList dataList={categoryExpenses} direction={false} />
          </div>
          {/* Expenses section end */}

          {/* Budget Analysis */}

          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3  ">
            <PageHeaderCard
              title="Budget Analysis"
              titleClass="text-lg font-normal"
              subtitle="AI-powered insights and projections for your spending"
              subtitleClass="text-sm font-normal"
              visibleDate={false}
            />
            <div className="w-full h-auto px-2 py-4 space-y-2 flex flex-col justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
              <DemoDataCard
                title="Credit Utilization"
                chipLabel="95%"
                chipLabelSize="tiny"
                chipclassName="px-2"
              />

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

            <div className="scrollbar-thin h-[30vh] space-y-3 p-4 ring-2 ring-(--input-border) shadow rounded-lg">
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>

            <div className="w-full h-auto p-3 flex flex-col justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
              <DemoPageSectionCard title="Recommendations" haveBorder={false} />
              <ul
                className={`w-full flex flex-col  justify-start items-start rounded-xl h-full space-y-2 px-8 list-disc`}
              >
                {spendingTips &&
                  spendingTips.map((tips) => (
                    <li
                      className={`text-sm font-normal tracking-wide text-(--foreground)`}
                    >
                      {tips.message}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* Budget Analysis end */}
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-full lg:w-1/2 xl:w-2/3 h-auto p-2 block space-y-5">
          {/* line chart */}
          <div className="block w-full rounded-xl p-4 h-96  ring-2 ring-(--input-border)">
            <MonthlyIncomeExpenseLineChart />
          </div>
          {/* line chart end*/}

          {/* bar chart */}
          <div className="block w-full h-80 ring-2 ring-(--input-border) rounded-xl p-2 ">
            <MonthlyIncomeExpenseLabelChart />
          </div>
          {/* bar chart end */}
        </div>
        {/* right side end */}
      </Container>
    </PageLayout>
  );
}
