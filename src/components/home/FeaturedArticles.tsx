import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/articles";

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Latest Articles
      </h2>

      <div className="mt-12 space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <Link
        href="/articles"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:text-teal-400 transition-colors"
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
      <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6" />

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
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
