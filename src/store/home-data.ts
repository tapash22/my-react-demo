import { LuDollarSign, LuVault } from "react-icons/lu";
import type {
  Activity,
  DropdownMenu,
  StatusData,
  Transaction,
} from "../features/type/User";
import { GoLinkExternal } from "react-icons/go";
import { FaPercent } from "react-icons/fa6";

//home page static dropdown
export const statisticMenu: DropdownMenu[] = [
  {
    id: 1,
    name: "View Details",
    path: "$",
  },
  {
    id: 2,
    name: "Download reports",
    path: "$",
  },
  {
    id: 3,
    name: "Settings",
    path: "$",
  },
];

//home recent activities
export const activities: Activity[] = [
  {
    name: "Sarah Parker",
    action: "added a new expense",
    category: "Food & Drink",
    time: "15:30",
  },
  {
    name: "David Miller",
    action: "created a monthly savings goal",
    amount: "$500",
    time: "11:20",
  },
  {
    name: "Emma Wilson",
    action: "transferred",
    amount: "$200",
    category: "Investment account",
    time: "09:10",
  },
  {
    name: "Sarah Parker",
    action: "added a new expense",
    category: "Food & Drink",
    time: "15:30",
  },
  {
    name: "David Miller",
    action: "created a monthly savings goal",
    amount: "$500",
    time: "11:20",
  },
  {
    name: "Emma Wilson",
    action: "transferred",
    amount: "$200",
    category: "Investment account",
    time: "09:10",
  },
  {
    name: "Sarah Parker",
    action: "added a new expense",
    category: "Food & Drink",
    time: "15:30",
  },
  {
    name: "David Miller",
    action: "created a monthly savings goal",
    amount: "$500",
    time: "11:20",
  },
  {
    name: "Emma Wilson",
    action: "transferred",
    amount: "$200",
    category: "Investment account",
    time: "09:10",
  },
];
//home card list
export const status: StatusData[] = [
  {
    title: "Total Income",
    amount: "$7.8k",
    change: "+1.78%",
    trend: "up",
    icon: LuDollarSign,
  },
  {
    title: "Total Expense",
    amount: "$4.3k",
    change: "-1.78%",
    trend: "down",
    icon: GoLinkExternal,
  },
  {
    title: "Total Savings",
    amount: "$5.6k",
    change: "+1.24%",
    trend: "up",
    icon: LuVault,
  },
  {
    title: "Total Investment",
    amount: "$3.75k",
    change: "+66.95%",
    trend: "up",
    icon: FaPercent,
  },
];

//table data use expenses and home
export const transactionList: Transaction[] = [
  {
    id: 1,
    name: "Internet Bill",
    category: "Utilities",
    dateTime: "2028-03-05 10:15:23",
    amount: 120.5,
    status: "Completed",
    note: "Monthly broadband subscription",
  },
  {
    id: 2,
    name: "Grocery Shopping",
    category: "Shopping",
    dateTime: "2028-03-07 15:47:11",
    amount: 185.75,
    status: "Completed",
    note: "Weekly groceries at supermarket",
  },
  {
    id: 3,
    name: "Concert Tickets",
    category: "Entertainment",
    dateTime: "2028-02-28 20:05:42",
    amount: 310,
    status: "Failed",
    note: "Tickets for live music concert",
  },
  {
    id: 4,
    name: "Pharmacy Purchase",
    category: "Healthcare",
    dateTime: "2028-02-10 12:22:54",
    amount: 75.9,
    status: "Completed",
    note: "Medicines and health supplements",
  },
  {
    id: 5,
    name: "Family Dinner",
    category: "Dining Out",
    dateTime: "2028-02-15 19:36:09",
    amount: 240.6,
    status: "Pending",
    note: "Dinner with family at Thai restaurant",
  },
  {
    id: 6,
    name: "Concert Tickets",
    category: "Entertainment",
    dateTime: "2028-02-28 20:05:42",
    amount: 310,
    status: "Failed",
    note: "Tickets for live music concert",
  },
  {
    id: 7,
    name: "Pharmacy Purchase",
    category: "Healthcare",
    dateTime: "2028-02-10 12:22:54",
    amount: 75.9,
    status: "Completed",
    note: "Medicines and health supplements",
  },
  {
    id: 8,
    name: "Family Dinner",
    category: "Dining Out",
    dateTime: "2028-02-15 19:36:09",
    amount: 240.6,
    status: "Pending",
    note: "Dinner with family at Thai restaurant",
  },
];
