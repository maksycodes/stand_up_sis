import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { EventRegistrationForm } from "@/components/forms/EventRegistrationForm";
import { pageMetadata } from "@/lib/page-metadata";
import { events } from "@/content/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return pageMetadata({ title: "Event", description: "Stand Up Sis event.", path: `/events/${slug}` });
  return pageMetadata({ title: event.title, description: event.summary, path: `/events/${event.slug}` });
}

function formatDateTime(iso?: string) {
  if (!iso) return undefined;
  return new Date(iso).toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function EventDetailPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const isSoldOut = event.status === "Sold out";
  const isWaitlist = event.status === "Waitlist" || isSoldOut;

  return (
    <>
      <PageHero eyebrow={`${event.format} · ${event.price}`} title={event.title} description={event.summary} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>{event.description}</p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Starts</dt>
                <dd className="text-sm font-medium text-ink">{formatDateTime(event.startsAt)}</dd>
              </div>
              {event.endsAt && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Ends</dt>
                  <dd className="text-sm font-medium text-ink">{formatDateTime(event.endsAt)}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Location</dt>
                <dd className="text-sm font-medium text-ink">{event.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Price</dt>
                <dd className="text-sm font-medium text-ink">{event.priceDetails ?? event.price}</dd>
              </div>
            </dl>
          </div>

          <Card className="h-fit space-y-5">
            <Badge tone={isSoldOut ? "ink" : isWaitlist ? "gold" : "berry"}>{event.status}</Badge>
            {isSoldOut && (
              <p className="text-sm text-ink-soft">
                This event is fully booked. Join the waitlist and we&apos;ll let you know if a space opens up.
              </p>
            )}
            <h2 className="font-display text-lg font-semibold text-ink">
              {isWaitlist ? "Join the waitlist" : event.ctaLabel}
            </h2>
            <EventRegistrationForm eventSlug={event.slug} eventTitle={event.title} waitlist={isWaitlist} />
          </Card>
        </div>
      </Section>
    </>
  );
}
