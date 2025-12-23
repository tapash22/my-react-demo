import type { Budget, Fund } from "../assets/type/budget-type";

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
