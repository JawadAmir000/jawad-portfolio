import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Long-form notes on software engineering, AI, and cloud architecture.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software &amp; AI Engineering
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Long-form notes on software engineering, AI systems, cloud
          architecture, and building scalable solutions. In-depth explorations
          of .NET, microservices, and AI agent orchestration.
        </p>
      </header>

      <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700">
        <div className="flex flex-col">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group relative flex flex-col py-6 md:grid md:grid-cols-4 md:items-baseline"
            >
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
              <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 md:-inset-x-6" />

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
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          ))}
        </div>
      </div>
    </Container>
  );
}
