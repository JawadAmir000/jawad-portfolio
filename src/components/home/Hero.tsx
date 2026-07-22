"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1] as const;

const metrics = [
  { value: "60–70%", label: "LLM cost cut" },
  { value: "6 yrs", label: "in production" },
  { value: "Millions", label: "of records" },
  { value: "Fortune 500", label: "healthcare" },
];

interface HeroProps {
  systemCard: React.ReactNode;
}

export function Hero({ systemCard }: HeroProps) {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="signal-grid pointer-events-none absolute inset-x-0 -top-16 h-[420px]"
      />

      <div className="relative grid grid-cols-1 gap-x-16 gap-y-14 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="pill"
          >
            <span className="pill-dot" />
            Open to select advisory &amp; contract work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-6 font-display font-semibold leading-[1.02] tracking-tight3 text-ink text-[clamp(2.5rem,6.2vw,4.75rem)] text-balance"
          >
            I build AI agents that
            <br className="hidden sm:block" /> hold up in{" "}
            <span className="text-accent">production</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty"
          >
            Senior software engineer with six years shipping production AI and
            cloud platforms across fintech, healthcare, and now agentic
            analytics. Currently AI Engineer at{" "}
            <span className="font-medium text-ink">Anlytic</span>, building a
            multi-agent system on Anthropic Claude that turns plain-English
            questions into live dashboards — and where I cut LLM spend{" "}
            <span className="font-medium text-ink">60–70%</span> along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/portfolio" className="btn btn-primary">
              See selected work
              <span aria-hidden className="arrow">
                →
              </span>
            </Link>
            <Link href="/articles" className="btn btn-ghost">
              Read writing
              <span aria-hidden className="arrow">
                →
              </span>
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-8 sm:grid-cols-4"
          >
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-semibold tracking-tight2 text-ink">
                  {m.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-faint">
                  {m.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
          className="lg:col-span-5 lg:pt-2"
        >
          {systemCard}
        </motion.div>
      </div>
    </section>
  );
}
