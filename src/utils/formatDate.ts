export type DateFormatType =
  | "full"
  | "short"
  | "numeric"
  | "time"
  | "dateTime"
  | "monthYear";

const FORMAT_MAP: Record<DateFormatType, Intl.DateTimeFormatOptions> = {
  full: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },

  short: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },

  numeric: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },

  time: {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  },

  dateTime: {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },

  monthYear: {
    year: "numeric",
    month: "long",
  },
};

export function formatDate(
  date: Date,
  format: DateFormatType = "full",
  locale: string = "en-US",
  timeZone: string = "Asia/Dhaka",
): string {
  const options = { ...FORMAT_MAP[format], timeZone };
  // Only works for date (year, month, day).
  // return date.toLocaleDateString(locale, FORMAT_MAP[format]);

  //   Can handle full date & time formats.
  // Properly respects timeZone like "Asia/Dhaka"
  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * Parses a date-only string or Date and returns a Date object at Bangladesh midnight
 */
function parseBangladeshDate(date: string | Date): Date {
  if (date instanceof Date) return date;

  // Parse date-only string like "2025-01-10" as Bangladesh midnight
  const [year, month, day] = date.split("-").map(Number);
  // Use UTC so formatting with Asia/Dhaka works correctly
  return new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
}

//
export function formatRelativeDate(
  date: Date | string,
  locale: string = "en-US",
  fallbackFormat: DateFormatType = "short",
  timeZone: string = "Asia/Dhaka",
): string {
  const inputDate = typeof date === "string" ? parseBangladeshDate(date) : date;

  if (isNaN(inputDate.getTime())) return "Invalid date";

  // Convert both dates to the specified timezone
  const todayStr = new Intl.DateTimeFormat("en-US", { timeZone }).format(
    new Date(),
  );
  const today = new Date(todayStr);
  today.setHours(0, 0, 0, 0);

  const compareStr = new Intl.DateTimeFormat("en-US", { timeZone }).format(
    inputDate,
  );
  const compareDate = new Date(compareStr);
  compareDate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - compareDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays > 1 && diffDays <= 7) return `${diffDays} days ago`;

  // fallback to normal formatted date
  return formatDate(inputDate, fallbackFormat, locale, timeZone);
}
