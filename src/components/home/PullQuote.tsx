"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function PullQuote() {
  return (
    <section className="full-bleed border-y border-rule bg-surface">
      <Container size="wide">
        <div className="max-w-4xl py-20 md:py-28">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mono-strip"
          >
            How I think about the work
          </motion.span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-5 font-display text-2xl font-medium leading-[1.25] tracking-tight2 text-ink sm:text-3xl md:text-4xl text-balance"
          >
            An agent is a{" "}
            <span className="text-accent">production system</span> first and a
            model second. The interesting work is everything that happens
            between &ldquo;retrieved&rdquo; and &ldquo;answered&rdquo; — the
            routing, the guardrails, the cost, the failure modes.
          </motion.blockquote>
        </div>
      </Container>
    </section>
  );
}
