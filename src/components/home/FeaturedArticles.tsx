"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/lib/articles";

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section className="py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 glass rounded-xl">
          <BookOpen className="w-6 h-6 text-teal-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-zinc-100">Latest Articles</h2>
          <p className="text-zinc-500">Thoughts on AI, architecture, and engineering</p>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10"
      >
        <Link
          href="/jawad-portfolio/articles"
          className="group inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
        >
          View all articles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/jawad-portfolio/articles/${article.slug}`}>
        <motion.div
          className="glass glass-hover p-6 sm:p-8 group cursor-pointer"
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
            {/* Date Column */}
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:w-32 shrink-0">
              <time
                dateTime={article.date}
                className="text-sm text-zinc-500"
              >
                {formatDate(article.date)}
              </time>
              <div className="flex items-center gap-1 text-xs text-zinc-600">
                <Clock className="w-3 h-3" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-teal-400 transition-colors mb-3">
                {article.title}
              </h3>

              <p className="text-zinc-400 mb-4 line-clamp-2">
                {article.description}
              </p>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read More */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
