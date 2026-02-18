import { Canvas } from "@react-three/fiber";
// import { PageLayout } from "../../components/layout/PageLayout";
// import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
// import { DemoButton } from "../../components/button/DemoButton";
// import { FaPlus } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import { ScrollCameraScene } from "../../components/3D/ScrollCameraScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOutletContext } from "react-router-dom";
import { animatePageIn, animatePageOut } from "../../animations";
import { usePageAnimation } from "../../components/hooks/usePageAnimation";

gsap.registerPlugin(ScrollTrigger);

type DashboardOutletContext = {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
};

export default function Reports() {
  const { scrollContainerRef } = useOutletContext<DashboardOutletContext>();
  const containerRef = useRef<HTMLDivElement>(null);

  usePageAnimation();

  // const handleClick = () => {
  //   console.log("click");
  // };

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
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-1",
            scroller: scroller,
            start: "top 90%",
            end: "top 60%",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    animatePageIn(el);
    ScrollTrigger.refresh();

    return () => {
      animatePageOut(el);
    };
  }, []);

  {
    /* <PageLayout
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
  ></PageLayout> */
  }
  return (
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
  );
}
