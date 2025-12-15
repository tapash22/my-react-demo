import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { logout } from "../../components/auth/useAuth";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";
import image from "../../assets/react.svg";
import type { IconType } from "react-icons";
import { FaHome, FaUser, FaTimes, FaPowerOff } from "react-icons/fa";
import { useState } from "react";

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

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  // Dashboard
  const { user } = useLoginUser();
  console.log(user?.email);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="h-screen w-full flex  overflow-hidden ">
      {/* Navbar */}
      <aside
        className={`h-full bg-gray-100 drop-shadow-2xl text-black transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
      >
        {/* Logo + Toggle */}
        <div className="h-24 flex items-center justify-between px-2">
          {!collapsed && <img src={image} alt="logo" className="w-10 h-10" />}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2  rounded"
          >
            {collapsed ? (
              <img src={image} alt="logo" className="w-16 h-16" />
            ) : (
              <FaTimes className="font-light text-xl text-blue-400" />
            )}
          </button>
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
                    ? "bg-blue-300 text-white"
                    : "text-black hover:bg-blue-200"
                }`
              }
            >
              <Icon size={20} className="text-blue-400" />

              {!collapsed && <span className="whitespace-nowrap">{name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 p-2 flex justify-center  w-full">
          <button
            onClick={handleLogout}
            className="w-full flex justify-center items-center gap-3 p-3 rounded border-2 border-gray-200"
          >
            <FaPowerOff className="font-light text-xl text-blue-400" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-5">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="h-16 w-full flex items-center justify-center bg-red-900 text-white">
          This is footer
        </footer>
      </div>
    </div>
  );
}
