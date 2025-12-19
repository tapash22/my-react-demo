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
    <div className="flex gap-2 justify-center mt-4 bg-(--background)">
      <button
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded-lg ring-1 ring-(--card-border)  subtitle-small-title disabled:opacity-60 text-(--subtitle) bg-(--surface) subtitle-small-title tracking-wider "
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`px-3 py-1 rounded-md border-(--card-border) text-(--foreground) subtitle-small-title transition-colors duration-200 ${
            page === pageNum
              ? "bg-(--card-bg) text-(--foreground) ring-1 ring-(--card-border)"
              : "hover:bg-(--hover) "
          }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
        className="px-3 py-1 rounded-lg ring-1 ring-(--card-border)  subtitle-small-title disabled:opacity-60 text-(--subtitle) bg-(--surface) subtitle-small-title tracking-wider"
      >
        Next
      </button>
    </div>
  );
}
