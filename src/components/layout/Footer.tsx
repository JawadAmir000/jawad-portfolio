"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/JawadAmir000", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", icon: Mail, label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold text-zinc-100 group-hover:text-teal-400 transition-colors">
                Jawad <span className="text-teal-400">Amir</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">
              Senior Software Engineer crafting high-performance, cloud-native, and AI-driven solutions.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-center"
          >
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-zinc-500 hover:text-teal-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-right"
          >
            <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map(({ href, icon: Icon, label }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass glass-hover p-3 rounded-xl group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Icon className="h-5 w-5 text-zinc-400 group-hover:text-teal-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Jawad Amir. Made with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and lots of coffee.
            </p>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="glass glass-hover p-3 rounded-xl group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-zinc-400 group-hover:text-teal-400 transition-colors" />
            </motion.button>
          </div>
        </motion.div>
      </Container>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
