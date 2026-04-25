import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Long-form notes on software engineering, AI agents, and cloud architecture.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <Container size="wide" className="pb-24 pt-14 sm:pt-20">
      <header className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mono-strip">§ 01 / Writing · {articles.length} dispatches</p>
          <h1
            className="mt-4 font-display font-semibold leading-[0.95] tracking-tight2 text-ink text-[clamp(2.5rem,7.5vw,5.25rem)]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Writing<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="lg:col-span-12">
          <p className="max-w-3xl font-display text-2xl leading-[1.2] tracking-tight2 text-ink-muted text-pretty md:text-3xl">
            Long-form notes on the systems I work in — agents, retrieval, and
            the cloud-native plumbing underneath. Half technical autopsy, half
            field journal.
          </p>
        </div>
      </header>

      <ol className="border-t border-rule">
        {articles.map((article, i) => (
          <li key={article.slug} className="group border-b border-rule">
            <Link
              href={`/articles/${article.slug}`}
              className="grid grid-cols-1 gap-3 py-7 md:grid-cols-12 md:gap-x-8"
            >
              <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-2 md:pt-2">
                <span className="block">№ {String(i + 1).padStart(2, "0")}</span>
                <time dateTime={article.date} className="mt-1 block">
                  {formatDate(article.date)}
                </time>
                <span className="mt-1 block">{article.readingTime}</span>
              </div>

              <div className="md:col-span-7">
                <h2 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight2 text-ink md:text-3xl">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                    {article.title}
                  </span>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                  {article.description}
                </p>
              </div>

              <div className="md:col-span-3 md:pt-2">
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 4).map((tag) => (
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
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-mono uppercase text-ink transition-colors group-hover:text-accent">
                  Read →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}
