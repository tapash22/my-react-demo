import { DemoButton } from "../button/DemoButton";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-2 py-2 bg-(--background) w-full h-16">
      {/* Previous Button */}
      <DemoButton
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        isDisabled={page === 1}
        icon={FaLessThan}
        iconSize={12} // Fixed size for mobile-first
        iconClass="lg:!w-[14px] lg:!h-[14px]" // Scales up for large screens
        classTag="flex justify-center items-center p-3 rounded-sm lg:rounded-md transition-all duration-500 disabled:opacity-30 border-(--input-border)"
      />
      {/* Previous Button end */}

      {/* Page Numbers */}
      <div
        className="
                  flex items-center justify-between space-x-2 lg:space-x-4 p-2 lg:p-3 
                  rounded-sm lg:rounded-md bg-(--surface) ring-1 ring-(--input-border) 
                  shadow-(--shadow-button) drop-shadow-xl
                  "
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <DemoButton
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            title={String(pageNum)}
            textColor={
              page === pageNum ? "text-(--foreground)" : "text-(--muted)"
            }
            buttonColor={
              page === pageNum ? "bg-(--background)" : "bg-(--surface)"
            }
            classTag={`
                      px-2 py-1 lg:px-3 flex items-center justify-center rounded-sm 
                      text-sm font-bold transition-all shadow-(--shadow-button)
                      ${
                        page === pageNum
                          ? "duration-300 scale-100 lg:scale-110"
                          : "duration-500 scale-80 lg:scale-100"
                      }`}
          />
        ))}
      </div>
      {/* Page Numbers end*/}

      {/* Next Button */}
      <DemoButton
        onClick={() => onPageChange(Math.min(page + 1, totalPages))}
        isDisabled={page === totalPages}
        icon={FaGreaterThan}
        iconSize={12} // Fixed size for mobile-first
        iconClass="lg:!w-[14px] lg:!h-[14px]"
        classTag="flex justify-center items-center p-3 rounded-sm lg:rounded-md transition-all duration-500 disabled:opacity-30 border-(--input-border)"
      />
      {/* Next Button end */}
    </div>
  );
}
