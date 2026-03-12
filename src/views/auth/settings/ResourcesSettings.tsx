import { DemoPageSectionCard } from "../../../components/cards/DemoPageSectionCard";
import { DemoResourceCard } from "../../../components/cards/DemoResourceCard";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";
import { resources, calculators } from "../../../store/budget-data";

export function ResourcesSettings() {
  return (
    <div className="p-2 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto flex flex-col space-y-3 ">
        <PageHeaderCard
          title="Learning Resources"
          titleClass="text-lg font-normal -ml-2"
          visibleDate={false}
        />
        <div className="w-full grid grid-cols-3 gap-5">
          {resources &&
            resources.map((resource) => (
              <DemoResourceCard
                key={resource.id}
                resource={resource}
                iconSize={24}
              />
            ))}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col space-y-3 ">
        <PageHeaderCard
          title="Financial Calculators"
          titleClass="text-lg font-normal -ml-2"
          visibleDate={false}
        />
        <div className="w-full grid grid-cols-2 gap-3">
          {calculators &&
            calculators.map((item, index) => (
              <DemoPageSectionCard key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
