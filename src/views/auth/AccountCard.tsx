import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef } from "react";
import { AccountDetailsCard } from "../../components/cards/AccountDetailsCard";
// using tour gide
// import { TourExample } from "../../practice/TourExample";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
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
        className="flex gap-3 items-start w-full h-auto p-2"
      >
        <AccountDetailsCard />
      </div>
    </PageLayout>
  );
}
