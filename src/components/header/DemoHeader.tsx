import { useState } from "react";
import { PiSidebarSimpleLight } from "react-icons/pi";
import { InputPrepend } from "../input-component/InputPrepend";
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
import { DemoButton } from "../button/DemoButton";

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
    <header className="h-16 w-full flex items-center justify-between p-5 bg-(--background) shadow-(--shadow)">
      <div className="flex items-center gap-2 shrink-0">
        <DemoIcon
          icon={PiSidebarSimpleLight}
          size={30}
          dropShadow={true}
          onClick={onToggleSidebar}
        />
        <div className="hidden md:block">
          <DemoBreadcrumbs />
        </div>
      </div>

      {/* search start */}
      <div className="flex-1 max-w-lg p-2">
        <InputPrepend
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:text-(--foreground)"
          placeholder="Search . . ."
          prepend={<DemoIcon icon={FaSearch} color="--foreground" size={16} />}
        />
      </div>
      {/* search start end */}

      {/* Badge */}
      <div className="flex items-center  gap-2 md:gap-6 ">
        <DemoButton
          onClick={toggleTheme}
          icon={theme !== "dark" ? FaMoon : FaSun}
          iconSize={20}
          classTag="ring-2 ring-(--foreground) p-2  flex justify-center items-center bg-green-700 rounded-full w-8 h-8"
        />
        <div ref={notificationRef} className="relative ">
          {/* Badge */}

          <DemoBadge
            onClick={() => setShowNotification(!showNotification)}
            badgeLengthCount={FUNDS_DATA.length}
            icon={FaRegBell}
          />
          {showNotification && (
            <div className="absolute right-0 px-0 w-72 bg-(--surface) mt-3  shadow-md  flex flex-col gap-2 rounded-lg drop-shadow-xl space-y-1 z-50 text-(--foreground) h-min-[30vh] h-max-[50vh] overflow-hidden">
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
      {/* Badge end */}
    </header>
  );
}
