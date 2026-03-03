import { useState } from "react";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";
import { DemoDropdownSelect } from "../../../components/dropdown/DemoDropdownSelect";
import { DemoBooleanToggle } from "../../../components/toggle/DemoBooleanToggle";

type ThemeType = "light" | "dark" | "system";

const Theme_OPTIONS: ThemeType[] = ["light", "dark", "system"];

export function AppSettings() {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-3 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Appearance"
            subtitle="Customize how the app looks and feels"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <PageHeaderCard
            title="Theme"
            subtitle="Select your preferred theme"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoDropdownSelect
                  value={theme}
                  options={Theme_OPTIONS}
                  onChange={setTheme}
                />
              </div>
            }
          />
          <PageHeaderCard
            title="Animations"
            subtitle="Enable or disable animations"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Notifications"
            subtitle="Configure your notification preferences"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <PageHeaderCard
            title="Email Notifications"
            subtitle="Receive notifications via email"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
          <PageHeaderCard
            title="Push Notifications"
            subtitle="Receive notifications on your device"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
          <PageHeaderCard
            title="Budget Alerts"
            subtitle="Get notified when you're close to budget limits"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
          <PageHeaderCard
            title="Savings Goal"
            subtitle="Receive reminders to contribute to savings goals"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Data & Privacy"
            subtitle="Manage your data and privacy settings"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <PageHeaderCard
            title="Data Sharing"
            subtitle="Share anonymous usage data to improve the app"
            visibleDate={false}
            children={
              <div className="flex justify-end">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
          <PageHeaderCard
            title="Marketing Emails"
            subtitle="Receive marketing and promotional emails"
            visibleDate={false}
            children={
              <div className="flex justify-end ">
                <DemoBooleanToggle
                  value={isEnabled}
                  onChange={setIsEnabled}
                  trueLabel="On"
                  falseLabel="Off"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
