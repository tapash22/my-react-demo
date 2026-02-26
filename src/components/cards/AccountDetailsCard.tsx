import { FaHome, FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { useState } from "react";
import type { Page } from "../../features/type/User";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { DropdownProfileCard } from "./DropdownProfileCard";
import { DemoChip } from "../chip/DemoChip";
import { HiDotsHorizontal } from "react-icons/hi";
import { DemoIcon } from "../common-property/DemoIcon";

export function AccountDetailsCard() {
  const [show, setShow] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState<boolean>(false);

  const profileRef = useOutsideClick(() => setShowProfileCard(false));

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

  const handleNavLinkClick = () => {
    setShowProfileCard(false);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex justify-end items-center p-3">
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Balances" : "Show Balances"}
        </button>
      </div>

      <div className="flex justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-3 rounded-xl">
        <div className="flex justify-start items-center gap-3 w-2/3 px-3 h-auto ">
          <DemoAvatar icon={FaUser} />
          <div className="flex flex-col justify-start items-center space-y-1">
            <h2 className="text-lg font-semibold text-(--forground) flex gap-2">
              {/* {title && title} */}
              <span>title</span>
              <DemoChip label="account" labelSize="tiny" />
            </h2>
            <p className="text-start  w-full">demo text</p>
            <p className="text-start  w-full">demo text</p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 px-3 py-2 space-y-1 w-1/3">
          <div className="flex flex-col items-center p-2 space-y-1">
            <span className="text-sm font-bold tracking-wider  text-(--forground)">
              {show ? "9000" : <DemoIcon icon={HiDotsHorizontal} size={20} />}
            </span>
            <span className="text-sm tracking-wide text-(--forground)">
              checking account
            </span>
          </div>
          <div ref={profileRef} className="relative">
            <DemoIcon
              icon={HiDotsHorizontal}
              size={20}
              onClick={() => setShowProfileCard(!showProfileCard)}
            />
            {/* Card Dropdown */}
            {showProfileCard && (
              <DropdownProfileCard
                pages={pages}
                navClick={handleNavLinkClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
