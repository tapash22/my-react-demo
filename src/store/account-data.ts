import type { BankAccount, ComparisonItems } from "../features/type/User";

//account card page compare
export const balanceData: ComparisonItems = [
  {
    label: "Total Asset",
    value: 20350,
  },
  {
    label: "Total Liabilities",
    value: 3050,
  },
];

//account card data
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
