import { useState } from "react";
import { DemoLinearProgressBar } from "./DemoLinearProgressBar";
import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../avatar/DemoAvatar";

interface DemoInvertedProgressBarProps {
  currentAmount: number;
  targetAmount: number;
  height?: string;
  title?: string;
}
export function DemoInvertedProgressBar({
  currentAmount,
  targetAmount,
  height = "h-2.5",
  title,
}: DemoInvertedProgressBarProps) {
  // 1. Calculate the initial percentage based on the starting Amount B
  // (Total - currentAmountA) = currentAmountB
  const initialAmountB = targetAmount - currentAmount;
  const initialPercentageB =
    targetAmount > 0 ? (initialAmountB / targetAmount) * 100 : 0;

  const [percentageB, setPercentageB] = useState<number>(initialPercentageB);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensuring the value stays within the 20-50 window
    const val = Number(e.target.value);
    if (val >= 20 && val <= 50) {
      setPercentageB(val);
    }
  };

  // 2. Calculations: Bar B is controlled directly, Bar A is the remainder
  const calculatedAmountB = (percentageB / 100) * targetAmount;
  const calculatedAmountA = targetAmount - calculatedAmountB;

  return (
    <div className="w-full p-6 bg-(--surface) rounded-xl">
      {/* Top Bar: Visual feedback of the inverse value */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs font-semibold text-(--foreground) opacity-70 w-full">
          <div className="flex justify-start items-center gap-3 w-1/2 h-auto ">
            <div className=" bg-(--surface)  text-(--forground) rounded-xl h-auto  ">
              <DemoAvatar size={10} icon={FaUser} />
            </div>
            <h2 className="text-lg font-semibold text-(--forground)">
              {title && title}
            </h2>
          </div>
          <span className="text-sm tracking-wide text-(--forground)">
            ${calculatedAmountA.toFixed(0)} / ${targetAmount}
          </span>
        </div>

        <DemoLinearProgressBar
          currentAmount={calculatedAmountA}
          targetAmount={targetAmount}
          height={height}
        />
        <div className="relative flex items-center">
          {/* The visual Bar */}
          <div className="w-full">
            <DemoLinearProgressBar
              currentAmount={calculatedAmountB}
              targetAmount={targetAmount}
              height={height}
            />
          </div>
          {/* The Absolute Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={percentageB}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10
                       [&::-webkit-slider-runnable-track]:bg-transparent 
                       [&::-webkit-slider-thumb]:appearance-none 
                       [&::-webkit-slider-thumb]:h-6 
                       [&::-webkit-slider-thumb]:w-6
                       [&::-webkit-slider-thumb]:bg-(--muted) 
                       [&::-webkit-slider-thumb]:border-2
                       [&::-webkit-slider-thumb]:border-(--input-border) 
                       [&::-webkit-slider-thumb]:rounded-full 
                       [&::-webkit-slider-thumb]:shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
