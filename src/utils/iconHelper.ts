import {
  FaHome,
  FaShieldAlt,
  FaCar,
  FaUmbrellaBeach,
  FaGraduationCap,
  FaGift,
} from "react-icons/fa";

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
