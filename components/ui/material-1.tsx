import React from "react";
import clsx from "clsx";

export interface MaterialProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "menu" | "card" | "surface";
}

export const Material = React.forwardRef<HTMLDivElement, MaterialProps>(
  ({ className, type = "card", children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white rounded-2xl transition-all",
          type === "menu" &&
            "border-2 border-[#143D2B] shadow-2xl overflow-hidden backdrop-blur-md z-50",
          type === "card" && "border-2 border-[#143D2B]/15 shadow-md",
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Material.displayName = "Material";
