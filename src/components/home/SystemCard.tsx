import { getArticles } from "@/lib/articles";
import { TypeOnce } from "./TypeOnce";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export async function SystemCard() {
  const articles = await getArticles();
  const latest = articles[0];

  const now = new Date();
  const utc = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(
    now.getUTCDate()
  )} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())} UTC`;
  const uptimeYears = now.getUTCFullYear() - 2019;

  const lines: { k: string; v: string; accent?: boolean }[] = [
    { k: "uptime", v: `${uptimeYears}y · since 2019`, accent: true },
    { k: "location", v: "Bangladesh / remote" },
    { k: "stack", v: "Claude · Vercel AI SDK · .NET · Python" },
    { k: "shipping", v: "Anlytic · multi-agent analytics" },
    {
      k: "last_post",
      v: latest ? latest.title : "—",
    },
    { k: "render_at", v: utc },
  ];

  return (
    <aside
      aria-label="System status"
      className="border border-rule bg-bg-soft/40 p-5 lg:p-6 font-mono text-[11px] leading-relaxed text-ink-muted"
    >
      <div className="flex items-center justify-between border-b border-rule pb-3 mb-4">
        <span className="tracking-mono uppercase text-ink-faint">
          § live · operator status
        </span>
        <span className="flex items-center gap-1.5 text-ink">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="tracking-mono uppercase">operational</span>
        </span>
      </div>

      <TypeOnce
        text="> jawad.amir initialized · channels open · ready to ship"
        className="mb-4 text-ink"
      />

      <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-2">
        {lines.map(({ k, v, accent }) => (
          <div key={k} className="contents">
            <dt className="tracking-mono uppercase text-ink-faint">{k}</dt>
            <dd
              className={
                accent
                  ? "text-ink"
                  : "text-ink-muted"
              }
            >
              {accent && <span className="text-accent">{`>`} </span>}
              {v}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 border-t border-rule pt-3 text-ink-faint">
        <span className="tracking-mono uppercase">
          ↳ inquiries: <span className="text-ink">xawadamir0@gmail.com</span>
        </span>
      </div>
    </aside>
  );
}
