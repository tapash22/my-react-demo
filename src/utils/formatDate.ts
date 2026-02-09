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
