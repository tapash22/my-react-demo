import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export function BudgetVisualizer3D() {
  return (
    <div className="w-full h-64 bg-(--surface) rounded-xl overflow-hidden border border-(--input-border)">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* An animated 3D Sphere */}
        <Sphere args={[1, 100, 200]} scale={1.2}>
          <MeshDistortMaterial
            color="#10b981" // emerald-500
            attach="material"
            distort={0.4}
            speed={2}
          />
        </Sphere>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
