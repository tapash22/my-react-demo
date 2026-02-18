import { Canvas } from "@react-three/fiber";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { ScrollCameraScene } from "../../components/3D/ScrollCameraScene";

export default function Reports() {
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
      <div ref={containerRef} className="h-screen w-full relative">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          className="fixed top-0 left-0 w-full h-screen "
        >
          <ambientLight />
          <ScrollCameraScene containerRef={containerRef} />
        </Canvas>

        {/* Scrollable space */}
        <div className="relative z-10 w-full h-screen" />
      </div>
    </PageLayout>
  );
}
