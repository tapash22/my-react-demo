import type { ChartOptions } from "chart.js";

export interface Budget {
  personalInfo: {
    name: string;
    city: string; // e.g., "Dhaka"
    salary: number; // monthly income
    loans: Loan[];
    insurance: Insurance[];
  };
  dailyExpenses: DailyExpense[]; // everyday cost
  monthlyExpenses: MonthlyExpense[]; // recurring bills
  savings: number; // total saved
}

export interface Loan {
  id: number;
  name: string;
  amount: number;
  monthlyPayment: number;
  remaining: number;
}

export interface Insurance {
  id: number;
  name: string; // e.g., "Life Insurance"
  monthlyPremium: number;
  coverage: number;
}

export interface DailyExpense {
  id: number;
  date: string;
  category: string; // Food, Transport, Entertainment
  amount: number;
  note?: string;
}

export interface MonthlyExpense {
  id: number;
  category: string; // Utilities, Rent, Internet
  amount: number;
}
export type FundStatus = "active" | "paused" | "completed" | string;

export interface Fund {
  id: number;
  name: string;
  targetDate: string;
  currentAmount: number;
  targetAmount: number;
  currency: string;
  progressPercentage: number;
  status: FundStatus;
}

//chart type
export interface DoughnutChartOptions extends ChartOptions<"doughnut"> {
  centerTotal?: number;
}

export interface FinanceItem {
  label: string;
  percentage: number;
  amount: number;
}

export interface MonthlyIncomeExpense {
  month: string;
  income: number;
  expense: number;
}
