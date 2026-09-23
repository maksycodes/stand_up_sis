import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, Badge } from "@/components/ui/Card";
import { DotRing } from "@/components/ui/DotRing";
import { EmptyState } from "@/components/ui/EmptyState";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Mark } from "@/components/brand/Mark";
import { EventCard } from "@/components/events/EventCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { programmeCategories, programmes } from "@/content/programmes";
import { events } from "@/content/events";

const audiences = [
  {
    title: "Aspiring entrepreneurs",
    description: "You've got the idea. You want the grounding to take it seriously.",
  },
  {
    title: "Early-stage founders",
    description: "You've started. You need the next set of tools, and people who get it.",
  },
  {
    title: "Business owners ready to grow",
    description: "You're trading. You want sharper strategy, funding routes and a wider network.",
  },
  {
    title: "Women building their network",
    description: "You're looking for rooms with the right people in them.",
  },
  {
    title: "Women seeking mentorship",
    description: "You want a steer from someone who's already done it.",
  },
  {
    title: "Women facing barriers to access",
    description: "Funding, networks or knowledge have been harder to reach than they should be. That changes here.",
  },
];

const offerDescriptions: Record<string, string> = {
  "Business & Entrepreneurship": "Practical workshops and training to build a business that holds up.",
  "Funding & Pitching": "Understanding funding routes, and preparing a pitch that lands.",
  "Mentorship": "One-to-one guidance from women who've built what you're building.",
  "Career & Leadership": "Confidence, leadership and career development programmes.",
  "Community & Networking": "Rooms full of ambitious women, and the events that bring them together.",
  "Workshops & Events": "Skills sessions, panels and gatherings — in person and online.",
  "Wellness": "Because building something ambitious shouldn't cost you everything else.",
};

const involvementPaths = [
  {
    title: "Join the community",
    description: "Register your interest and be first to hear about programmes, events and opportunities.",
    href: "/community",
    cta: "Join the community",
  },
  {
    title: "Become a mentor",
    description: "Share what you know with a woman building what you once built.",
    href: "/mentorship",
    cta: "Become a mentor",
  },
  {
    title: "Partner with us",
    description: "Councils, funders, corporates and organisations — there's a role for you here.",
    href: "/partnerships",
    cta: "Partner with us",
  },
  {
    title: "Come to an event",
    description: "Workshops, networking and community gatherings, as they're announced.",
    href: "/events",
    cta: "See what's on",
  },
];

