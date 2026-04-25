"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "/", label: "Index", number: "00" },
  { href: "/articles", label: "Writing", number: "01" },
  { href: "/portfolio", label: "Work", number: "02" },
  { href: "/about", label: "Bio", number: "03" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-14 items-center justify-between gap-6">
          <Link href="/" className="group flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-mono uppercase text-ink-faint">
              §
            </span>
            <span className="font-display text-lg font-semibold tracking-tight2 text-ink transition-colors group-hover:text-accent">
              Jawad Amir
            </span>
            <span className="hidden font-mono text-[11px] tracking-mono uppercase text-ink-faint sm:inline">
              · Operator
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-3 py-1 font-mono text-[11px] tracking-mono uppercase"
                >
                  <span className="mr-1.5 text-ink-faint">{item.number}</span>
                  <span className={active ? "text-ink" : "text-ink-muted group-hover:text-ink transition-colors"}>
                    {item.label}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-3 right-3 -bottom-[15px] h-px bg-accent"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
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
                    className="flex items-baseline gap-3 py-2.5 font-mono text-xs tracking-mono uppercase"
                  >
                    <span className="text-ink-faint">{item.number}</span>
                    <span className={active ? "text-accent" : "text-ink"}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <div className="mt-3 border-t border-rule pt-4">
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </motion.nav>
      )}
    </header>
  );
}
