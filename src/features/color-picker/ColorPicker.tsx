import { DemoButton } from "../../components/button/DemoButton";
import { useTheme } from "../../components/hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export function ColorPicker() {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* theme toggle */}
      <DemoButton
        onClick={toggleTheme}
        icon={theme !== "dark" ? FaMoon : FaSun}
        iconSize={20}
        buttonColor="var(--primary-override, var(--primary-color))"
        classTag="p-1 flex justify-center items-center rounded-full ring-1 ring-(--muted)"
      />

      {/* color Picker */}
      <input
        type="color"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        className="w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
