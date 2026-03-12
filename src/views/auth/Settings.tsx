import { useEffect, useRef, useState } from "react";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { DemoTabs } from "../../components/tabs/DemoTabs";
import { menuItems } from "../../store/budget-data";
import { ProfileSettings } from "./settings/ProfileSettings";
import { AppSettings } from "./settings/AppSettings";
import { SecuritySettings } from "./settings/SecuritySettings";
import { HelpSettings } from "./settings/HelpSettings";
import { ResourcesSettings } from "./settings/ResourcesSettings";
import { usePageAnimation } from "../../components/hooks/usePageAnimation";
import type { Direction } from "../../features/type/User";

export default function Settings() {
  const containerRef = useRef<HTMLDivElement>(null);

  //  Load initial tab from localStorage or default to 0
  const storedTabIndex = localStorage.getItem("settingsActiveTab");
  const [activeIndex, setActiveIndex] = useState<number>(
    storedTabIndex ? Number(storedTabIndex) : 0,
  );
  //handle direction from left/right
  const [direction, setDirection] = useState<Direction>("right");
  // track previous tab index
  const prevIndex = useRef(0);

  // detect tab direction inside handler
  const handleTabChange = (index: number) => {
    const newDirection: Direction =
      index > prevIndex.current ? "right" : "left";

    setDirection(newDirection);
    prevIndex.current = index;

    setActiveIndex(index);
    localStorage.setItem("settingsActiveTab", String(index));
  };

  const activeTabRef = usePageAnimation<HTMLDivElement>({
    dep: activeIndex,
    direction,
  });

  //active index
  const activeTab = menuItems[activeIndex];

  const tabComponents = {
    profile: <ProfileSettings />,
    app: <AppSettings />,
    security: <SecuritySettings />,
    help: <HelpSettings />,
    resources: <ResourcesSettings />,
  };

  // keep prevIndex updated on tab change
  useEffect(() => {
    prevIndex.current = activeIndex;
  }, [activeIndex]);

  return (
    <PageLayout
      header={
        <PageHeaderCard
          title="Settings"
          subtitle="Manage your account settings and preferences"
          visibleDate={false}
        ></PageHeaderCard>
      }
    >
      <div ref={containerRef} className="relative w-full overflow-hidden p-2">
        <DemoTabs
          tabs={menuItems}
          activeIndex={activeIndex}
          onChange={handleTabChange}
          delay={50}
          duration={300}
          activeBgClass="bg-(--surface)"
          useTabsBorder={true}
        />
        <div ref={activeTabRef} className="mt-6">
          {tabComponents[activeTab.value as keyof typeof tabComponents]}
        </div>
      </div>
    </PageLayout>
  );
}
