# Spec 05: Portfolio/Projects Section

## Overview
Build the portfolio section showcasing Jawad's notable projects with detailed case study pages.

## Projects to Feature
1. **Donna AI Platform** - Multimodal AI assistant (Autonomix)
2. **IQVIA Healthcare Platform** - Clinical decision support
3. **LLM-Powered Virtual CV Assistant** - Interactive resume
4. **Enterprise E-Commerce Platform** - Microservices architecture
5. **Full-Stack Employee Management** - Angular + .NET

## Tasks

### Task 5.1: Project Types
**File: `src/lib/projects.ts`**
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  tags: string[];
  featured: boolean;
  image?: string;
  github?: string;
  live?: string;
  company?: string;
  role?: string;
  highlights?: string[];
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export async function getProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDirectory)) {
    return getDefaultProjects();
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        longDescription: data.longDescription,
        date: data.date,
        tags: data.tags || [],
        featured: data.featured || false,
        image: data.image,
        github: data.github,
        live: data.live,
        company: data.company,
        role: data.role,
        highlights: data.highlights || [],
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return projects.length > 0 ? projects : getDefaultProjects();
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

function getDefaultProjects(): Project[] {
  return [
    {
      slug: 'donna-ai-platform',
      title: 'Donna AI Platform',
      description: 'Multimodal personal AI assistant with voice, video, and text interactions',
      longDescription: 'A comprehensive AI platform enabling natural interactions with personal data through voice, video, and text, with proactive notifications across Slack, WhatsApp, and email.',
      date: '2024-09-01',
      tags: ['Python', 'Django', 'Claude SDK', 'ElevenLabs', 'HeyGen', 'Azure AI'],
      featured: true,
      company: 'Autonomix (Startup)',
      role: 'Lead Developer',
      highlights: [
        'Built multimodal AI assistant with Claude Agent SDK, ElevenLabs voice AI, and HeyGen video avatars',
        'Architected multi-agent orchestration system using Python/Django and Azure AI Foundry',
        'Engineered secure integration framework for real-time multimodal interactions',
        'Scaled from MVP to production serving thousands of active users',
      ],
      content: '',
    },
    {
      slug: 'iqvia-healthcare-platform',
      title: 'IQVIA Healthcare Platform',
      description: 'AI-powered clinical decision support system with RAG capabilities',
      longDescription: 'Enterprise-grade healthcare solution leveraging AI for clinical decision support, serving millions of patient records globally.',
      date: '2024-09-01',
      tags: ['.NET Core 8', 'Azure OpenAI', 'Pinecone', 'Snowflake', 'AWS EKS'],
      featured: true,
      company: 'IQVIA (Fortune 500)',
      role: 'Senior Software Engineer',
      highlights: [
        'Developed enterprise microservices architecture using .NET Core 8 with Clean Architecture and CQRS',
        'Engineered AI-powered clinical decision support using OpenAI GPT-4 and Azure OpenAI Services',
        'Achieved 40% reduction in clinician research time with RAG system using Pinecone',
        'Improved clinical trial data accuracy by 35% with ML-based quality monitoring',
      ],
      content: '',
    },
    {
      slug: 'virtual-cv-assistant',
      title: 'LLM-Powered Virtual CV Assistant',
      description: 'Interactive AI assistant for real-time Q&A based on resume content',
      date: '2024-06-01',
      tags: ['OpenAI', 'Python', 'Gradio', 'Hugging Face'],
      featured: true,
      github: 'https://github.com/JawadAmir000',
      highlights: [
        'Built interactive AI-powered virtual assistant using OpenAI, Python, and Gradio',
        'Deployed on Hugging Face Spaces for real-time Q&A',
        'Implemented push notifications via Pushover for engagement tracking',
      ],
      content: '',
    },
    {
      slug: 'ecommerce-microservices',
      title: 'Enterprise E-Commerce Platform',
      description: 'Comprehensive microservices solution with multiple services and API Gateway',
      date: '2023-01-01',
      tags: ['ASP.NET Core', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
      featured: false,
      github: 'https://github.com/JawadAmir000',
      highlights: [
        'Architected microservices: Catalog (MongoDB), Basket (Redis), Discount (gRPC), Ordering (DDD)',
        'Implemented API Gateway using Ocelot for routing',
        'Integrated services via RabbitMQ with MassTransit',
        'Utilized Clean Architecture and CQRS pattern',
      ],
      content: '',
    },
    {
      slug: 'employee-management-system',
      title: 'Full-Stack Employee Management',
      description: 'Angular + .NET Core application with Clean Architecture',
      date: '2022-06-01',
      tags: ['Angular', 'Angular Material', '.NET Core', 'MongoDB', 'CQRS'],
      featured: false,
      github: 'https://github.com/JawadAmir000',
      highlights: [
        'Developed full-stack application using Angular, Angular Material, .NET Core',
        'Implemented Clean Architecture principles with CQRS pattern',
        'Created intuitive interfaces for seamless data handling',
      ],
      content: '',
    },
  ];
}
```

### Task 5.2: Portfolio List Page
**File: `src/app/portfolio/page.tsx`**
```typescript
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { getProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Featured projects and case studies in AI, cloud architecture, and enterprise software.',
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
          A collection of projects I&apos;ve built across AI, cloud architecture,
          and enterprise software development. From Fortune 500 healthcare platforms
          to innovative AI startups.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Featured Projects
        </h2>
        <ProjectGrid projects={featuredProjects} featured />
      </section>

      {otherProjects.length > 0 && (
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Other Projects
          </h2>
          <ProjectGrid projects={otherProjects} />
        </section>
      )}
    </Container>
  );
}
```

### Task 5.3: Project Grid Component
**File: `src/components/portfolio/ProjectGrid.tsx`**
```typescript
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/projects';

interface ProjectGridProps {
  projects: Project[];
  featured?: boolean;
}

export function ProjectGrid({ projects, featured = false }: ProjectGridProps) {
  return (
    <div className={cn(
      'grid gap-8',
      featured ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
    )}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} featured={featured} />
      ))}
    </div>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      )}

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

        <div className="mt-4 flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              onClick={(e) => e.stopPropagation()}
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
              className="relative z-20 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
              onClick={(e) => e.stopPropagation()}
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
```

### Task 5.4: Individual Project Page
**File: `src/app/portfolio/[slug]/page.tsx`**
```typescript
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { getProjectBySlug, getProjects } from '@/lib/projects';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
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
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        Back to portfolio
      </Link>

      <article>
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
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
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
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
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
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
```

## Acceptance Criteria
- [ ] Portfolio page lists all projects
- [ ] Featured projects section displayed prominently
- [ ] Project cards show image, tags, and links
- [ ] Individual project pages render correctly
- [ ] GitHub and Live links work
- [ ] Responsive grid layout
- [ ] Hover effects on cards

## Dependencies
- Spec 01: Project Setup
- Spec 02: Layout Components

## Estimated Complexity
Medium - Similar structure to articles
