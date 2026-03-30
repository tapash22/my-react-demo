import { NavLink } from "react-router-dom";
import { DemoList } from "../list/DemoList";
import { DemoIcon } from "../common-property/DemoIcon";
import type { Page } from "../../assets/type/budget-type";

interface DemoLinkCardListProps {
  items: Page[];
}
export function DemoLinkCardList({ items }: DemoLinkCardListProps) {
  return (
    <div className="w-full grid justify-center bg-(--surface) rounded-lg ">
      {items.length > 0 && (
        <DemoList
          items={items}
          initialCount={4}
          direction={false}
          children={(page) => (
            <NavLink
              key={page.path}
              to={`/dashboard/${page.path}`}
              className="h-full"
            >
              <div className="flex flex-col justify-center items-center w-full h-full scale-90 transition-all duration-500 hover:scale-100 hover:bg-(--background) hover:text-(--muted) px-4 py-2 ">
                <DemoIcon size={24} icon={page.icon} />
                <p className="text-sm text-center">{page.name}</p>
              </div>
            </NavLink>
          )}
        />
      )}
    </div>
  );
}
