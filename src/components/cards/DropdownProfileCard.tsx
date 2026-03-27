import { FaMoon, FaPowerOff, FaRegBell, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import type { DropdownMenu, Page } from "../../features/type/User";
import { DemoButton } from "../button/DemoButton";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoBadge } from "../Badge/DemoBadge";

type MenuPageType = Page[] | DropdownMenu[];

interface PagesProps {
  menuData: MenuPageType;
  title?: string;
  email?: string;
  navClick: () => void;
  logout?: () => void;
  iconSize?: number;
  theme?: "light" | "dark";
  toggleTheme?: () => void;
  showNotification?: boolean;
  setShowNotification?: React.Dispatch<React.SetStateAction<boolean>>;
  badgeCount?: number;
}

export function DropdownProfileCard({
  menuData,
  title = "",
  email = "",
  navClick,
  logout,
  iconSize = 16,
  theme,
  toggleTheme,
  setShowNotification,
  badgeCount,
}: PagesProps) {
  return (
    <div
      className={`
        absolute right-0  mt-2
        w-40 sm:w-56 md:w-52
        max-w-[18rem] md:max-w-[24rem]
        bg-(--surface) shadow-(--shadow) rounded-lg
        flex flex-col z-50 text-(--foreground)
      `}
    >
      {/* Header: Title + Email */}
      {(title.trim() || email.trim()) && (
        <div className="w-full md:px-4 px-2 py-3 border-b  border-(--input-border) space-y-1">
          <p className="text-sm font-bold tracking-wide text-(--foreground)">
            {title}
          </p>
          <p className="text-sm font-normal text-(--foreground) tracking-wider">
            {email}
          </p>
        </div>
      )}

      {/* Mobile Actions: Theme + Notification */}
      <div className="flex md:hidden justify-center items-center gap-2 p-3 border-b border-(--input-border)">
        {toggleTheme && theme && (
          <DemoButton
            onClick={toggleTheme}
            icon={theme !== "dark" ? FaMoon : FaSun}
            iconSize={18}
            classTag="p-1 flex justify-center items-center rounded-full ring-1 ring-(--muted)"
          />
        )}
        {setShowNotification !== undefined && (
          <div className="relative">
            <DemoBadge
              onClick={() => setShowNotification?.((prev) => !prev)}
              badgeLengthCount={badgeCount ?? 0}
              icon={FaRegBell}
            />
          </div>
        )}
      </div>
      {/* Menu Items */}
      <div className="flex flex-col md:p-1 p-0">
        {menuData.map(({ name, path, icon }) => (
          <NavLink
            onClick={navClick}
            key={path}
            to={`/dashboard/${path}`}
            className={`flex items-center space-x-2 ${title ? "md:p-3 px-2 py-3 rounded-sm" : "p-2"} transition-colors hover:bg-(--sidebar-hover-bg) hover:text-(--foreground)`}
          >
            {icon && <DemoIcon icon={icon} size={iconSize} />}
            <span className="text-sm font-medium tracking-normal">{name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout Button */}
      {logout && (
        <div className="flex justify-center items-center p-3 border-t-2 border-(--input-border)">
          <DemoButton
            classTag="flex justify-center items-center rounded-xl text-sm font-medium tracking-wider py-2 ring-1 ring-(--foreground) space-x-1 "
            onClick={logout}
            icon={FaPowerOff}
            iconSize={14}
            title="Logout"
            widthSize="full"
          />
        </div>
      )}
    </div>
  );
}
