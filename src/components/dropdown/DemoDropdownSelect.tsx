import { useEffect, useRef, useState } from "react";

interface DemoDropdownSelectProps<T extends string> {
  value: T;
  options: T[];
  onChange: (value: T) => void;
  width?: string; // tailwind width class, e.g. "w-56"
}

export function DemoDropdownSelect<T extends string>({
  value,
  options,
  onChange,
  width = "w-56",
}: DemoDropdownSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${width}`}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="h-10 w-full rounded-md border px-3 text-left text-(--foreground) flex items-center justify-between"
      >
        <span className="truncate">
          {value ? value.charAt(0).toUpperCase() + value.slice(1) : "Select"}
        </span>
        <span className="ml-2 font-bold text-xl">▾</span>
      </button>
      l{/* Dropdown */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border bg-(--background) shadow">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-(--sidebar-hover-bg)"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
