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
      className={`flex w-full items-center justify-between gap-3 
      ${direction ? "flex-col items-start" : "flex-col md:flex-row"}
      ${subtitle || visibleDate ? "py-2" : "py-3"}`}
    >
      <h2 className="flex flex-col w-full">
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
      </h2>
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
