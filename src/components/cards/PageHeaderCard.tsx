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
      className={`flex w-full md:items-center md:justify-between  gap-3 
      ${direction ? "flex-col items-start" : "flex-col md:flex-row"}
      ${subtitle || visibleDate ? "p-2" : "p-3"}`}
    >
      <div className="flex flex-col justify-start items-start w-auto">
        {title && (
          <span
            className={`${
              titleClass ? titleClass : "text-lg md:text-xl font-semibold"
            } text-(--foreground) tracking-wide`}
          >
            {title}
          </span>
        )}
        {subtitle && (
          <span
            className={` ${subtitleClass ? subtitleClass : "text-sm font-normal"} text-(--subtitle) tracking-normal`}
          >
            {subtitle}
          </span>
        )}
        {visibleDate && (
          <span className="text-xs md:text-sm text-(--subtitle)">
            {formatDate(data)}
          </span>
        )}
      </div>
      {children && (
        <div
          className={`
            flex flex-wrap gap-3
            w-full md:w-auto
            justify-start md:justify-end
        `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
