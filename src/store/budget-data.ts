import type { Budget } from "../assets/type/budget-type";

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
