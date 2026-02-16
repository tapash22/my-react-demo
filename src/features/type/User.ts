import type { ChartOptions } from "chart.js";
import type { IconType } from "react-icons";

export interface Geo {
  lat: string;
  lng: string;
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
