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
    <section id="writing" className="py-24 lg:py-32">
      <header className="mb-12 grid grid-cols-1 items-end gap-6 border-b border-rule pb-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mono-strip">§ 01 / Writing · Latest dispatches</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl md:text-6xl">
            Notes from the build log<span className="text-accent">.</span>
          </h2>
        </div>
        <div className="lg:col-span-3 lg:text-right">
          <Link
            href="/articles"
            className="editorial-link mono-strip inline-flex items-center gap-2 text-ink"
          >
            All writing →
          </Link>
        </div>
      </header>

      <ol className="grid grid-cols-1 gap-y-0 md:grid-cols-2 md:gap-x-10">
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
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: "easeOut" }}
      className="group border-b border-rule"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[auto_1fr] md:gap-x-8"
      >
        <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:w-24 md:pt-2">
          <span className="block">№ {String(index + 1).padStart(2, "0")}</span>
          <time dateTime={article.date} className="mt-1 block">
            {formatDate(article.date)}
          </time>
          <span className="mt-1 block">{article.readingTime}</span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight2 text-ink transition-colors md:text-3xl">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {article.title}
            </span>
          </h3>

          <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
            {article.description}
          </p>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-mono uppercase text-indigo-signal border border-current/40 px-2 py-0.5"
                  style={{ color: "var(--indigo)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink-muted transition-colors group-hover:text-accent">
            Read dispatch
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
