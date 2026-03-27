import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useEffect, useMemo, useState } from "react";
import { Pagination } from "./Pagination";
import { DemoDropdownSelect } from "../dropdown/DemoDropdownSelect";
import { DemoButton } from "../button/DemoButton";
import { FaPen, FaTrash } from "react-icons/fa";
import { DemoExpandableSearch } from "../input-component/DemoExpandableSearch";

interface DemoTableProps<T> {
  data: T[];
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
  const [search, setSearch] = useState("");
  const [searchResetKey, setSearchResetKey] = useState(0);
  const [page, setPage] = useState(1);

  // used only for forcing reset (safe trigger)

  //using short and advance
  // const columns = useMemo(
  //   () =>
  //     Array.from(new Set(data.flatMap((row) => Object.keys(row)))).filter(
  //       (col) => !hideColumns.includes(col as keyof T),
  //     ),
  //   [data, hideColumns],
  // );

  //with details
  const columns = useMemo(() => {
    const keys = data.flatMap((row) => Object.keys(row));
    const uniqueColumns = [...new Set(keys)];
    return uniqueColumns.filter((col) => !hideColumns.includes(col as keyof T));
  }, [data, hideColumns]);

  const filterableColumns = columns;

  const [filterColumn, setFilterColumn] = useState<string>(
    () => filterableColumns[0] ?? "",
  );
  const resetSearch = () => {
    setSearch(""); // ✅ source of truth
    setSearchResetKey((p) => p + 1); // UI reset trigger
  };

  useEffect(() => {
    startTransition(() => {
      if (
        filterableColumns.length &&
        !filterableColumns.includes(filterColumn)
      ) {
        setFilterColumn(filterableColumns[0]);
      }
    });
  }, [filterableColumns, filterColumn]);

  // filter logic
  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((row) => {
      // Filter by selected column
      if (filterColumn) {
        const value = row[filterColumn as keyof T];
        return (
          value !== undefined &&
          String(value).toLowerCase().includes(search.toLowerCase())
        );
      }

      // Global search fallback
      return Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase()),
      );
    });
  }, [data, search, filterColumn]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full h-full rounded-xl spacer-y-3 shadow-(--shadow-card) p-2">
      {/* Search */}
      <div className="w-full h-auto p-1 md:p-3 flex flex-col lg:flex-row justify-between items-center gap-1 md:gap-3">
        {/* LEFT */}
        <div className="w-full sm:w-full md:w-full lg:w-1/3 flex justify-center  ">
          <DemoDropdownSelect
            value={filterColumn}
            options={filterableColumns}
            onChange={(col) => {
              setFilterColumn(col);
              setPage(1);
              resetSearch(); // clean reset
            }}
          />
        </div>

        {/* RIGHT */}
        {/* <div className="w-full md:w-2/3 flex justify-center lg:justify-end items-center"> */}
        <div className="w-full flex justify-center md:justify-end">
          <DemoExpandableSearch
            value={search}
            onChange={(val) => {
              setSearch(val);
              setPage(1);
            }}
            resetKey={searchResetKey}
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-auto p-1 md:p-3 space-y-2 overflow-x-scroll">
        {/* Table */}
        <table className="w-full h-full rounded-2xl">
          <thead className="rounded-tl-2xl rounded-tr-2xl ring-2 ring-(--input-border)">
            <tr>
              {columns.map((key) => (
                <th
                  key={key}
                  className="py-4 px-4 text-center text-sm font-bold tracking-wide"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
              {(onEdit || onDelete) && <th>Action</th>}
            </tr>
          </thead>

          <tbody className="ring-2 ring-(--input-border) rounded-bl-2xl rounded-br-2xl">
            <AnimatePresence mode="wait">
              {currentData.map((tx, rowIndex) => {
                const isLastRow = rowIndex === currentData.length - 1;

                return (
                  <motion.tr
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`ring-1 ring-(--input-border)
                              ${isLastRow ? "rounded-bl-2xl rounded-br-2xl" : ""}
                            `}
                  >
                    {columns.map((key) => (
                      <td
                        key={key}
                        className={`py-4 text-sm font-normal tracking-wide text-(--foreground) text-center
                        `}
                      >
                        {String(tx[key as keyof T] ?? "-")}
                      </td>
                    ))}

                    {(onEdit || onDelete) && (
                      <td className="text-center">
                        <div className="flex justify-center gap-3">
                          {onEdit && (
                            <DemoButton
                              title="Edit"
                              icon={FaPen}
                              onClick={() => onEdit(tx)}
                            />
                          )}
                          {onDelete && (
                            <DemoButton
                              isDisabled={disabled}
                              title="Delete"
                              icon={FaTrash}
                              onClick={() => onDelete(tx.id)}
                            />
                          )}
                        </div>
                      </td>
                    )}
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
