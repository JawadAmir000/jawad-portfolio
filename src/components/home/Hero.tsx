"use client";

import { motion } from "framer-motion";
import { MagneticLink } from "@/components/visual/MagneticLink";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

interface HeroProps {
  systemCard: React.ReactNode;
}

export function Hero({ systemCard }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20">
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mono-strip flex flex-wrap items-center gap-x-3 gap-y-1"
      >
        <span>§ 00 / Index</span>
        <span aria-hidden className="text-ink-faint/60">·</span>
        <span>Vol. {new Date().getFullYear()}</span>
        <span aria-hidden className="text-ink-faint/60">·</span>
        <span className="text-accent">▌</span>
        <span>An Operator&apos;s Field Manual</span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-6 font-display font-semibold leading-[0.95] tracking-tight2 text-ink select-none whitespace-nowrap text-[clamp(2.5rem,7.5vw,5.25rem)]"
        style={{ fontVariationSettings: '"opsz" 96' }}
      >
        Jawad Amir<span className="text-accent">.</span>
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <p className="mono-strip mb-5">
            The dossier · current
          </p>
          <p
            className="font-display leading-[1.18] tracking-tight2 text-ink text-pretty text-[clamp(1.35rem,2.4vw,1.85rem)]"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            Senior software engineer{" "}
            <span className="italic text-accent">six years</span> deep in
            production AI and cloud platforms — fintech, healthcare, and now an
            agentic analytics product. Currently AI Engineer at{" "}
            <span className="italic">Anlytic</span>, shipping a multi-agent
            platform on Anthropic Claude that turned plain-English questions
            into live dashboards and cut LLM spend{" "}
            <span className="italic text-accent">60–70%</span> in the process.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Previously at <span className="text-ink">IQVIA</span> (Fortune 500
            healthcare), part-time AI engineer at{" "}
            <span className="text-ink">Autonomix</span> on the Donna AI
            platform, and five years at <span className="text-ink">Selise</span>{" "}
            shipping fintech and on-chain systems out of Zurich. Open to select
            advisory and contract work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticLink href="/portfolio">
              <span>Selected work</span>
              <span aria-hidden>→</span>
            </MagneticLink>
            <MagneticLink href="/articles">
              <span>Read writing</span>
              <span aria-hidden>→</span>
            </MagneticLink>
            <a
              href="mailto:xawadamir0@gmail.com"
              className="editorial-link font-mono text-[11px] tracking-mono uppercase text-ink-muted"
            >
              ↳ Open inquiry
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          {systemCard}
        </motion.div>
      </div>

      <div className="mt-14 flex items-center gap-4">
        <span className="block h-px flex-1 bg-rule" />
        <span className="mono-strip">↓ Scroll · §02 Selected work</span>
        <span className="block h-px flex-1 bg-rule" />
      </div>
    </section>
  );
}
