import { useState } from "react";
import { PiSidebarSimpleLight } from "react-icons/pi";
import { InputPrepend } from "../Input/InputPrepend";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaRegBell,
  FaUserCircle,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { logout } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { DemoIcon } from "../common-property/DemoIcon";
import DemoBreadcrumbs from "../Breadcrumb/DemoBreadcrumbs";
import { DropdownProfileCard } from "../cards/DropdownProfileCard";
import { DemoNotificationList } from "../list/DemoNotificationList";
import { FUNDS_DATA, pages } from "../../store/budget-data";
import { DemoList } from "../list/DemoList";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { DemoBadge } from "../Badge/DemoBadge";

interface DemoHeaderProps {
  onToggleSidebar: () => void;
}

export function DemoHeader({ onToggleSidebar }: DemoHeaderProps) {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const [showProfileCard, setShowProfileCard] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Close profile card if click outside
  const profileRef = useOutsideClick(() => setShowProfileCard(false));
  const notificationRef = useOutsideClick(() => setShowNotification(false));

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
          <DemoBreadcrumbs />
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

        <div ref={notificationRef} className="relative ">
          {/* Badge */}

          <DemoBadge
            onClick={() => setShowNotification(!showNotification)}
            badgeLengthCount={FUNDS_DATA.length}
            icon={FaRegBell}
          />
          {showNotification && (
            <div className="absolute right-0 px-0 w-72 bg-(--surface) mt-3  shadow-md  flex flex-col gap-2 rounded-lg drop-shadow-xl space-y-2 z-50 text-(--foreground) h-min-[30vh] h-max-[50vh] overflow-y-scroll">
              <DemoList
                items={FUNDS_DATA}
                initialCount={3}
                haveBorder={true}
                children={(fund) => <DemoNotificationList fund={fund} />}
              />
            </div>
          )}
        </div>

        <div ref={profileRef} className="relative">
          <DemoIcon
            icon={FaUserCircle}
            size={30}
            iconClass="text-xl font-light"
            color="var(--foreground)"
            onClick={() => setShowProfileCard(!showProfileCard)}
          />

          {/* Card Dropdown */}
          {showProfileCard && (
            <DropdownProfileCard
              title="John"
              email="johndoe@email.com"
              menuData={pages}
              navClick={handleNavLinkClick}
              logout={handleLogout}
            />
          )}
        </div>
      </div>
    </header>
  );
}
