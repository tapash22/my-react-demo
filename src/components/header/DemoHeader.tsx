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
import { pages } from "../../store/link-data";
import { FUNDS_DATA } from "../../store/chart-data";
import { DemoList } from "../list/DemoList";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { DemoBadge } from "../Badge/DemoBadge";
import { DemoButton } from "../button/DemoButton";
import { Modal } from "../../features/onboarding/Modal";
import { useIsMobile } from "../hooks/useIsMobile";
import { FaBars } from "react-icons/fa6";

interface DemoHeaderProps {
  onToggleSidebar: () => void;
}

export function DemoHeader({ onToggleSidebar }: DemoHeaderProps) {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const [showProfileCard, setShowProfileCard] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showTabNotification, setShowTabNotification] =
    useState<boolean>(false);
  const isMobile = useIsMobile();

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

  const handleNotificationClick = () => {
    if (isMobile) {
      setShowNotification(false); // close dropdown if open
      setShowTabNotification(true); // open modal
    } else {
      setShowTabNotification(false); // close modal
      setShowNotification((prev) => !prev); // toggle dropdown
    }
  };

  return (
    <header className="h-16 w-full flex items-center justify-between p-4 sm:p-5 bg-(--background) shadow-(--shadow) ">
      {/* Left: Sidebar + Breadcrumbs */}
      <div className="flex items-center gap-2 shrink-0">
        <DemoIcon
          icon={PiSidebarSimpleLight}
          size={30}
          dropShadow={true}
          color="var(--pick)"
          onClick={onToggleSidebar}
          iconClass="hidden sm:block"
        />
        <DemoIcon
          icon={FaBars}
          size={26}
          dropShadow={true}
          onClick={onToggleSidebar}
          color="var(--pick)"
          iconClass="block sm:hidden"
        />
        <div className="hidden md:block">
          <DemoBreadcrumbs />
        </div>
      </div>

      {/* search start */}
      <div className="flex-1 max-w-[16rem] sm:max-w-lg p-2">
        <InputPrepend
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:text-(--foreground) "
          placeholder="Search . . ."
          prepend={
            <DemoIcon icon={FaSearch} color="var-(--surface)" size={16} />
          }
        />
      </div>
      {/* search start end */}

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2 md:gap-6">
          <DemoButton
            onClick={toggleTheme}
            icon={theme !== "dark" ? FaMoon : FaSun}
            iconSize={20}
            buttonColor="var(--surface)"
            classTag="p-2 flex justify-center items-center rounded-full ring-2 ring-(--border)"
          />

          <div ref={notificationRef} className="relative">
            <DemoBadge
              onClick={handleNotificationClick}
              badgeLengthCount={FUNDS_DATA.length}
              icon={FaRegBell}
            />
            {showNotification && (
              <div className="absolute right-0 w-72 bg-(--surface) mt-3 flex flex-col gap-1 rounded-lg drop-shadow-xl space-y-1 z-50 text-(--foreground) max-h-[40vh] overflow-auto">
                <DemoList
                  items={FUNDS_DATA}
                  initialCount={3}
                  haveBorder={true}
                  children={(fund) => <DemoNotificationList fund={fund} />}
                />
              </div>
            )}
          </div>
        </div>

        {/* Profile icon */}
        <div ref={profileRef} className="relative">
          <DemoIcon
            icon={FaUserCircle}
            size={30}
            iconClass="text-xl font-light"
            color="var(--pick)"
            onClick={() => setShowProfileCard(!showProfileCard)}
          />
          {showProfileCard && (
            <DropdownProfileCard
              title="John"
              email="johndoe@email.com"
              menuData={pages}
              navClick={handleNavLinkClick}
              logout={handleLogout}
              theme={theme}
              toggleTheme={toggleTheme}
              showNotification={showNotification}
              setShowNotification={setShowTabNotification}
              badgeCount={FUNDS_DATA.length}
            />
          )}
        </div>

        <Modal
          title="Notification"
          open={showTabNotification && isMobile && FUNDS_DATA.length > 0}
          onClose={() => setShowTabNotification(false)}
        >
          <div className="md:hidden flex flex-col gap-1 rounded-lg drop-shadow-xl space-y-1 text-(--foreground) overflow-auto w-full">
            {showTabNotification}
            <DemoList
              items={FUNDS_DATA}
              initialCount={FUNDS_DATA.length}
              haveBorder={true}
              children={(fund) => <DemoNotificationList fund={fund} />}
            />
          </div>
        </Modal>
      </div>
    </header>
  );
}
