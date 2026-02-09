import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { formatRelativeDate } from "../../utils/formatDate";

interface DemoItem {
  name: string;
  action: string;
  amount?: string | number;
  time: string;
}

interface DemoDetailsCardProps<T extends DemoItem> {
  items?: T[];
}

export function DemoDetailsCard<T extends DemoItem>({
  items,
}: DemoDetailsCardProps<T>) {
  return (
    <div className="w-full h-auto p-2 block">
      <h2 className="text-sm font-bold tracking-wider p-2 text-(--forground)">
        {formatRelativeDate(new Date())}
      </h2>
      <div className="flex flex-col space-y-1 rounded-xl h-[50vh] overflow-y-scroll scrollbar-thin">
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center p-2 gap-3 opacity-80 hover:opacity-100 hover:bg-(--surface)"
              >
                <div className="w-12 h-10 flex justify-center items-center ">
                  <DemoAvatar icon={FaUser} />
                </div>

                <div className="block w-full h-auto">
                  <p className="text-sm font-medium text-wrap tracking-wide text-(--forground) space-x-2">
                    <span className="tracking-wider font-medium text-sm">
                      {item.name}
                    </span>
                    <span>{item.action}</span> <span>{item.amount}</span>
                  </p>
                  <p className="text-sm font-medium tracking-wider  py-1 text-(--forground) ">
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
