export function DemoCircleProgressbar({ percentage }: { percentage: number }) {
  // SVG Math
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  // This calculates how much of the green ring to 'hide'
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-32 h-32">
        {/* SVG Layer */}
        <svg className="w-full h-full -rotate-150" viewBox="0 0 100 100">
          {/* Background Gray Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#f1f5f9" // slate-100
            strokeWidth="8"
            fill="transparent"
          />
          {/* Dynamic Green Progress Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#065f46" // emerald-800
            strokeWidth="8"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-emerald-800 mb-1">
            {/* Simple Hand/Coin Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L13 15" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-slate-800">
            {percentage}%
          </span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            Progress
          </span>
        </div>
      </div>
    </div>
  );
}
