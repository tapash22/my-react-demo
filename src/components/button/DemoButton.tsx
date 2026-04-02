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
  style?: React.CSSProperties;
  iconPosition?: boolean; // true for left, false for right
}
export function DemoButton({
  title,
  icon,
  iconClass,
  buttonColor = "bg-(--surface)",
  iconSize,
  textColor = "var(--foreground)",
  onClick,
  widthSize = "auto",
  children,
  classTag,
  isDisabled = false,
  iconPosition = true,
  style,
}: DemoButtonProps) {
  return (
    <button
      style={{
        color: textColor,
        width: widthSize === "auto" ? "auto" : widthSize,
        ...style,
      }}
      className={`
        ${classTag ?? "justify-center items-center px-3 py-2 text-sm font-semibold rounded-lg text-[--(--foreground)]"}
        ${buttonColor ?? "bg-(--surface) "}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        flex ${iconPosition ? "flex-row" : "flex-row-reverse"}  
        inline-flex gap-2 whitespace-nowrap
        transition-colors duration-300  
        `}
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
