import { Canvas } from "@react-three/fiber";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import { ScrollCameraScene } from "../../components/3D/ScrollCameraScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Reports() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      panels.forEach((panel) => {
        const text = panel.querySelector("h1, h2, button");
        if (!text) return;

        gsap.fromTo(
          text,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.from(".hero-text span", {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
      <div
        ref={containerRef}
        className="relative w-full min-h-[400vh] overflow-x-hidden"
      >
        <Canvas
          camera={{ position: [0, 0, 5] }}
          className="fixed inset-0 w-full h-screen"
          dpr={[1, 1.5]}
          gl={{ antialias: false }}
        >
          <ambientLight />
          <ScrollCameraScene containerRef={containerRef} />
        </Canvas>

        {/* Sections */}
        <section className="panel h-screen flex items-center justify-center">
          <h1 className="hero-text text-6xl font-bold text-white">
            Next Generation Product
          </h1>
        </section>

        <section className="panel h-screen flex items-center justify-center">
          <h2 className="section-text text-4xl text-white">
            Built with Performance
          </h2>
        </section>

        <section className="panel h-screen flex items-center justify-center">
          <h2 className="section-text text-4xl text-white">
            Designed for Developers
          </h2>
        </section>

        <section className="panel h-screen flex items-center justify-center">
          <button className="cta-button px-8 py-4 bg-orange-500 text-white rounded-xl">
            Get Started
          </button>
        </section>
      </div>
    </PageLayout>
  );
}
