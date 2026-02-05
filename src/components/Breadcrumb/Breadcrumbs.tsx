import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs.length) return null;

  return (
    <nav className="flex items-center text-sm text-gray-600">
      {breadcrumbs &&
        breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <span key={crumb.path} className="flex items-center">
              {!isLast ? (
                <Link
                  to={crumb.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-900">{crumb.label}</span>
              )}

              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </span>
          );
        })}
    </nav>
  );
}
