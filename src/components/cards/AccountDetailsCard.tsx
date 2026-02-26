import { FaHome, FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { useState } from "react";
import type { BankAccount, Page } from "../../features/type/User";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { DropdownProfileCard } from "./DropdownProfileCard";
import { DemoChip } from "../chip/DemoChip";
import { HiDotsHorizontal } from "react-icons/hi";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoCurrency } from "./DemoCurrency";

interface AccountDetailsCardProps {
  showBalance?: boolean;
  accountData: BankAccount;
}

export function AccountDetailsCard({
  showBalance = false,
  accountData,
}: AccountDetailsCardProps) {
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
    <div className="flex justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-2 rounded-xl hover:bg-(--surface) cursor-pointer">
      <div className="flex justify-start items-center gap-3 w-2/3 px-1 h-auto ">
        <DemoAvatar size={12} icon={FaUser} />
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-lg font-semibold text-(--forground) flex gap-3 py-2">
            {/* {title && title} */}
            <span className="text-sm font-medium tracking-wide text-(--foreground)">
              {accountData.name}
            </span>
            <DemoChip label={accountData.status} labelSize="tiny" />
          </h2>
          <p className="text-start text-sm font-normal tracking-wide w-full text-wrap ">
            <span className="">{accountData.bank}.</span>
            <span> ****{accountData.last4}</span>
          </p>
          <p className="text-start text-sm font-normal tracking-wide w-full text-wrap ">
            Last Sync: {accountData.lastSync}
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-5 p-2  w-1/3">
        <div className="flex flex-col items-center ">
          <span className="text-sm font-bold tracking-wider transition-all duration-200 text-(--forground)">
            {showBalance ? (
              <DemoCurrency amount={accountData.amount} currency="TK" />
            ) : (
              <DemoIcon icon={HiDotsHorizontal} size={20} />
            )}
          </span>
          <span className="text-sm font-normal tracking-wide text-(--forground)">
            {accountData.type}
          </span>
        </div>
        <div ref={profileRef} className="relative">
          <DemoIcon
            icon={HiDotsHorizontal}
            size={16}
            onClick={() => setShowProfileCard(!showProfileCard)}
          />
          {/* Card Dropdown */}
          {showProfileCard && (
            <DropdownProfileCard pages={pages} navClick={handleNavLinkClick} />
          )}
        </div>
      </div>
    </div>
  );
}
