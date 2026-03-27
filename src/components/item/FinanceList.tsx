import { AnimatePresence, motion } from "framer-motion";
import type { FinanceItem } from "../../assets/type/budget-type";

interface FinanceListProps {
  dataList: FinanceItem[];
  direction?: boolean;
}
export function FinanceList({ dataList, direction = true }: FinanceListProps) {
  return (
    <>
      <ul className="w-full p-1 flex flex-col space-y-1 overflow-hidden relative">
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
                <div
                  className={`flex justify-start items-center ${direction === true ? "gap-3" : "gap-2"}`}
                >
                  {/* <div className="px-3 py-1 max-w-[50px] rounded-sm bg-(--surface) flex justify-center items-center">
                  </div> */}
                  {direction === true ? (
                    <span
                      className="font-normal
                     text-(--foreground) tracking-wide"
                    >
                      {item.percentage}%
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-(--primary)"></span>
                  )}

                  <span className="text-sm font-medium text-(--foreground) tracking-wide">
                    {item.label}
                  </span>
                </div>
                <div className="flex justify-end items-center font-semibold text-sm tracking-wide space-x-1">
                  <span className="text-sm font-semibold text-(--foreground) tracking-wide space-x-0.5">
                    $ {item.amount}
                  </span>

                  {direction === false && (
                    <span
                      className="text-sm font-medium
                     text-(--foreground) tracking-normal"
                    >
                      ({item.percentage}%)
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
