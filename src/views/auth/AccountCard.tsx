import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef, useState } from "react";
import { AccountDetailsCard } from "../../components/cards/AccountDetailsCard";
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
        {/* left side */}
        <div className="w-full mt-1 lg:w-1/2 xl:w-2/3 h-auto p-2">
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            {/* left side block header */}
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
            {/* left side block header end */}

            {/* list of card */}
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
            {/* list of card end */}

            {/* bottom card with button */}
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
            {/* left side bottom card with button end */}
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-full lg:w-1/2 xl:w-1/3 p-2">
          <div className="flex flex-col w-full h-auto bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            {/* right side block header */}
            <PageHeaderCard
              title="Account Summary"
              titleClass="text-lg font-normal -ml-1"
              visibleDate={false}
            ></PageHeaderCard>
            {/* right side block header end */}

            {/* right side comparison header */}
            <DemoMonthlyComparisonCard
              title="Monthly Comparison"
              items={balanceData}
              differenceLabel="Monthly Change"
            />
            {/* right side comparison header end */}

            {/* right side comparison total summery*/}
            <div className="px-2">
              <DemoLinearProgressBar
                showLabel={String(difference)}
                currentAmount={200}
                targetAmount={250}
                height="h-1"
              />
            </div>
            {/* right side comparison total summery end*/}

            {/* right side cost header */}
            <PageHeaderCard
              title="Account Distribution"
              titleClass="text-sm font-medium "
              visibleDate={false}
            />
            {/* right side cost header end */}

            {/* right side body costing list */}
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
            {/* right side body costing list end */}

            {/* right side bottom card with button  */}
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
            {/* right side bottom card with button end */}
          </div>
        </div>
        {/* right side end */}
      </Container>
    </PageLayout>
  );
}
