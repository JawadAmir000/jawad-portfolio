import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer with 6+ years of experience in .NET, Cloud Architecture, and AI Innovation.",
};

const socialLinks = [
  { href: "https://github.com/JawadAmir000", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jawad-amir", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:xawadamir0@gmail.com", icon: Mail, label: "Email" },
];

const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      ".NET Core 8",
      "C#",
      "ASP.NET Core",
      "Python",
      "Django",
      "JavaScript",
      "TypeScript",
      "Angular",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "OpenAI GPT-4",
      "Claude Agent SDK",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Pinecone",
      "Azure AI Foundry",
      "ElevenLabs",
      "HeyGen",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "AWS (EKS, Lambda, S3)",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "Terraform",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
      "Snowflake",
      "DuckDB",
      "SQLite",
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Microservices",
      "Clean Architecture",
      "CQRS",
      "DDD",
      "Event-Driven Architecture",
      "RESTful APIs",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Message Brokers & Integration",
    skills: ["RabbitMQ", "Kafka", "MassTransit", "SignalR", "Webhook Processing"],
  },
];

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Bio Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            About Me
          </h1>

          <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">
                Jawad Amir
              </strong>
              , a Senior Software Engineer with{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">
                6+ years of experience
              </strong>{" "}
              building high-performance, cloud-native, and AI-driven solutions
              across Fortune 500 enterprises and startups.
            </p>

            <p>
              I specialize in{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">
                .NET, Angular, Azure, and AWS
              </strong>
              , designing scalable microservices and intelligent automation
              systems. Currently at{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">IQVIA</strong>{" "}
              building AI-powered healthcare solutions, and co-founded{" "}
              <strong className="text-zinc-800 dark:text-zinc-100">
                Autonomix
              </strong>{" "}
              for the Donna AI platform.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4 text-teal-500" />
              <span>Working remotely with global teams</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Phone className="h-4 w-4 text-teal-500" />
              <a
                href="tel:+8801771614053"
                className="hover:text-teal-500 transition-colors"
              >
                +880 177 161 4053
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Mail className="h-4 w-4 text-teal-500" />
              <a
                href="mailto:xawadamir0@gmail.com"
                className="hover:text-teal-500 transition-colors"
              >
                xawadamir0@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-teal-500 hover:text-teal-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image & Stats Section */}
        <div className="flex flex-col items-center gap-8 lg:items-end">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-zinc-200 bg-zinc-100 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
              <Image
                src="/jawad-portfolio/images/profile.jpg"
                alt="Jawad Amir"
                fill
                sizes="192px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-2 -z-10 rounded-full border-2 border-teal-500/20" />
          </div>

          {/* Achievement highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-2xl font-bold text-teal-500">6+</div>
              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Years Experience
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-2xl font-bold text-teal-500">100K+</div>
              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Users Supported
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-2xl font-bold text-teal-500">$2M+</div>
              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                Revenue Generated
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-2xl font-bold text-teal-500">280+</div>
              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                LeetCode Problems
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Technical Skills
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Education
        </h2>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                Bachelor of Science in Computer Science &amp; Engineering
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Rajshahi University of Engineering &amp; Technology (RUET),
                Bangladesh
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Strong foundation in software engineering, algorithms, and
                distributed systems
              </p>
            </div>
            <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
              2015 - 2019
            </span>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Achievements
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">
                Revenue Generation:
              </strong>{" "}
              Delivered $2M+ in new business revenue through innovative
              dashboard solution across European markets
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">
                Performance Excellence:
              </strong>{" "}
              Achieved 50% latency reduction and 12x data processing improvement
              through system optimisation
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">
                Competitive Programming:
              </strong>{" "}
              Ranked 3rd in Intra-RUET Programming Contest 2019 and top 20 in
              IUBAT National Collegiate Programming Contest 2019
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">
                Coding Platforms:
              </strong>{" "}
              LeetCode 280+ problems solved | Codeforces Rating 1279 | Active
              GitHub contributor
            </span>
          </li>
        </ul>
      </section>
    </Container>
  );
}
