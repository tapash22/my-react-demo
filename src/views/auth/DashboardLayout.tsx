import { Outlet } from "react-router-dom";
import { useLoginUser } from "../../components/hooks/types/useLoginUser";
import { useState } from "react";
import { DemoHeader } from "../../components/header/DemoHeader";
import { DemoSideBar } from "../../components/header/DemoSideBar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  // Dashboard
  const { user } = useLoginUser();
  console.log(user?.email);

  return (
    <div className="h-screen w-full flex  overflow-hidden ">
      {/* Navbar */}
      <DemoSideBar collapsed={collapsed} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* header */}
        <DemoHeader onToggleSidebar={() => setCollapsed(!collapsed)} />
        {/* header end */}

        {/* main body with routing */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-5">
          <Outlet />
        </main>
        {/* main body with routing end */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
