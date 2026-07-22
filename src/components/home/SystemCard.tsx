import Link from "next/link";
import { getArticles } from "@/lib/articles";

export async function SystemCard() {
  const articles = await getArticles();
  const latest = articles[0];
  const uptimeYears = new Date().getUTCFullYear() - 2019;

  const rows: { k: string; v: React.ReactNode }[] = [
    { k: "Building", v: "Anlytic — multi-agent analytics" },
    { k: "Stack", v: "Claude · Vercel AI SDK · TypeScript · .NET · Python" },
    { k: "Based", v: "Bangladesh · working remote" },
    { k: "Since", v: `2019 · ${uptimeYears} years shipping` },
  ];

  return (
    <aside aria-label="Currently" className="card p-6 lg:p-7">
      <div className="flex items-center justify-between">
        <span className="mono-strip">Currently</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink">
          <span className="pill-dot h-2 w-2" />
          Available
        </span>
      </div>

      <dl className="mt-6 space-y-5">
        {rows.map(({ k, v }) => (
          <div key={k} className="flex flex-col gap-1">
            <dt className="mono-strip">{k}</dt>
            <dd className="text-sm leading-relaxed text-ink">{v}</dd>
          </div>
        ))}
      </dl>

      {latest && (
        <Link
          href={`/articles/${latest.slug}`}
          className="group mt-6 block border-t border-rule pt-5"
        >
          <span className="mono-strip">Latest writing</span>
          <span className="mt-1.5 flex items-start gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
            {latest.title}
            <span
              aria-hidden
              className="mt-0.5 transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </Link>
      )}

      <a
        href="mailto:xawadamir0@gmail.com"
        className="mt-6 flex items-center justify-between rounded-btn bg-bg px-4 py-3 text-sm transition-colors hover:bg-accent-soft"
      >
        <span className="text-ink-muted">Start a conversation</span>
        <span className="font-medium text-accent">xawadamir0@gmail.com</span>
      </a>
    </aside>
  );
}
