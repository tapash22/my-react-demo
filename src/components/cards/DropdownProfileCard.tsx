import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import type { DropdownMenu, Page } from "../../features/type/User";
import { DemoButton } from "../button/DemoButton";
import { DemoIcon } from "../common-property/DemoIcon";

type MenuPageType = Page[] | DropdownMenu[];

interface PagesProps {
  menuData: MenuPageType;
  title?: string;
  email?: string;
  navClick: () => void;
  logout?: () => void;
}

export function DropdownProfileCard({
  menuData,
  title = "",
  email = "",
  navClick,
  logout,
}: PagesProps) {
  return (
    <div
      className={`absolute right-0 ${title ? "w-72" : "w-40"} max-w-72 mt-3  bg-(--card-bg)  shadow-(--shadow)  flex flex-col rounded-lg drop-shadow-xl z-50 text-(--foreground)`}
    >
      {(title.trim().length && email.trim().length) !== 0 && (
        <div className="w-full px-5 py-3 border-b-2 opacity-85 border-(--input-border) space-y-1">
          <p className="text-sm font-bold tracking-wide text-(--foreground)">
            {title}
          </p>
          <p className="text-sm font-normal text-(--foreground) tracking-wider">
            {email}
          </p>
        </div>
      )}
      <div className=" w-full h-full flex flex-col">
        {menuData.map(({ name, path, icon }) => (
          <NavLink
            onClick={navClick}
            key={path}
            to={`/dashboard/${path}`}
            className={`flex items-center space-x-5 ${title ? "px-6 py-5" : "px-3 py-2"} transition-colors rounded-sm  hover:bg-(--sidebar-hover-bg) hover:text-(--foreground)`}
          >
            {icon && <DemoIcon icon={icon} size={20} />}
            <span className="text-sm font-normal tracking-wide">{name}</span>
          </NavLink>
        ))}
      </div>
      {logout && (
        <div className="flex justify-center items-center p-3 border-t-2 opacity-85 border-(--input-border)">
          <DemoButton
            classTag="flex justify-center items-center"
            onClick={logout}
            icon={FaPowerOff}
            title="Logout"
            widthSize="full"
          />
        </div>
      )}
    </div>
  );
}
