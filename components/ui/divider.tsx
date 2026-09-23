import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  withCrosshair?: boolean;
}

/**
 * Technical horizontal divider component.
 * Features thin borders, optional coordinate/label markers, and prepared structure for reveal animations.
 */
export function Divider({
  label,
  withCrosshair = false,
  className,
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      className={cn("relative my-8 w-full flex items-center", className)}
      {...props}
    >
      <div className="h-[1px] w-full bg-border/60 transition-all duration-300" />

      {withCrosshair && (
        <span
          aria-hidden="true"
          className="absolute left-0 -translate-x-1/2 font-mono text-[10px] text-border select-none"
        >
          +
        </span>
      )}

      {label && (
        <div className="absolute right-0 bg-background pl-3 font-mono text-[10px] tracking-widest text-muted uppercase select-none">
          {label}
        </div>
      )}

      {withCrosshair && (
        <span
          aria-hidden="true"
          className="absolute right-0 translate-x-1/2 font-mono text-[10px] text-border select-none"
        >
          +
        </span>
      )}
    </div>
  );
}
