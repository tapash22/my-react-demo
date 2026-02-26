import { useRef } from "react";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";

import { FaPlus } from "react-icons/fa";

export default function Settings() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => console.log("click");

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
      <div ref={containerRef} className="relative w-full overflow-hidden"></div>
    </PageLayout>
  );
}
