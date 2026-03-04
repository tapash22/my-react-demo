import { DemoButton } from "../../components/button/DemoButton";
import { DemoPageSectionCard } from "../../components/cards/DemoPageSectionCard";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
// import { ExampleOne } from "./advancestoreuses/ExampleOne";
// import { ExampleTwo } from "./advancestoreuses/ExampleTwo";
import { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import {
  referralSteps,
  referralTerms,
  referralUserData,
} from "../../store/budget-data";
import { DemoBadge } from "../../components/Badge/DemoBadge";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";

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
        {/* left side */}
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
            {/* body */}
            <div className="grid grid-cols-3 gap-3  h-auto p-3">
              {referralSteps &&
                referralSteps.map((referral) => (
                  <div
                    key={referral.id}
                    className="flex flex-col justify-center items-center space-y-2"
                  >
                    <div className="relative w-16 h-16 rounded-full shadow(--shadow) bg-(--surface) flex items-center justify-center">
                      <DemoBadge
                        icon={referral.icon}
                        badgeLengthCount={referral.notificationCount}
                        isAvatorbadge={true}
                        badgeColor="--info"
                      />
                    </div>
                    <h2 className="text-lg font-medium tracking-wide text-center">
                      {referral.title}
                    </h2>
                    <p className="text-sm font-normal tracking-wide text-center px-2">
                      {referral.description}
                    </p>
                  </div>
                ))}
            </div>
            {/* body end */}

            {/* terms */}
            <div className="w-full h-auto p-3 space-y-1 flex flex-col justify-center items-center bg-(--surface) opacity-80 rounded-2xl">
              <DemoPageSectionCard
                title="Referral Program Terms"
                haveBorder={false}
              />
              {referralTerms &&
                referralTerms.map((term) => (
                  <ul
                    className={`w-full flex flex-col  justify-start items-start rounded-xl h-full space-y-2 px-8 list-disc`}
                  >
                    <li
                      className={`text-sm font-normal tracking-wide text-(--foreground)`}
                    >
                      {term.description}
                    </li>
                  </ul>
                ))}
            </div>
            {/* terms end */}
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-1/3 h-auto p-2 block space-y-5">
          <div className="flex flex-col justify-start items-start w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-2 ">
            <DemoPageSectionCard title="Earnings Overview" haveBorder={false} />
            <div className="w-full h-auto p-2 flex flex-col items-center space-y-3">
              {referralUserData && (
                <>
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      Total Earned
                    </p>
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      ${referralUserData.earningsOverview.totalEarned}
                    </p>
                  </div>
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      Pending Earnings
                    </p>
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      ${referralUserData.earningsOverview.pendingEarnings}
                    </p>
                  </div>
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      Available Balance
                    </p>
                    <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                      ${referralUserData.earningsOverview.availableBalance}
                    </p>
                  </div>

                  <DemoLinearProgressBar
                    targetAmount={referralUserData.referralUsage.limit}
                    currentAmount={referralUserData.referralUsage.used}
                    children={
                      <div className="flex justify-between items-center p-1">
                        <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                          Referrals Used
                        </p>
                        <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                          {referralUserData.referralUsage.used} of
                          {referralUserData.referralUsage.limit}
                        </p>
                      </div>
                    }
                    childrenBottom={
                      <p className="text-xs font-normal tracking-wide p-1 text-(--foreground)">
                        {referralUserData.referralUsage.remainingMessage}
                      </p>
                    }
                  />
                  <div className="py-1 w-full">
                    <div className="w-full h-auto p-4 space-y-2 flex flex-col justify-start  bg-(--surface) opacity-80 rounded-2xl">
                      <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                        Available Balance
                      </p>
                      <p className="tracking-wide text-sm font-semibold text-(--foreground)">
                        ${referralUserData.withdrawSection.availableBalance}
                      </p>
                      <DemoButton
                        buttonColor="bg-(--foreground)"
                        widthSize="full"
                        title={referralUserData.withdrawSection.actionText}
                      />
                    </div>
                  </div>

                  <div className="w-full h-auto flex flex-col  justify-between items-center">
                    <DemoPageSectionCard
                      title="Recent Referrals"
                      haveBorder={false}
                    />

                    <ul
                      className={`w-full flex flex-col  justify-start items-start  h-full space-y-2 px-2 `}
                    >
                      {referralUserData.recentReferrals.length > 0 &&
                        referralUserData.recentReferrals.map((referral) => (
                          <li
                            className={` w-full flex justify-between items-center `}
                          >
                            <p className="text-sm font-semibold tracking-wide text-(--foreground)">
                              {referral.name}
                            </p>
                            <p className="text-sm font-semibold tracking-wide text-(--foreground)">
                              {referral.status === "completed"
                                ? ` +$${referral.reward}`
                                : `${referral.status}`}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* right side end */}
      </div>
    </PageLayout>
  );
}
