import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Jawad Amir"],
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
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
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

        <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-zinc-800 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-200">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </Container>
  );
}
