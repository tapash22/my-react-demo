import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef, useState } from "react";
import { AccountDetailsCard } from "../../components/cards/AccountDetailsCard";
// import { CategoryCard } from "../../components/cards/CategoryCard";
import { balanceData, bankAccounts } from "../../store/account-data";
import { DemoAvatar } from "../../components/avatar/DemoAvatar";
import { LuCable } from "react-icons/lu";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoFinancialMetricCard } from "../../components/cards/DemoFinancialMetricCard";
import { DemoMonthlyComparisonCard } from "../../components/cards/DemoMonthlyComparisonCard";
import { Container } from "../../components/layout/Container";
// using tour gide
// import { TourExample } from "../../practice/TourExample";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const lastMonth = 20350;
  const total = 3050;
  const difference = lastMonth - total;
  // const percentageChange = (difference / lastMonth) * 100;
  // const sign = difference >= 0 ? "+" : "-";

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
      <Container ref={containerRef}>
        <div className="w-2/3 h-auto p-3 space-y-2 ring-1 ring-(--input-border) rounded-2xl flex flex-col">
          <PageHeaderCard
            title="Linked Accounts"
            titleClass="text-lg font-normal"
            subtitle="Manage your connected bank accounts and credit cards"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
          >
            <div className="flex justify-end items-center gap-5">
              <DemoButton
                title={show ? "Hide Balances" : "Show Balances"}
                onClick={() => setShow(!show)}
              />
            </div>
          </PageHeaderCard>
          <div className="flex flex-col space-y-3 p-2">
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

          <DemoFinancialMetricCard
            title="Connect More Accounts"
            description="Add more bank accounts or credit cards to get a complete financial picture"
            prependChildren={<DemoAvatar icon={LuCable} size={16} />}
            Children={
              <DemoButton
                title="Add Another Account"
                icon={FaPlus}
                iconSize={12}
                onClick={createAccount}
              />
            }
          />
        </div>
        {/* <CategoryCard /> */}

        <div className="w-1/3 h-auto p-3 space-y-2 ring-1 ring-(--input-border) rounded-2xl flex flex-col ">
          <PageHeaderCard
            title="Account Summary"
            titleClass="text-lg font-normal -ml-1"
            visibleDate={false}
          ></PageHeaderCard>

          <DemoMonthlyComparisonCard
            title="Monthly Comparison"
            items={balanceData}
            differenceLabel="Monthly Change"
          />

          <div className="px-2">
            <DemoLinearProgressBar
              showLabel={String(difference)}
              currentAmount={200}
              targetAmount={250}
              height="h-1"
            />
          </div>
          <PageHeaderCard
            title="Account Distribution"
            titleClass="text-sm font-medium "
            visibleDate={false}
          />
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
          <div className="p-2">
            <DemoFinancialMetricCard
              title="Credit Utilization"
              value={12.5}
              description="Excellent! Keep it under 30%"
              Children={
                <DemoLinearProgressBar
                  height="h-1"
                  currentAmount={200}
                  targetAmount={300}
                />
              }
            />
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
