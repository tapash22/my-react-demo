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
      className={`w-full h-auto bg-(--pick) flex justify-between items-center rounded-xl space-y-1 ${haveBorder ? "ring-1 ring-(--input-border) p-4 hover:ring-gray-400  cursor-pointer" : "px-2 py-1"}`}
    >
      <div className="flex flex-col justify-center sm:justify-center md:justify-start items-center sm:items-center md:items-start space-y-1 w-full">
        <h2 className="text-lg font-normal tracking-normal text-(--foreground)">
          {title ? title : item?.title}
        </h2>

        <p className="text-sm font-normal tracking-wide text-(--mute)">
          {subtitle ? subtitle : item?.subtitle}
        </p>
      </div>
      {children && <div className="w-1/3 h-auto">{children}</div>}
    </div>
  );
}
