import { NavLink } from "react-router-dom";
import { DemoIcon } from "../common-property/DemoIcon";
import { BsThreeDotsVertical } from "react-icons/bs";

interface GoalTrackerCardProps {
  title: string;
  path?: string;
  pathTitle?: string;
  onClick?: () => void;
}

export function GoalTrackerCard({
  title,
  path,
  pathTitle,
  onClick,
}: GoalTrackerCardProps) {
  return (
    <div className="flex justify-between items-center p-3 w-full h-auto ">
      <p className="text-lg font-medium text-(--forground) tracking-wide text-wrap ">
        {title}
      </p>
      {path ? (
        <NavLink
          to={path}
          className="text-sm font-normal text-(--foreground) tracking-wide underline underline-offset-4"
        >
          {pathTitle}
        </NavLink>
      ) : (
        <DemoIcon icon={BsThreeDotsVertical} size={20} onClick={onClick} />
      )}
    </div>
  );
}
