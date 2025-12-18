import { useState } from "react";
import { transactions } from "../components/store/data";
import { AnimatePresence, motion } from "framer-motion";

const PAGE_SIZE = 3;

export function Transaction() {
  const [page, setPage] = useState(1);
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
            <th className="py-2">Name</th>
            <th>Category</th>
            <th>Date & Time</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Note</th>
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
                <td className="py-2 font-medium">{tx.name}</td>
                <td>{tx.category}</td>
                <td>{tx.dateTime}</td>
                <td>${tx.amount.toFixed(2)}</td>
                <td className={statusColor(tx.status)}>{tx.status}</td>
                <td className="truncate max-w-xs">{tx.note}</td>
                <td className="text-center cursor-pointer">⋮</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex items-center justify-end mt-4 gap-2">
        {/* Prev */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded-md border disabled:opacity-40 bg-accent"
        >
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`
                  px-3 py-1 rounded-md border
                  transition-colors duration-200
                  ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {pageNum}
              </button>
            )
          )}
        </div>

        {/* Next */}
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
