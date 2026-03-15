import type { CalculatorData, FaqData, Resource } from "../features/type/User";
import { FiBookOpen } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

//setting tabs
export const settingTabs = [
  { label: "Profile", value: "profile" },
  { label: "App", value: "app" },
  { label: "Security", value: "security" },
  { label: "Help", value: "help" },
  { label: "Resources", value: "resources" },
];
//setting -> resource setting calculation
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

//setting -> resource setting data
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

//setting -> helpsetting data
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
