import { DemoChip } from "./DemoChip";

interface DemoChipGroupProps {
  data: string | string[]; // Handles single or array
  onDelete?: (label: string) => void;
  onClick: (label: string) => void;
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "filled" | "outlined";
  className?: string;
}

export const DemoChipGroup = ({
  data,
  className = "",
  ...props
}: DemoChipGroupProps) => {
  // Convert string to array if it isn't one already
  const chips = Array.isArray(data) ? data : [data];

  if (chips.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}  w-full`}>
      {chips.map((item, index) => (
        <DemoChip key={`${item}-${index}`} label={item} {...props} />
      ))}
    </div>
  );
};
