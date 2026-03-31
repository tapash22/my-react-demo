import { useEffect, useState, type ReactNode } from "react";
import { type Theme, ThemeContext } from "../hooks/useContext/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [primaryColorState, setPrimaryColorState] = useState("#4f46e5");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setPrimaryColor = (color: string) => {
    setPrimaryColorState(color);

    const root = document.documentElement;

    // override theme color
    root.style.setProperty("--primary-override", color);
  };

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    // reset theme default primary
    root.style.setProperty("--primary-color", primaryColorState);
  }, [theme, primaryColorState]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        primaryColor: primaryColorState,
        setPrimaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
