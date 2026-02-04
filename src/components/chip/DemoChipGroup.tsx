import { DemoChip } from "./DemoChip";

interface DemoChipGroupProps {
  data: string | string[]; // Handles single or array
  onDelete?: (label: string) => void;
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "filled" | "outlined";
  // New prop to control layout
  direction?: "row" | "col";
  className?: string;
}

export const DemoChipGroup = ({
  data,
  direction = "row", // Default to horizontal
  className = "",
  ...props
}: DemoChipGroupProps) => {
  // Convert string to array if it isn't one already
  const chips = Array.isArray(data) ? data : [data];

  if (chips.length === 0) return null;

  // Use dynamic tailwind classes based on direction
  const layoutClasses =
    direction === "col"
      ? "flex flex-col items-start gap-2"
      : "flex flex-wrap items-center gap-2";

  return (
    <div className={`${layoutClasses} ${className}  w-full`}>
      {chips.map((item, index) => (
        <DemoChip key={`${item}-${index}`} label={item} {...props} />
      ))}
    </div>
  );
};
