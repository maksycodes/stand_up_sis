import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DotRing } from "@/components/ui/DotRing";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="This page hasn't been built yet." />
      <Section>
        <div className="flex flex-col items-center gap-6 text-center">
          <DotRing size={160} filled={3} />
          <p className="max-w-md text-lg text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist — it may have moved, or it&apos;s part of what
            we&apos;re still building.
          </p>
          <Button href="/">Back to home</Button>
        </div>
      </Section>
    </>
  );
}
