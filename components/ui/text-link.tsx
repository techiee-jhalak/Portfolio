import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
  arrowPosition?: "right" | "top-right";
  variant?: "inline" | "boxed" | "underline";
}

/**
 * Editorial arrow-based link component.
 * Features animated arrow translation, precise borders, and refined transitions.
 */
export function TextLink({
  href,
  isExternal,
  variant = "inline",
  className,
  children,
  ...props
}: TextLinkProps) {
  const isExt = isExternal ?? (href.startsWith("http://") || href.startsWith("https://"));

  const baseStyles =
    "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent select-none cursor-pointer";

  const variantStyles = {
    inline: "text-muted hover:text-foreground",
    boxed:
      "border border-border bg-[#0d0d0d] px-3.5 py-2 text-foreground hover:border-accent hover:text-accent",
    underline:
      "text-foreground border-b border-border pb-0.5 hover:border-accent hover:text-accent",
  };

  const arrow = (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      ↗
    </span>
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow}
    </>
  );

  if (isExt) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {content}
    </Link>
  );
}
