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

export default function Expenses() {
  const handleClick = () => {
    console.log("click");
  };

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

  return (
    <div className="w-full h-full p-2 m-0 flex flex-col scrollbar-thin">
      {/* header  */}
      <div className="block w-full h-auto p-2 space-y-5">
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
          <Transaction />
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-1/3 p-2 sticky top-2 ">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3 py-5 bg-(--surface)">
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
            <div className="w-full h-auto space-y-3 p-5  overflow-hidden">
              <FinanceList dataList={categoryExpenses} direction={false} />
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
