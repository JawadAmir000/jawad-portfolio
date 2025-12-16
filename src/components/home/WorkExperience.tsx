const experiences = [
  {
    company: "IQVIA",
    role: "Senior Software Engineer",
    period: "2024 - Present",
    description: "Healthcare AI & Microservices",
    type: "Fortune 500",
  },
  {
    company: "Autonomix",
    role: "Lead Developer",
    period: "2024 - Present",
    description: "AI Platform - Donna",
    type: "Startup",
  },
  {
    company: "Secured Link Service",
    role: "Software Engineer",
    period: "2022 - 2024",
    description: "Fintech & Blockchain Solutions",
    type: "Switzerland",
  },
];

export function WorkExperience() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Work Experience
      </h2>

      <ul className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <li key={exp.company} className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
              <span className="text-lg font-bold text-teal-500">
                {exp.company[0]}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-500">
                    {exp.type}
                  </span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.role}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
