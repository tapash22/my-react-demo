import type { FinanceItem } from "../assets/type/budget-type";
import type { ComparisonItems } from "../features/type/User";

//expense page data compare
export const comparisonItems: ComparisonItems = [
  { label: "Last Month", value: 2800 },
  { label: "This Month", value: 3000 },
];

//expense and report page usage data
export const categoryExpenses: FinanceItem[] = [
  { label: "Food & Dining", amount: 350, percentage: 16 },
  { label: "Housing", amount: 1200, percentage: 55 },
  { label: "Transportation", amount: 180, percentage: 8 },
  { label: "Entertainment", amount: 150, percentage: 7 },
  { label: "Utilities", amount: 120, percentage: 5 },
  { label: "Other", amount: 200, percentage: 9 },
];
