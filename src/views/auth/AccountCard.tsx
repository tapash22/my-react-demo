import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef, useState } from "react";
import { AccountDetailsCard } from "../../components/cards/AccountDetailsCard";
// import { CategoryCard } from "../../components/cards/CategoryCard";
import { bankAccounts } from "../../store/budget-data";
import { DemoAvatar } from "../../components/avatar/DemoAvatar";
import { LuCable } from "react-icons/lu";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
// using tour gide
// import { TourExample } from "../../practice/TourExample";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const lastMonth = 20350;
  const total = 3050;
  const difference = lastMonth - total;
  const percentageChange = (difference / lastMonth) * 100;
  const sign = difference >= 0 ? "+" : "-";

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
        {/* <CategoryCard /> */}

        <div className="w-1/3 h-auto p-3 space-y-2 ring-1 ring-(--input-border) rounded-2xl flex flex-col">
          <PageHeaderCard
            title="Account Summary"
            visibleDate={false}
          ></PageHeaderCard>
          <div className="w-full p-3 flex flex-col space-y-3">
            <p className="text-sm font-medium text-(--forground) text-left ">
              Monthly Comparison
            </p>
            {/* Last Month */}
            <div className=" rounded-lg space-y-1 flex justify-between items-center">
              <p className="text-sm text-(--foreground)">Total Asset</p>
              <p className="font-medium text-sm text-(--foreground) ">
                ${lastMonth}
              </p>
            </div>
            {/* Last Month end*/}

            {/* This Month */}
            <div className=" rounded-lg space-y-1 flex justify-between items-center">
              <p className="text-sm text-(--foreground)">Total Liabilities</p>
              <p className="font-medium text-sm text-(--foreground)">
                ${total}
              </p>
            </div>
            {/* This Month end */}

            {/* Difference*/}
            <div className=" rounded-lg space-y-1 flex justify-between items-center">
              <p className="text-sm text-(--foreground)">Net Worth</p>
              <p
                className={`font-medium text-sm ${difference >= 0 ? "text-(--danger)" : "text-(--success)"}`}
              >
                {sign}${difference} ({Math.abs(percentageChange).toFixed(1)}%)
              </p>
            </div>
            {/* Difference end */}
          </div>
          <div className="">
            <PageHeaderCard
              title="Account Distribution"
              visibleDate={false}
            ></PageHeaderCard>
            <div className="px-2 space-y-1">
              <DemoLinearProgressBar
                showLabel="Checking"
                currentAmount={200}
                targetAmount={250}
                height="h-1"
              />
              <DemoLinearProgressBar
                showLabel="Savings"
                currentAmount={200}
                targetAmount={250}
                height="h-1"
              />
              <DemoLinearProgressBar
                showLabel="Credit"
                currentAmount={200}
                targetAmount={250}
                height="h-1"
              />
            </div>
          </div>
          <div className="w-full h-auto p-4 space-y-2 flex flex-col justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
            <p className="text-lg font-bold tracking-wide text-(--muted) ">
              Credit Utilization
            </p>
            <p className="text-lg font-normal tracking-wide">12.5%</p>
            <p className="text-sm font-normal tracking-wide text-(--muted) w-full flex justify-center">
              Excellent! Keep it under 30%
            </p>
            <DemoLinearProgressBar
              height="h-1"
              currentAmount={200}
              targetAmount={300}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
