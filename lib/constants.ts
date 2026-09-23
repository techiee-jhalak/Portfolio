/**
 * Global Constants & Site Configuration
 * Single source of truth for site-wide defaults, navigation, and design tokens.
 */

export const SITE_CONFIG = {
  name: "Jhalak Omar",
  logotype: "EXPLORE.",
  title: "Jhalak Omar — AI / ML Engineer",
  shortTitle: "Jhalak Omar | AI / ML Engineer",
  description:
    "Personal portfolio of Jhalak Omar — AI / ML Engineer specializing in Machine Learning, Generative AI, and Intelligent Systems.",
  url: "https://jhalakomar.dev",
  locale: "en_US",
} as const;

/**
 * Primary page navigation — anchor-based for single-page scrolling.
 * index: display number, id: section anchor id
 */
export const NAV_ITEMS = [
  { index: "01", label: "Home",      href: "/#hero",       id: "hero"      },
  { index: "02", label: "About",     href: "/#about",      id: "about"     },
  { index: "03", label: "Expertise", href: "/#expertise",  id: "expertise" },
  { index: "04", label: "Work",      href: "/#work",       id: "work"      },
  { index: "05", label: "Research",  href: "/#research",   id: "research"  },
  { index: "06", label: "Journey",   href: "/#journey",    id: "journey"   },
  { index: "07", label: "Contact",   href: "/#contact",    id: "contact"   },
] as const;

/**
 * Top-level page routes (non-anchor).
 */
export const ROUTES = [
  { path: "/",        label: "Index" },
  { path: "/projects", label: "Work"  },
] as const;

export const DESIGN_TOKENS = {
  colors: {
    background: "#080808",
    foreground: "#F5F5F5",
    muted:      "#858585",
    border:     "#242424",
    accent:     "#C6B37E",
  },
  typography: {
    display: "Space Grotesk, sans-serif",
    mono:    "JetBrains Mono, monospace",
  },
  cursorStates: ["DEFAULT", "VIEW", "OPEN", "IMAGE"] as const,

  /**
   * Header height in px — used for scroll-margin-top on anchor sections.
   * Keep in sync with the actual rendered header height.
   */
  headerHeight: 56,
} as const;
