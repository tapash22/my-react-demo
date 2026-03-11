import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

export default function DemoBreadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs.length) return null;

  return (
    <nav className="flex justify-start items-center text-sm font-medium text-(--forground) w-full space-x-1">
      {breadcrumbs &&
        breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <p key={crumb.path} className="flex items-center">
              {!isLast ? (
                <Link
                  to={crumb.path}
                  className="hover:text-(--surface) transition-colors tracking-wide"
                >
                  {crumb.label}
                </Link>
              ) : (
                <p className="">{crumb.label}</p>
              )}

              {!isLast && <p className="px-1">/</p>}
            </p>
          );
        })}
    </nav>
  );
}
