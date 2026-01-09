import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Pagination } from "./Pagination";

interface DemoTableProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  pageSize?: number;
  hideColumns?: (keyof T)[];
  onDelete?: (id: number) => void;
  onEdit?: (row: T) => void;
  disabled?: boolean;
}

export function DemoTable<T extends { id: number }>({
  data,
  pageSize = 3,
  hideColumns = [],
  onDelete,
  onEdit,
  disabled,
}: DemoTableProps<T>) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterColumn, setFilterColumn] = useState("");

  //   Creates an array from an iterable object.
  const columns = Array.from(
    new Set(data.flatMap((row) => Object.keys(row)))
  ).filter((col) => !hideColumns.includes(col as keyof T));

  // Filtered columns for dropdown (hide those in hideColumns)
  const filterableColumns = columns;

  //   Returns an array of values of the enumerable own properties of an object
  const filteredData = data.filter((tx) => {
    if (!search) return true;

    if (filterColumn) {
      const val = tx[filterColumn as keyof T];
      return (
        val !== undefined &&
        String(val).toLowerCase().includes(search.toLowerCase())
      );
    }
    {
      Object.values(tx).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentData = filteredData.slice(startIndex, startIndex + pageSize);

  // const statusColor = (status: string) => {
  //   switch (status) {
  //     case "Completed":
  //       return "text-green-600";
  //     case "Pending":
  //       return "text-yellow-600";
  //     case "Failed":
  //       return "text-red-600";
  //     default:
  //       return "";
  //   }
  // };

  return (
    <div className="w-full rounded-xl bg-(--background) shadow-md spacer-y-5">
      {/* Search */}
      <div className="w-1/3 h-auto p-3 flex justify-center align-bottom  ">
        <select
          value={filterColumn}
          onChange={(e) => {
            setFilterColumn(e.target.value);
            setPage(1);
          }}
          className="select-search h-10 space-y-2"
        >
          {filterableColumns.map((col) => (
            <option key={col} value={col}>
              <p className="px-5 py-2 h-10">
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </p>
            </option>
          ))}
        </select>
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
                <th key={key} className="py-4 text-center">
                  {key}
                </th>
              ))}
              {(onEdit || onDelete) && <th>Action</th>}
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
                  className="rounded-bl-2xl rounded-br-2xl ring-2 ring-(--input-border)"
                >
                  {columns.map((key) => (
                    <td
                      key={key}
                      className="py-4 subtitle-small-title text-center"
                    >
                      {String(tx[key as keyof T] ?? "-")}
                    </td>
                  ))}

                  {(onEdit || onDelete) && (
                    <td className="text-center">
                      <div className="flex justify-center gap-3">
                        {onEdit && (
                          <button
                            onClick={() => onEdit(tx)}
                            className="text-blue-600"
                          >
                            Edit
                          </button>
                        )}
                        {onDelete && (
                          <button
                            disabled={disabled}
                            onClick={() => onDelete(tx.id)}
                            className="text-red-600"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  )}
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
