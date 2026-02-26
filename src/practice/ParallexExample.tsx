import { Canvas } from "@react-three/fiber";
import { ScrollCameraScene } from "../components/3D/ScrollCameraScene";
import { useLayoutEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type DashboardOutletContext = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
};

export function ParallexExample() {
  const { scrollContainerRef } = useOutletContext<DashboardOutletContext>();

  const containerRef = useRef<HTMLDivElement>(null);

  const images = ["/image/first.jpg", "/image/second.jpg", "/image/four.jpg"];

  useLayoutEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;

    const scroller = scrollContainerRef.current;
    const images = ["/image/first.jpg", "/image/second.jpg", "/image/four.jpg"];
    const tweens: gsap.core.Tween[] = [];

    images.forEach((_, i) => {
      const el = containerRef.current!.querySelector(
        `.slide-${i + 1}`,
      ) as HTMLElement;
      if (!el) return;

      const tween = gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            scroller: scroller,
            start: "top 20%",
            end: "bottom 50%",
            scrub: false,
            pin: true,
            pinSpacing: true,
          },
        },
      );

      tweens.push(tween);
    });

    return () => {
      // ✅ properly clean all tweens
      tweens.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [scrollContainerRef]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Three.js Background */}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="fixed inset-0 w-full h-screen -z-10"
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <ambientLight intensity={1} />
        <ScrollCameraScene containerRef={containerRef} />
      </Canvas>

      {/* Slides */}
      {images.map((src, i) => (
        <section
          key={i}
          className={`slide-${i + 1} h-screen w-screen flex items-center justify-center`}
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-screen h-full object-cover"
          />
        </section>
      ))}
    </div>
  );
}
