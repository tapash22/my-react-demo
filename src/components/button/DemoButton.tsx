import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoButtonProps {
  title: string;
  icon?: IconType;
  buttonColor?: string;
  onClick?: () => void;
}
export function DemoButton({
  title,
  icon,
  buttonColor = "bg-(--demo)",
  onClick,
}: DemoButtonProps) {
  return (
    <button
      className={`${buttonColor}  bg-slate-100 px-4 py-3 dark:bg-slate-800 text-slate-400 font-semibold text-center transition-colors duration-300 w-auto rounded-xl  shadow-(--shadow-default) flex justify-evenly items-center gap-2`}
      onClick={onClick}
    >
      <DemoIcon size={16} icon={icon ? icon : null} />
      <span className="">{title}</span>
    </button>
  );
}
