import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  getExperienceBySlug,
  getAllExperienceSlugs,
} from "@/lib/experiences";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllExperienceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return { title: "Experience Not Found" };
  }

  return {
    title: `${experience.role} · ${experience.company}`,
    description: experience.description,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <Container size="wide" className="pb-32 pt-14 sm:pt-20">
      <Link
        href="/#work"
        className="editorial-link mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink-muted"
      >
        ← Back to work
      </Link>

      <header className="grid grid-cols-1 gap-8 border-b border-rule pb-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mono-strip flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>▌ {experience.type}</span>
            <span aria-hidden className="text-ink-faint/60">·</span>
            <span>{experience.period}</span>
            <span aria-hidden className="text-ink-faint/60">·</span>
            <span>{experience.location}</span>
          </p>

          <h1
            className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight2 text-ink sm:text-6xl md:text-7xl text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {experience.company}
          </h1>

          <p className="mt-4 font-display text-xl text-ink md:text-2xl">
            {experience.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted text-pretty md:text-lg">
            {experience.description}
          </p>
        </div>

        <aside className="lg:col-span-3">
          <p className="mono-strip">▌ Stack</p>
          <ul className="mt-3 space-y-1.5 font-mono text-xs leading-relaxed text-ink">
            {experience.technologies.map((tech) => (
              <li key={tech} className="flex gap-2">
                <span className="text-accent" aria-hidden>›</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      {experience.achievements && experience.achievements.length > 0 && (
        <section className="mt-16">
          <p className="mono-strip">▌ Receipts</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
            {experience.achievements.map((a, i) => (
              <div key={i} className="border-t border-rule-strong pt-4">
                <dt className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
                  Metric
                </dt>
                <dd
                  className="mt-2 font-display text-4xl font-semibold leading-none tracking-tight3 text-ink md:text-5xl"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                >
                  {a.metric}
                </dd>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {a.description}
                </p>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mt-20">
        <p className="mono-strip">▌ What got built</p>
        <ol className="mt-8">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-3 border-b border-rule py-7 md:grid-cols-12 md:gap-x-8"
            >
              <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-2 md:pt-1">
                <span className="text-accent">§</span> {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-lg leading-relaxed text-ink text-pretty md:col-span-10">
                {highlight}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-20 border-t border-rule pt-8">
        <Link
          href="/#work"
          className="editorial-link inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink"
        >
          ← All work
        </Link>
      </footer>
    </Container>
  );
}
