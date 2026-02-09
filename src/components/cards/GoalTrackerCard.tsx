import { NavLink } from "react-router-dom";

interface GoalTrackerCardProps {
  title: string;
  path: string;
  pathTitle?: string;
}

export function GoalTrackerCard({
  title,
  path,
  pathTitle,
}: GoalTrackerCardProps) {
  return (
    <div className="flex justify-between items-center px-5 py-5 w-full">
      <p className="text-lg font-medium tracking-wide text-wrap text-(--forground)">
        {title}
      </p>
      <NavLink
        to={path}
        className="underline tracking-wide text-sm font-semibold text-(--forground)"
      >
        {pathTitle}
      </NavLink>
    </div>
  );
}
