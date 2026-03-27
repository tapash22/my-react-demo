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
      className={`flex w-full md:items-center md:justify-between gap-3 
      ${direction ? "flex-col items-start" : "flex-col md:flex-row"}
      ${subtitle || visibleDate ? "p-2" : "p-3"}`}
    >
      <div className="flex flex-col justify-center sm:items-center md:items-start w-full sm:w-full md:w-full">
        {title && (
          <span
            className={`${
              titleClass
                ? titleClass
                : "text-lg md:text-xl font-semibold text-center"
            } text-(--foreground) tracking-wide`}
          >
            {title}
          </span>
        )}
        {subtitle && (
          <span
            className={` ${subtitleClass ? subtitleClass : "text-sm font-normal text-center"} text-(--subtitle) tracking-normal `}
          >
            {subtitle}
          </span>
        )}
        {visibleDate && (
          <span className="text-xs md:text-sm text-(--subtitle) text-center">
            {formatDate(data)}
          </span>
        )}
      </div>
      {children && (
        <div
          className={`
            flex flex-col h-auto sm:flex-wrap  gap-3
            w-full sm:w-full md:w-full lg:w-auto
            justify-center sm:justify-center md:justify-end 
            items-center sm:items-center md:items-end
        `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
