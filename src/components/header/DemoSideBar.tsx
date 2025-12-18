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
      className={`h-full bg-(--background) shadow-lg transition-all duration-300 ease-in-out
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
              `
                flex items-center
                px-4 py-3
                rounded-tl-xl rounded-bl-xl
                text-(--foreground)
                transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "bg-(--sidebar-active-bg) translate-x-2"
                    : "hover:bg-(--sidebar-hover-bg) translate-x-0"
                }
                `
            }
          >
            {/* ICON — fixed, never moves */}
            <Icon size={20} className="text-(--foreground) shrink-0" />

            {/* TEXT — animated only */}
            <span
              className={`
                  ml-3
                  overflow-hidden whitespace-nowrap
                  text-lg font-semibold
                  transition-[opacity,transform,max-width] duration-300 ease-in-out
                  ${
                    collapsed
                      ? "opacity-0 -translate-x-2 max-w-0"
                      : "opacity-100 translate-x-0 max-w-[160px]"
                  }
                `}
              title={name}
            >
              {name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 p-2 w-full">
        <button
          onClick={handleLogout}
          className="
              w-full flex justify-center items-center
              rounded-lg ring-1 ring-(--card-border)
              drop-shadow-xl
              transition-colors duration-300
              hover:bg-(--sidebar-hover-bg)
              px-4 py-3
            "
        >
          {/* ICON — stays fixed */}
          <FaPowerOff
            className="
                text-(--foreground)
                shrink-0
              "
          />

          {/* TEXT CONTAINER — animated */}
          <span
            className={`
                
                overflow-hidden
                transition-all duration-300 ease-in-out
                ${
                  collapsed
                    ? "opacity-0 translate-x-[-8px] max-w-0 m-0"
                    : "opacity-100 translate-x-0 max-w-[120px] ml-3"
                }
              `}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
