export function DemoCircleProgressbar({ percentage }: { percentage: number }) {
  // SVG Math
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  // This calculates how much of the green ring to 'hide'
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-28 h-28">
        {/* SVG Layer */}
        <svg className="w-full h-full -rotate-150" viewBox="0 0 100 100">
          {/* Background Gray Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-(--surface)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Dynamic Green Progress Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-(--foreground)"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 0.5s ease-in-out",
            }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Text & Icon */}
        <div className="absolute inset-0 -top-4 flex flex-col items-center justify-center">
          <div>
            {/* Simple Hand/Coin Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L13 15" />
            </svg>
          </div>
          <span className="text-lg font-bold text-(--muted)">
            {percentage}%
          </span>
          <span className="text-[10px] text-(--foreground) font-bold uppercase tracking-wider">
            Progress
          </span>
        </div>
      </div>
    </div>
  );
}
