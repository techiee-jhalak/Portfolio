import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

/**
 * Editorial Section Heading component.
 * Displays the index number in JetBrains Mono and the title in Space Grotesk.
 */
export function SectionHeading({
  number,
  title,
  subtitle,
  badge,
  className,
  ...props
}: SectionHeadingProps) {
  // Format number if passed as plain digits (e.g., "1" -> "01")
  const formattedNumber = number.padStart(2, "0");

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
          {formattedNumber}
        </span>
        <span className="font-mono text-xs text-border tracking-widest" aria-hidden="true">
          /
        </span>
        {badge && (
          <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-display-2 font-bold tracking-tight text-foreground uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="font-mono text-xs text-muted max-w-xl tracking-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
