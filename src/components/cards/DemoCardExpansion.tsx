import { useState } from "react";
import { type CategoryData, type FaqData } from "../../features/type/User";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { DemoIcon } from "../common-property/DemoIcon";
import { DemoInvertedProgressBar } from "../progressbar/DemoInvertedProgressBar";
import { motion, AnimatePresence } from "framer-motion";

interface DemoCardExpansionProps {
  data: CategoryData | FaqData;
  expandIconDirection?: boolean;
}

// Type guard for CategoryData
function isCategoryData(data: CategoryData | FaqData): data is CategoryData {
  return "category" in data;
}

// Type guard for FaqData
function isFaqData(data: CategoryData | FaqData): data is FaqData {
  return "question" in data || "answer" in data;
}

export function DemoCardExpansion({
  data,
  expandIconDirection = false,
}: DemoCardExpansionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full  border border-(--input-border) rounded-xl shadow-sm overflow-hidden">
      {isCategoryData(data) && (
        <DemoInvertedProgressBar
          title={data.category}
          targetAmount={data.budget}
          currentAmount={data.spent}
          height="h-1.5"
        />
      )}
      {/* Header Section */}

      {/* Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center ${expandIconDirection ? "justify-between p-4" : "justify-center p-3"}  gap-1 text-(--forground) bg-(--surface) text-sm font-medium ring-1 ring-(--input-border) cursor-pointer transition-colors`}
      >
        {isFaqData(data)
          ? data.question
          : isCategoryData(data)
            ? `View Transactions`
            : ""}
        {isOpen ? (
          <DemoIcon icon={FaChevronUp} color="--muted" size={16} />
        ) : (
          <DemoIcon icon={FaChevronDown} color="--muted" size={16} />
        )}
      </button>

      {/* Expanded Transaction List with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden  border-t border-(--input-border)"
          >
            {isCategoryData(data) && data.recentTransactions?.length ? (
              <>
                <div className="px-5 py-3 flex justify-between items-center">
                  <h3 className="text-sm font-bold text-(--forground)">
                    Recent Transactions
                  </h3>
                  <span className="text-[12px] font-medium bg-(--surface) text-(--forground) px-3 py-1 rounded-xl border border-(--input-border)">
                    {data.recentTransactions.length} transactions
                  </span>
                </div>
                <div className="max-h-60 overflow-y-auto custom-scrollbar shadow-inner scrollbar-thin ">
                  {data.recentTransactions.map((tx, idx) => (
                    <div
                      key={`${tx.title}-${idx}`}
                      className="flex justify-between items-center px-5 py-3  border-b border-(--input-border) last:border-b-0 hover:bg-(--hover) transition-colors"
                    >
                      <div>
                        <p className="text-sm font-medium text-(--forground) tracking-wide">
                          {tx.title}
                        </p>
                        <p className="text-[11px] text-(--muted) font-normal">
                          {tx.date}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-(--forground)">
                        ${tx.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="p-4 ">
                  <p className="w-full text-center py-2.5 bg-(--surface) text-(--forground) rounded-lg text-sm font-medium transition-colors">
                    View All {data.category} Transactions
                  </p>
                </div>
              </>
            ) : (
              isFaqData(data) && (
                <p className="w-full h-auto p-4 text-start">{data.answer}</p>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
