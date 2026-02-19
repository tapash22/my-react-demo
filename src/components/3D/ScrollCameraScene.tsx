import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { syncCameraWithScroll } from "../../animations";

interface ScrollCameraSceneProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollCameraScene({ containerRef }: ScrollCameraSceneProps) {
  const { camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  // Sync camera with scroll
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

  // Rotate box every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh ref={meshRef} position={[2, 2, 0]}>
        <torusKnotGeometry args={[0.7, 0.2, 100, 16]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  );
}
