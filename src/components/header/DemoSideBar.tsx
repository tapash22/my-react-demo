import { FaPowerOff } from "react-icons/fa";
import image from "../../../public/image/side_bar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth/useAuth";
import { ROUTING_PAGES } from "../../store/budget-data";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoButton } from "../button/DemoButton";

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
      className={`h-full bg-(--background) shadow-(--shadow)  transition-all duration-300 ease-in-out
    ${collapsed ? "w-16" : "w-64"} overflow-hidden relative`}
    >
      {/* Logo + Toggle */}
      <div className="h-24 flex items-center justify-center px-2 my-4 transition-all duration-500 ease-in-out">
        <img
          src={image}
          alt="logo"
          className={`transition-transform duration-500 ease-in-out logo-image object-contain h-full w-auto ${
            collapsed
              ? "scale-100 dark:brightness-200 logo-image"
              : "scale-100 shadow-(--shadow) rounded-full p-2  "
          }`}
        />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-2 px-0 overflow-hidden">
        {ROUTING_PAGES &&
          ROUTING_PAGES.map(({ name, path, icon }) => (
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
              <DemoIcon size={20} icon={icon} />
              {/* <Icon size={20} className="text-(--foreground) shrink-0" /> */}

              {/* TEXT — animated only */}
              <span
                className={`
                  ml-3
                  overflow-hidden whitespace-nowrap
                  text-sm font-medium tracking-wide
                  transition-[opacity,transform,max-width] duration-300 ease-in-out
                  ${
                    collapsed
                      ? "opacity-0 -translate-x-2 max-w-0"
                      : "opacity-100 translate-x-0 `max-w-[160px]`"
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
      <div className="absolute bottom-0 p-3 w-full">
        <DemoButton
          classTag="w-full flex justify-center items-center
              rounded-lg shadow-(--shadow)
              drop-shadow-xl
              transition-colors duration-300
              hover:bg-(--sidebar-hover-bg)
              px-4 py-3 "
          icon={FaPowerOff}
          iconClass={`text-(--foreground) shrink-0 ${collapsed ? "ml-2" : "ml-0"}`}
          onClick={handleLogout}
        >
          {!collapsed && (
            <span
              className={`
                overflow-hidden
                transition-all duration-300 ease-in-out
                ml-3
              `}
            >
              Logout
            </span>
          )}
        </DemoButton>
      </div>
    </aside>
  );
}
