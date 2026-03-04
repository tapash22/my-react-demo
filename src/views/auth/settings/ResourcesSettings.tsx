import { DemoPageSectionCard } from "../../../components/cards/DemoPageSectionCard";
import { DemoResourceCard } from "../../../components/cards/DemoResourceCard";
import { resources, calculators } from "../../../store/budget-data";

export function ResourcesSettings() {
  return (
    <div className="p-1 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto  ">
        <div className="p-2">
          <DemoPageSectionCard title="Learning Resources" haveBorder={false} />
          <div className="w-full grid grid-cols-3 gap-4">
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
      </div>
      <div className="w-full h-auto  flex flex-col  ">
        <div className="p-2 grid-cols-2 gap-3">
          <DemoPageSectionCard
            title="Financial Calculators"
            haveBorder={false}
          />

          <div className="w-full grid grid-cols-2 gap-3">
            {calculators &&
              calculators.map((item, index) => (
                <DemoPageSectionCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
