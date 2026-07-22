"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/articles";

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section id="writing" className="py-20 lg:py-28">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="mono-strip">Writing</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight2 text-ink sm:text-4xl">
            Notes from the build
          </h2>
        </div>
        <Link
          href="/articles"
          className="editorial-link text-sm font-medium text-ink"
        >
          All writing →
        </Link>
      </header>

      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </ol>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.24),
        ease: "easeOut",
      }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="card group flex h-full flex-col p-6 transition-shadow hover:shadow-card-hover"
      >
        <div className="flex items-center gap-3 text-ink-faint">
          <time dateTime={article.date} className="mono-strip">
            {formatDate(article.date)}
          </time>
          <span aria-hidden>·</span>
          <span className="mono-strip">{article.readingTime}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight2 text-ink transition-colors group-hover:text-accent">
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted text-pretty">
          {article.description}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
          Read
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </motion.li>
  );
}
