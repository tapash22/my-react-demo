import type { FundStatus } from "../assets/type/budget-type";
import { FUNDS_DATA } from "../store/budget-data";

interface FundTab {
  label: string;
  value: FundStatus | "all";
}

const uniqueStatuses = Array.from(new Set(FUNDS_DATA.map((f) => f.status)));

export const FUND_TABS: FundTab[] = [
  { label: "All", value: "all" },
  ...uniqueStatuses.map((status) => ({
    label: status,
    value: status.toLowerCase() as FundStatus,
  })),
];
