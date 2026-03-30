import { useEffect, useRef, useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { DemoIcon } from "../common-property/DemoIcon";

interface DemoDropdownSelectProps<T extends string> {
  title?: string;
  titleClass?: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
  width?: string; // tailwind width class, e.g. "w-56"
  getLabel?: (value: T) => string;
}

export function DemoDropdownSelect<T extends string>({
  title,
  titleClass,
  value,
  options,
  onChange,
  width = "w-56",
  getLabel,
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
    <div
      className={`
        ${
          title
            ? "flex flex-col sm:flex-col md:flex-row justify-between items-center "
            : "flex flex-row justify-center sm:justify-center md:justify-center items-center "
        }
         w-full h-auto p-2 `}
    >
      {title && (
        <p
          className={`${
            titleClass
              ? titleClass
              : "text-sm font-normal md:font-medium w-full h-aull text-center sm:text-center md:text-start item-center"
          } text-(--foreground) tracking-wide `}
        >
          {title}
        </p>
      )}
      <div
        ref={dropdownRef}
        className={`relative ${width} flex whitespace-nowrap text-sm sm:text-sm md:text-lg font-medium text-center`}
      >
        {/* Button */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="h-10 w-full rounded-md shadow-(--shadow-card) px-3 text-left text-(--foreground) flex items-center justify-between"
        >
          <span className="truncate text-sm font-medium tracking-wide">
            {getLabel
              ? getLabel(value)
              : value
                ? value.charAt(0).toUpperCase() + value.slice(1)
                : "Select"}
          </span>
          <DemoIcon icon={IoCaretDown} size={16} />
        </button>
        {open && (
          <ul className="absolute z-10 mt-1 w-full rounded-md bg-(--background) shadow">
            {options.map((option) => {
              const lastItem = options.length - 1;
              return (
                <li
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-3 hover:bg-(--sidebar-hover-bg) text-sm font-medium tracking-wide ${lastItem ? "border-b border-(--input-border)" : ""}`}
                >
                  {getLabel
                    ? getLabel(option)
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
