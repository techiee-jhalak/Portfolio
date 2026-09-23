import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "wide" | "narrow" | "full";
}

/**
 * Reusable editorial layout container.
 * Enforces generous horizontal margins on desktop and safe gutters on mobile.
 */
export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[92rem]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
