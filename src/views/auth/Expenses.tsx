// import { BudgetVisualizer3D } from "../../components/3D/BudgetVisualizer3D";

import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { Transaction } from "../Transaction";
import { categoryExpenses } from "../../store/budget-data";
import { Doughnut } from "react-chartjs-2";
import { centerTextPlugin } from "../../components/chart/centerTextPlugin";
import type { DoughnutChartOptions } from "../../features/type/User";
import { cssVar } from "../../utils/cssVar";
import { FinanceList } from "../../components/item/FinanceList";
import { BillCard } from "../../components/cards/BillCard";

export default function Expenses() {
  const handleClick = () => {
    console.log("click");
  };

  const lastMonth = 2350;
  const values = categoryExpenses.map((expense) => expense.amount);
  const total = values.reduce((sum, i) => sum + i, 0);

  const difference = total - lastMonth;
  const percentageChange = (difference / lastMonth) * 100;

  // Determine sign for display
  const sign = difference >= 0 ? "+" : "-";

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

  return (
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      {/* header  */}
      <div className="block w-full h-auto p-2 space-y-5 ">
        <PageHeaderCard
          title="Expenses"
          visibleDate={false}
          children={
            <div className="flex justify-end items-center gap-5">
              <DemoButton
                title="Add Transaction"
                icon={FaPlus}
                onClick={() => handleClick}
              />
            </div>
          }
        />
      </div>
      {/* header end */}

      {/* body */}
      <div className="flex gap-3 items-start w-full h-auto p-2">
        {/* left side */}
        <div className="w-2/3 h-auto p-2 block space-y-5">
          <div className="w-full h-full ">
            <Transaction />
          </div>
          <div className="flex flex-col space-y-3 ring-2 ring-(--input-border) rounded-xl p-3">
            <PageHeaderCard
              title="Upcoming Payments"
              subtitle="Bills due in the next 2 weeks"
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
        <div className="w-1/3 p-2 sticky top-2  ">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3  bg-(--surface) ">
            <PageHeaderCard
              title="Expense Breakdown"
              subtitle="Current month spending by category"
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
            <div className="w-full p-3 flex flex-col space-y-3">
              <p className="text-sm font-medium text-(--forground) text-left ">
                Monthly Comparison
              </p>
              {/* Last Month */}
              <div className="bg-(--surface) rounded-lg space-y-1 flex justify-between items-center">
                <p className="text-sm text-(--foreground)">Last Month</p>
                <p className="font-medium text-sm text-(--foreground) ">
                  ${lastMonth}
                </p>
              </div>
              {/* Last Month end*/}

              {/* This Month */}
              <div className="bg-(--surface) rounded-lg space-y-1 flex justify-between items-center">
                <p className="text-sm text-(--foreground)">This Month</p>
                <p className="font-medium text-sm text-(--foreground)">
                  ${total}
                </p>
              </div>
              {/* This Month end */}

              {/* Difference*/}
              <div className="bg-(--surface) rounded-lg space-y-1 flex justify-between items-center">
                <p className="text-sm text-(--foreground)">Difference</p>
                <p
                  className={`font-medium text-sm ${difference >= 0 ? "text-(--danger)" : "text-(--success)"}`}
                >
                  {sign}${difference} ({Math.abs(percentageChange).toFixed(1)}%)
                </p>
              </div>
              {/* Difference end */}
            </div>
          </div>
        </div>

        {/* right side end */}
      </div>
      {/* body end */}
    </div>
  );
}

// <div>
//   <BudgetVisualizer3D />
// </div>
