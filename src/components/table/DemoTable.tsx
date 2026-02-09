import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useEffect, useMemo, useState } from "react";
import { Pagination } from "./Pagination";
import { DemoDropdownSelect } from "../dropdown/DemoDropdownSelect";
import { DemoButton } from "../button/DemoButton";
import { FaPen, FaTrash } from "react-icons/fa";

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

  const columns = useMemo(
    () =>
      Array.from(new Set(data.flatMap((row) => Object.keys(row)))).filter(
        (col) => !hideColumns.includes(col as keyof T),
      ),
    [data, hideColumns],
  );

  const filterableColumns = columns;

  const [filterColumn, setFilterColumn] = useState<string>(
    () => filterableColumns[0] ?? "",
  );

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
    <div className="w-full rounded-xl bg-(--background) shadow-md spacer-y-5">
      {/* Search */}
      <div className="w-1/3 h-auto p-3 flex justify-center align-bottom  ">
        <DemoDropdownSelect
          value={filterColumn}
          options={filterableColumns}
          onChange={(col) => {
            setFilterColumn(col);
            setPage(1);
          }}
        />
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
        <table className="w-full h-full  rounded-2xl  ">
          <thead className="rounded-tl-2xl rounded-tr-2xl ring-2 ring-(--input-border) ">
            <tr>
              {columns.map((key) => (
                <th key={key} className="py-4 px-4  text-center">
                  {key}
                </th>
              ))}
              {(onEdit || onDelete) && <th>Action</th>}
            </tr>
          </thead>

          <tbody className="ring-2 ring-(--input-border) rounded-bl-2xl rounded-br-2xl  ">
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
                        className={`py-4 subtitle-small-title text-center
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
