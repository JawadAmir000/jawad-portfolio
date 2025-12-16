import Link from "next/link";
import { Container } from "./Container";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/JawadAmir000", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", icon: Mail, label: "Email" },
];

const navLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Jawad Amir. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
