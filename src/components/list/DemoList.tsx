import { useState } from "react";
import { DemoButton } from "../button/DemoButton";
import { motion, AnimatePresence } from "framer-motion";

interface DemoListProps {
  items: string[];
  initialCount?: number;
}

export function DemoList({ items, initialCount = 5 }: DemoListProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, initialCount);

  return (
    <motion.div layout className="max-w-md mx-auto border rounded-lg p-4">
      <ul className="list-disc pl-5 space-y-1">
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-gray-800"
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {items.length > initialCount && (
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
