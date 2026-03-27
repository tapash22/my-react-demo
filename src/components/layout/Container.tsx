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
          direction === "column"
            ? "flex-col "
            : "flex-col sm:flex-col lg:flex-row xl:flex-row "
        } gap-3 w-full  ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
