import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { formatRelativeDate } from "../../utils/formatDate";

export type DemoDetailsKeys<T> = {
  name: keyof T;
  action: keyof T;
  amount?: keyof T;
  time: keyof T;
};

interface DemoDetailsCardProps<T> {
  items?: T[];
  keys: DemoDetailsKeys<T>;
}

export function DemoDetailsCard<T>({ items, keys }: DemoDetailsCardProps<T>) {
  return (
    <div className="w-full h-auto p-2 flex flex-col">
      <h2 className="text-sm font-semibold tracking-wider text-(--forground) px-2">
        {formatRelativeDate(new Date())}
      </h2>
      <div className="flex flex-col space-y-1 rounded-xl h-[40vh] overflow-y-scroll scrollbar-thin">
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
              className="flex justify-start items-center p-2 gap-3 opacity-80 hover:opacity-100 hover:bg-(--surface)"
            >
              <div className="w-auto h-10 flex justify-center items-center">
                <DemoAvatar size={10} icon={FaUser} />
              </div>

              <div className="flex flex-col space-y-1 w-full h-auto">
                <p className="text-sm font-normal  tracking-wide text-(--forground) space-x-2">
                  <span className="tracking-wider font-medium text-sm">
                    {name}
                  </span>
                  <span>{action}</span>
                  {amount !== undefined && <span>{amount}</span>}
                </p>
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
