import { forwardRef } from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, direction = "row", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex ${
          direction === "column" ? "flex-col" : ""
        } gap-3 items-start w-full h-auto p-1 space-y-1 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
