interface DemoFinancialMetricCardProps {
  title: string;
  value?: number;
  description?: string;
  Children?: React.ReactNode;
  prependChildren?: React.ReactNode;
}
export function DemoFinancialMetricCard({
  title,
  value,
  description,
  Children,
  prependChildren,
}: DemoFinancialMetricCardProps) {
  return (
    <div className="w-full h-auto p-4 space-y-2 flex flex-col  justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
      {prependChildren && prependChildren}
      <p className="text-sm font-medium tracking-wide text-(--foreground) ">
        {title}
      </p>
      {value && <p className="text-xl font-bold tracking-wide">{value}%</p>}
      <p className="text-sm font-normal tracking-wide text-(--foreground) w-full flex justify-center">
        {description}
      </p>
      {Children && Children}
    </div>
  );
}
