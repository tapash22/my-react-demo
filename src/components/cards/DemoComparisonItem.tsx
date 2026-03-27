import type { ComparisonItem } from "../../features/type/User";

interface DemoComparisonProps {
  item: ComparisonItem;
}

export function DemoComparisonItem({ item }: DemoComparisonProps) {
  return (
    <div className="w-full flex flex-col px-2 py-1">
      {item && (
        <div className="bg-transparent rounded-lg flex justify-between items-center">
          <p className="text-sm font-normal text-(--foreground) tracking-wide ">
            {item.label}
          </p>
          <p className="text-sm font-medium text-(--foreground) tracking-wide">
            ${item.value}
          </p>
        </div>
      )}
    </div>
  );
}
