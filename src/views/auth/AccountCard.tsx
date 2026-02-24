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
// const TOUR_CLOSED_KEY = "app-tour-closed";

//using for onbording tour

// const steps: Step[] = [
//   {
//     target: ".dashboard-step",
//     content: "Welcome to your dashboard! This is where you can see your stats.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
//   {
//     target: ".add-project-step",
//     content: "Click here to add a new project.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
// ];

//with react-joyride tour
const steps: Step[] = [
  { target: ".step-1", content: "This is step 1", disableBeacon: true },
  { target: ".step-2", content: "This is step 2", disableBeacon: true },
  { target: ".step-3", content: "This is step 3", disableBeacon: true },
];

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);

  // const dashboardRef = useRef<HTMLHeadingElement>(null);
  // const addProjectRef = useRef<HTMLButtonElement>(null);

  // const [steps, setSteps] = useState<Step[]>([]);
  // const [run, setRun] = useState(false); // control Joyride

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
      {/* IMPORTANT: attach containerRef */}
      <div ref={containerRef} className="py-40 space-y-40">
        <div className="space-y-8">
          {/* <h1 ref={dashboardRef} className="text-2xl font-bold">
            Dashboard
          </h1>

          <button
            ref={addProjectRef}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => console.log("Add Project clicked")}
          >
            Add Project
          </button> */}

          {/* Onboarding component */}
          {/* <Onboarding steps={steps} /> */}

          {/* using Joyride */}

          {/* <h1 className="dashboard-step text-2xl font-bold">Dashboard</h1>

          <button className="add-project-step mt-5 px-4 py-2 bg-blue-500 text-white rounded">
            Add Project
          </button>

          {steps.length > 0 && (
            <Joyride
              steps={steps}
              run={run}
              stepIndex={stepIndex}
              continuous
              showSkipButton
              showProgress
              callback={handleJoyrideCallback}
              styles={{
                options: {
                  zIndex: 10000,
                  primaryColor: "#1D4ED8",
                },
              }}
            />
          )} */}
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
        {/* <div className="parallax text-5xl font-bold" data-speed="0.2">
          Slow Layer
        </div>

        <div className="parallax text-5xl font-bold" data-speed="0.2">
          Fast Layer
        </div>

        <div className="h-screen flex items-center justify-center">
          <GsapBox />
        </div> */}
      </div>
    </PageLayout>
  );
}
