import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and case studies — AI, cloud architecture, and enterprise software.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Container size="wide" className="pb-24 pt-14 sm:pt-20">
      <header className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mono-strip">§ 02 / Work · {projects.length} entries</p>
          <h1
            className="mt-4 font-display font-semibold leading-[0.95] tracking-tight2 text-ink text-[clamp(2.5rem,7.5vw,5.25rem)]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Work<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="lg:col-span-12">
          <p className="max-w-3xl font-display text-2xl leading-[1.2] tracking-tight2 text-ink-muted text-pretty md:text-3xl">
            A working dossier of shipped systems — from Fortune-500 healthcare
            pipelines to a co-founded multi-agent platform. Selected for what
            they taught, not what they sold.
          </p>
        </div>
      </header>

      <section className="mb-20">
        <h2 className="mono-strip mb-8 border-b border-rule pb-3">
          ▌ Featured · {featured.length}
        </h2>
        <ol className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
          {featured.map((p, i) => (
            <ProjectEntry key={p.slug} project={p} index={i} variant="featured" />
          ))}
        </ol>
      </section>

      {other.length > 0 && (
        <section>
          <h2 className="mono-strip mb-8 border-b border-rule pb-3">
            ▌ Archive · {other.length}
          </h2>
          <ol className="border-t border-rule">
            {other.map((p, i) => (
              <li key={p.slug} className="group border-b border-rule">
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="grid grid-cols-1 gap-3 py-7 md:grid-cols-12 md:gap-x-8"
                >
                  <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-2 md:pt-2">
                    № {String(featured.length + i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight2 text-ink md:text-3xl">
                      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                        {p.title}
                      </span>
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                      {p.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-mono uppercase border border-current/40 px-2 py-0.5"
                          style={{ color: "var(--indigo)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-mono uppercase text-ink transition-colors group-hover:text-accent">
                      Open file →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </Container>
  );
}

interface ProjectEntryProps {
  project: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    company?: string;
    role?: string;
    github?: string;
    live?: string;
    highlights?: string[];
  };
  index: number;
  variant?: "featured" | "default";
}

function ProjectEntry({ project, index }: ProjectEntryProps) {
  return (
    <li className="group">
      <Link href={`/portfolio/${project.slug}`}>
        <p className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
          № {String(index + 1).padStart(2, "0")}
          {project.company && (
            <>
              {" · "}
              <span className="text-ink-muted">{project.company}</span>
            </>
          )}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight2 text-ink md:text-4xl">
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
            {project.title}
          </span>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-muted text-pretty">
          {project.description}
        </p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-5 space-y-2 border-l border-rule-strong pl-4">
            {project.highlights.slice(0, 2).map((h) => (
              <li
                key={h}
                className="font-mono text-xs leading-relaxed text-ink-muted"
              >
                <span className="text-accent">↳</span> {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-mono uppercase border border-current/40 px-2 py-0.5"
              style={{ color: "var(--indigo)" }}
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-mono uppercase text-ink transition-colors group-hover:text-accent">
          Open case file →
        </span>
      </Link>
    </li>
  );
}
