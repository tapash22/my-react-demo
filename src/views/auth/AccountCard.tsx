import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef, useState } from "react";
import { AccountDetailsCard } from "../../components/cards/AccountDetailsCard";
import { CategoryCard } from "../../components/cards/CategoryCard";
import { bankAccounts } from "../../store/budget-data";
import { DemoAvatar } from "../../components/avatar/DemoAvatar";
import { LuCable } from "react-icons/lu";
// using tour gide
// import { TourExample } from "../../practice/TourExample";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log("click");
  };
  const createAccount = () => {
    console.log("create account");
  };
  return (
    <PageLayout
      header={
        <PageHeaderCard
          title="Bank Accounts & Cards"
          subtitle="Securely connect your financial accounts"
          visibleDate={false}
        >
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Add Account or Card"
              icon={FaPlus}
              onClick={handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <div
        ref={containerRef}
        className="flex items-start gap-3 w-full h-auto p-2"
      >
        <div className="w-2/3 h-auto p-3 space-y-2 ring-1 ring-(--input-border) rounded-2xl flex flex-col">
          <PageHeaderCard
            title="Linked Accounts"
            subtitle="Manage your connected bank accounts and credit cards"
            visibleDate={false}
          >
            <div className="flex justify-end items-center gap-5">
              <DemoButton
                title={show ? "Hide Balances" : "Show Balances"}
                onClick={() => setShow(!show)}
              />
            </div>
          </PageHeaderCard>
          <div className="flex flex-col space-y-4 p-2">
            {bankAccounts.length > 0 &&
              bankAccounts.map((account) => {
                return (
                  <AccountDetailsCard
                    key={account.name}
                    accountData={account}
                    showBalance={show}
                  />
                );
              })}
          </div>

          <div className="w-full h-auto p-4 space-y-2 flex flex-col justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
            <DemoAvatar icon={LuCable} size={16} />
            <p className="text-sm font-normal tracking-wide text-(--muted) ">
              Connect More Accounts
            </p>
            <p className="text-sm font-normal tracking-wide text-(--muted)">
              Add more bank accounts or credit cards to get a complete financial
              picture
            </p>
            <DemoButton
              title="Add Another Account"
              icon={FaPlus}
              onClick={createAccount}
            />
          </div>
        </div>
        <CategoryCard />
      </div>
    </PageLayout>
  );
}
