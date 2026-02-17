import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  // const { camera } = useThree();

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return; // safety check

  //   const tween = syncCameraWithScroll(
  //     camera as THREE.PerspectiveCamera,
  //     container,
  //   );

  //   return () => {
  //     tween.scrollTrigger?.kill();
  //     tween.kill();
  //   };
  // }, [camera, containerRef]);

  const { camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  // Animate camera with scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tween = syncCameraWithScroll(
      camera as THREE.PerspectiveCamera,
      container,
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [camera, containerRef]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
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
      <div ref={containerRef} className="h-screen w-full relative">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          className="fixed top-0 left-0 w-full h-screen "
        >
          <ambientLight />
          <SceneContent containerRef={containerRef} />
        </Canvas>

        {/* Scrollable space */}
        <div className="relative z-10 w-full h-screen" />
      </div>
    </PageLayout>
  );
}
