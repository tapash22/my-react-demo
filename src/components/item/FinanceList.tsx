import { AnimatePresence, motion } from "framer-motion";
import type { FinanceItem } from "../../assets/type/budget-type";

interface FinanceListProps {
  dataList: FinanceItem[];
}
export function FinanceList({ dataList }: FinanceListProps) {
  return (
    <>
      <ul className="space-y-2 w-full overflow-hidden relative  ">
        <AnimatePresence mode="popLayout">
          {dataList &&
            dataList.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -100 }}
                // 2. Animate to (Visible)
                animate={{ opacity: 1, x: 0 }}
                // 3. Exit animation (If item is removed)
                exit={{ opacity: 0, x: 100 }}
                // 4. Stagger effect based on index
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.01,
                }}
                layout // Smoothly animates position changes
                className="flex justify-between rounded-lg p-1 overflow-hidden"
              >
                <div className="flex justify-start items-center gap-3">
                  <div className="px-3 py-1 max-w-[50px] rounded-sm bg-(--surface) flex justify-center items-center">
                    <span
                      className="font-normal
                     text-(--foreground) tracking-wide"
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <span className="font-medium text-sm tracking-wide text-(--muted)">
                    {item.label}
                  </span>
                </div>
                <div className="flex justify-end items-center font-semibold text-sm tracking-wide">
                  <span className="subtitle-small-title space-x-0.5">
                    $ {item.amount}
                  </span>
                </div>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
