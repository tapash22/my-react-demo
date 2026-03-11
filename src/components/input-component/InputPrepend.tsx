import React from "react";

interface InputPrependProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prepend?: React.ReactNode;
}

export function InputPrepend({
  prepend,
  className = "",
  ...props
}: InputPrependProps) {
  return (
    <div className="relative w-auto">
      {prepend && (
        <span className="absolute inset-y-0 left-3 flex items-center  pointer-events-none">
          {prepend}
        </span>
      )}

      <input
        {...props}
        className={`w-full rounded-xl ring-1 ring-(--input-border)  py-2 pr-3 
        ${prepend ? "pl-10" : "pl-3"}
        focus:outline-none focus:ring-2 focus:ring-(--surface) ${className}`}
      />
    </div>
  );
}
