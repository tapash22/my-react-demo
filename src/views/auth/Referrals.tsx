import { DemoButton } from "../../components/button/DemoButton";
import { DemoPageSectionCard } from "../../components/cards/DemoPageSectionCard";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import {
  referralSteps,
  referralTerms,
  referralUserData,
} from "../../store/referral-data";
import { DemoBadge } from "../../components/Badge/DemoBadge";
import { DemoLinearProgressBar } from "../../components/progressbar/DemoLinearProgressBar";
import { DemoMonthlyComparisonCard } from "../../components/cards/DemoMonthlyComparisonCard";
import { Container } from "../../components/layout/Container";

// import { ExampleOne } from "./advancestoreuses/ExampleOne";
// import { ExampleTwo } from "./advancestoreuses/ExampleTwo";

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
      <Container ref={containerRef}>
        {/* left side */}
        <div className="w-full lg:w-1/2 xl:w-2/3 h-auto p-2 space-y-3">
          <div className="flex flex-col w-full h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="Your Referral Link"
              subtitle="Share this link with friends to earn rewards"
              titleClass="text-lg font-normal w-full flex justify-center"
              subtitleClass="text-sm font-normal w-full flex justify-center"
              visibleDate={false}
            />

            <form
              onSubmit={handleLinkSubmit}
              className="flex flex-col  gap-5 w-full"
            >
              <div className="w-fullh-auto flex flex-col sm:flex-col md:flex-row justify-between gap-3">
                <input
                  type="text"
                  name="addresslink"
                  placeholder="Enter referral link"
                  value={addresslink}
                  onChange={handleChange}
                  className="input-field"
                />
                <DemoButton
                  title="Copy Link"
                  classTag="flex justify-center items-center p-2 md:p-2 rounded-lg md:rounded-sm"
                  icon={FaRegCopy}
                  iconSize={16}
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col h-auto ring-2 ring-(--input-border) rounded-xl p-3 space-y-3">
            <PageHeaderCard
              title="How It Works"
              subtitle="Simple steps to earn rewards through referrals"
              titleClass="text-lg font-normal w-full flex justify-center"
              subtitleClass="text-sm font-normal w-full flex justify-center text-center"
              visibleDate={false}
            />
            {/* body */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 h-auto p-2 space-y-2 ms:space-y-0">
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
                      titleClass="w-full py-1 text-sm font-medium text-center"
                      subtitle={referral.description}
                      subtitleClass="text-sm font-normal text-center "
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
        <div className="w-full h-auto lg:w-1/2 xl:w-1/3 p-2">
          <div className=" w-full h-autoflex flex-col justify-start items-start ring-2 ring-(--input-border) rounded-xl p-3 space-y-2 ">
            <PageHeaderCard
              title="Earnings Overview"
              titleClass="text-lg font-normal"
              visibleDate={false}
            />
            <div className="w-full h-auto flex flex-col items-center ">
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

                  <div className="w-full sm:w-full h-auto flex flex-col items-center sm:justify-end bg-(--surface) opacity-80 rounded-2xl p-4 space-y-2 ">
                    <PageHeaderCard
                      title="Available Balance"
                      titleClass="tracking-wide text-sm font-semibold w-full flex justify-center"
                      subtitle={
                        "$" + referralUserData.withdrawSection.availableBalance
                      }
                      subtitleClass="tracking-wide text-sm font-semibold text-(--foreground) w-full flex justify-center"
                      visibleDate={false}
                      direction={true}
                      children={
                        <DemoButton
                          buttonColor="bg-(--surface)"
                          classTag="h-1 text-sm font-medium track-wider rounded-sm p-2 lg:px-7 w-full flex justify-center"
                          title={referralUserData.withdrawSection.actionText}
                        />
                      }
                    />
                  </div>

                  <PageHeaderCard
                    subtitle="Recent Referrals"
                    subtitleClass="text-sm font-medium py-1"
                    visibleDate={false}
                  />

                  <ul
                    className={`w-full flex flex-col justify-start items-start h-full space-y-1 px-2 `}
                  >
                    {referralUserData.recentReferrals.length > 0 &&
                      referralUserData.recentReferrals.map((referral) => (
                        <li
                          className={` w-full flex justify-between items-center`}
                        >
                          <p className="tracking-wide text-sm font-medium text-(--foreground)">
                            {referral.name}
                          </p>
                          <p className="font-medium sm:font-medium md:font-semibold text-sm text-(--foreground) tracking-wide">
                            {referral.status === "completed"
                              ? ` +$${referral.reward}`
                              : `${referral.status}`}
                          </p>
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        {/* right side end */}
      </Container>
    </PageLayout>
  );
}
