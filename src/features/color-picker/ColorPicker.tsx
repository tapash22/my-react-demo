import { DemoButton } from "../../components/button/DemoButton";
import { useTheme } from "../../components/hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export function ColorPicker() {
  const { theme, toggleTheme, primaryColor, setThemeColor, resetThemeColor } =
    useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* theme toggle */}
      {/* <DemoButton
        onClick={toggleTheme}
        icon={theme !== "dark" ? FaMoon : FaSun}
        iconSize={20}
        buttonColor="var(--surface)"
        classTag="p-1 flex justify-center items-center rounded-full ring-1 ring-(--muted)"
      /> */}
      <DemoButton
        onClick={toggleTheme}
        icon={theme !== "dark" ? FaMoon : FaSun}
        iconSize={20}
        iconClass="hover:text-(--pick) transition-all duration-300 "
        buttonColor="var(--surface)"
        classTag="
          p-2 flex justify-center items-center rounded-full 
          ring-2 ring-[var(--border)] 
        "
      />
      {/* color Picker */}
      <input
        type="color"
        value={primaryColor}
        onChange={(e) => setThemeColor("pick", e.target.value)}
        className="w-10 h-10 rounded-full cursor-pointer p-0 border-0 overflow-hidden
                  [&::-webkit-color-swatch]:rounded-full
                  [&::-webkit-color-swatch]:border-none
                  [&::-webkit-color-swatch-wrapper]:p-0
                 "
      />
      <DemoButton
        title="Reset"
        onClick={() => resetThemeColor("pick")}
        iconSize={20}
        buttonColor="var(--surface)"
        classTag="
          px-3 py-1 flex justify-center items-center 
          ring-2 ring-[var(--input-border)] border-(--input-border) rounded-lg
        "
      />
    </div>
  );
}
