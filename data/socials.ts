/**
 * Social Links Data Model
 * Source of truth: Explicitly verified social platforms and direct contacts.
 */

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  label: string;
  isPrimary?: boolean;
}

export const socialLinksData: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/techiee-jhalak/",
    username: "techiee-jhalak",
    label: "View GitHub Profile",
    isPrimary: true,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/jhalak-omar",
    username: "jhalak-omar",
    label: "Connect on LinkedIn",
    isPrimary: true,
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/techiee-jhalak/",
    username: "techiee-jhalak",
    label: "View LeetCode Profile",
    isPrimary: true,
  },
  {
    platform: "Email",
    url: "mailto:jhalakomar2006@gmail.com",
    username: "jhalakomar2006@gmail.com",
    label: "Send Direct Email",
    isPrimary: true,
  },
];
