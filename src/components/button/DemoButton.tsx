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
  buttonColor = "bg-transparent",
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
      className={`${buttonColor}  ${classTag ? classTag : "flex justify-evenly items-center px-3 py-2 text-sm font-semibold rounded-lg "} ${isDisabled ? "opacity-55" : ""} ${textColor} font-medium text-center transition-colors duration-300 ${widthSize ? `w-${widthSize}` : ""} h-auto shadow-(--shadow-default)  gap-2`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <DemoIcon
        size={iconSize ? iconSize : 16}
        icon={icon ? icon : null}
        iconClass={iconClass}
      />
      {children || (title && <span className="">{children ?? title}</span>)}
    </button>
  );
}
