import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Pagination } from "./Pagination";

interface DemoTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  pageSize?: number;
}

export function DemoTable({ data, pageSize = 3 }: DemoTableProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  //   Creates an array from an iterable object.
  const columns = Array.from(new Set(data.flatMap((tx) => Object.keys(tx))));

  //   Returns an array of values of the enumerable own properties of an object
  const filteredData = data.filter((tx) =>
    Object.values(tx).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentData = filteredData.slice(startIndex, startIndex + pageSize);

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
    <div className="w-full rounded-xl bg-(--background) shadow-md spacer-y-5">
      {/* Search */}
      <div className="w-full h-auto p-3 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-col-1  ">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset page on search
          }}
          className="input-search input-search::placeholder "
        />
      </div>
      <div className="flex flex-col w-full p-3">
        {/* Table */}
        <table className="w-full h-full   ">
          <thead className="rounded-tl-2xl rounded-tr-2xl ring-2 ring-(--input-border)">
            <tr>
              {columns.map((key) => (
                <th
                  key={key}
                  className="py-5 px-5 text-lg uppercase tracking-wider text-(--foreground) text-center font-bold "
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
              <th className="text-center subtitle-title">Action</th>
            </tr>
          </thead>

          <tbody className="rounded-bl-2xl rounded-br-2xl ring-2 ring-(--input-border)">
            <AnimatePresence mode="wait">
              {currentData.map((tx) => (
                <motion.tr
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="border-b border-(--input-border) last:border-none hover:bg-(--sidebar-hover-bg)"
                >
                  {columns.map((key) => (
                    <td
                      key={key}
                      className="py-4 subtitle-small-title text-center"
                    >
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
                  <td className="text-center cursor-pointer subtitle-small-title">
                    ⋮
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
