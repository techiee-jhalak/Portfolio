/**
 * Achievements & Open Source Data Model
 * Source of truth: Verified open-source contribution programs, academic milestones, and portfolio achievements.
 * No invented statistics, stars, PR counts, or rankings.
 */

export interface OpenSourceProgram {
  code: string;
  name: string;
  period: string;
  role: string;
}

export interface EditorialAchievement {
  stat: string;
  line1: string;
  line2: string;
  category: "research" | "experience" | "engineering" | "opensource";
}

/**
 * Verified Open Source Contribution Programs
 */
export const openSourcePrograms: OpenSourceProgram[] = [
  {
    code: "GSSoC'26",
    name: "GirlScript Summer of Code",
    period: "2026",
    role: "Open Source Contributor",
  },
  {
    code: "NSSoC'26",
    name: "National Social Summer of Code",
    period: "2026",
    role: "Open Source Contributor",
  },
  {
    code: "SSoC / SEASON 5",
    name: "Social Summer of Code Season 5",
    period: "2026",
    role: "Open Source Contributor",
  },
];

/**
 * Editorial Achievement Composition
 * Uses oversized typography and concise editorial labels rather than dashboard cards.
 */
export const editorialAchievements: EditorialAchievement[] = [
  {
    stat: "03",
    line1: "RESEARCH",
    line2: "PAPERS",
    category: "research",
  },
  {
    stat: "IISc",
    line1: "RESEARCH",
    line2: "INTERNSHIP",
    category: "experience",
  },
  {
    stat: "02",
    line1: "DEPLOYED",
    line2: "PROJECTS",
    category: "engineering",
  },
  {
    stat: "ACTIVE",
    line1: "OPEN SOURCE",
    line2: "CONTRIBUTOR",
    category: "opensource",
  },
];

// Backwards-compatibility alias
export const achievementsData = editorialAchievements;
