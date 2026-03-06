import type { IconType } from "react-icons";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoButtonProps {
  title?: string;
  icon?: IconType;
  iconClass?: string;
  buttonColor?: string;
  iconSize?: number;
  textColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  widthSize?: string;
  classTag?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}
export function DemoButton({
  title,
  icon,
  iconClass,
  buttonColor = "bg-(--muted)",
  iconSize,
  textColor = "text-(--foreground)",
  onClick,
  widthSize = "auto",
  children,
  classTag,
  isDisabled = false,
}: DemoButtonProps) {
  return (
    <button
      className={`${buttonColor}  ${classTag ? classTag : "flex justify-evenly items-center px-3 text-sm font-semibold"} ${isDisabled ? "opacity-55" : ""}  bg-(--surface) py-2 dark:bg-slate-800 ${textColor} font-medium text-center transition-colors duration-300 w-${widthSize} rounded-lg  shadow-(--shadow-default)  gap-2`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <DemoIcon
        size={iconSize ? iconSize : 16}
        icon={icon ? icon : null}
        iconClass={iconClass}
      />
      <span className="">{children ?? title}</span>
    </button>
  );
}
