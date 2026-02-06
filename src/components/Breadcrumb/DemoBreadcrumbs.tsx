import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

export default function DemoBreadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs.length) return null;

  return (
    <nav className="flex items-center text-lg text-(--forground)">
      {breadcrumbs &&
        breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <span key={crumb.path} className="flex items-center">
              {!isLast ? (
                <Link
                  to={crumb.path}
                  className="hover:text-(--surface) transition-colors tracking-wide"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className=" text-(--forground) tracking-wide">
                  {crumb.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-2 text-(--forground) tracking-wide">/</span>
              )}
            </span>
          );
        })}
    </nav>
  );
}
