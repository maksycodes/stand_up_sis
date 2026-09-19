import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { programmes } from "@/content/programmes";
import { events } from "@/content/events";
import { insights } from "@/content/insights";

const staticRoutes = [
  "",
  "/about",
  "/programmes",
  "/community",
  "/events",
  "/mentorship",
  "/partnerships",
  "/impact",
  "/insights",
  "/contact",
  "/privacy",
  "/accessibility",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const programmeEntries: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${siteConfig.url}/programmes/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${siteConfig.url}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${siteConfig.url}/insights/${i.slug}`,
    lastModified: new Date(i.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...programmeEntries, ...eventEntries, ...insightEntries];
}
