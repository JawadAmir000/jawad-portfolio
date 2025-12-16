"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Rocket } from "lucide-react";

const experiences = [
  {
    company: "IQVIA",
    role: "Senior Software Engineer",
    period: "2024 - Present",
    description: "Healthcare AI & Microservices",
    type: "Fortune 500",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Autonomix",
    role: "Lead Developer",
    period: "2024 - Present",
    description: "AI Platform - Donna",
    type: "Startup",
    icon: Rocket,
    color: "from-teal-500 to-emerald-500",
  },
  {
    company: "Secured Link Service",
    role: "Software Engineer",
    period: "2022 - 2024",
    description: "Fintech & Blockchain Solutions",
    type: "Switzerland",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
  },
];

export function WorkExperience() {
  return (
    <section className="py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 glass rounded-xl">
          <Briefcase className="w-6 h-6 text-teal-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-zinc-100">Work Experience</h2>
          <p className="text-zinc-500">Building impactful solutions at scale</p>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="glass glass-hover p-6 sm:pl-16 relative group"
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 hidden sm:flex">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                    <div className="w-2 h-2 rounded-full bg-black" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-10 sm:hidden`}>
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-teal-400 transition-colors">
                          {exp.company}
                        </h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-zinc-300 font-medium">{exp.role}</p>
                      <p className="text-sm text-zinc-500 mt-1">{exp.description}</p>
                    </div>
                  </div>

                  <span className="text-sm text-zinc-500 font-medium shrink-0">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
