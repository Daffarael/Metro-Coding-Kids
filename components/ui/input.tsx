import React from "react";
import clsx from "clsx";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "prefix"> {
  prefix?: React.ReactNode;
  prefixStyling?: boolean;
  suffix?: React.ReactNode;
  suffixStyling?: string;
  error?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: ((value: string) => void) | React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefix,
      prefixStyling = true,
      suffix,
      suffixStyling,
      error = false,
      size = "medium",
      disabled = false,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === "function") {
        // Support both (value: string) => void and React.ChangeEventHandler
        try {
          (onChange as (val: string) => void)(e.target.value);
        } catch {
          (onChange as React.ChangeEventHandler<HTMLInputElement>)(e);
        }
      }
    };

    const sizeClasses = {
      small: "h-9 text-xs px-2.5",
      medium: "h-11 sm:h-12 text-xs sm:text-sm px-3.5",
      large: "h-13 sm:h-14 text-sm sm:text-base px-4",
    }[size];

    return (
      <div
        className={clsx(
          "relative flex items-center w-full rounded-xl bg-white border-2 transition-all",
          error
            ? "border-red-500 ring-2 ring-red-200"
            : "border-[#143D2B]/20 focus-within:border-[#143D2B] focus-within:ring-2 focus-within:ring-[#143D2B]/10",
          disabled && "bg-slate-100 cursor-not-allowed opacity-60",
          sizeClasses
        )}
      >
        {prefix && (
          <span
            className={clsx(
              "flex items-center justify-center shrink-0 text-[#143D2B]/60 mr-2",
              prefixStyling && "pointer-events-none"
            )}
          >
            {prefix}
          </span>
        )}

        <input
          ref={ref}
          value={value ?? ""}
          onChange={handleChange}
          disabled={disabled}
          suppressHydrationWarning
          className={clsx(
            "w-full bg-transparent font-medium text-[#143D2B] placeholder:text-slate-400 focus:outline-none",
            className
          )}
          {...props}
        />

        {suffix && (
          <span
            className={clsx(
              "flex items-center justify-center shrink-0 text-[#143D2B]/70 ml-2",
              suffixStyling
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
