import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Senior Software Engineer with 6+ years building production AI and cloud platforms in fintech, healthcare, and analytics.",
};

const social = [
  { href: "https://github.com/JawadAmir000", label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", label: "Email" },
];

const skillCategories = [
  {
    title: "Core",
    skills: [
      ".NET Core 8",
      "C#",
      "ASP.NET Core",
      "Python",
      "Django",
      "TypeScript",
      "JavaScript",
      "Angular",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "Anthropic Claude",
      "Claude Agent SDK",
      "MCP",
      "OpenAI GPT-4",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Pinecone",
      "Azure AI Foundry",
      "Vercel AI SDK",
      "ElevenLabs",
      "HeyGen",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "AWS (EKS, Lambda, S3)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
      "Snowflake",
      "DuckDB",
      "SQLite",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Clean Architecture",
      "CQRS",
      "DDD",
      "Event-Driven",
      "REST APIs",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Messaging",
    skills: ["RabbitMQ", "Kafka", "MassTransit", "SignalR", "Webhooks"],
  },
];

const achievements = [
  {
    label: "LLM cost",
    value: "−70%",
    note: "Cut LLM API spend 60–70% at Anlytic via a dual compression system over tool schemas and message history.",
  },
  {
    label: "Revenue",
    value: "$2M+",
    note: "Generated through a single configurable dashboard sold across European markets at Selise.",
  },
  {
    label: "Throughput",
    value: "12×",
    note: "Peak-traffic message-routing throughput improvement via RabbitMQ tuning, with 50% latency cut.",
  },
  {
    label: "Research time",
    value: "−40%",
    note: "Clinician research time cut via Pinecone-backed RAG across millions of medical papers at IQVIA.",
  },
];

export default function AboutPage() {
  return (
    <Container size="wide" className="pb-24 pt-14 sm:pt-20">
      <header className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mono-strip">§ 03 / Bio · Operator dossier</p>
          <h1
            className="mt-4 font-display font-semibold leading-[0.95] tracking-tight2 text-ink text-[clamp(2.5rem,7.5vw,5.25rem)]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Hello<span className="text-accent">.</span>
          </h1>
          <div
            className="mt-8 max-w-2xl space-y-5 font-display leading-[1.22] tracking-tight2 text-ink text-pretty text-[clamp(1.25rem,2.1vw,1.65rem)]"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            <p>
              I&apos;m Jawad Amir — a senior software engineer six years into
              building production AI and cloud platforms across fintech,
              healthcare, and analytics.
            </p>
            <p className="text-ink-muted">
              Currently AI Engineer at <span className="text-ink">Anlytic</span>{" "}
              (Dubai, remote), shipping a multi-agent analytics platform on the
              Vercel AI SDK and{" "}
              <span className="italic text-accent">Anthropic Claude</span>.
              Previously: Senior Software Engineer at{" "}
              <span className="text-ink">IQVIA</span>, AI Engineer (part-time)
              at <span className="text-ink">Autonomix</span> on Donna AI, and
              five years at <span className="text-ink">Selise</span> shipping
              fintech and on-chain systems out of Zurich.
            </p>
            <p className="text-ink-muted">
              Currently focused on agentic AI — multi-agent orchestration, MCP,
              RAG, and the unglamorous work of LLM cost optimisation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {social.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-[11px] tracking-mono uppercase border border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                {label} ↗
              </a>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-2 font-mono text-xs sm:grid-cols-2">
            <div className="flex gap-3">
              <dt className="w-20 tracking-mono uppercase text-ink-faint">
                location
              </dt>
              <dd className="text-ink">Bangladesh · remote globally</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 tracking-mono uppercase text-ink-faint">phone</dt>
              <dd className="text-ink">
                <a href="tel:+8801771614053" className="editorial-link">
                  +880 177 161 4053
                </a>
              </dd>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <dt className="w-20 tracking-mono uppercase text-ink-faint">email</dt>
              <dd className="text-ink">
                <a href="mailto:xawadamir0@gmail.com" className="editorial-link">
                  xawadamir0@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-4">
          <div className="border border-rule p-5">
            <p className="mono-strip">▌ Operator portrait</p>
            <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden bg-bg-soft">
              <Image
                src="/images/profile.jpg"
                alt="Jawad Amir"
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover object-top grayscale [filter:grayscale(1)_contrast(1.05)]"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMFBv/EACAQAAECBQUAAAAAAAAAAAAAAAEAAgMEESFBFBUiUVL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAQACAwAAAAAAAAAAAAAAAAEAIQIDEf/aAAwDAQACEQMRAD8AyEaU5WFHHCO1zHlNiE6tl8qnU9lQ7HEORTc//9k="
              />
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-mono uppercase leading-relaxed text-ink-muted">
              ↳ b. Bangladesh · BS CSE / RUET, 2015–2019 · operates from a quiet
              room in Dhaka.
            </p>
          </div>
        </div>
      </header>

      <section className="mt-24 border-t border-rule pt-10">
        <p className="mono-strip">§ 03.01 / Receipts</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl">
          What got shipped<span className="text-accent">.</span>
        </h2>
        <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.label} className="border-t border-rule-strong pt-4">
              <dt className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
                {a.label}
              </dt>
              <dd
                className="mt-2 font-display text-5xl font-semibold leading-none tracking-tight3 text-ink md:text-6xl"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                {a.value}
              </dd>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {a.note}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24 border-t border-rule pt-10">
        <p className="mono-strip">§ 03.02 / Stack</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl">
          Tools of the trade<span className="text-accent">.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          Current working inventory. Nothing here is theoretical — it&apos;s all
          running in production somewhere.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-t border-rule-strong pt-4">
              <h3 className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
                ▌ {category.title}
              </h3>
              <ul className="mt-4 space-y-1.5 font-mono text-sm leading-relaxed text-ink">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ›
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-rule pt-10">
        <p className="mono-strip">§ 03.03 / Education</p>
        <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h3 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight2 text-ink md:text-4xl">
              B.Sc. in Computer Science &amp; Engineering
            </h3>
            <p className="mt-2 text-lg text-ink-muted">
              Rajshahi University of Engineering &amp; Technology — Bangladesh
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
              Where the foundation got laid: algorithms, distributed systems,
              and the late-night habit of reading source.
            </p>
          </div>
          <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint lg:col-span-3 lg:text-right">
            2015 — 2019
          </div>
        </div>
      </section>

      <section className="mt-24 border-t border-rule pt-10">
        <p className="mono-strip">§ 03.04 / Notable</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl">
          Other entries<span className="text-accent">.</span>
        </h2>
        <ul className="mt-8 space-y-6">
          <Bullet
            label="Competitive programming"
            body="3rd · Intra-RUET 2019. Top 20 · IUBAT National Collegiate Programming Contest 2019."
          />
          <Bullet
            label="LeetCode"
            body="280+ problems solved across DP, graphs, and the inevitable median-of-two-sorted-arrays."
          />
          <Bullet
            label="Codeforces"
            body="Rating 1279 — climbing slowly, on weekends only."
          />
          <Bullet
            label="GitHub"
            body="Active contributor across infra and AI tooling — see the repository for the actual receipts."
          />
        </ul>
      </section>
    </Container>
  );
}

function Bullet({ label, body }: { label: string; body: string }) {
  return (
    <li className="grid grid-cols-1 gap-2 border-b border-rule pb-6 md:grid-cols-12 md:gap-6">
      <p className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-3">
        ▌ {label}
      </p>
      <p className="text-base leading-relaxed text-ink md:col-span-9">{body}</p>
    </li>
  );
}
