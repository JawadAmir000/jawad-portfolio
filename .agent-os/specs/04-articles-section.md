# Spec 04: Articles Section

## Overview
Build the complete articles system with MDX support, article listing page, and individual article pages with syntax highlighting.

## Features
- MDX content with frontmatter
- Article listing with timeline layout
- Individual article pages with typography
- Syntax highlighting for code blocks
- Reading time estimation

## Tasks

### Task 4.1: Article Types
**File: `src/lib/articles.ts`**
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readingTime: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export async function getArticles(): Promise<Article[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        featured: data.featured || false,
        readingTime: readingTime(content).text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    featured: data.featured || false,
    readingTime: readingTime(content).text,
    content,
  };
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
```

### Task 4.2: Articles List Page
**File: `src/app/articles/page.tsx`**
```typescript
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ArticleList } from '@/components/articles/ArticleList';
import { getArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Long-form notes on software engineering, AI, and cloud architecture.',
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software & AI Engineering
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Long-form notes on software engineering, AI systems, cloud architecture,
          and building scalable solutions. In-depth explorations of .NET, microservices,
          and AI agent orchestration.
        </p>
      </header>

      <ArticleList articles={articles} />
    </Container>
  );
}
```

### Task 4.3: Article List Component
**File: `src/components/articles/ArticleList.tsx`**
```typescript
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/lib/articles';

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700">
      <div className="flex flex-col space-y-0">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col py-6 md:grid md:grid-cols-4 md:items-baseline">
      {/* Mobile date with timeline */}
      <div className="mb-3 flex items-center md:hidden">
        <span className="mr-3 h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
        <time
          dateTime={article.date}
          className="text-sm text-zinc-500 dark:text-zinc-400"
        >
          {formatDate(article.date)}
        </time>
      </div>

      {/* Card background with hover effect */}
      <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 md:-inset-x-6" />

      {/* Content - spans 3 columns on desktop */}
      <div className="relative z-10 md:col-span-3">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <Link href={`/articles/${article.slug}`}>
            <span className="absolute -inset-x-4 -inset-y-2 z-20 md:-inset-x-6" />
            {article.title}
          </Link>
        </h2>

        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>

        <div className="relative z-10 mt-4 flex items-center gap-4">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-500">
            Read article
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {article.readingTime}
          </span>
        </div>
      </div>

      {/* Desktop date - 4th column */}
      <time
        dateTime={article.date}
        className="relative z-10 order-first mb-3 hidden text-sm text-zinc-500 dark:text-zinc-400 md:col-start-4 md:row-start-1 md:mb-0 md:block"
      >
        {formatDate(article.date)}
      </time>
    </article>
  );
}
```

### Task 4.4: Individual Article Page
**File: `src/app/articles/[slug]/page.tsx`**
```typescript
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { MDXContent } from '@/components/articles/MDXContent';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';
import { formatDate } from '@/lib/utils';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: ['Jawad Amir'],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/articles"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
      >
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
        Back to articles
      </Link>

      <article>
        <header className="mb-8">
          <time
            dateTime={article.date}
            className="text-sm text-zinc-500 dark:text-zinc-400"
          >
            {formatDate(article.date)}
          </time>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {article.description}
          </p>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            {article.readingTime}
          </p>
        </header>

        <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-zinc-800 dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200">
          <MDXContent content={article.content} />
        </div>
      </article>
    </Container>
  );
}
```

### Task 4.5: MDX Content Component
**File: `src/components/articles/MDXContent.tsx`**
```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXContentProps {
  content: string;
}

const components = {
  // Add custom components here if needed
};

export function MDXContent({ content }: MDXContentProps) {
  return <MDXRemote source={content} components={components} />;
}
```

### Task 4.6: Sample Article
**File: `src/content/articles/building-multi-agent-systems.mdx`**
```mdx
---
title: "Building Multi-Agent Systems with Claude Agent SDK"
description: "A deep dive into orchestrating autonomous AI agents for complex workflows using Python, Django, and the Claude Agent SDK."
date: "2025-01-15"
tags: ["AI", "Agents", "Python", "Claude SDK"]
featured: true
---

Multi-agent systems represent the next evolution in AI applications. Instead of relying on a single model to handle all tasks, we can orchestrate specialized agents that collaborate to achieve complex goals.

## Why Multi-Agent Architecture?

Traditional single-model approaches face limitations when dealing with:

- **Complex workflows** requiring domain expertise
- **Long-running tasks** that need persistence
- **Specialized knowledge** across different domains
- **Parallel processing** of independent subtasks

## Core Components

### 1. Agent Orchestrator

The orchestrator manages agent lifecycle and communication...

```python
from anthropic import Anthropic

class AgentOrchestrator:
    def __init__(self):
        self.client = Anthropic()
        self.agents = {}

    async def spawn_agent(self, role: str, context: dict):
        # Agent creation logic
        pass
```

### 2. Agent Communication

Agents communicate through a message bus...

## Real-World Implementation

At Autonomix, we built the Donna AI platform using these principles...

## Conclusion

Multi-agent systems unlock new possibilities for AI applications. By breaking complex tasks into specialized agents, we can build more robust and capable systems.
```

## Acceptance Criteria
- [ ] Articles list page shows all articles
- [ ] Timeline layout matches reference design
- [ ] Article cards have hover effects
- [ ] Individual article pages render MDX
- [ ] Syntax highlighting works for code
- [ ] Reading time displayed
- [ ] Tags displayed on article pages
- [ ] Back navigation works
- [ ] SEO metadata generated

## Dependencies
- Spec 01: Project Setup
- Spec 02: Layout Components

## Estimated Complexity
High - MDX setup + multiple components
