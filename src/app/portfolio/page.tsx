import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured projects and case studies in AI, cloud architecture, and enterprise software.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          A collection of projects I&apos;ve built across AI, cloud
          architecture, and enterprise software development. From Fortune 500
          healthcare platforms to innovative AI startups.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Other Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    company?: string;
    role?: string;
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700",
        featured && "md:col-span-1"
      )}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          {project.company && (
            <span className="text-xs font-medium text-teal-500">
              {project.company}
            </span>
          )}
          {project.role && (
            <>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.role}
              </span>
            </>
          )}
        </div>

        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          <Link href={`/portfolio/${project.slug}`}>
            <span className="absolute inset-0 z-10" />
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
