import { FaHome, FaUser, FaPowerOff } from "react-icons/fa";
import type { IconType } from "react-icons";
import image from "../../assets/react.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth/useAuth";

interface Page {
  name: string;
  path: string;
  icon: IconType;
}

const pages: Page[] = [
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
      className={`h-full bg-(--background) drop-shadow-2xl transition-all duration-300 ease-in-out
    ${collapsed ? "w-16" : "w-64"} overflow-hidden relative`}
    >
      {/* Logo + Toggle */}
      <div className="h-24 flex items-center justify-center px-2 my-4 transition-all duration-300 ease-in-out">
        <img
          src={image}
          alt="logo"
          className={`transition-transform duration-300 ease-in-out ${
            collapsed ? "scale-100" : "scale-150"
          }`}
        />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-2 px-0 overflow-hidden">
        {pages.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={`/dashboard/${path}`}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-tl-xl rounded-bl-xl text-(--foreground)
     transition-colors duration-300 ease-in
     ${isActive ? "bg-(--sidebar-active-bg)" : "hover:bg-(--sidebar-hover-bg)"}`
            }
          >
            {/* Icon wrapper: adjusts width to center icon */}
            <div
              className={`flex items-center transition-all duration-300 ease-in-out
      ${collapsed ? "w-full pl-3" : "w-6 "}`}
            >
              <Icon size={20} className="text-(--foreground)" />
            </div>

            {/* Text: slides/fades */}
            <span
              className={`ml-3 transition-all duration-300 ease-in-out origin-left
      whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold
      ${collapsed ? "opacity-0 scale-50 w-0" : "opacity-100 scale-100 w-auto"}`}
              title={name}
            >
              {name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 p-2 flex justify-center w-full">
        <button
          onClick={handleLogout}
          className="w-full flex justify-center items-center gap-3 p-3
                 rounded-lg ring-1 ring-(--card-border)
                 drop-shadow-xl
                 transition-all duration-300 ease-in-out
                 hover:bg-(--sidebar-hover-bg)"
        >
          <FaPowerOff
            className={`text-(--foreground) flex-shrink-0 transition-transform duration-300 ease-in-out`}
          />
          <span
            className={`ml-3 transition-all duration-300 ease-in-out origin-left inline-block
          whitespace-nowrap overflow-hidden
          ${
            collapsed
              ? "opacity-0 scale-95 w-0"
              : "opacity-100 scale-100 w-auto"
          }`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
