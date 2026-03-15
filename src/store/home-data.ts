import { LuDollarSign, LuVault } from "react-icons/lu";
import type { Activity, DropdownMenu, StatusData } from "../features/type/User";
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
