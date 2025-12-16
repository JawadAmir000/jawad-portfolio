# Spec 03: Homepage Design

## Overview
Build the homepage with hero section, featured articles, and work experience timeline matching the ashpreetbedi.com aesthetic.

## Design Reference
- Two-column layout on larger screens
- Hero with name, tagline, and social links
- Featured articles in timeline format
- Work experience section with company logos

## Tasks

### Task 3.1: Homepage
**File: `src/app/page.tsx`**
```typescript
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/home/Hero';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { WorkExperience } from '@/components/home/WorkExperience';
import { getArticles } from '@/lib/articles';

export default async function HomePage() {
  const articles = await getArticles();
  const featuredArticles = articles.slice(0, 4);

  return (
    <Container className="py-16 sm:py-24">
      <Hero />
      <FeaturedArticles articles={featuredArticles} />
      <WorkExperience />
    </Container>
  );
}
```

### Task 3.2: Hero Section
**File: `src/components/home/Hero.tsx`**
```typescript
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/JawadAmir000', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jawad-amir', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:xawadamir0@gmail.com', icon: Mail, label: 'Email' },
];

export function Hero() {
  return (
    <section className="mb-16 sm:mb-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software Engineer & AI Innovation Specialist
      </h1>

      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I&apos;m Jawad, a Senior Software Engineer with 6+ years of experience
        architecting high-performance, cloud-native, and AI-driven solutions
        across Fortune 500 enterprises and startups. I specialize in .NET,
        Azure, AWS, and building intelligent automation systems.
      </p>

      <div className="mt-6 flex gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  );
}
```

### Task 3.3: Featured Articles Section
**File: `src/components/home/FeaturedArticles.tsx`**
```typescript
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/lib/articles';

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Latest Articles
      </h2>

      <div className="mt-8 space-y-0">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <Link
        href="/articles"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:text-teal-400"
      >
        View all articles
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col py-6 sm:flex-row sm:items-baseline">
      {/* Mobile date with timeline */}
      <div className="mb-3 flex items-center sm:hidden">
        <span className="mr-3 h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
        <time
          dateTime={article.date}
          className="text-sm text-zinc-500 dark:text-zinc-400"
        >
          {formatDate(article.date)}
        </time>
      </div>

      {/* Card background with hover effect */}
      <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6" />

      {/* Desktop date */}
      <time
        dateTime={article.date}
        className="relative z-10 hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block sm:w-32 sm:flex-shrink-0"
      >
        {formatDate(article.date)}
      </time>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <Link href={`/articles/${article.slug}`}>
            <span className="absolute -inset-x-4 -inset-y-2 z-20 sm:-inset-x-6" />
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
          Read article
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
```

### Task 3.4: Work Experience Section
**File: `src/components/home/WorkExperience.tsx`**
```typescript
import Image from 'next/image';

const experiences = [
  {
    company: 'IQVIA',
    role: 'Senior Software Engineer',
    period: '2024 - Present',
    description: 'Healthcare AI & Microservices',
    logo: '/images/companies/iqvia.svg',
  },
  {
    company: 'Secured Link Service',
    role: 'Software Engineer',
    period: '2022 - 2024',
    description: 'Fintech & Blockchain Solutions',
    logo: '/images/companies/sls.svg',
  },
  {
    company: 'Autonomix (Startup)',
    role: 'Lead Developer',
    period: '2024 - Present',
    description: 'AI Platform - Donna',
    logo: '/images/companies/autonomix.svg',
  },
];

export function WorkExperience() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Work Experience
      </h2>

      <ul className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <li key={exp.company} className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              ) : (
                <span className="text-lg font-bold text-zinc-600 dark:text-zinc-400">
                  {exp.company[0]}
                </span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {exp.company}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.role}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

## Acceptance Criteria
- [ ] Hero displays name, tagline, and social links
- [ ] Featured articles show in timeline format
- [ ] Article cards have hover effect (scale + opacity)
- [ ] Work experience shows with company info
- [ ] Mobile responsive with timeline indicator
- [ ] Desktop shows date in separate column

## Dependencies
- Spec 01: Project Setup
- Spec 02: Layout Components

## Estimated Complexity
Medium - Multiple sections with animations
