import { DemoButton } from "../components/button/DemoButton";
import { DemoTour } from "../features/onboarding/DemoTour";
import { steps } from "../store/budget-data";
//use for onbording tour
// import { Onboarding } from "../../features/onboarding/Onboarding";
// import GsapBox from "../../components/gsap/GsapBox";

export function TourExample() {
  return (
    <div className="space-y-8">
      <DemoTour steps={steps} />

      <div className="flex flex-col space-y-40" style={{ marginTop: 100 }}>
        <DemoButton classTag="step-1" title="Button 1" />
        <DemoButton classTag="step-2" title="Button 2" />
        <DemoButton classTag="step-3" title="Button 3" />
      </div>
    </div>
  );
}
