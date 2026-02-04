import { FaTimes } from "react-icons/fa";

interface DemoChipProps {
  label: string;
  onDelete?: (label: string) => void;
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
  color = "secondary",
  variant = "filled",
  className = "",
}: DemoChipProps) => {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all";
  const variantClasses =
    variant === "outlined"
      ? "bg-transparent border-current"
      : colorStyles[color];
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={() => onDelete(label)}
          className="hover:opacity-70 transition-opacity"
        >
          <FaTimes size={14} color="gray" className="cursor-pointer" />
        </button>
      )}
    </div>
  );
};
