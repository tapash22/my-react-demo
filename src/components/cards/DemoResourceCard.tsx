import type { Resource } from "../../features/type/User";
import { DemoAvatar } from "../avatar/DemoAvatar";
import { DemoButtonLink } from "../button/DemoButtonLink";

interface DemoResourceCardProps {
  resource: Resource;
  iconSize?: number;
}

export function DemoResourceCard({
  resource,
  iconSize = 16,
}: DemoResourceCardProps) {
  return (
    <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-5 flex flex-col justify-center items-center space-y-3">
      <DemoAvatar icon={resource.icon} iconSize={iconSize} />
      <h2 className="text-lg font-bold tracking-wide text-center">
        {resource.title || "Resource Title"}
      </h2>
      <p className="text-sm font-normal tracking-wide text-center">
        {(resource && resource?.description) ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
      <DemoButtonLink title={resource.actionText} path={resource.link} />
    </div>
  );
}
