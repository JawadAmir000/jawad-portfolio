"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/jawad-portfolio", label: "Home" },
  { href: "/jawad-portfolio/articles", label: "Articles" },
  { href: "/jawad-portfolio/portfolio", label: "Portfolio" },
  { href: "/jawad-portfolio/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pt-4"
    >
      <Container>
        <nav className="glass rounded-2xl px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/jawad-portfolio" className="relative group">
            <span className="text-xl font-bold text-zinc-100 group-hover:text-teal-400 transition-colors">
              Jawad
              <span className="text-teal-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== "/jawad-portfolio" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-teal-400"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-teal-500/10 rounded-lg border border-teal-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-100" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-100" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass rounded-2xl p-4 mt-2"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== "/jawad-portfolio" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-teal-500/10 text-teal-400"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}
