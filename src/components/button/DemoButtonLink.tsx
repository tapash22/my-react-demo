import { NavLink } from "react-router-dom";
import { DemoIcon } from "../common-property/DemoIcon";
import { FaExternalLinkAlt } from "react-icons/fa";

interface DemoButtonLinkProps {
  title?: string;
  path: string;
}

export function DemoButtonLink({
  title = "Learn More",
  path = "#",
}: DemoButtonLinkProps) {
  return (
    <NavLink
      to={`/dashboard/${path}`}
      className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-(--surface) "
    >
      <span className="text-sm font-normal tracking-wide">{title}</span>
      <DemoIcon icon={FaExternalLinkAlt} size={12} />
    </NavLink>
  );
}
