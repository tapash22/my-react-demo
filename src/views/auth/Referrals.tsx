import { DemoButton } from "../../components/button/DemoButton";
import { DemoPageSectionCard } from "../../components/cards/DemoPageSectionCard";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
// import { ExampleOne } from "./advancestoreuses/ExampleOne";
// import { ExampleTwo } from "./advancestoreuses/ExampleTwo";
import { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { referralSteps } from "../../store/budget-data";
import { DemoBadge } from "../../components/Badge/DemoBadge";

export default function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [addresslink, setAddresslink] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddresslink(value);
  };

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (addresslink === "") {
      return;
    }

    if (!addresslink.trim()) {
      alert("Please enter a message");
      return;
    }

    // TODO: send to API
    console.log("Submitting form:", addresslink);

    // reset form
    setAddresslink("");
  };

  return (
    <PageLayout
      header={
        <PageHeaderCard
          title="Referral Program"
          subtitle="Invite friends and earn rewards"
          visibleDate={false}
        ></PageHeaderCard>
      }
    >
      <div
        ref={containerRef}
        className="flex items-start gap-3 w-full h-auto p-2 "
      >
        <div className="w-2/3 p-2 space-y-5">
          <div className="flex flex-col w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <DemoPageSectionCard
              title="Your Referral Link"
              subtitle="Share this link with friends to earn rewards"
              haveBorder={false}
            />
            <form
              onSubmit={handleLinkSubmit}
              className="flex flex-col  gap-5 w-full p-3"
            >
              <div className="flex justify-between gap-3 ">
                <input
                  type="text"
                  name="addresslink"
                  placeholder="Enter referral link"
                  value={addresslink}
                  onChange={handleChange}
                  className="input-field"
                />
                <DemoButton title="Copy " icon={FaRegCopy} />
              </div>
            </form>
          </div>
          <div className="flex flex-col  h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <DemoPageSectionCard
              title="How It Works"
              subtitle="Simple steps to earn rewards through referrals"
              haveBorder={false}
            />
            <div className="grid grid-cols-3 gap-3  h-auto p-2">
              {referralSteps &&
                referralSteps.map((referral) => (
                  <div
                    key={referral.id}
                    className="flex flex-col justify-center items-center space-y-2"
                  >
                    <div className="relative w-16 h-16 rounded-full bg-(--surface) flex items-center justify-center">
                      <DemoBadge
                        icon={referral.icon}
                        badgeLengthCount={referral.notificationCount}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 h-auto p-2 block space-y-5">
          <div className="block w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3 "></div>
        </div>
      </div>
    </PageLayout>
  );
}
