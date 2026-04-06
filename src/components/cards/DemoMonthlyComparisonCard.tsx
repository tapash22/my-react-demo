import type { ComparisonItems } from "../../features/type/User";
import { DemoComparisonItem } from "./DemoComparisonItem";

interface DemoMonthlyComparisonProps {
  title?: string;
  items: ComparisonItems;
  showDifference?: boolean;
  differenceLabel?: string;
}

export function DemoMonthlyComparisonCard({
  title,
  items,
  showDifference = true,
  differenceLabel,
}: DemoMonthlyComparisonProps) {
  // Extract lastMonth and thisMonth values

  const lastMonthItem = items.find((i) => {
    const label = i.label.toLowerCase();
    return (
      label.includes("last") ||
      label.includes("asset") ||
      label.includes("pending")
    );
  });
  const thisMonthItem = items.find((i) => {
    const label = i.label.toLocaleLowerCase();
    return (
      label.includes("this") ||
      label.includes("Liabilities") ||
      label.includes("total")
    );
  });

  const lastMonth = lastMonthItem ? Number(lastMonthItem.value) : 0;
  const total = thisMonthItem ? Number(thisMonthItem.value) : 0;

  // Calculate difference and percentage change
  const difference = total - lastMonth;
  const percentageChange = lastMonth ? (difference / lastMonth) * 100 : 0;
  const sign = difference >= 0 ? "+" : "-";

  return (
    <div className="w-full flex flex-col space-y-2">
      {title && (
        <p className="text-sm font-semibold text-(--foreground) tracking-wide text-left py-1 px-2">
          {title}
        </p>
      )}

      <div className="space-y-1">
        {items.map((item, index) => (
          <DemoComparisonItem key={index} item={item} />
        ))}
      </div>

      {/* Render Difference */}
      {showDifference && (
        <div className="bg-(--pick) backdrop-brightness-100 grid grid-cols-2 items-center p-1 rounded-lg ">
          <p className="text-sm font-medium text-(--foreground) tracking-wide text-left py-2 px-3">
            {differenceLabel ? differenceLabel : "Difference"}
          </p>
          <p
            className={`font-bold tracking-wide text-sm text-right px-2 ${
              difference >= 0 ? "text-(--danger)" : "text-(--success)"
            }`}
          >
            {sign}${Math.abs(difference)} (
            {Math.abs(percentageChange).toFixed(1)}
            %)
          </p>
        </div>
      )}
      {/* Render Difference end */}
    </div>
  );
}
