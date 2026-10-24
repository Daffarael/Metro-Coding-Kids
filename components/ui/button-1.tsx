import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "unstyled" | "outline" | "ghost";
  svgOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", svgOnly = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          "inline-flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "unstyled" && "border-none bg-transparent p-0 text-inherit focus:outline-none",
          variant === "default" && "rounded-xl bg-[#143D2B] text-white px-4 py-2 text-sm font-bold",
          svgOnly && "p-1.5 rounded-full hover:bg-slate-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
