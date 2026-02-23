import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { ScrollCameraScene } from "../../components/3D/ScrollCameraScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOutletContext } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { DemoButton } from "../../components/button/DemoButton";
import { FaPlus } from "react-icons/fa";
import { responsiveAnimations } from "../../utils/responsiveAnimations";

gsap.registerPlugin(ScrollTrigger);

type DashboardOutletContext = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
};

export default function Reports() {
  const { scrollContainerRef } = useOutletContext<DashboardOutletContext>();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
  };
  // Get the scroll container from the Dashboard layout
  useLayoutEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;
    const scroller = scrollContainerRef?.current;
    const ctx = gsap.context(() => {
      const sections =
        containerRef.current!.querySelectorAll<HTMLElement>(".panel");
      sections.forEach((section) => {
        const text = section.querySelector("h1, h2, button");
        if (!text) return;

        // Slide in/out animation
        gsap.fromTo(
          text,
          { y: 100, opacity: 0 },

          {
            y: -50,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              scroller: scroller,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          },
        );

        // Hide again when leaving viewport
        ScrollTrigger.create({
          trigger: section,
          scroller: scroller,
          start: "top bottom",
          end: "bottom top",
          onLeave: () => gsap.to(text, { opacity: 0, y: -50, duration: 1.2 }),
          onEnterBack: () => gsap.to(text, { opacity: 1, y: 0, duration: 1.2 }),
        });
      });
      // Hero text stagger animation
      const heroSpans =
        containerRef.current!.querySelectorAll(".hero-text span");
      if (heroSpans.length) {
        gsap.from(heroSpans, {
          x: -100, // start from left (-100px)
          opacity: 0, // start invisible
          stagger: 0.2, // delay each span by 0.2s
          duration: 1, // 1s per span
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-1",
            scroller: scroller,
            start: "top 80%",
            end: "bottom top",
            invalidateOnRefresh: true,
            // remove 'scrub' if you want animation to play on enter
          },
        });
      }
    }, containerRef);

    // Use reusable responsiveAnimations utility

    const mm = responsiveAnimations({
      selector: ".hero-text span",
      desktop: {
        x: -100,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.5, // start after 0.5s
        color: "#FF0000", // gold text color
      },
      tablet: {
        x: -50,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.3,
        color: "#FFA500", // orange text color
      },
      mobile: {
        x: -20,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.1,
        color: "#FFFFFF", // white text color
      },
    });
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [scrollContainerRef]);

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
      <div ref={containerRef} className="relative w-full min-h-screen">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          className="fixed inset-0 w-full h-screen -z-10"
          dpr={[1, 1.5]}
          gl={{ antialias: false }}
        >
          <ambientLight intensity={1} />
          <ScrollCameraScene containerRef={containerRef} />
        </Canvas>

        {/* Sections */}
        <section className="panel section-1 h-screen flex items-start justify-center">
          <h1 className="hero-text text-6xl font-bold text-white h-full bg-accent-dark">
            <span>Next</span> <span>Generation</span> <span>Product</span>
          </h1>
        </section>

        <section className="panel section-2 h-screen flex items-start justify-center">
          <h2 className="section-text text-4xl text-white h-full bg-accent">
            Built with Performance
          </h2>
        </section>

        <section className="panel section-3 h-screen flex items-start justify-center">
          <h2 className="section-text text-4xl text-white h-full bg-amber-400">
            Designed for Developers
          </h2>
        </section>

        <section className="panel section-4 h-screen flex items-start justify-center">
          <button className="cta-button px-8 py-4 bg-orange-500 text-white rounded-xl h-full ">
            Get Started
          </button>
        </section>
      </div>
    </PageLayout>
  );
}
