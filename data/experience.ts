/**
 * Experience & Progression Data Model
 * Source of truth: Verified professional internships, research appointments, and formal education.
 * No invented dates, positions, or metrics.
 */

export interface JourneyItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  details?: string[];
  type: "experience" | "education";
}

export const journeyData: JourneyItem[] = [
  {
    period: "2026",
    role: "RESEARCH INTERN",
    organization: "IISc BANGALORE",
    location: "Bengaluru, India",
    description:
      "Engaged in AI / ML systems research, investigating deep learning architectures and intelligent computational models at the Indian Institute of Science.",
    details: [
      "AI / ML Systems Research",
      "Model Architecture Analysis",
      "Scientific Computing",
    ],
    type: "experience",
  },
  {
    period: "2024 — 2028",
    role: "B.TECH COMPUTER SCIENCE & ENGINEERING",
    organization: "UNDERGRADUATE STUDIES",
    location: "Greater Lucknow Area, India",
    description:
      "Core academic curriculum in data structures, algorithms, operating systems, database management systems, and discrete mathematical foundations.",
    details: [
      "Data Structures & Algorithms",
      "Operating Systems & Architecture",
      "Database Systems",
    ],
    type: "education",
  },
];

// Backwards-compatibility alias
export const experienceData = journeyData;
