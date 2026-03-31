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
}
export function DemoButton({
  title,
  icon,
  iconClass,
  buttonColor = "var(--primary-color)",
  iconSize,
  textColor = "var(--foreground)",
  onClick,
  widthSize = "auto",
  children,
  classTag,
  isDisabled = false,
  style,
}: DemoButtonProps) {
  return (
    <button
      style={{
        background: buttonColor,
        color: textColor,
        width: widthSize === "auto" ? "auto" : widthSize,
        ...style,
      }}
      className={`
        ${classTag ?? "justify-center items-center px-3 py-2 text-sm font-semibold rounded-lg"}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        inline-flex gap-2 whitespace-nowrap
        ring-1 ring-(--input-border)
        shadow-[--(--shadow)]
        transition-colors duration-300
        `}
      // shadow-[--(--shadow)]
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
