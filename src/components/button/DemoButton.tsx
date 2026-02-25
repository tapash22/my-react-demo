import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoButtonProps {
  title?: string;
  icon?: IconType;
  buttonColor?: string;
  textColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  widthSize?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}
export function DemoButton({
  title,
  icon,
  buttonColor = "bg-(--muted)",
  textColor = "text-(--foreground)",
  onClick,
  widthSize = "auto",
  children,
  isDisabled = false,
}: DemoButtonProps) {
  return (
    <button
      className={`${buttonColor}  bg-(--surface) px-4 py-3 dark:bg-slate-800 ${textColor} font-semibold text-center transition-colors duration-300 w-${widthSize} rounded-xl  shadow-(--shadow-default) flex justify-evenly items-center gap-2`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <DemoIcon size={16} icon={icon ? icon : null} />
      <span className="">{children ?? title}</span>
    </button>
  );
}
