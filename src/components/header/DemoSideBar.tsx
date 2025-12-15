import { FaHome, FaUser, FaPowerOff } from "react-icons/fa";
import type { IconType } from "react-icons";
import image from "../../assets/react.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth/useAuth";

export interface Page {
  name: string;
  path: string;
  icon: IconType;
}

export const pages: Page[] = [
  {
    name: "Home",
    path: "home",
    icon: FaHome,
  },
  {
    name: "Profile",
    path: "profile",
    icon: FaUser,
  },
];
interface DemoSideBarProps {
  collapsed?: boolean;
}
export function DemoSideBar({ collapsed }: DemoSideBarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`h-full bg-(--surface) drop-shadow-2xl transition-all duration-300 
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Logo + Toggle */}
      <div className="h-24 flex items-center justify-center px-2 my-4">
        <img
          src={image}
          alt="logo"
          className={collapsed ? "w-10 h-10" : "w-16 h-16"}
        />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-2 px-2">
        {pages.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={`/dashboard/${path}`}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3  transition-colors rounded-xl
                ${
                  isActive
                    ? "bg-(--sidebar-active-bg) text-(--foreground)"
                    : "text-(--foreground) hover:bg-(--sidebar-hover-bg)"
                }`
            }
          >
            <Icon size={20} className="text-(--foreground)" />

            {!collapsed && <span className="whitespace-nowrap">{name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 p-2 flex justify-center  w-full">
        <button
          onClick={handleLogout}
          className="w-full flex justify-center items-center gap-3 p-3 rounded-lg border-2 border-(--card-border)"
        >
          <FaPowerOff className="font-light text-xl text--(--foreground)" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
