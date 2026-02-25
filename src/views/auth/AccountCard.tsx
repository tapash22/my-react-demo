import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
// import GsapBox from "../../components/gsap/GsapBox";
import { useRef, useState } from "react";
import Joyride, {
  ACTIONS,
  type CallBackProps,
  EVENTS,
  STATUS,
  type Step,
} from "react-joyride";
//use for onbording tour
// import { Onboarding } from "../../features/onboarding/Onboarding";

const TOUR_STORAGE_KEY = "app-tour-step";

//with react-joyride tour
const steps: Step[] = [
  { target: ".step-1", content: "This is step 1", disableBeacon: true },
  { target: ".step-2", content: "This is step 2", disableBeacon: true },
  { target: ".step-3", content: "This is step 3", disableBeacon: true },
];

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);
  // ✅ Initialize from localStorage directly
  const [stepIndex, setStepIndex] = useState<number>(() => {
    const saved = localStorage.getItem(TOUR_STORAGE_KEY);
    return saved ? Number(saved) : 0;
  });

  const [run, setRun] = useState<boolean>(() => {
    return true; // start automatically
  });

  const handleCallback = (data: CallBackProps) => {
    const { status, type, action, index } = data;
    // ✅ Save progress after each step
    if (type === EVENTS.STEP_AFTER) {
      const nextStep = index + 1;
      setStepIndex(nextStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(nextStep));
    }
    // 🔹 BACK
    if (type === EVENTS.STEP_AFTER && data.action === ACTIONS.PREV) {
      const prevStep = index - 1;
      setStepIndex(prevStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(prevStep));
    }
    // ❌ CLOSE BUTTON (X) → treat like skip
    if (action === ACTIONS.CLOSE) {
      localStorage.setItem(TOUR_STORAGE_KEY, String(index - 1));
      setRun(false);
    }

    // ✅ Handle missing target
    if (type === EVENTS.TARGET_NOT_FOUND) {
      const nextStep = index + 1;
      setStepIndex(nextStep);
      localStorage.setItem(TOUR_STORAGE_KEY, String(nextStep));
    }

    // ✅ If skipped → SAVE current step
    if (status === STATUS.SKIPPED) {
      localStorage.setItem(TOUR_STORAGE_KEY, String(index));
      setRun(false);
    }

    // ✅ If finished → clear storage
    if (status === STATUS.FINISHED) {
      localStorage.removeItem(TOUR_STORAGE_KEY);
      setRun(false);
    }
  };

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
          <Joyride
            steps={steps}
            run={run}
            stepIndex={stepIndex}
            continuous
            showSkipButton
            showProgress
            callback={handleCallback}
          />

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
