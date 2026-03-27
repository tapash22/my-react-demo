import React, { useState } from "react";
import { DemoButton } from "../button/DemoButton";
import { motion, AnimatePresence } from "framer-motion";

interface DemoListProps<T> {
  items?: T[];
  initialCount?: number;
  children?: (item: T, index: number) => React.ReactNode;
  haveBorder?: boolean;
  direction?: boolean;
}

export function DemoList<T>({
  items,
  initialCount = 5,
  children,
  haveBorder = false,
  direction = true,
}: DemoListProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items?.slice(0, initialCount);

  return (
    <motion.div layout className="w-full h-full rounded-sm ">
      <ul
        className={`${direction === true ? "flex flex-col" : "flex flex-row gap-0 rounded-xl w-full h-full bg-(--surface) "}`}
      >
        <AnimatePresence>
          {visibleItems &&
            visibleItems.map((item, index) => {
              // const isLast = index === visibleItems.length - 1;
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className={`${haveBorder ? "border-b border-(--muted)" : "ring-0"} `}
                >
                  {children && children(item, index)}
                </motion.li>
              );
            })}
        </AnimatePresence>
      </ul>

      {items && items.length > initialCount && (
        <motion.div layout className="p-4 flex justify-center w-full">
          <DemoButton
            onClick={() => setShowAll(!showAll)}
            classTag="rounded-lg text-sm font-medium tracking-wide inline-flex px-3 py-2 ring-1 ring-(--surface)"
            buttonColor="bg-(--shadow)"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={showAll ? "less" : "all"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium tracking-wide"
              >
                {showAll ? "Show Less" : "Show All"}
              </motion.span>
            </AnimatePresence>
          </DemoButton>
        </motion.div>
      )}
    </motion.div>
  );
}
