interface ProgressBarProps {
  currentAmount: number;
  targetAmount: number;
  height?: string;
  showLabel?: string;
}
export function ProgressBar({
  currentAmount,
  targetAmount,
  height = "h-2.5",
  showLabel = "",
}: ProgressBarProps) {
  const percentage =
    targetAmount > 0 ? Math.round((currentAmount / targetAmount) * 100) : 0;

  const safePercentage = Math.min(100, Math.max(0, percentage));

  const getColor = () => {
    if (safePercentage < 40) return "bg-(--danger)";
    if (safePercentage < 70) return "bg-(--secondary)";
    return "bg-(--success)";
  };

  return (
    <div className="w-full">
      {/* Label below the bar */}
      {showLabel && (
        <p className="p-2 text-sm text-gray-600 text-left">{showLabel}</p>
      )}
      <div
        className={`w-full bg-(--input-bg) ring-2 ring-(--input-border) rounded-full overflow-hidden ${height}`}
      >
        <div
          className={`${height} ${getColor()} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${safePercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
