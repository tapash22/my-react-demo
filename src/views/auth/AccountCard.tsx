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

          <div className="flex flex-col space-y-40" style={{ marginTop: 100 }}>
            <DemoButton classTag="step-1" title="Button 1" />
            <DemoButton classTag="step-2" title="Button 2" />
            <DemoButton classTag="step-3" title="Button 3" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
