import { createContext } from "react";

//theme type declear
export type Theme = "light" | "dark";

// supported color keys (must match CSS)
export type ThemeColorKey =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "surface"
  | "background"
  | "card"
  | "body"
  | "shadow"
  | "input-border"
  | "border";

//context have
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  //handle color
  primaryColor: string; // for UI (color picker etc.)

  setThemeColor: (key: ThemeColorKey, color: string) => void;
  resetThemeColor: (key: ThemeColorKey) => void;
}

//create context declear
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