export default function Home() {
  const hasOpportunities = programmes.length > 0 || events.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-berry)" }}
          aria-hidden="true"
        />
        <Container className="relative flex flex-col gap-12 py-20 sm:py-28 lg:flex-row lg:items-center lg:gap-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              Stand Up Sis CIC · Rise &amp; Flourish
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Ambition shouldn&apos;t depend on <span className="italic text-pink">access</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              Stand Up Sis is a community interest company built for women ready to build stronger businesses,
              careers, confidence and networks — with the mentorship, education and community to back it up.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/community" variant="reversed" size="lg">
                Join the Community
              </Button>
              <Button href="/partnerships" size="lg" className="border border-paper/30 text-paper hover:bg-paper/10">
                Partner With Us
              </Button>
            </div>
          </div>
          <div className="mx-auto shrink-0" aria-hidden="true">
            <DotRing size={280} filled={8} className="h-40 w-40 lg:h-[280px] lg:w-[280px]" />
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Mark tone="brand" className="h-14 w-14" />
            <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">Our mission</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              We exist to close the gap between ambition and access — building a community where women get the
              practical tools, honest guidance and genuine connections to grow on their own terms.
            </p>
            <p>
              Not a rescue mission. Infrastructure. Stand Up Sis is for capable women who deserve better access to
              resources, networks, knowledge, opportunities and the room to grow.
            </p>
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="deep">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Who Stand Up Sis is for</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Wherever you are in building your business or career, there&apos;s a place for you here.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <RevealOnScroll key={a.title} delay={i * 50}>
              <Card>
                <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* What we offer */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">What we&apos;re building</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Our programme is growing. Here&apos;s the shape of what Stand Up Sis offers, and what&apos;s coming
              next.
            </p>
          </div>
          <Link href="/programmes" className="-my-2 inline-block py-2 text-sm font-semibold text-deep hover:text-ink">
            View all programmes →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmeCategories.map((category, i) => (
            <RevealOnScroll key={category} delay={i * 50}>
              <Card className="flex h-full flex-col gap-3">
                <h3 className="sr-only">{category}</h3>
                <Badge>{category}</Badge>
                <p className="text-sm leading-relaxed text-ink-soft">{offerDescriptions[category]}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Upcoming opportunities */}
      <Section tone="deep">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Upcoming opportunities</h2>
          <p className="mt-4 text-lg text-ink-soft">Programmes and events, as they&apos;re confirmed.</p>
        </div>
        <div className="mt-10">
          {hasOpportunities ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {events.slice(0, 3).map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
              {programmes.slice(0, Math.max(0, 3 - events.length)).map((programme) => (
                <Card key={programme.slug} className="flex flex-col gap-3">
                  <Badge>{programme.category}</Badge>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{programme.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{programme.summary}</p>
                  </div>
                  <Link
                    href={`/programmes/${programme.slug}`}
                    className="text-sm font-semibold text-deep hover:text-ink"
                  >
                    Learn more →
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Our first opportunities are being shaped"
              description="We're developing our first workshops, mentorship cohorts and events. Join the community and you'll be the first to hear when applications open."
            >
              <Button href="/community" variant="primary">
                Join the Community
              </Button>
            </EmptyState>
          )}
        </div>
      </Section>

      {/* Why we exist */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Why we exist</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Stand Up Sis was founded as a Community Interest Company — a legal structure that locks our
                activities and any surplus to our social purpose, not private profit.
              </p>
              <p>
                We started because too many capable women hit the same barriers: to funding, to the right
                introductions, to affordable space, to straight advice. None of that is a reflection of ability.
                It&apos;s a reflection of access. So we&apos;re building the access.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-ink p-10 text-paper">
            <p className="font-display text-2xl font-semibold italic leading-snug text-pink">
              &ldquo;Stand up. Build. Grow. Together.&rdquo;
            </p>
            <p className="mt-4 text-sm text-paper/70">
              The idea behind the name — one woman&apos;s encouragement to another, and a community that shows up.
            </p>
          </div>
        </div>
      </Section>

      {/* Ways to get involved */}
      <Section tone="deep">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ways to get involved</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {involvementPaths.map((path, i) => (
            <RevealOnScroll key={path.title} delay={i * 50}>
              <Link href={path.href} className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-deep">
                <Card interactive className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{path.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{path.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-deep group-hover:text-ink">{path.cta} →</span>
                </Card>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Partners / funders */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge tone="gold">For councils, funders &amp; partners</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              A serious organisation to build with
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              We&apos;re building relationships with councils, grant funders, corporate sponsors and delivery
              partners from day one. If you support women&apos;s economic development, there&apos;s a genuine role
              for you in what we&apos;re building — from programme sponsorship to workshop delivery to workspace
              partnerships.
            </p>
            <div className="mt-8">
              <Button href="/partnerships" size="lg">
                Explore partnerships
              </Button>
            </div>
          </div>
          <Link href="/impact" className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-deep">
            <Card interactive className="bg-paper-deep">
              <h3 className="font-display text-lg font-semibold text-ink">Our impact journey is beginning</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We&apos;re building the systems to measure what matters — women supported, businesses started and
                grown, funding accessed, mentors involved. Read our approach on the Impact page.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-deep group-hover:text-ink">
                See our impact approach →
              </span>
            </Card>
          </Link>
        </div>
      </Section>

      {/* Signup */}
      <Section tone="deep">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Be part of it from the start</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Join the mailing list for opportunities, events and community news.
          </p>
          <div className="mx-auto mt-6 max-w-md text-left">
            <NewsletterForm tone="light" />
          </div>
        </div>
      </Section>
    </>
  );
}
