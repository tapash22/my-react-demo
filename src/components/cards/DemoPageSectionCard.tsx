import type { CalculatorData } from "../../features/type/User";

interface DemoPageSectionCardProps {
  item?: CalculatorData;
  title?: string;
  subtitle?: string;
  haveBorder?: boolean;
  children?: React.ReactNode;
}
export function DemoPageSectionCard({
  item,
  title,
  subtitle,
  haveBorder = true,
  children,
}: DemoPageSectionCardProps) {
  return (
    <div
      className={`w-full h-auto flex justify-between items-center rounded-xl space-y-1 ${haveBorder ? "ring-1 ring-(--input-border) p-4" : "px-2 py-1"}`}
    >
      <div className="flex flex-col justify-start">
        <h2 className="text-lg font-medium tracking-wide text-(--foreground)">
          {title ? title : item?.title}
        </h2>

        <p className="text-sm font-normal tracking-wide text-(--mute)">
          {subtitle ? subtitle : item?.subtitle}
        </p>
      </div>
      <div className="w-1/3 h-auto">{children && children}</div>
    </div>
  );
}
