import type { Fund } from "../../assets/type/budget-type";
interface DemoNotificationListProps {
  fund: Fund;
}

export function DemoNotificationList({ fund }: DemoNotificationListProps) {
  return (
    <div className="p-3 bg-(--surface) space-y-1">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm text-(--foreground) tracking-wide">
          {fund.name}
        </h3>
        <p className="text-xs font-normal text-(--muted) tracking-normal">
          {fund.targetDate}
        </p>
      </div>

      <div className="text-sm font-normal text-(--muted) flex items-center">
        {fund.currency} {fund.currentAmount.toLocaleString()} /{" "}
        {fund.targetAmount.toLocaleString()}
      </div>
    </div>
  );
}
