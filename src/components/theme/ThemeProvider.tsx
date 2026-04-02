import { useEffect, useState, type ReactNode } from "react";
import {
  type Theme,
  type ThemeColorKey,
  ThemeContext,
} from "../hooks/useContext/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  //  keep only for UI (optional)
  const [primaryColorState, setPrimaryColorState] = useState("#4f46e5");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setThemeColor = (key: ThemeColorKey, color: string) => {
    const root = document.documentElement;

    root.style.setProperty(`--${key}-override`, color, "important");

    if (key === "primary") {
      setPrimaryColorState(color);
    }
  };

  // RESET
  const resetThemeColor = (key: ThemeColorKey) => {
    const root = document.documentElement;
    root.style.removeProperty(`--${key}-override`);

    if (key === "primary") {
      setPrimaryColorState("#4f46e5");
    }
  };

  useEffect(() => {
    const root = document.documentElement;

    //toggle dark class
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        primaryColor: primaryColorState,
        setThemeColor,
        resetThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
