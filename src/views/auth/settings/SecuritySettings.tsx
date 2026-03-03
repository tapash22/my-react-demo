import { useState } from "react";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";
import { DemoBooleanToggle } from "../../../components/toggle/DemoBooleanToggle";
import { BillCard } from "../../../components/cards/BillCard";
import { DemoButton } from "../../../components/button/DemoButton";

export function SecuritySettings() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-3 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Two-Factor Authentication"
            subtitle="Add an extra layer of security to your account"
            visibleDate={false}
          />
          <PageHeaderCard
            title="Enable2FA"
            subtitle="Send a code to your phone or email when logging in."
            visibleDate={false}
          />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Device Management"
            subtitle="See where you're signed in"
            visibleDate={false}
          />
        </div>
        <div className="w-full p-2 space-y-3">
          <BillCard />
          <BillCard />
        </div>
      </div>
      <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl ">
        <div className="p-2">
          <PageHeaderCard
            title="Additional Security"
            subtitle="Configure extra protections"
            visibleDate={false}
          />
        </div>
        <div className="w-full border-t-1 border-(--input-border) p-2">
          <PageHeaderCard
            title="Login Alerts"
            subtitle="Receive email notifications of new logins"
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
            title="Suspicious Activity"
            subtitle="Alert on unusual login attempts"
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
          <PageHeaderCard
            title="Reset Protection"
            subtitle="Require verification to reset password"
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
          <div className="w-full border-t-1 border-(--input-border) p-4">
            <DemoButton title="change PassWord" />
          </div>
        </div>
      </div>
    </div>
  );
}
