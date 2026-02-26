import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";
import { ExampleOne } from "./advancestoreuses/ExampleOne";
import { ExampleTwo } from "./advancestoreuses/ExampleTwo";
import { useRef } from "react";

export default function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <ExampleOne />
        <ExampleTwo />
      </div>
    </PageLayout>
  );
}
