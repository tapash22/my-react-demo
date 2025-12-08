import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 bg-(--surface) text-(--foreground) shadow-(--shadow) flex justify-between">
      <h1 className="font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded border border-[var(--input-border)] bg-[var(--card-bg)] text-[var(--demo)] shadow-[var(--shadow-button)]"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
