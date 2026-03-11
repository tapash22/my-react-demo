import { formatDate } from "../../utils/formatDate";

interface PageHeaderCardProps {
  title?: string;
  titleClass?: string;
  subtitle?: string;
  subtitleClass?: string;
  visibleDate?: boolean;
  data?: Date;
  children?: React.ReactNode;
  direction?: boolean;
}

const today = new Date();

export function PageHeaderCard({
  title,
  titleClass,
  subtitle,
  subtitleClass,
  visibleDate = true,
  data = today,
  children,
  direction = false,
}: PageHeaderCardProps) {
  return (
    <div
      className={`flex justify-between w-full h-auto items-center px-4 py-1 ${direction ? "flex flex-col justify-between items-center space-y-3" : "flex justify-between items-center"}`}
    >
      <h2 className="flex flex-col w-full">
        {title && (
          <span
            className={` ${titleClass ? titleClass : "text-xl font-semibold"} text-(--foreground) tracking-wide`}
          >
            {title}
          </span>
        )}
        {subtitle && (
          <span
            className={` ${subtitleClass ? subtitleClass : "text-sm font-medium"} text-(--subtitle) tracking-normal`}
          >
            {subtitle}
          </span>
        )}
        {visibleDate && (
          <span className="text-sm font-normal text-(--subtitle) ">
            {formatDate(data)}
          </span>
        )}
      </h2>
      {children && (
        <div className={`${direction ? "w-full h-auto" : "w-1/2 h-auto"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
