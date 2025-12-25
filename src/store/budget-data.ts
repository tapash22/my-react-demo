import type {
  Budget,
  FinanceItem,
  Fund,
  MonthlyIncomeExpense,
} from "../assets/type/budget-type";
import { cssVar } from "../utils/cssVar";

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

export const MONTHLY_INCOME_EXPENSE_DATA: MonthlyIncomeExpense[] = [
  { month: "Jan", income: 4000, expense: 3200 },
  { month: "Feb", income: 4200, expense: 3300 },
  { month: "Mar", income: 4100, expense: 3400 },
  { month: "Apr", income: 4500, expense: 3500 },
  { month: "May", income: 4700, expense: 3600 },
  { month: "Jun", income: 4600, expense: 3700 },
  { month: "Jul", income: 4800, expense: 3800 },
  { month: "Aug", income: 5000, expense: 3900 },
  { month: "Sep", income: 5200, expense: 4000 },
];
