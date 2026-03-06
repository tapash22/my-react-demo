import React from "react";

interface InputPrependProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prepend?: React.ReactNode;
}

export function InputPrepend({
  prepend,
  className = "",
  ...props
}: InputPrependProps) {
  return (
    <div className="relative w-full">
      {prepend && (
        <span className="absolute inset-y-0 left-3 flex items-center text-(--foreground) pointer-events-none">
          {prepend}
        </span>
      )}

      <input
        {...props}
        className={`w-full rounded-xl border border-(--foreground)  py-2 pr-3 
        ${prepend ? "pl-10" : "pl-3"}
        focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}
