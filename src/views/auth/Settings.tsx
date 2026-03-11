import { useRef, useState } from "react";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { DemoTabs } from "../../components/tabs/DemoTabs";
import { menuItems } from "../../store/budget-data";
import { ProfileSettings } from "./settings/ProfileSettings";
import { AppSettings } from "./settings/AppSettings";
import { SecuritySettings } from "./settings/SecuritySettings";
import { HelpSettings } from "./settings/HelpSettings";
import { ResourcesSettings } from "./settings/ResourcesSettings";

export default function Settings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = menuItems[activeIndex];

  const tabComponents = {
    profile: <ProfileSettings />,
    app: <AppSettings />,
    security: <SecuritySettings />,
    help: <HelpSettings />,
    resources: <ResourcesSettings />,
  };

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
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <DemoTabs
          tabs={menuItems}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          delay={50}
          duration={300}
          activeBgClass="bg-(--surface)"
        />
        <div className="mt-6">
          {tabComponents[activeTab.value as keyof typeof tabComponents]}
        </div>
      </div>
    </PageLayout>
  );
}
