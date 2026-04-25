import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container size="wide" className="pb-32 pt-20">
      <p className="mono-strip">§ Error · Route not located</p>
      <h1
        className="mt-4 font-display font-semibold leading-[0.95] tracking-tight2 text-ink text-[clamp(2.5rem,7.5vw,5.25rem)]"
        style={{ fontVariationSettings: '"opsz" 96' }}
      >
        404<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-2xl font-display text-2xl leading-[1.2] tracking-tight2 text-ink-muted text-pretty md:text-3xl">
        The file you&apos;re looking for isn&apos;t in this volume. Maybe it
        was never published — or maybe an archivist moved it.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-mono uppercase border border-ink px-5 py-3 text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          ← Return to index
        </Link>
        <Link
          href="/articles"
          className="editorial-link font-mono text-[11px] tracking-mono uppercase text-ink"
        >
          Read writing →
        </Link>
      </div>
    </Container>
  );
}
