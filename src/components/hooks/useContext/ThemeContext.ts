import { createContext } from "react";

//theme type declear
export type Theme = "light" | "dark";

//context have
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  //handle color
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

//create context declear
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
