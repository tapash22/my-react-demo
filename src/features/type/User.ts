import type { ChartOptions } from "chart.js";
import type { RefObject } from "react";
import type { IconType } from "react-icons";
import { FaDollarSign, FaEuroSign, FaPoundSign } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Step {
  title: string;
  content: string;
  targetRef: RefObject<HTMLElement | null>;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersState {
  users: User[];
  loadingUsers: boolean; // for fetching all users
  loadingUserDetails: boolean; // for fetching single user
  error: string | null;
  selectedUser: User | null;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// this is image type declear
export interface BaseEntity {
  id: number;
  thumbnailUrl?: string;
}

export type SizeType = "tiny" | "small" | "medium" | "large";

export type EmptyStatus = "search" | "file" | "notification";

export interface StateConfig {
  icon: IconType;
  title: string;
  description: string;
}

export interface Page {
  name: string;
  path: string;
  icon: IconType;
}

export interface Activity {
  name: string;
  action: string;
  category?: string; // optional, e.g., for "Food & Drink"
  amount?: string; // optional, e.g., "$200"
  time: string;
}

export interface BudgetTransaction {
  title: string;
  date: string;
  amount: number;
}

export interface CategoryData {
  category: string;
  spent: number;
  budget: number;
  percentage: number;
  recentTransactions: BudgetTransaction[];
}

export interface CenterTextOptions {
  valueColor?: string; // color of total value
  labelColor?: string; // color of title text
}

export interface DoughnutChartOptions extends ChartOptions<"doughnut"> {
  centerTotal?: number;
  centerText?: CenterTextOptions;
}

export interface MyConditions {
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
}

//report
export type ReportCardStatus =
  | "On Track"
  | "Under Budget"
  | "Over Budget"
  | "Warning";
export type ReportTrendType = "increasing" | "decreasing" | "stable";

export interface ReportCard {
  category: string;
  status: ReportCardStatus;
  spent: number;
  budget: number;
  projected: number;
  trend: ReportTrendType;
}

//account
export type AccountStatus = "Connected" | "Pending" | "Connection Error";

export type AccountType =
  | "checking account"
  | "savings account"
  | "credit balance";

export interface BankAccount {
  name: string;
  status: AccountStatus;
  bank: string;
  last4: string;
  lastSync: string; // Can also use Date if you parse it
  type: AccountType;
  amount: number;
}

export const getFontSize = (sizeType: SizeType): string => {
  const textSizeMap: Record<SizeType, string> = {
    tiny: "text-xs font-normal",
    small: "text-sm font-medium",
    medium: "text-lg font-medium",
    large: "text-xl font-bold",
  };
  return textSizeMap[sizeType];
};

export const currencyIcons: Record<string, IconType> = {
  USD: FaDollarSign,
  EUR: FaEuroSign,
  GBP: FaPoundSign,
  TK: TbCurrencyTaka,
};

// Optional: export individual icons if needed
export { FaDollarSign, FaEuroSign, FaPoundSign, TbCurrencyTaka };

export interface Resource {
  id: number;
  title: string;
  description: string;
  actionText: string;
  link: string;
  icon: IconType;
}

export interface CalculatorData {
  title: string;
  subtitle?: string;
}

export interface FaqData {
  id: number;
  question: string;
  answer: string;
}
