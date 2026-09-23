import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { pageMetadata } from "@/lib/page-metadata";
import { events } from "@/content/events";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description:
    "Upcoming Stand Up Sis workshops, networking and community events for women in business across the UK.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, networking and community — in person and online."
        description="Our events calendar is just getting started. Join the community to hear the moment something is confirmed."
        variant="mesh"
      />

      <Section>
        {events.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <RevealOnScroll key={event.slug} delay={i * 50}>
                <EventCard event={event} />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Our first events are being planned"
            description="We're lining up our first workshops and community gatherings. Join the community and we'll let you know the moment dates are confirmed."
          >
            <Button href="/community" variant="primary">
              Join the Community
            </Button>
          </EmptyState>
        )}
      </Section>
    </>
  );
}
