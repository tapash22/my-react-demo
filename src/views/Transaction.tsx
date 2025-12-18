import { useState } from "react";
import { transactions } from "../store/data";
import { AnimatePresence, motion } from "framer-motion";

const PAGE_SIZE = 3;

export function Transaction() {
  const [page, setPage] = useState(1);

  // Get all unique keys from data
  const columns = Array.from(
    new Set(transactions.flatMap((tx) => Object.keys(tx)))
  );
  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;

  const currentData = transactions.slice(startIndex, startIndex + PAGE_SIZE);

  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      case "Failed":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="w-full rounded-xl bg-white shadow-md p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-500">
            {columns.map((key) => (
              <th key={key} className="py-2 text-left">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          <AnimatePresence mode="wait">
            {currentData.map((tx) => (
              <motion.tr
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="border-b last:border-none hover:bg-gray-50"
              >
                {columns.map((key) => (
                  <td key={key} className="py-2">
                    {tx[key] !== undefined ? (
                      key === "amount" ? (
                        `$${tx.amount.toFixed(2)}`
                      ) : key === "status" ? (
                        <span className={statusColor(tx.status)}>
                          {tx.status}
                        </span>
                      ) : (
                        tx[key]
                      )
                    ) : (
                      "-"
                    )}
                  </td>
                ))}
                <td className="text-center cursor-pointer">⋮</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex gap-2 justify-center mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded-md border disabled:opacity-40 bg-accent"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`px-3 py-1 rounded-md border transition-colors duration-200 ${
              page === pageNum ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 rounded-md border disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
