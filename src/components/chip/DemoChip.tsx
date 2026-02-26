import { FaTimes } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";
import { getFontSize, type SizeType } from "../../features/type/User";

interface DemoChipProps {
  label: string;
  onDelete?: (label: string) => void;
  onClick?: (label: string) => void;
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "filled" | "outlined";
  className?: string;
  labelSize?: SizeType;
}

const colorStyles = {
  primary: "bg-(--primary)",
  secondary: "bg-(--secondary)",
  success: "bg-(--success)",
  error: "bg-(--danger)",
};

export const DemoChip = ({
  label,
  onDelete,
  onClick,
  color = "secondary",
  variant = "filled",
  className = "",
  labelSize = "small",
}: DemoChipProps) => {
  const fontSizeClass = getFontSize(labelSize);
  const baseClasses =
    "inline-flex justify-between items-center ring-2 ring-(--input-border) gap-1.5 p-1 rounded-lg text-xs font-normal transition-all";
  const variantClasses =
    variant === "outlined" ? "bg-transparent " : colorStyles[color];
  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className} cursor-pointer`}
      onClick={() => onClick?.(label)}
    >
      <span
        className={` ${fontSizeClass} tracking-wider text-(--foreground)  ${onDelete ? "w-2/3" : "w-full"} `}
      >
        {label}
      </span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(label);
          }}
          className="hover:opacity-70 transition-opacity w-1/3 flex justify-end items-center z-40"
        >
          <DemoIcon icon={FaTimes} size={12} color="--background" />
        </button>
      )}
    </div>
  );
};
