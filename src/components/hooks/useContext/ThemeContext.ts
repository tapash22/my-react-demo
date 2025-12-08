import { createContext } from "react";

//theme type declear
export type Theme = "light" | "dark";

//context have
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

//create context declear
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
