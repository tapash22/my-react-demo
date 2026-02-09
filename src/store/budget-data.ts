import type {
  Budget,
  FinanceItem,
  Fund,
  IncomeExpense,
  Page,
  PeriodType,
} from "../assets/type/budget-type";
import { cssVar } from "../utils/cssVar";
import {
  FaUser,
  FaHome,
  FaHandHoldingMedical,
  FaRegChartBar,
  FaShieldAlt,
  FaCar,
  FaUmbrellaBeach,
  FaGraduationCap,
  FaGift,
} from "react-icons/fa";
import { FaPhotoFilm, FaArrowTrendUp } from "react-icons/fa6";
import { FiCreditCard } from "react-icons/fi";
import { TbCardsFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import type { Activity } from "../features/type/User";

export const myBudget: Budget = {
  personalInfo: {
    name: "Tapas Paul",
    city: "Dhaka",
    salary: 80000,
    loans: [
      {
        id: 1,
        name: "Car Loan",
        amount: 300000,
        monthlyPayment: 15000,
        remaining: 150000,
      },
    ],
    insurance: [
      {
        id: 1,
        name: "Life Insurance",
        monthlyPremium: 2000,
        coverage: 1000000,
      },
    ],
  },
  dailyExpenses: [
    { id: 1, date: "2025-12-19", category: "Food", amount: 300, note: "Lunch" },
    { id: 2, date: "2025-12-19", category: "Transport", amount: 100 },
  ],
  monthlyExpenses: [
    { id: 1, category: "Electricity", amount: 2500 },
    { id: 2, category: "Internet", amount: 1500 },
  ],
  savings: 20000,
};

export const QUICK_ROUTING_PAGES: Page[] = [
  {
    name: "Expenses",
    path: "expenses",
    icon: TbCardsFilled,
  },
  {
    name: "Budget Planning",
    path: "budget-planning",
    icon: FaArrowTrendUp,
  },
  {
    name: "Saving Goals",
    path: "saving-goals",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Reports",
    path: "reports",
    icon: FaRegChartBar,
  },
];

export const ROUTING_PAGES: Page[] = [
  {
    name: "Home",
    path: "home",
    icon: FaHome,
  },
  {
    name: "Budget Planning",
    path: "budget-planning",
    icon: FaArrowTrendUp,
  },
  {
    name: "Expenses",
    path: "expenses",
    icon: TbCardsFilled,
  },
  {
    name: "Saving Goals",
    path: "saving-goals",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Account card",
    path: "account-card",
    icon: FiCreditCard,
  },
  {
    name: "Reports",
    path: "reports",
    icon: FaRegChartBar,
  },
  {
    name: "Settings",
    path: "settings",
    icon: IoMdSettings,
  },
  {
    name: "Profile",
    path: "profile",
    icon: FaUser,
  },
  {
    name: "Gallery",
    path: "gallery",
    icon: FaPhotoFilm,
  },
];

export const FUNDS_DATA: Fund[] = [
  {
    id: 1,
    name: "Emergency Fund",
    targetDate: "2024-12",
    currentAmount: 6500,
    targetAmount: 10000,
    currency: "USD",
    progressPercentage: 65,
    status: "active",
  },
  {
    id: 2,
    name: "New Car",
    targetDate: "2025-06",
    currentAmount: 8750,
    targetAmount: 25000,
    currency: "USD",
    progressPercentage: 35,
    status: "paused",
  },
  {
    id: 3,
    name: "Vacation",
    targetDate: "2024-08",
    currentAmount: 3250,
    targetAmount: 5000,
    currency: "USD",
    progressPercentage: 65,
    status: "active",
  },
  {
    id: 4,
    name: "Home Down Payment",
    targetDate: "2026-12",
    currentAmount: 12500,
    targetAmount: 50000,
    currency: "USD",
    progressPercentage: 25,
    status: "active",
  },
  {
    id: 5,
    name: "Education Fund",
    targetDate: "2025-09",
    currentAmount: 5000,
    targetAmount: 20000,
    currency: "USD",
    progressPercentage: 25,
    status: "completed",
  },
  {
    id: 6,
    name: "Anniversary Gift",
    targetDate: "Completed",
    currentAmount: 1000,
    targetAmount: 1000,
    currency: "USD",
    progressPercentage: 100,
    status: "completed",
  },
];

export const FUND_COLORS: Record<string, string> = {
  "Emergency Fund": cssVar("--danger"),
  "New Car": cssVar("--primary"),
  Vacation: cssVar("--accent"),
  "Home Down Payment": cssVar("--info"),
  "Education Fund": cssVar("--secondary"),
  "Anniversary Gift": cssVar("--success"),
};

export const EXPENSE_DATA: FinanceItem[] = [
  { label: "Housing & Utilities", percentage: 40, amount: 1800 },
  { label: "Food & Groceries", percentage: 20, amount: 900 },
  { label: "Education", percentage: 6, amount: 270 },
  { label: "Healthcare", percentage: 8, amount: 360 },
  { label: "Transportation", percentage: 10, amount: 450 },
  { label: "Entertainment", percentage: 6, amount: 270 },
];

export const INCOME_DATA: FinanceItem[] = [
  { label: "Salary", percentage: 65, amount: 4000 },
  { label: "Revenue", percentage: 20, amount: 900 },
  { label: "Savings & Insurance", percentage: 10, amount: 450 },
  { label: "Freelance / Side Hustle", percentage: 20, amount: 1200 },
  { label: "Investments", percentage: 11, amount: 700 },
  { label: "Rental Income", percentage: 4, amount: 250 },
];

export const MONTHLY_INCOME_EXPENSE_DATA: IncomeExpense[] = [
  { label: "Jan", income: 5000, expense: 2200 },
  { label: "Feb", income: 2200, expense: 3300 },
  { label: "Mar", income: 4100, expense: 4400 },
  { label: "Apr", income: 3500, expense: 3500 },
  { label: "May", income: 4700, expense: 4600 },
  { label: "Jun", income: 3600, expense: 3700 },
  { label: "Jul", income: 4800, expense: 4800 },
  { label: "Aug", income: 3000, expense: 3900 },
  { label: "Sep", income: 5200, expense: 4000 },
];

export const WEEKLY_INCOME_EXPENSE_DATA: IncomeExpense[] = [
  { label: "Week 1", income: 1200, expense: 800 },
  { label: "Week 2", income: 1500, expense: 1100 },
  { label: "Week 3", income: 1300, expense: 900 },
  { label: "Week 4", income: 1000, expense: 700 },
];

export function getIncomeExpenseData(type: PeriodType): IncomeExpense[] {
  switch (type) {
    case "weekly":
      return WEEKLY_INCOME_EXPENSE_DATA;
    case "last3Months":
      return MONTHLY_INCOME_EXPENSE_DATA.slice(-3);
    case "monthly":
    default:
      return MONTHLY_INCOME_EXPENSE_DATA;
  }
}
export const PERIOD_OPTIONS: PeriodType[] = [
  "weekly",
  "monthly",
  "last3Months",
];

export const PERIOD_LABEL_MAP: Record<PeriodType, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  last3Months: "Last 3 Months",
};

export const getIcon = (name: string) => {
  switch (name) {
    case "Emergency Fund":
      return FaShieldAlt;
    case "New Car":
      return FaCar;
    case "Vacation":
      return FaUmbrellaBeach;
    case "Home Down Payment":
      return FaHome;
    case "Education Fund":
      return FaGraduationCap;
    case "Anniversary Gift":
      return FaGift;
    default:
      return null;
  }
};

export const status = [
  {
    title: "Total Income",
    amount: "$7.8k",
    change: "+1.78%",
    trend: "up",
  },
  {
    title: "Total Expense",
    amount: "$4.3k",
    change: "-1.78%",
    trend: "down",
  },
  {
    title: "Total Savings",
    amount: "$5.6k",
    change: "+1.24%",
    trend: "up",
  },
  {
    title: "Total Investment",
    amount: "$3.75k",
    change: "+66.95%",
    trend: "up",
  },
];

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
