import { useLocation } from "react-router-dom";

type Breadcrumb = {
  label: string;
  path: string;
};

export function useBreadcrumbs(): Breadcrumb[] {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return [
    ...paths.map((segment, index) => ({
      label:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "), // optional nice formatting
      path: "/" + paths.slice(0, index + 1).join("/"),
    })),
  ];
}
