"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { experiences } from "@/lib/experiences";

export function WorkExperience() {
  return (
    <section id="work" className="border-t border-rule py-20 lg:py-28">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="mono-strip">Selected work</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight2 text-ink sm:text-4xl">
            Where the years went
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="editorial-link text-sm font-medium text-ink"
        >
          Full portfolio →
        </Link>
      </header>

      <ol className="mt-10 overflow-hidden rounded-card border border-rule">
        {experiences.map((exp, i) => {
          const metric = exp.achievements?.[0];
          return (
            <motion.li
              key={exp.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.06, 0.24),
                ease: "easeOut",
              }}
              className={i > 0 ? "border-t border-rule" : ""}
            >
              <Link
                href={`/experience/${exp.slug}`}
                className="group relative flex flex-col gap-4 bg-surface px-5 py-6 transition-colors hover:bg-accent-soft sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-7"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                />

                <span className="mono-strip w-8 shrink-0 text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight2 text-ink">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-ink-muted">{exp.role}</span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-muted text-pretty">
                    {exp.description}
                  </p>
                </div>

                <div className="flex items-center gap-5 sm:w-56 sm:shrink-0 sm:justify-end">
                  {metric && (
                    <div className="sm:text-right">
                      <div className="font-display text-lg font-semibold tracking-tight2 text-ink">
                        {metric.metric}
                      </div>
                      <div className="text-[11px] leading-tight text-ink-faint">
                        {metric.description}
                      </div>
                    </div>
                  )}
                  <span
                    aria-hidden
                    className="hidden text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
