import { useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { syncCameraWithScroll } from "../../animations";
import * as THREE from "three";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";

function SceneContent({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { camera } = useThree();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // safety check

    const tween = syncCameraWithScroll(
      camera as THREE.PerspectiveCamera,
      container,
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [camera, containerRef]);

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Reports() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
  };
  return (
    // Scrollable container
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
      <div ref={containerRef} className="h-[200vh] w-full relative">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
            <ambientLight />
            <SceneContent containerRef={containerRef} />
          </Canvas>
        </div>
      </div>
    </PageLayout>
  );
}
