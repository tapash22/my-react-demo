import { useState } from "react";
import { DemoDropdownSelect } from "../../../components/dropdown/DemoDropdownSelect";
import { DemoBooleanToggle } from "../../../components/toggle/DemoBooleanToggle";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";

type ThemeType = "light" | "dark" | "system";

const Theme_OPTIONS: ThemeType[] = ["light", "dark", "system"];

export function AppSettings() {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-2 w-full h-auto bg-(--background) flex flex-col space-y-5 ">
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="py-2">
          <PageHeaderCard
            title="Appearance"
            subtitle="Customize how the app looks and feels"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t border-(--input-border) p-2">
          <PageHeaderCard
            title="Theme"
            subtitle="Select your preferred theme"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
        <div className="py-2">
          <PageHeaderCard
            title="Notifications"
            subtitle="Configure your notification preferences"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t border-(--input-border) p-2">
          <PageHeaderCard
            title="Email Notifications"
            subtitle="Receive notifications via email"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
        <div className="py-2">
          <PageHeaderCard
            title="Data & Privacy"
            subtitle="Manage your data and privacy settings"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t border-(--input-border) p-1 space-y-0">
          <PageHeaderCard
            title="Data Sharing"
            subtitle="Share anonymous usage data to improve the app"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
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
