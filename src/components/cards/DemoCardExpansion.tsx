import { useState } from "react";
import { type CategoryData } from "../../features/type/User";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoInvertedProgressBar } from "../progressbar/DemoInvertedProgressBar";

interface DemoCardExpansionProps {
  data: CategoryData;
}

export function DemoCardExpansion({ data }: DemoCardExpansionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full  border border-(--input-border) rounded-xl shadow-sm bg-(--surface) overflow-hidden">
      {/* Header Section */}
      <div className="p-2">
        {/* Progress Bar Area */}
        <DemoInvertedProgressBar
          title={data.category}
          targetAmount={data.budget}
          currentAmount={data.spent}
          height="h-1.5"
        />
      </div>

      {/* Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 flex items-center justify-center gap-1 text-(--forground) text-sm font-medium hover:bg-(--hover) transition-colors"
      >
        View Transactions
        {isOpen ? (
          <DemoIcon icon={FaChevronUp} size={16} />
        ) : (
          <DemoIcon icon={FaChevronDown} size={16} />
        )}
      </button>

      {/* Expanded Transaction List */}
      {isOpen && (
        <div className="bg-(--surface) border-t border-(--input-border)">
          <div className="px-5 py-3 flex justify-between items-center">
            <h3 className="text-sm font-bold text-(--forground)">
              Recent Transactions
            </h3>
            <span className="text-[10px] font-bold bg-(--surface) text-(--forground) px-2 py-0.5 rounded-lg border border-(--input-border)">
              {data.recentTransactions.length} transactions
            </span>
          </div>

          <div className="max-h-60 overflow-y-auto custom-scrollbar shadow-inner scrollbar-thin ">
            {data.recentTransactions.map((tx, idx) => (
              <div
                key={`${tx.title}-${idx}`}
                className="flex justify-between items-center px-5 py-3 bg-(--surface) border-b border-(--input-border) last:border-b-0 hover:bg-(--hover) transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-(--forground)">
                    {tx.title}
                  </p>
                  <p className="text-[11px] text-(--muted) font-medium">
                    {tx.date}
                  </p>
                </div>
                <span className="text-sm font-bold text-(--forground)">
                  ${tx.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-(--surface)">
            <button className="w-full py-2.5 bg-(--background) hover:bg-(--hover) text-(--forground) rounded-lg text-sm font-bold transition-colors">
              View All {data.category} Transactions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
