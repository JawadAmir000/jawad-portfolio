"use client";

import Link from "next/link";
import { Container } from "./Container";

const social = [
  { href: "https://github.com/JawadAmir000", label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", label: "Email" },
];

const nav = [
  { href: "/portfolio", label: "Work" },
  { href: "/articles", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-bg font-display text-sm font-bold"
              >
                J
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight2 text-ink">
                Jawad Amir
              </span>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted text-pretty">
              Senior software engineer building production AI agents and the
              cloud platforms underneath — currently on agentic analytics,
              working remotely from Dhaka, Bangladesh.
            </p>
            <a
              href="mailto:xawadamir0@gmail.com"
              className="btn btn-primary mt-6"
            >
              Start a conversation
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="mono-strip">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono-strip">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {social.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {label}
                    <span aria-hidden className="text-ink-faint">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-rule py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Jawad Amir. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS.</span>
        </div>
      </Container>
    </footer>
  );
}
