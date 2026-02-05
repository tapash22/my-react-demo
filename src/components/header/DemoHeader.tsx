import { useEffect, useRef, useState } from "react";
import { PiSidebarSimpleLight } from "react-icons/pi";
import { InputPrepend } from "../Input/InputPrepend";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaRegBell,
  FaUserCircle,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { logout } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { DemoIcon } from "../common-property/DemoIcon";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import type { Page } from "../../features/type/User";
import { DropdownProfileCard } from "../cards/DropdownProfileCard";

interface DemoHeaderProps {
  onToggleSidebar: () => void;
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
    setShowProfileCard(false);
  };

  return (
    <header className="h-16 w-full flex items-center justify-between p-5 bg-(--background) shadow-(--shadow) ">
      <div className="w-2/3 h-auto flex justify-between items-center gap-5 px-2 ">
        <div className="flex justify-start w-1/2 gap-4">
          <DemoIcon
            icon={PiSidebarSimpleLight}
            size={30}
            onClick={onToggleSidebar}
          />
          <Breadcrumbs />
        </div>
        <InputPrepend
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:text-(--foreground)"
          placeholder="Search . . ."
          prepend={<DemoIcon icon={FaSearch} />}
        />
      </div>
      <div className="w-1/3 h-auto flex justify-end items-center gap-8 px-5 ">
        <button
          onClick={toggleTheme}
          className="relative w-7 h-7 ring-2 ring-(--foreground)  rounded-full flex items-center justify-center overflow-hidden"
        >
          {theme !== "dark" ? (
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

        <div className="relative ">
          {/* Badge */}
          <span
            className="
                    absolute -top-2 -right-3 
                    min-w-[18px] h-[18px]
                    px-1
                    rounded-full
                    bg-transparent
                    text-(--foreground)
                    text-[11px]
                    font-semibold
                    flex items-center justify-center
                    ring-2 ring-(--foreground)
                    "
          >
            3
          </span>

          {/* Bell Icon */}
          <FaRegBell size={30} className="text-(--foreground)" />
        </div>

        <div ref={profileRef} className="relative">
          <FaUserCircle
            size={30}
            className="text-xl font-light text-(--foreground)"
            onClick={() => setShowProfileCard(!showProfileCard)}
          />
          {/* Card Dropdown */}
          {showProfileCard && (
            <DropdownProfileCard
              pages={pages}
              navClick={handleNavLinkClick}
              logout={handleLogout}
            />
          )}
        </div>
      </div>
    </header>
  );
}
