import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  getExperienceBySlug,
  getAllExperienceSlugs,
} from "@/lib/experiences";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllExperienceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return { title: "Experience Not Found" };
  }

  return {
    title: `${experience.role} at ${experience.company}`,
    description: experience.description,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      {/* Back Button */}
      <Link
        href="/#experience"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-teal-400"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
            {experience.type}
          </span>
          <span className="flex items-center gap-1 text-sm text-zinc-500">
            <Calendar className="h-4 w-4" />
            {experience.period}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-4">
          {experience.company}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-teal-400" />
            {experience.role}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-teal-400" />
            {experience.location}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="glass p-6 rounded-2xl mb-8">
        <p className="text-lg text-zinc-300 leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Achievements Grid */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Key Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experience.achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm text-zinc-400">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-100 mb-6">
          What I Did
        </h2>
        <div className="space-y-4">
          {experience.highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass p-4 rounded-xl flex gap-4"
            >
              <CheckCircle2 className="h-6 w-6 text-teal-400 shrink-0 mt-0.5" />
              <p className="text-zinc-300">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 mb-6">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:border-teal-500/50 hover:text-teal-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
