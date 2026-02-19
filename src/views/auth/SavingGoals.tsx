import { FUNDS_DATA } from "../../store/budget-data";
import { useSavingsOverview } from "../../components/hooks/useSavingsOverview";
import { DemoCardWithProgressbar } from "../../components/cards/DemoCardWithProgressbar";
import { FUND_TABS } from "../../utils/tabData";
import { DemoCircleProgressbar } from "../../components/progressbar/DemoCircleProgressBar";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoTabs } from "../../components/tabs/DemoTabs";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import FlipList from "../../components/gsap/FlipList";
import MorphExample from "../../components/gsap/MorphExample";
import MorphImageBlob from "../../components/gsap/MorphImageBlob";

export default function SavingGoals() {
  // const menuRef = useRef<HTMLLIElement[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  const {
    totalSaved,
    totalGoals,
    // monthlyProgress,
    overallProgress,
    monthlyTarget,
    remaining,
    savedThisMonth,
    savingsRate,
  } = useSavingsOverview(FUNDS_DATA, 1200, 1500, 6667);

  const keys = {
    id: "id",
    name: "name",
    targetDate: "targetDate",
    status: "status",
    currentAmount: "currentAmount",
    targetAmount: "targetAmount",
  } as const;

  // default active tab
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = FUND_TABS[activeIndex];

  // useEffect(() => {
  //   // Animate menu items with stagger
  //   gsap.from(menuRef.current, {
  //     y: -20,
  //     opacity: 0,
  //     duration: 0.5,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //   });
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-item", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "elastic.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="flex justify-evenly items-center gap-5 p-3 bg-(--background) ">
      {/* left side card */}
      <div className="flex flex-col items-center w-1/3 h-full p-5 shadow-(--shadow-card) rounded-xl space-y-2">
        <h3 className="font-bold subtitle-title text-start text-(--foreground) w-full p-3">
          Savings Overview
        </h3>
        {/* <div className="p-5 w-full h-full">
          <FlipList />
        </div> */}
        <div className="p-5 w-full h-full">
          <MorphImageBlob />
        </div>
        <div className="p-5 w-full h-full">
          <MorphExample />
        </div>
        <div className="flex justify-center items-center">
          <DemoCircleProgressbar percentage={overallProgress} />
        </div>
        {/* Financial Stats */}
        <div className="space-y-3 text-sm w-full p-3">
          <div className="flex justify-between">
            <span>Total Saved</span>
            <span className="font-semibold">
              ${totalSaved.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Goals</span>
            <span className="font-semibold">
              ${totalGoals.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Remaining</span>
            <span className="font-semibold">${remaining.toLocaleString()}</span>
          </div>
        </div>
        {/* Monthly Section */}
        <div className="space-y-2 text-sm w-full p-3">
          <h3 className="font-bold mb-2 text-start subtitle-title ">
            Monthly Savings
          </h3>
          <div className="flex justify-between">
            <span>Target</span>
            <span>${monthlyTarget.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Saved This Month</span>
            <span>${savedThisMonth.toLocaleString()}</span>
          </div>

          {/* Progress Bar */}
          <DemoLinearProgressBar currentAmount={1200} targetAmount={1500} />
        </div>

        {/* Savings Rate Card */}
        <div className="mt-6 p-4 bg-(--surface) rounded-lg text-center w-full">
          <div className="text-xs uppercase text-(--muted) font-medium">
            Savings Rate
          </div>
          <div className="text-2xl font-bold my-1">{savingsRate}%</div>
          <div className="text-xs text-(--muted)">of monthly income</div>
        </div>

        <div className="p-5 w-full h-full">
          <ul ref={containerRef}>
            {menuItems.map((item, index) => (
              <li
                className="menu-item"
                key={index}
                style={{ listStyle: "none", marginBottom: "10px" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* left side card end */}

      {/* right side list */}
      <div className="shadow-(--shadow-card) p-5 w-full h-[620px] rounded-2xl flex flex-col space-y-3 ">
        <div className="flex justify-between items-center shrink-0">
          <p className="text-(--foreground) subtitle-title p-3 ">
            Saving Goals
          </p>

          <DemoTabs
            tabs={FUND_TABS}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            delay={50}
            duration={300}
            activeBgClass="bg-(--surface)"
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto scrollbar">
          <DemoCardWithProgressbar
            fundsData={FUNDS_DATA}
            keys={keys}
            status={
              activeTab.value === "all"
                ? undefined
                : (activeTab.value as "active" | "paused" | "completed")
            }
          />
        </div>
      </div>

      {/* right side list end */}
    </div>
  );
}
