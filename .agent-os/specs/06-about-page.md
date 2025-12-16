# Spec 06: About Page

## Overview
Build the About page with biography, skills visualization, and contact information based on Jawad's resume.

## Tasks

### Task 6.1: About Page
**File: `src/app/about/page.tsx`**
```typescript
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SkillsSection } from '@/components/about/SkillsSection';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Senior Software Engineer with 6+ years of experience in .NET, Cloud Architecture, and AI Innovation.',
};

const socialLinks = [
  { href: 'https://github.com/JawadAmir000', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jawad-amir', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:xawadamir0@gmail.com', icon: Mail, label: 'Email' },
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

          <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m <strong className="text-zinc-800 dark:text-zinc-100">Jawad Amir</strong>,
              a Senior Software Engineer with <strong className="text-zinc-800 dark:text-zinc-100">6+ years
              of experience</strong> architecting and delivering high-performance, cloud-native,
              and AI-driven solutions across Fortune 500 enterprises, startups, fintech, and
              healthcare sectors.
            </p>

            <p>
              I specialize in <strong className="text-zinc-800 dark:text-zinc-100">.NET, Angular,
              Azure, and AWS</strong>, with a proven track record in designing scalable microservices
              architectures and intelligent automation systems. My work has achieved up to
              <strong className="text-zinc-800 dark:text-zinc-100"> 40% faster system performance</strong>,
              <strong className="text-zinc-800 dark:text-zinc-100"> 25% reduction in infrastructure costs</strong>,
              and supported <strong className="text-zinc-800 dark:text-zinc-100">100K+ active users</strong> globally.
            </p>

            <p>
              Currently, I&apos;m working at <strong className="text-zinc-800 dark:text-zinc-100">IQVIA</strong>,
              a Fortune 500 healthcare company, where I build AI-powered clinical decision support
              systems using OpenAI GPT-4, RAG architectures, and enterprise microservices. I also
              co-founded <strong className="text-zinc-800 dark:text-zinc-100">Autonomix</strong>,
              building the Donna AI platform—a multimodal personal assistant leveraging Claude
              Agent SDK, ElevenLabs, and HeyGen.
            </p>

            <p>
              I&apos;m passionate about uniting deep technical expertise with strategic product
              vision, enabling organizations to modernize digital ecosystems and accelerate AI
              innovation from concept to market success.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4 text-teal-500" />
              <span>Working remotely with global teams</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Phone className="h-4 w-4 text-teal-500" />
              <a href="tel:+8801771614053" className="hover:text-teal-500">
                +880 177 161 4053
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Mail className="h-4 w-4 text-teal-500" />
              <a href="mailto:xawadamir0@gmail.com" className="hover:text-teal-500">
                xawadamir0@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-teal-500 hover:text-teal-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Photo Section */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-zinc-100 shadow-xl dark:bg-zinc-800">
              <Image
                src="/images/profile.jpg"
                alt="Jawad Amir"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-80 w-80 rounded-2xl border-2 border-teal-500/20" />
          </div>

          {/* Achievement highlights */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">6+</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">100K+</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Users Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">$2M+</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Revenue Generated
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">280+</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                LeetCode Problems
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Education */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
          Education
        </h2>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                Bachelor of Science in Computer Science & Engineering
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Rajshahi University of Engineering & Technology (RUET), Bangladesh
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Strong foundation in software engineering, algorithms, and distributed systems
              </p>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
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
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">Revenue Generation:</strong> Delivered $2M+ in new business revenue through innovative dashboard solution across European markets
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">Performance Excellence:</strong> Achieved 50% latency reduction and 12x data processing improvement through system optimisation
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">Competitive Programming:</strong> Ranked 3rd in Intra-RUET Programming Contest 2019 and top 20 in IUBAT National Collegiate Programming Contest 2019
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-100">Coding Platforms:</strong> LeetCode 280+ problems solved | Codeforces Rating 1279 | Active GitHub contributor
            </span>
          </li>
        </ul>
      </section>
    </Container>
  );
}
```

### Task 6.2: Skills Section Component
**File: `src/components/about/SkillsSection.tsx`**
```typescript
const skillCategories = [
  {
    title: 'Core Technologies',
    skills: ['.NET Core 8', 'C#', 'ASP.NET Core', 'Python', 'Django', 'JavaScript', 'TypeScript', 'Angular'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['OpenAI GPT-4', 'Claude Agent SDK', 'LangChain', 'LangGraph', 'CrewAI', 'RAG', 'Pinecone', 'Azure AI Foundry', 'ElevenLabs', 'HeyGen'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Microsoft Azure', 'AWS (EKS, Lambda, S3)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Snowflake', 'DuckDB', 'SQLite'],
  },
  {
    title: 'Architecture & Patterns',
    skills: ['Microservices', 'Clean Architecture', 'CQRS', 'DDD', 'Event-Driven Architecture', 'RESTful APIs', 'Multi-Agent Systems'],
  },
  {
    title: 'Message Brokers & Integration',
    skills: ['RabbitMQ', 'Kafka', 'MassTransit', 'SignalR', 'Webhook Processing'],
  },
];

export function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Technical Skills
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
```

## Acceptance Criteria
- [ ] About page displays biography
- [ ] Profile image renders with fallback
- [ ] Achievement metrics displayed
- [ ] Skills categorized and displayed
- [ ] Education section shows degree info
- [ ] Achievements list renders
- [ ] Contact info and social links work
- [ ] Responsive layout on all screens

## Dependencies
- Spec 01: Project Setup
- Spec 02: Layout Components

## Estimated Complexity
Medium - Static content with styling
