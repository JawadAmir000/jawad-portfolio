"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/articles", label: "Articles" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-zinc-100/80 backdrop-blur-sm dark:bg-black/80 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <Container>
        <nav className="flex items-center justify-between py-4 sm:py-6">
          <Link
            href="/"
            className="text-lg font-semibold text-zinc-800 hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-400 transition-colors"
          >
            Jawad Amir
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <ul className="flex gap-4 sm:gap-6">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      pathname === href || pathname.startsWith(href + "/")
                        ? "text-teal-500 dark:text-teal-400"
                        : "text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
