import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/JawadAmir000", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section className="mb-16 sm:mb-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software Engineer &amp; AI Innovation Specialist
      </h1>

      <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        I&apos;m Jawad, a Senior Software Engineer with 6+ years of experience
        architecting high-performance, cloud-native, and AI-driven solutions
        across Fortune 500 enterprises and startups. I specialize in .NET,
        Azure, AWS, and building intelligent automation systems that drive
        measurable business growth.
      </p>

      <div className="mt-6 flex gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-500 transition-colors hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  );
}
