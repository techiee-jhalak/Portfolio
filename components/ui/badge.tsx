import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "indicator";
  size?: "sm" | "md";
}

/**
 * Technical metadata badge component.
 * Uses JetBrains Mono, understated colors, and sharp borders.
 */
export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium uppercase select-none border";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] tracking-wider",
    md: "px-2.5 py-1 text-[11px] tracking-wider",
  };

  const variantStyles = {
    // Understated technical tag
    default: "border-border bg-[#101010] text-muted hover:text-foreground",
    // Accent border/text
    accent: "border-accent/40 bg-accent/5 text-accent",
    // Clean transparent outline
    outline: "border-border/60 bg-transparent text-muted/90",
    // Status indicator with subtle accent dot
    indicator: "border-border bg-[#0d0d0d] text-foreground gap-1.5",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {variant === "indicator" && (
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
        />
      )}
      {children}
    </span>
  );
}
