import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { DemoHeader } from "../../components/header/DemoHeader";
import { DemoSideBar } from "../../components/header/DemoSideBar";
import Loader from "../../components/loader/Loader";
// import { animatePageIn, animatePageOut } from "../../animations";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DashboardLayout() {
  // Dashboard
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  // Create a reference to the scrollable area
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Page animation (only ONE useEffect)
  // useEffect(() => {
  //   const contentEl = contentRef.current;
  //   if (!contentEl) return;

  //   // Wait one animation frame so Suspense content mounts
  //   requestAnimationFrame(() => {
  //     animatePageIn(contentEl);
  //     ScrollTrigger.refresh();
  //   });

  //   return () => {
  //     if (contentEl) {
  //       animatePageOut(contentEl);
  //     }
  //   };
  // }, [location.pathname]);

  // useLayoutEffect(() => {
  //   const contentEl = contentRef.current;
  //   if (!contentEl) return;

  //   animatePageIn(contentEl);
  //   ScrollTrigger.refresh();

  //   return () => {
  //     animatePageOut(contentEl);
  //   };
  // }, [location.pathname]);

  return (
    <div className="h-screen w-full flex overflow-hidden  ">
      {/* Navbar */}
      <DemoSideBar collapsed={collapsed} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* header */}
        <DemoHeader onToggleSidebar={() => setCollapsed(!collapsed)} />
        {/* header end */}

        {/* main body with routing and animation */}
        <main
          ref={scrollRef}
          className="flex-1 relative overflow-y-auto overflow-x-hidden scrollbar-thin"
          style={{ scrollBehavior: "smooth" }}
        >
          <Suspense fallback={<Loader />}>
            <div ref={contentRef}>
              {/* Pass scrollRef to routed components */}
              <Outlet context={{ scrollContainerRef: scrollRef }} />
            </div>
          </Suspense>
        </main>
        {/* main body with routing end */}
      </div>
    </div>
  );
}

export type DashboardScrollRef = HTMLDivElement | null;
