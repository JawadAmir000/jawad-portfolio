import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
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
    <Container className="py-16 sm:py-24">
      <Link
        href="/portfolio"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to portfolio
      </Link>

      <article>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.company && (
              <span className="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-500">
                {project.company}
              </span>
            )}
            {project.role && (
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.role}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {project.longDescription || project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </header>

        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Key Highlights
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </Container>
  );
}
