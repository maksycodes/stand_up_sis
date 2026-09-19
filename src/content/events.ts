export type EventFormat = "In person" | "Online" | "Hybrid";
export type EventPrice = "Free" | "Paid";
export type EventStatus = "Open" | "Waitlist" | "Sold out";

export type SusEvent = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  startsAt: string; // ISO date-time
  endsAt?: string;
  location: string;
  format: EventFormat;
  price: EventPrice;
  priceDetails?: string;
  status: EventStatus;
  ctaLabel: string;
};

/**
 * No events are confirmed yet. Add entries here as dates, venues and
 * pricing are set — the listing and detail pages are built to handle
 * any number of events, including sold-out/waitlist states.
 */
export const events: SusEvent[] = [];
