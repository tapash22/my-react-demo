import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import GsapBox from "../../components/gsap/GsapBox";
import { useCallback, useRef } from "react";
import { createParallax } from "../../animations";
import { useGsapContext } from "../../components/hooks/useGsapContext";

export default function Accountcard() {
  const containerRef = useRef<HTMLDivElement>(null);

  const animation = useCallback(() => {
    if (!containerRef.current) return;
    createParallax(containerRef.current);
  }, []);

  useGsapContext(containerRef, animation);

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
