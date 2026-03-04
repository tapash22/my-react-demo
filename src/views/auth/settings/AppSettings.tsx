import { useState } from "react";
import { DemoDropdownSelect } from "../../../components/dropdown/DemoDropdownSelect";
import { DemoBooleanToggle } from "../../../components/toggle/DemoBooleanToggle";
import { DemoPageSectionCard } from "../../../components/cards/DemoPageSectionCard";

type ThemeType = "light" | "dark" | "system";

const Theme_OPTIONS: ThemeType[] = ["light", "dark", "system"];

export function AppSettings() {
  const [theme, setTheme] = useState<ThemeType>("system");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-1 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <DemoPageSectionCard
            title="Appearance"
            subtitle="Customize how the app looks and feels"
            haveBorder={false}
          />
        </div>
        <div className="w-full border-t border-(--input-border) p-2">
          <DemoPageSectionCard
            title="Theme"
            subtitle="Select your preferred theme"
            haveBorder={false}
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

          <DemoPageSectionCard
            title="Animations"
            subtitle="Enable or disable animations"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Notifications"
            subtitle="Configure your notification preferences"
            haveBorder={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <DemoPageSectionCard
            title="Email Notifications"
            subtitle="Receive notifications via email"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Push Notifications"
            subtitle="Receive notifications on your device"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Budget Alerts"
            subtitle="Get notified when you're close to budget limits"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Savings Goal"
            subtitle="Receive reminders to contribute to savings goals"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Data & Privacy"
            subtitle="Manage your data and privacy settings"
            haveBorder={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <DemoPageSectionCard
            title="Data Sharing"
            subtitle="Share anonymous usage data to improve the app"
            haveBorder={false}
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
          <DemoPageSectionCard
            title="Marketing Emails"
            subtitle="Receive marketing and promotional emails"
            haveBorder={false}
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
