import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { useState } from "react";
import type { BankAccount } from "../../features/type/User";
import { pages } from "../../store/link-data";
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

  const handleNavLinkClick = () => {
    setShowProfileCard(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-(--foreground) opacity-80 w-full ring-2 ring-(--input-border) p-2 rounded-xl hover:ring-2 hover:ring-(--surface) cursor-pointer">
      <div className="flex justify-start items-center gap-3 w-full sm:w-full md:w-2/4 px-1 h-auto ">
        <DemoAvatar size={12} icon={FaUser} />
        <div className="flex flex-col justify-start items-center space-y-1 w-full">
          <h2 className="text-lg font-semibold text-(--forground) flex justify-between sm:justify-between md:justify-start gap-3 py-2 w-full ">
            {/* {title && title} */}
            <span className="text-sm font-medium tracking-wide text-(--foreground)">
              {accountData.name}
            </span>
            <DemoChip label={accountData.status} labelSize="tiny" />
          </h2>
          <p className="text-start text-sm font-normal tracking-wide w-full text-wrap flex justify-between sm:justify-between md:justify-start ">
            <span className="">{accountData.bank}.</span>
            <span> ****{accountData.last4}</span>
          </p>
          <p className="text-start text-sm font-normal tracking-wide w-full text-wrap flex justify-between sm:justify-between md:justify-start ">
            <span>Last Sync:</span>
            <span>{accountData.lastSync}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse md:flex-row justify-between sm:justify-between md:justify-between  items-center gap-5 p-2  w-full sm:w-full md:w-1/4">
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
      <div
        ref={profileRef}
        className="relative w-full md:w-1/4 p-2 h-full flex justify-end items-start "
      >
        <DemoIcon
          icon={HiDotsHorizontal}
          size={16}
          onClick={() => setShowProfileCard(!showProfileCard)}
        />
        {/* Card Dropdown */}
        {showProfileCard && (
          <DropdownProfileCard
            menuData={pages}
            navClick={() => handleNavLinkClick}
            iconSize={16}
          />
        )}
      </div>
    </div>
  );
}
