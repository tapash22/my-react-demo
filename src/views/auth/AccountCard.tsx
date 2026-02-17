import { FaPlus } from "react-icons/fa";
import { DemoButton } from "../../components/button/DemoButton";
import { PageHeaderCard } from "../../components/cards/PageHeaderCard";
import { PageLayout } from "../../components/layout/PageLayout";

export default function Accountcard() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <PageLayout
      header={
        <PageHeaderCard
          title="Bank Accounts & Cards"
          subtitle="Securely connect your financial accounts"
          visibleDate={false}
        >
          <div className="flex justify-end items-center gap-5">
            <DemoButton
              title="Add Account or Card"
              icon={FaPlus}
              onClick={handleClick}
            />
          </div>
        </PageHeaderCard>
      }
    >
      <div>Body content here</div>
    </PageLayout>
  );
}
