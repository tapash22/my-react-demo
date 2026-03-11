import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { Transaction } from "../Transaction";
import { categoryExpenses, comparisonItems } from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import { centerTextPlugin } from "../../components/chart/centerTextPlugin";
import type { DoughnutChartOptions } from "../../features/type/User";
import { cssVar } from "../../utils/cssVar";
import { FinanceList } from "../../components/item/FinanceList";
import { BillCard } from "../../components/cards/BillCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef } from "react";
import { DemoMonthlyComparisonCard } from "../../components/cards/DemoMonthlyComparisonCard";
//this is 3D example
// import { BudgetVisualizer3D } from "../../components/3D/BudgetVisualizer3D";

export default function Expenses() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const lastMonth = 2350;
  const values = categoryExpenses.map((expense) => expense.amount);
  const total = values.reduce((sum, i) => sum + i, 0);

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

  //handle click
  const handleClick = () => {
    console.log("click");
  };

  return (
    <PageLayout
      header={
        <PageHeaderCard title="Expenses" visibleDate={false}>
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Add Transaction"
              iconSize={12}
              icon={FaPlus}
              onClick={() => handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <div
        ref={containerRef}
        className="flex gap-3 items-start w-full h-auto p-1 space-y-2"
      >
        {/* left side */}
        <div className="w-2/3 h-auto p-2 flex flex-col space-y-5">
          <div className="w-full h-full ">
            <Transaction />
          </div>
          <div className="flex flex-col space-y-2 ring-2 ring-(--input-border) rounded-xl p-3">
            <PageHeaderCard
              title="Upcoming Payments"
              titleClass="text-lg font-normal"
              subtitle="Bills due in the next 2 weeks"
              subtitleClass="text-sm font-normal"
              visibleDate={false}
            />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
            <BillCard />
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-1/3 p-2 sticky top-2 h-fit">
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="Expense Breakdown"
              titleClass="text-lg font-normal"
              subtitle="Current month spending by category"
              subtitleClass="text-sm font-normal"
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
            <div className="w-full h-auto">
              <FinanceList dataList={categoryExpenses} direction={false} />
            </div>
            {/* <p className="text-xl font-bold text-(--foreground)">
                    ${stat.value.toLocaleString()}
                  </p> */}
            <div className="w-full h-auto">
              <DemoMonthlyComparisonCard
                title="Monthly Comparison"
                items={comparisonItems}
              />
            </div>
          </div>
        </div>
        {/* right side end */}
      </div>
    </PageLayout>
  );
}
