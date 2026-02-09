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
    <div className="flex justify-between items-center px-5 py-5 w-full">
      <p className="text-lg font-medium tracking-wide text-wrap text-(--forground)">
        {title}
      </p>
      {path ? (
        <NavLink
          to={path}
          className="underline tracking-wide text-sm font-bold text-(--forground)"
        >
          {pathTitle}
        </NavLink>
      ) : (
        <DemoIcon icon={BsThreeDotsVertical} size={20} onClick={onClick} />
      )}
    </div>
  );
}
