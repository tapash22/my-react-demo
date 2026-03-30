import {
  DemoCardWithProgressbar,
  type FundKeyMap,
} from "./DemoCardWithProgressbar";
import { GoalTrackerCard } from "./GoalTrackerCard";

interface DemoGoalOverviewCardProps<T> {
  title: string;
  path: string;
  pathTitle: string;
  onClick?: () => void;
  overviewDetails: T[];
  keys: FundKeyMap<T>;
  direction?: boolean;
  haveAction?: boolean;
}

export function DemoGoalOverviewCard<T>({
  title,
  path,
  pathTitle,
  overviewDetails,
  keys,
  direction,
  haveAction,
}: DemoGoalOverviewCardProps<T>) {
  return (
    <div className="xl:col-span-1 flex flex-col gap-5 min-w-0 h-full">
      <div className="p-2 ring-2 ring-(--input-border) rounded-xl flex-1">
        {title && path && pathTitle && (
          <GoalTrackerCard
            title={title}
            path="/dashboard/saving-goals"
            pathTitle="Add Plans"
          />
        )}
        {overviewDetails && (
          <DemoCardWithProgressbar
            fundsData={overviewDetails}
            keys={keys}
            direction={direction}
            haveAction={haveAction}
          />
        )}
      </div>
    </div>
  );
}
