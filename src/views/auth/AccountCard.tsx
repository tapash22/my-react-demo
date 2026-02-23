import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import GsapBox from "../../components/gsap/GsapBox";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePageIn, animatePageOut } from "../../animations";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    animatePageIn(el);
    ScrollTrigger.refresh();

    return () => {
      animatePageOut(el);
    };
  }, []);

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
        <div className="parallax text-5xl font-bold" data-speed="0.2">
          Slow Layer
        </div>

        <div className="parallax text-5xl font-bold" data-speed="0.2">
          Fast Layer
        </div>

        <div className="h-screen flex items-center justify-center">
          <GsapBox />
        </div>
      </div>
    </PageLayout>
  );
}
