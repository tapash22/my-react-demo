import { useState } from "react";
import { DemoBooleanToggle } from "../../../components/toggle/DemoBooleanToggle";
import { BillCard } from "../../../components/cards/BillCard";
import { DemoButton } from "../../../components/button/DemoButton";
import { DemoPageSectionCard } from "../../../components/cards/DemoPageSectionCard";

export function SecuritySettings() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-1 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <DemoPageSectionCard
            title="Two-Factor Authentication"
            subtitle="Add an extra layer of security to your account"
            haveBorder={false}
          />

          <DemoPageSectionCard
            title="Enable2FA"
            subtitle="Send a code to your phone or email when logging in."
            haveBorder={false}
          />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <DemoPageSectionCard
            title="Device Management"
            subtitle="See where you're signed in"
            haveBorder={false}
          />
        </div>
        <div className="w-full p-2 space-y-3">
          <BillCard />
          <BillCard />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <DemoPageSectionCard
            title="Additional Security"
            subtitle="Configure extra protections"
            haveBorder={false}
          />
        </div>
        <div className="w-full border-t border-(--input-border) p-2">
          <DemoPageSectionCard
            title="Login Alerts"
            subtitle="Receive email notifications of new logins"
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
            title="Suspicious Activity"
            subtitle="Alert on unusual login attempts"
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

          <DemoPageSectionCard
            title="Reset Protection"
            subtitle="Require verification to reset password"
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

          <div className="w-full border-t border-(--input-border) p-4">
            <DemoButton title="change PassWord" />
          </div>
        </div>
      </div>
    </div>
  );
}
