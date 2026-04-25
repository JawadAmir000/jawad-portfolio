"use client";

import Link from "next/link";
import { Container } from "./Container";

const social = [
  { href: "https://github.com/JawadAmir000", label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", label: "Email" },
];

const nav = [
  { href: "/articles", label: "Writing" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "Bio" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-rule">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
              § End · Colophon
            </p>
            <p
              className="mt-5 max-w-xl font-display leading-[1.22] tracking-tight2 text-ink text-pretty text-[clamp(1.35rem,2.4vw,1.85rem)]"
              style={{ fontVariationSettings: '"opsz" 32' }}
            >
              A <span className="italic">field journal</span> on agentic
              systems and the cloud platforms underneath — written, set, and
              operated from <span className="italic text-accent">Dhaka, Bangladesh</span>.
            </p>
            <p className="mt-5 max-w-md font-mono text-[11px] leading-relaxed tracking-mono uppercase text-ink-muted">
              ↳ Type set in Fraunces (display) &amp; Geist (text). Open to
              select advisory and contract work in agentic AI &amp; cloud
              architecture —{" "}
              <a
                href="mailto:xawadamir0@gmail.com"
                className="editorial-link text-ink"
              >
                say hello
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
              Index
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="editorial-link text-base text-ink"
                  >
                    {label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
              Channels
            </p>
            <ul className="mt-4 space-y-2">
              {social.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link text-base text-ink"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-rule py-6 font-mono text-[11px] tracking-mono uppercase text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} · Jawad Amir · Vol. {year - 2018}, № 01
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent">▌</span>
            <span>Built with care · No rights reserved</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
