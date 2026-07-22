"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const navItems = [
  { href: "/portfolio", label: "Work" },
  { href: "/articles", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/80 backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-bg font-display text-sm font-bold transition-colors group-hover:bg-accent group-hover:text-accent-ink"
            >
              J
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight2 text-ink">
              Jawad Amir
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="mailto:xawadamir0@gmail.com"
              className="btn btn-primary text-[13px]"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 text-ink"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-rule bg-bg md:hidden"
        >
          <Container size="wide">
            <div className="flex flex-col py-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-2.5 text-base font-medium ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 border-t border-rule pt-4">
                <a
                  href="mailto:xawadamir0@gmail.com"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary text-[13px]"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </Container>
        </motion.nav>
      )}
    </header>
  );
}
