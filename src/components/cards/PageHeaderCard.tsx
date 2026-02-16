import { formatDate } from "../../utils/formatDate";

interface PageHeaderCardProps {
  title: string;
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
    <div className="flex justify-between w-full h-auto items-center p-2 ">
      <h2 className="flex flex-col space-y-1">
        <span className="section-title text-(--title)">{title}</span>
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
      {children && children}
    </div>
  );
}
