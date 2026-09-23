export const siteConfig = {
  name: "Stand Up Sis",
  legalName: "Stand Up Sis CIC",
  tagline: "Rise & Flourish",
  headline: "Ambition shouldn't depend on access.",
  description:
    "Stand Up Sis CIC supports women building stronger businesses, careers and networks — through mentorship, workshops, funding guidance and community.",
  // Set NEXT_PUBLIC_SITE_URL in the environment once the GoDaddy domain is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.standupsis.com",
  locale: "en_GB",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@standupsis.com",
  social: {
    instagram: "",
    linkedin: "",
    tiktok: "",
  },
  keywords: [
    "women in business UK",
    "women entrepreneur support",
    "business mentorship for women",
    "women founder programmes",
    "business workshops for women",
    "female entrepreneur networking",
    "funding support for women entrepreneurs",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
];

// Grouped behind "More" in the header so the primary decision point stays
// under the ~4-item working-memory limit; every page is still one click away.
export const moreNav: NavLink[] = [
  { label: "Mentorship", href: "/mentorship" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Impact", href: "/impact" },
  { label: "Insights", href: "/insights" },
];

export const footerNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Impact", href: "/impact" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms", href: "/terms" },
];
