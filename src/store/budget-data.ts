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
  FaHome,
  FaHandHoldingMedical,
  FaRegChartBar,
  FaShieldAlt,
  FaCar,
  FaUmbrellaBeach,
  FaGraduationCap,
  FaGift,
  FaUsers,
} from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";
import { FaPhotoFilm, FaArrowTrendUp } from "react-icons/fa6";
import { FiCreditCard, FiBookOpen } from "react-icons/fi";
import { TbCardsFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import type {
  Activity,
  BankAccount,
  CalculatorData,
  CategoryData,
  FaqData,
  referralStep,
  ReferralUserFinancialData,
  ReportCard,
  Resource,
} from "../features/type/User";
import { type Step } from "react-joyride";

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
    name: "Referrals",
    path: "referrals",
    icon: FaUsers,
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

export const menuItems = [
  { label: "Profile", value: "profile" },
  { label: "App", value: "app" },
  { label: "Security", value: "security" },
  { label: "Help", value: "help" },
  { label: "Resources", value: "resources" },
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

export const categoryExpenses: FinanceItem[] = [
  { label: "Food & Dining", amount: 350, percentage: 16 },
  { label: "Housing", amount: 1200, percentage: 55 },
  { label: "Transportation", amount: 180, percentage: 8 },
  { label: "Entertainment", amount: 150, percentage: 7 },
  { label: "Utilities", amount: 120, percentage: 5 },
  { label: "Other", amount: 200, percentage: 9 },
];

// const steps: Step[] = [
//   {
//     target: ".dashboard-step",
//     content: "Welcome to your dashboard! This is where you can see your stats.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
//   {
//     target: ".add-project-step",
//     content: "Click here to add a new project.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
// ];

export const steps: Step[] = [
  {
    target: ".step-1",
    content: "This is step 1",
    disableBeacon: true,
    placement: "top-start",
  },
  {
    target: ".step-2",
    content: "This is step 2",
    disableBeacon: true,
    placement: "top-start",
  },
  {
    target: ".step-3",
    content: "This is step 3",
    disableBeacon: true,
    placement: "top-start",
  },
];

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

export const bankAccounts: BankAccount[] = [
  {
    name: "Chase Checking",
    status: "Connected",
    bank: "Chase Bank",
    last4: "1234",
    lastSync: "2 minutes ago",
    type: "checking account",
    amount: 300,
  },
  {
    name: "Savings Account",
    status: "Pending",
    bank: "Bank of America",
    last4: "5678",
    lastSync: "5 minutes ago",
    type: "savings account",
    amount: 300,
  },
  {
    name: "Chase Freedom",
    status: "Connected",
    bank: "Chase Bank",
    last4: "9012",
    lastSync: "1 hour ago",
    type: "credit balance",
    amount: 300,
  },
  {
    name: "Business Checking",
    status: "Connection Error",
    bank: "Wells Fargo",
    last4: "3456",
    lastSync: "Failed",
    type: "checking account",
    amount: 300,
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: "User Guide",
    description: "Comprehensive guide to using all features of the app",
    actionText: "View",
    link: "home",
    icon: IoDocumentTextOutline,
  },
  {
    id: 2,
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    actionText: "View",
    link: "home",
    icon: CiVideoOn,
  },
  {
    id: 3,
    title: "Financial Education",
    description: "Articles and resources to improve your financial literacy",
    actionText: "View",
    link: "home",
    icon: FiBookOpen,
  },
];

export const calculators: CalculatorData[] = [
  {
    title: "Loan Calculator",
    subtitle: "Calculate loan payments and interest",
  },
  {
    title: "Savings Calculator",
    subtitle: "Plan your savings growth over time",
  },
  {
    title: "Retirement Calculator",
    subtitle: "Estimate retirement savings needs",
  },
  {
    title: "Budget Calculator",
    subtitle: "Create a balanced budget plan",
  },
];

export const faqs: FaqData[] = [
  {
    id: 1,
    question: "How do I add a new transaction?",
    answer:
      "Click the '+' button in the bottom right corner or go to the Expenses page and select 'Add Transaction'.",
  },
  {
    id: 2,
    question: "How do I create a budget?",
    answer:
      "Go to the Budget Planning page and click 'Add Category' to set up a new budget and define spending limits.",
  },
  {
    id: 3,
    question: "Can I export my financial data?",
    answer:
      "Yes, export your data as a CSV file from the Dashboard using the 'Export Data' button or via Settings → Data & Privacy.",
  },
  {
    id: 4,
    question: "How do I change my password?",
    answer:
      "Go to Settings → Profile, scroll to the Password section, and enter your current and new passwords to update.",
  },
];

export const referralSteps: referralStep[] = [
  {
    id: 1,
    title: "Invite Friends",
    description: "Share your unique referral link with friends and family",
    notificationCount: 3,
    icon: FiUserPlus,
  },
  {
    id: 2,
    title: "They Sign Up",
    description:
      "When they create an account using your link, you both qualify for rewards",
    notificationCount: 1,
    icon: FiCreditCard,
  },
  {
    id: 3,
    title: "Earn Rewards",
    description:
      "You'll receive $10 credit for each friend who signs up and uses the app",
    notificationCount: 2,
    icon: IoGiftOutline,
  },
];

/**
 * The Referral User Financial Data Object
 */
export const userData: ReferralUserFinancialData = {
  month: "May 2024",
  budget: {
    total: 3000,
    spent: 2230,
    remaining: 770,
    percentUsed: 74,
    dailyAllowance: 77,
    daysRemaining: 10,
  },
  spendingCategories: [
    { name: "Housing", percentage: 40, estimatedValue: 1200 },
    { name: "Food & Dining", percentage: 12, estimatedValue: 360 },
    { name: "Shopping", percentage: 7, estimatedValue: 210 },
  ],
  earnings: {
    totalEarned: 50,
    pending: 20,
    availableBalance: 30,
  },
  referrals: {
    used: 5,
    totalLimit: 10,
    remainingSlots: 5,
    history: [
      { name: "Sarah Johnson", status: "Completed", amount: 10 },
      { name: "Michael Chen", status: "Pending" },
      { name: "Emily Davis", status: "Completed", amount: 10 },
      { name: "James Wilson", status: "Pending" },
      { name: "Olivia Brown", status: "Completed", amount: 10 },
    ],
  },
};
