import {
  FaHome,
  FaHandHoldingMedical,
  FaRegChartBar,
  FaUsers,
  FaUser,
} from "react-icons/fa";
import type { Page } from "../assets/type/budget-type";
import { FiCreditCard } from "react-icons/fi";
import { FaPhotoFilm, FaArrowTrendUp } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

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

//sidebar routing list
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
    name: "Referrals",
    path: "referrals",
    icon: FaUsers,
  },
  {
    name: "Settings",
    path: "settings",
    icon: IoMdSettings,
  },
  {
    name: "Gallery",
    path: "gallery",
    icon: FaPhotoFilm,
  },
];
//dropdown link usage
export const pages: Page[] = [
  {
    name: "Home",
    path: "home",
    icon: FaHome,
  },
  {
    name: "Profile",
    path: "profile",
    icon: FaUser,
  },
];
