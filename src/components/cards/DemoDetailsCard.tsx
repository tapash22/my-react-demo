import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { formatRelativeDate } from "../../utils/formatDate";
import { GoalTrackerCard } from "./GoalTrackerCard";

export type DemoDetailsKeys<T> = {
  name: keyof T;
  action: keyof T;
  amount?: keyof T;
  time: keyof T;
};

interface DemoDetailsCardProps<T> {
  title?: string;
  onClick?: () => void;
  items?: T[];
  keys: DemoDetailsKeys<T>;
}

export function DemoDetailsCard<T>({
  items,
  keys,
  title,
  onClick,
}: DemoDetailsCardProps<T>) {
  return (
    <div className="w-full h-auto p-3 flex flex-col ring-2 ring-(--input-border) rounded-lg  ">
      {title && onClick && <GoalTrackerCard title={title} onClick={onClick} />}
      <p className="text-sm font-semibold tracking-wider text-(--forground) pb-2 rounded-lg">
        {formatRelativeDate(new Date())}
      </p>
      <div className="w-full h-[28vh] flex flex-col space-y-1 rounded-xl overflow-y-scroll scrollbar-thin">
        {items?.map((item, index) => {
          const name = String(item[keys.name] ?? "");
          const action = String(item[keys.action] ?? "");
          const amount = keys.amount
            ? String(item[keys.amount] ?? "")
            : undefined;
          const time = String(item[keys.time] ?? "");

          return (
            <div
              key={index}
              className={`flex justify-start items-center px-2 py-1 gap-3 opacity-80 hover:opacity-100 hover:bg-(--surface) ${index !== items.length - 1 ? "border-b border-(--input-border)" : ""}`}
            >
              <DemoAvatar size={12} icon={FaUser} />
              <div className="flex flex-col space-y-1 w-full h-auto">
                <div className="space-x-2">
                  <span className="tracking-wider font-medium text-sm">
                    {name}
                  </span>
                  <span className="text-sm font-normal  tracking-wide text-(--forground)">
                    {action}
                  </span>
                  {amount !== undefined && (
                    <span className="text-sm font-normal  tracking-wide text-(--forground)">
                      {amount}
                    </span>
                  )}
                </div>
                <p className="text-sm font-normal tracking-wider text-(--forground)">
                  {time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
