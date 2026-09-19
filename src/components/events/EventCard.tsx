import Link from "next/link";
import { Card, Badge } from "@/components/ui/Card";
import type { SusEvent } from "@/content/events";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit" });
}

const statusTone: Record<SusEvent["status"], "berry" | "gold" | "ink"> = {
  Open: "berry",
  Waitlist: "gold",
  "Sold out": "ink",
};

export function EventCard({ event }: { event: SusEvent }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={statusTone[event.status]}>{event.status}</Badge>
        <Badge tone="ink">{event.price}</Badge>
        <Badge tone="ink">{event.format}</Badge>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">{event.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{event.summary}</p>
      </div>
      <dl className="text-sm text-ink-soft">
        <div className="flex gap-2">
          <dt className="font-semibold text-ink">When</dt>
          <dd>
            {formatDate(event.startsAt)} · {formatTime(event.startsAt)}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-ink">Where</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>
      <Link href={`/events/${event.slug}`} className="text-sm font-semibold text-deep hover:text-ink">
        {event.status === "Sold out" ? "Join the waitlist →" : "View details & register →"}
      </Link>
    </Card>
  );
}
