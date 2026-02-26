import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import type { Page } from "../../features/type/User";
import { DemoButton } from "../button/DemoButton";
interface PagesProps {
  pages: Page[];
  navClick: () => void;
  logout?: () => void;
}

export function DropdownProfileCard({ pages, navClick, logout }: PagesProps) {
  return (
    <div className="absolute right-0 w-72 mt-3  bg-(--card-bg) border border-(--card-border) shadow-md  flex flex-col gap-2 rounded-lg drop-shadow-xl space-y-2 z-50 text-(--foreground)">
      <div className="w-full px-6 py-5 border-b-[0.5px] opacity-75 border-(--borde)">
        <p className="font-semibold text-xl tracking-wide">John Doe</p>
        <p className="text-sm font-normal text-(--muted) tracking-wider">
          johndoe@email.com
        </p>
      </div>
      <div className=" border-(--muted) w-full h-full flex flex-col ">
        {pages.map(({ name, path, icon: Icon }) => (
          <NavLink
            onClick={navClick}
            key={path}
            to={`/dashboard/${path}`}
            className={`flex items-center space-x-5 px-6 py-3 text-lg font-semibold transition-colors rounded-sm  hover:bg-(--sidebar-hover-bg)`}
          >
            <Icon size={20} className="text-(--foreground)" />
            <span className="text-lg font-semibold tracking-wide">{name}</span>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center items-center p-4 border-t-[0.5px] opacity-75 border-(--borde)">
        <DemoButton
          onClick={logout}
          icon={FaPowerOff}
          title="Logout"
          widthSize="full"
        />
        {/* <button
          onClick={logout}
          className=" w-full flex justify-center items-center gap-3 p-2 rounded-lg border-2 border-(--card-border)"
        >
          <FaPowerOff size={16} className="text--(--foreground)" />
          Logout
        </button> */}
      </div>
    </div>
  );
}
