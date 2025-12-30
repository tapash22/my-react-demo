import React, { useState } from "react";

export type Option = {
  id: number | string;
  label: string;
  value: string;
};
type DropdownProps = {
  options: Option[];
  label: string;
  onChange: (value: Option | null) => void;
};
export function DemoSelect({ options, label, onChange }: DropdownProps) {
  const [selected, setSelected] = useState<Option | null>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const obj = value ? JSON.parse(value) : null;
    setSelected(obj);
    onChange(obj);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <label className="block mb-2 text-sm font-medium text-(--foreground) ">
        {label}:
      </label>
      <select
        value={selected ? JSON.stringify(selected) : ""}
        onChange={handleChange}
        className="
            block w-full px-4 py-2
            bg-(--surface) 
            border border-(--input-border) 
            rounded-lg
            shadow-sm
            focus:outline-none 
            text-(--foreground) 
            transition
            duration-200
            "
      >
        <option value="" className="text-(--foreground">
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt.id} value={JSON.stringify(opt)}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
