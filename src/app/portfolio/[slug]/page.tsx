import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug, getProjects } from "@/lib/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container size="wide" className="pb-32 pt-14 sm:pt-20">
      <Link
        href="/portfolio"
        className="editorial-link mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink-muted"
      >
        ← Back to work
      </Link>

      <article>
        <header className="grid grid-cols-1 gap-8 border-b border-rule pb-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="mono-strip flex flex-wrap items-center gap-x-3 gap-y-1">
              {project.company && <span>▌ {project.company}</span>}
              {project.role && (
                <>
                  <span aria-hidden className="text-ink-faint/60">·</span>
                  <span>{project.role}</span>
                </>
              )}
            </p>

            <h1
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight2 text-ink sm:text-6xl md:text-7xl text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl font-display text-xl leading-[1.4] text-ink-muted text-pretty md:text-2xl">
              {project.longDescription || project.description}
            </p>
          </div>

          <aside className="lg:col-span-3">
            <p className="mono-strip">▌ Stack</p>
            <ul className="mt-3 space-y-1.5 font-mono text-xs leading-relaxed text-ink">
              {project.tags.map((tag) => (
                <li key={tag} className="flex gap-2">
                  <span className="text-accent" aria-hidden>›</span>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>

            {(project.github || project.live) && (
              <div className="mt-6 flex flex-col gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] tracking-mono uppercase border border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-bg text-center"
                  >
                    Source ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] tracking-mono uppercase border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-bg text-center"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            )}
          </aside>
        </header>

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-16">
            <p className="mono-strip">▌ Field notes · what shipped</p>
            <ol className="mt-8 grid grid-cols-1 gap-y-0">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 gap-3 border-b border-rule py-6 md:grid-cols-12 md:gap-x-8"
                >
                  <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-2 md:pt-1">
                    № {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-lg leading-relaxed text-ink text-pretty md:col-span-10">
                    {highlight}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>

      <footer className="mt-20 border-t border-rule pt-8">
        <Link
          href="/portfolio"
          className="editorial-link inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink"
        >
          ← All work
        </Link>
      </footer>
    </Container>
  );
}
