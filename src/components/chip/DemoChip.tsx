import { FaTimes } from "react-icons/fa";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoChipProps {
  label: string;
  onDelete?: (label: string) => void;
  onClick?: (label: string) => void;
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "filled" | "outlined";
  className?: string;
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
}: DemoChipProps) => {
  const baseClasses =
    "inline-flex justify-between items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all";
  const variantClasses =
    variant === "outlined"
      ? "bg-(--list-bg) border-(--input-border)"
      : colorStyles[color];
  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className} opacity-80 cursor-pointer  `}
      onClick={() => onClick?.(label)}
    >
      <span
        className={`text-sm font-normal tracking-wider  ${onDelete ? "w-2/3" : "w-full"} `}
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
