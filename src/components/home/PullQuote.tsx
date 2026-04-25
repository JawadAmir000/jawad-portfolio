"use client";

import { motion } from "framer-motion";

export function PullQuote() {
  return (
    <section className="full-bleed relative py-24 md:py-32">
      <div aria-hidden className="halftone absolute inset-0" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 lg:max-w-5xl lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-mono text-[11px] tracking-mono uppercase text-ink-faint"
        >
          ¶ marginalia
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="mt-4 font-display text-3xl italic leading-[1.18] tracking-tight2 text-ink sm:text-4xl md:text-5xl lg:text-6xl text-balance"
          style={{ fontVariationSettings: '"opsz" 96' }}
        >
          &ldquo;An agent is a {" "}
          <span className="not-italic text-accent">production system</span>{" "}
          first, a model second. The interesting work is everything that
          happens between &lsquo;retrieved&rsquo; and &lsquo;answered.&rsquo;&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-mono text-[11px] tracking-mono uppercase text-ink-muted"
        >
          — Field notebook · entry &ldquo;rag/03&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
