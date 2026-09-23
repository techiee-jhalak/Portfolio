import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Editorial technical button component.
 * Sharp geometry, precise thin borders, fast and refined micro-interactions.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "group relative inline-flex items-center justify-center font-mono font-medium tracking-wider uppercase transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer";

    const variantStyles = {
      // Primary: High-contrast editorial button with subtle accent hover border/accent indicator
      primary:
        "bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground hover:border-accent active:translate-y-[1px]",
      // Secondary: Technical dark button with subtle border
      secondary:
        "bg-[#111111] text-foreground border border-border hover:border-muted hover:text-white active:translate-y-[1px]",
      // Outline: Minimal sharp outline with accent hover
      outline:
        "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent active:translate-y-[1px]",
      // Ghost: Subdued text with borderless hover
      ghost:
        "bg-transparent text-muted hover:text-foreground hover:bg-[#141414]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-[11px]",
      md: "h-10 px-5 text-xs",
      lg: "h-12 px-7 text-xs tracking-widest",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
