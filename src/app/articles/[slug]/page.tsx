import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    <Container size="narrow" className="pb-32 pt-14 sm:pt-20">
      <Link
        href="/articles"
        className="editorial-link mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink-muted"
      >
        ← Back to writing
      </Link>

      <article>
        <header className="mb-12 border-b border-rule pb-10">
          <p className="mono-strip flex flex-wrap items-center gap-x-3 gap-y-1">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden className="text-ink-faint/60">·</span>
            <span>{article.readingTime}</span>
            {article.featured && (
              <>
                <span aria-hidden className="text-ink-faint/60">·</span>
                <span className="text-accent">Featured</span>
              </>
            )}
          </p>

          <h1
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl md:text-6xl text-balance"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            {article.title}
          </h1>

          <p className="mt-6 max-w-2xl font-display text-xl leading-[1.4] text-ink-muted text-pretty md:text-2xl">
            {article.description}
          </p>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-mono uppercase border border-current/40 px-2 py-0.5"
                  style={{ color: "var(--indigo)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert">
          <MDXRemote source={article.content} />
        </div>
      </article>

      <footer className="mt-20 border-t border-rule pt-8">
        <Link
          href="/articles"
          className="editorial-link inline-flex items-center gap-2 font-mono text-[11px] tracking-mono uppercase text-ink"
        >
          ← All dispatches
        </Link>
      </footer>
    </Container>
  );
}
