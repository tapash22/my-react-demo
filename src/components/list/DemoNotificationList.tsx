import type { Fund } from "../../assets/type/budget-type";
interface DemoNotificationListProps {
  fund: Fund;
}

export function DemoNotificationList({ fund }: DemoNotificationListProps) {
  return (
    <div className="w-full px-2 py-2  opacity-75 ">
      <div className="rounded-lg p-2 bg-(--surface) spacr-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-(--foreground)">{fund.name}</h3>
          <span className="text-xs text-(--muted)">{fund.targetDate}</span>
        </div>

        <div className="text-sm text-(--muted) flex items-center ">
          {fund.currency} {fund.currentAmount.toLocaleString()} /{" "}
          {fund.targetAmount.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
