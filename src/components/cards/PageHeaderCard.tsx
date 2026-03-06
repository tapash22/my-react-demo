import { formatDate } from "../../utils/formatDate";

interface PageHeaderCardProps {
  title?: string;
  titleClass?: string;
  subtitle?: string;
  visibleDate?: boolean;
  data?: Date;
  children?: React.ReactNode;
}

const today = new Date();

export function PageHeaderCard({
  title,
  titleClass,
  subtitle,
  visibleDate = true,
  data = today,
  children,
}: PageHeaderCardProps) {
  return (
    <div className="flex justify-between w-full h-auto items-center px-4 py-2">
      <h2 className="flex flex-col  w-2/3">
        {title && (
          <span
            className={` ${titleClass ? titleClass : "text-xl font-semibold"} text-(--foreground) tracking-wide`}
          >
            {title}
          </span>
        )}
        {subtitle && (
          <span className="subtitle-small-title text-(--subtitle)">
            {subtitle}
          </span>
        )}
        {visibleDate && (
          <span className="text-sm font-normal text-(--subtitle)">
            {formatDate(data)}
          </span>
        )}
      </h2>
      <div className="w-1/3 h-auto">{children && children}</div>
    </div>
  );
}
