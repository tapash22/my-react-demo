interface ProgressBarProps {
  currentAmount: number;
  targetAmount: number;
  height?: string;
  showLabel?: boolean;
}
export function ProgressBar({
  currentAmount,
  targetAmount,
  height = "h-2.5",
  showLabel = true,
}: ProgressBarProps) {
  const percentage =
    targetAmount > 0 ? Math.round((currentAmount / targetAmount) * 100) : 0;

  const safePercentage = Math.min(100, Math.max(0, percentage));

  const getColor = () => {
    if (safePercentage < 40) return "bg-red-500";
    if (safePercentage < 70) return "bg-yellow-500";
    return "bg-green-600";
  };

  return (
    <div className="w-full">
      <div
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${height}`}
      >
        <div
          className={`${height}  ${getColor()} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${safePercentage}%` }}
        ></div>
        {showLabel && (
          <p className="mt-1 text-sm text-gray-600 text-right">
            {safePercentage}%
          </p>
        )}
      </div>
    </div>
  );
}
