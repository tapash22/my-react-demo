import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
// import GsapBox from "../../components/gsap/GsapBox";
import { useRef } from "react";
import { steps } from "../../store/budget-data";
import { DemoTour } from "../../features/onboarding/DemoTour";
//use for onbording tour
// import { Onboarding } from "../../features/onboarding/Onboarding";

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
      <div ref={containerRef} className="py-40 space-y-40">
        <div className="space-y-8">
          <DemoTour steps={steps} />

          <div style={{ marginTop: 100 }}>
            <button className="step-1">Button 1</button>
            <button className="step-2">Button 2</button>
            <button className="step-3">Button 3</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
