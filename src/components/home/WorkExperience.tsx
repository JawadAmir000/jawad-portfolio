"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { experiences } from "@/lib/experiences";

export function WorkExperience() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <header className="mb-12 grid grid-cols-1 items-end gap-6 border-b border-rule pb-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="mono-strip">§ 02 / Work · {experiences.length} positions</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight2 text-ink sm:text-5xl md:text-6xl">
            Where the years went<span className="text-accent">.</span>
          </h2>
        </div>
        <div className="lg:col-span-3 lg:text-right">
          <Link
            href="/portfolio"
            className="editorial-link mono-strip inline-flex items-center gap-2 text-ink"
          >
            Full portfolio →
          </Link>
        </div>
      </header>

      <ol>
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.32), ease: "easeOut" }}
            className="group border-b border-rule"
          >
            <Link
              href={`/experience/${exp.slug}`}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-x-10 md:py-10"
            >
              <div className="font-mono text-[11px] tracking-mono uppercase text-ink-faint md:col-span-2 md:pt-3">
                <span className="text-accent">§</span> {String(i + 1).padStart(2, "0")}
                <span className="mt-1 block">{exp.period}</span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight2 text-ink md:text-4xl">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                    {exp.company}
                  </span>
                </h3>
                <p className="mt-2 text-lg text-ink">{exp.role}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
                  {exp.description}
                </p>
              </div>

              <div className="md:col-span-3 md:pt-3">
                <p className="font-mono text-[11px] tracking-mono uppercase text-ink-muted">
                  {exp.type}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-mono uppercase text-ink transition-colors group-hover:text-accent">
                  Open file
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
