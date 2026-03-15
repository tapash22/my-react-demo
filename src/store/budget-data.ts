import type { Budget } from "../assets/type/budget-type";
import { FaHome, FaCar, FaGift } from "react-icons/fa";
import type {
  CategoryData,
  ComparisonItems,
  ReportCard,
} from "../features/type/User";

//budget planning
export const budgetData = {
  title: "Budget Summary",
  month: "May 2024",
  stats: {
    totalBudget: 3000,
    totalSpent: 2230,
    remaining: 770,
  },
  dailyInsight: {
    amount: 77,
    daysRemaining: 10,
  },
  categories: [
    {
      id: 1,
      name: "Housing",
      currentAmount: 40,
      targetAmount: 100,
      icon: FaHome,
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Food & Dining",
      currentAmount: 12,
      targetAmount: 100,
      icon: FaCar,
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "Shopping",
      currentAmount: 7,
      targetAmount: 100,
      icon: FaGift,
      color: "bg-green-600",
    },
  ],
};

export const statsArray = [
  { label: "Total Budget", value: budgetData.stats.totalBudget },
  { label: "Total Spent", value: budgetData.stats.totalSpent },
  { label: "Remaining", value: budgetData.stats.remaining },
];

//budged categories
export const categories: CategoryData[] = [
  {
    category: "Food & Dining",
    spent: 350,
    budget: 500,
    percentage: 70,
    recentTransactions: [
      { title: "Grocery Store", date: "May 20, 2024", amount: 85 },
      { title: "Restaurant Dinner", date: "May 18, 2024", amount: 65 },
      { title: "Coffee Shop", date: "May 15, 2024", amount: 25 },
      { title: "Lunch", date: "May 12, 2024", amount: 35 },
      { title: "Grocery Store", date: "May 8, 2024", amount: 140 },
    ],
  },
  {
    category: "Entertainment",
    spent: 120,
    budget: 200,
    percentage: 60,
    recentTransactions: [
      { title: "Movie Night", date: "May 19, 2024", amount: 50 },
      { title: "Concert", date: "May 10, 2024", amount: 70 },
    ],
  },
  {
    category: "Transport",
    spent: 80,
    budget: 150,
    percentage: 53,
    recentTransactions: [
      { title: "Gas", date: "May 18, 2024", amount: 40 },
      { title: "Taxi", date: "May 15, 2024", amount: 20 },
      { title: "Bus Pass", date: "May 10, 2024", amount: 20 },
    ],
  },
  {
    category: "Utilities",
    spent: 200,
    budget: 250,
    percentage: 80,
    recentTransactions: [
      { title: "Electricity Bill", date: "May 20, 2024", amount: 100 },
      { title: "Water Bill", date: "May 15, 2024", amount: 50 },
      { title: "Internet", date: "May 10, 2024", amount: 50 },
    ],
  },
  {
    category: "Shopping",
    spent: 300,
    budget: 400,
    percentage: 75,
    recentTransactions: [
      { title: "Clothes", date: "May 18, 2024", amount: 120 },
      { title: "Shoes", date: "May 15, 2024", amount: 80 },
      { title: "Accessories", date: "May 12, 2024", amount: 100 },
    ],
  },
];

//unused
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

//unused
export const reportCards: ReportCard[] = [
  {
    category: "Housing",
    status: "On Track",
    spent: 1200,
    budget: 1500,
    projected: 1450,
    trend: "stable",
  },
  {
    category: "Food & Dining",
    status: "Under Budget",
    spent: 350,
    budget: 500,
    projected: 480,
    trend: "decreasing",
  },
  {
    category: "Transportation",
    status: "Warning",
    spent: 180,
    budget: 200,
    projected: 220,
    trend: "increasing",
  },
  {
    category: "Entertainment",
    status: "Over Budget",
    spent: 150,
    budget: 120,
    projected: 180,
    trend: "increasing",
  },
];

//unused
export const earningsData: ComparisonItems = [
  {
    label: "Total Earned",
    value: "$50",
  },
  {
    label: "Pending Earnings",
    value: "$20",
  },
];
