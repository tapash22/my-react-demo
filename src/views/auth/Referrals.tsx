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
import { DemoMonthlyComparisonCard } from "../../components/cards/DemoMonthlyComparisonCard";

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
        className="flex items-start gap-3 w-full h-auto p-1 space-y-2"
      >
        {/* left side */}
        <div className="w-2/3 p-2 space-y-5">
          <div className="flex flex-col w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="Your Referral Link"
              subtitle="Share this link with friends to earn rewards"
              titleClass="text-lg font-normal"
              subtitleClass="text-sm font-normal"
              visibleDate={false}
            />

            <form
              onSubmit={handleLinkSubmit}
              className="flex flex-col  gap-5 w-full p-3"
            >
              <div className="flex justify-between gap-3 w-full ">
                <input
                  type="text"
                  name="addresslink"
                  placeholder="Enter referral link"
                  value={addresslink}
                  onChange={handleChange}
                  className="input-field"
                />
                <DemoButton title="Copy" icon={FaRegCopy} iconSize={16} />
              </div>
            </form>
          </div>
          <div className="flex flex-col  h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="How It Works"
              subtitle="Simple steps to earn rewards through referrals"
              titleClass="text-lg font-normal"
              subtitleClass="text-sm font-normal"
              visibleDate={false}
            />
            {/* body */}
            <div className="grid grid-cols-3 gap-3 h-auto p-2">
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
                    <PageHeaderCard
                      title={referral.title}
                      titleClass="text-sm font-medium text-center"
                      subtitle={referral.description}
                      subtitleClass="text-sm font-normal text-center"
                      visibleDate={false}
                    />
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
              <ul
                className={`w-full flex flex-col  justify-start items-start rounded-xl h-full space-y-2 px-8 list-disc`}
              >
                {referralTerms &&
                  referralTerms.map((term) => (
                    <li
                      className={`text-sm font-normal tracking-wide text-(--foreground)`}
                    >
                      {term.description}
                    </li>
                  ))}
              </ul>
            </div>
            {/* terms end */}
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="w-1/3 h-auto p-2 block space-y-5">
          <div className="flex flex-col justify-start items-start w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-2 ">
            <PageHeaderCard
              title="Earnings Overview"
              titleClass="text-lg font-normal"
              visibleDate={false}
            />
            <div className="w-full h-auto  flex flex-col items-center space-y-3">
              {referralUserData && (
                <>
                  {referralUserData.earningsOverview.length > 0 && (
                    <DemoMonthlyComparisonCard
                      items={referralUserData.earningsOverview}
                      differenceLabel="Available Balance"
                    />
                  )}
                  <DemoLinearProgressBar
                    targetAmount={referralUserData.referralUsage.limit}
                    currentAmount={referralUserData.referralUsage.used}
                    height="h-1"
                    children={
                      <div className="flex justify-between items-center p-2">
                        <p className="tracking-wide text-sm font-normal text-(--foreground)">
                          Referrals Used
                        </p>
                        <p className="tracking-wide text-sm font-medium text-(--foreground)">
                          {referralUserData.referralUsage.used} of
                          {referralUserData.referralUsage.limit}
                        </p>
                      </div>
                    }
                    childrenBottom={
                      <p className="text-xs font-normal tracking-wide p-2 text-(--foreground)">
                        {referralUserData.referralUsage.remainingMessage}
                      </p>
                    }
                  />

                  <div className="w-full h-auto p-4 space-y-2 flex flex-col justify-start  bg-(--surface) opacity-80 rounded-2xl">
                    <PageHeaderCard
                      title="Available Balance"
                      titleClass="tracking-wide text-sm font-semibold"
                      subtitle={
                        "$" + referralUserData.withdrawSection.availableBalance
                      }
                      subtitleClass="tracking-wide text-sm font-semibold text-(--foreground)"
                      visibleDate={false}
                      direction={true}
                      children={
                        <DemoButton
                          buttonColor="bg-(--foreground)"
                          widthSize="full"
                          classTag="w-full"
                          title={referralUserData.withdrawSection.actionText}
                        />
                      }
                    />
                  </div>

                  <PageHeaderCard
                    subtitle="Recent Referrals"
                    subtitleClass="text-sm font-semibold "
                    visibleDate={false}
                  />

                  <ul
                    className={`w-full flex flex-col  justify-start items-start  h-full space-y-2 px-4 `}
                  >
                    {referralUserData.recentReferrals.length > 0 &&
                      referralUserData.recentReferrals.map((referral) => (
                        <li
                          className={` w-full flex justify-between items-center `}
                        >
                          <p className="tracking-wide text-sm font-medium text-(--foreground)">
                            {referral.name}
                          </p>
                          <p className="font-semibold text-sm text-(--foreground)">
                            {referral.status === "completed"
                              ? ` +$${referral.reward}`
                              : `${referral.status}`}
                          </p>
                        </li>
                      ))}
                  </ul>
                  {/* <div className="w-full h-auto flex flex-col  justify-between items-center">
                  </div> */}
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
