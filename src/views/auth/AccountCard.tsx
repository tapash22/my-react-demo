import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
// import GsapBox from "../../components/gsap/GsapBox";
import { useRef, useState } from "react";
import Joyride, { type Step } from "react-joyride";
//use for onbording tour
// import { Onboarding } from "../../features/onboarding/Onboarding";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);

  // const dashboardRef = useRef<HTMLHeadingElement>(null);
  // const addProjectRef = useRef<HTMLButtonElement>(null);

  // const [steps, setSteps] = useState<Step[]>([]);
  // const [run, setRun] = useState(false); // control Joyride

  const [run] = useState(true);

  const steps: Step[] = [
    {
      target: ".dashboard-step",
      content:
        "Welcome to your dashboard! This is where you can see your stats.",
      placement: "bottom",
      disableBeacon: true, // 👈 IMPORTANT
    },
    {
      target: ".add-project-step",
      content: "Click here to add a new project.",
      placement: "bottom",
      disableBeacon: true, // 👈 IMPORTANT
    },
  ];

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

          <h1 className="dashboard-step text-2xl font-bold">Dashboard</h1>

          <button className="add-project-step mt-5 px-4 py-2 bg-blue-500 text-white rounded">
            Add Project
          </button>

          {steps.length > 0 && (
            <Joyride
              steps={steps}
              run={run}
              continuous
              scrollToFirstStep
              showSkipButton
              showProgress
              styles={{
                options: {
                  zIndex: 10000,
                  primaryColor: "#1D4ED8",
                },
              }}
            />
          )}
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
