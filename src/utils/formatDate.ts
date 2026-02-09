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
): string {
  return date.toLocaleDateString(locale, FORMAT_MAP[format]);
}

export function formatRelativeDate(
  date: Date | string,
  locale: string = "en-US",
  fallbackFormat: DateFormatType = "short",
): string {
  const inputDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(inputDate.getTime())) return "Invalid date";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const compareDate = new Date(inputDate);
  compareDate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - compareDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays > 1 && diffDays <= 7) return `${diffDays} days ago`;

  // fallback to normal formatted date
  return formatDate(inputDate, fallbackFormat, locale);
}
