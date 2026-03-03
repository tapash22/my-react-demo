import { formatDate } from "../../utils/formatDate";

interface PageHeaderCardProps {
  title?: string;
  subtitle?: string;
  visibleDate?: boolean;
  data?: Date;
  children?: React.ReactNode;
}

const today = new Date();

export function PageHeaderCard({
  title,
  subtitle,
  visibleDate = true,
  data = today,
  children,
}: PageHeaderCardProps) {
  return (
    <div className="flex justify-between w-full h-auto items-center p-4">
      <h2 className="flex flex-col space-y-1 w-2/3">
        {title && <span className="section-title text-(--title)">{title}</span>}
        {subtitle && (
          <span className="subtitle-small-title text-(--subtitle)">
            {subtitle}
          </span>
        )}
        {visibleDate && (
          <span className="subtitle-small-title text-(--subtitle)">
            {formatDate(data)}
          </span>
        )}
      </h2>
      <div className="w-1/3 h-auto">{children && children}</div>
    </div>
  );
}
