import { Outlet, useLocation } from "react-router-dom";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";
import { Suspense, useEffect, useRef, useState } from "react";
import { DemoHeader } from "../../components/header/DemoHeader";
import { DemoSideBar } from "../../components/header/DemoSideBar";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../../components/loader/Loader";

export default function DashboardLayout() {
  // Dashboard
  const location = useLocation();
  const { user } = useLoginUser();
  const [collapsed, setCollapsed] = useState(false);
  // Create a reference to the scrollable area
  const scrollRef = useRef<HTMLDivElement>(null);
  // FIX: Force the scroll to the top immediately when the URL changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  console.log(user?.email);

  return (
    <div className="h-screen w-full flex overflow-hidden ">
      {/* Navbar */}
      <DemoSideBar collapsed={collapsed} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* header */}
        <DemoHeader onToggleSidebar={() => setCollapsed(!collapsed)} />
        {/* header end */}

        {/* main body with routing and animation */}
        <main className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={location.pathname}
              ref={scrollRef}
              className="absolute inset-0 p-5 overflow-y-auto w-full h-full -top-10"
              initial={{ opacity: 0, translateY: 0, transitionDuration: 0.3 }} // Start fully transparent
              animate={{ opacity: 1, translateY: 50, transitionDuration: 0.5 }} // Fade in to fully visible
              exit={{ opacity: 1, translateY: 1, transitionDuration: 0.7 }} // Fade out when leaving
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth fade
            >
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        {/* main body with routing end */}
      </div>
    </div>
  );
}
