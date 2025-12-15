import { useEffect, useRef, useState } from "react";
import { PiSidebarSimpleLight } from "react-icons/pi";
import { InputPrepend } from "../Input/InputPrepend";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaRegBell,
  FaUserCircle,
  FaPowerOff,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { logout } from "../auth/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";

interface DemoHeaderProps {
  onToggleSidebar: () => void;
}

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

export function DemoHeader({ onToggleSidebar }: DemoHeaderProps) {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const [showProfileCard, setShowProfileCard] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile card if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavLinkClick = () => {
    setShowProfileCard(false); // Hide card when clicking on NavLink
  };

  return (
    <header className="h-16 w-full flex items-center justify-between p-5 bg-(--surface) ">
      <div className="w-1/3 h-auto flex justify-start items-center gap-5 px-5 ">
        <PiSidebarSimpleLight
          size={24}
          className="text-(--foreground)"
          onClick={onToggleSidebar}
        />
        <InputPrepend
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:text-(--foreground)"
          placeholder="Search . . ."
          prepend={<FaSearch className="text-lg text-(--foreground) " />}
        />
      </div>
      <div className="w-2/3 h-auto flex justify-end items-center gap-5 px-5 ">
        <button
          onClick={toggleTheme}
          className="relative w-8 h-8 ring-2 ring-(--foreground)  rounded-full flex items-center justify-center overflow-hidden"
        >
          {theme === "dark" ? (
            <FaMoon
              key="moon"
              className="absolute text-xl text-(--foreground) transition-opacity duration-500"
            />
          ) : (
            <FaSun
              key="sun"
              className="absolute text-xl text-(--foreground) transition-opacity duration-500"
            />
          )}
        </button>

        <FaRegBell className="text-xl font-light text-(--foreground)" />
        <div ref={profileRef} className="relative">
          <FaUserCircle
            size={36}
            className="text-xl font-light text-(--foreground)"
            onClick={() => setShowProfileCard(!showProfileCard)}
          />
          {/* Card Dropdown */}
          {showProfileCard && (
            <div
              className="
                absolute right-0 mt-3 w-56 bg-(--card-bg) border border-(--card-border) shadow-md  flex flex-col gap-2 rounded-lg drop-shadow-xl space-y-2
                text-(--foreground)
              "
            >
              <div className="w-full  p-3">
                <p className="font-semibold text-xl tracking-wide">John Doe</p>
                <p className="text-sm font-normal text-(--muted) tracking-wide">
                  johndoe@email.com
                </p>
              </div>
              <div className="border-t-1 border-b-1 border-(--muted) w-full h-full flex flex-col p-0">
                {pages.map(({ name, path, icon: Icon }) => (
                  <NavLink
                    onClick={handleNavLinkClick}
                    key={path}
                    to={`/dashboard/${path}`}
                    className={`flex justify-center items-center gap-5 p-3 text-lg font-semibold transition-colors rounded-sm  hover:bg-(--sidebar-hover-bg)`}
                  >
                    <Icon size={20} className="text-(--foreground)" />
                    {name}
                  </NavLink>
                ))}
              </div>
              <div className="flex justify-center items-center p-2">
                <button
                  onClick={handleLogout}
                  className=" w-full flex justify-center items-center gap-3 p-1 rounded-lg border-2 border-(--card-border)"
                >
                  <FaPowerOff size={16} className="text--(--foreground)" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
