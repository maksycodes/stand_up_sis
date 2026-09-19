export type InsightCategory =
  | "Business Guides"
  | "Funding"
  | "Founder Stories"
  | "Career"
  | "Event Recaps"
  | "Opportunities"
  | "Stand Up Sis Updates";

export const insightCategories: InsightCategory[] = [
  "Business Guides",
  "Funding",
  "Founder Stories",
  "Career",
  "Event Recaps",
  "Opportunities",
  "Stand Up Sis Updates",
];

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  publishedAt: string; // ISO date
  readingMinutes: number;
  body: string[]; // paragraphs
};

/**
 * No articles published yet. The hub is structured for SEO (categories,
 * per-article metadata) and ready to receive content as it's written.
 */
export const insights: Insight[] = [];
