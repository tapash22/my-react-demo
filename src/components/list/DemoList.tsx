import React, { useState } from "react";
import { DemoButton } from "../button/DemoButton";
import { motion, AnimatePresence } from "framer-motion";

interface DemoListProps<T> {
  items?: T[];
  initialCount?: number;
  children?: (item: T, index: number) => React.ReactNode;
}

export function DemoList<T>({
  items,
  initialCount = 5,
  children,
}: DemoListProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items?.slice(0, initialCount);

  return (
    <motion.div layout className="max-w-md  rounded-sm px-0 py-0">
      <ul className="space-y-3 ">
        <AnimatePresence>
          {visibleItems &&
            visibleItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="border-b-2"
              >
                {children && children(item, index)}
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {items && items.length > initialCount && (
        <motion.div layout className="mt-3">
          <DemoButton onClick={() => setShowAll(!showAll)}>
            <AnimatePresence mode="wait">
              <motion.span
                key={showAll ? "less" : "all"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
