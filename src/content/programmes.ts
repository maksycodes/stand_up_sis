export type ProgrammeCategory =
  | "Business & Entrepreneurship"
  | "Funding & Pitching"
  | "Mentorship"
  | "Career & Leadership"
  | "Community & Networking"
  | "Workshops & Events"
  | "Wellness";

export const programmeCategories: ProgrammeCategory[] = [
  "Business & Entrepreneurship",
  "Funding & Pitching",
  "Mentorship",
  "Career & Leadership",
  "Community & Networking",
  "Workshops & Events",
  "Wellness",
];

export type Programme = {
  slug: string;
  title: string;
  category: ProgrammeCategory;
  summary: string;
  description: string;
  eligibility?: string;
  location?: string;
  dates?: string;
  availability?: "Open" | "Waitlist" | "Coming soon";
  ctaLabel: string;
  ctaHref: string;
};

/**
 * No programmes are confirmed yet — this stays empty until real dates,
 * eligibility and availability are provided. The directory renders a
 * tasteful "coming soon" state until then. Add entries here as
 * programmes are confirmed.
 */
export const programmes: Programme[] = [];
