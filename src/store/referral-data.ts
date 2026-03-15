import type {
  referralStep,
  referralTerm,
  ReferralUserFinancialData,
} from "../features/type/User";
import { FiUserPlus } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";

//referral page data
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
export const referralUserData: ReferralUserFinancialData = {
  earningsOverview: [
    {
      label: "Total Earned",
      value: "50",
    },
    {
      label: "Pending Earnings",
      value: "20",
    },
  ],

  referralUsage: {
    used: 5,
    limit: 10,
    remainingMessage: "You can refer up to 5 more friends this year",
  },

  withdrawSection: {
    availableBalance: 30,
    actionText: "Withdraw Funds",
  },

  recentReferrals: [
    {
      id: 1,
      name: "Sarah Johnson",
      status: "completed",
      reward: 10,
    },
    {
      id: 2,
      name: "Michael Chen",
      status: "pending",
      reward: null,
    },
    {
      id: 3,
      name: "Emily Davis",
      status: "completed",
      reward: 10,
    },
    {
      id: 4,
      name: "James Wilson",
      status: "pending",
      reward: null,
    },
    {
      id: 5,
      name: "Olivia Brown",
      status: "completed",
      reward: 10,
    },
  ],

  viewAllText: "View All Referrals",
};

export const referralTerms: referralTerm[] = [
  {
    id: 1,
    description:
      "Referral rewards are credited after your friend has been active for 30 days",
  },
  {
    id: 2,
    description: "Maximum of 10 successful referrals per calendar year",
  },
  {
    id: 3,
    description: "Both you and your friend must have active accounts",
  },
  {
    id: 4,
    description:
      "Credits can be used towards premium features or withdrawn to your bank account",
  },
  {
    id: 5,
    description:
      "FinTrack reserves the right to modify or terminate the referral program at any time",
  },
];
