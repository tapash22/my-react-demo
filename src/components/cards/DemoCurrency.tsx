import { currencyIcons } from "../../features/type/User";
import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoCurrencyProps {
  currencyLabel?: string;
  amount: number;
  currency?: "USD" | "EUR" | "GBP" | "TK";
}

export function DemoCurrency({
  currencyLabel = "",
  amount,
  currency = "TK",
}: DemoCurrencyProps) {
  const Icon: IconType = currencyIcons[currency];

  const formatted = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
  }).format(amount);

  return (
    <div className="w-auto h-auto p-2 flex justify-evenly items-center ">
      {currencyLabel && (
        <p className="text-sm font-medium tracking-wider text-(--foreground)">
          {currencyLabel}:
        </p>
      )}
      <p className="flex items-center">
        <DemoIcon icon={Icon} size={16} />
        <span className="text-sm font-bold tracking-wide text-(--foreground)">
          {formatted}
        </span>
      </p>
    </div>
  );
}
