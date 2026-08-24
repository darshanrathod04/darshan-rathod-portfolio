import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  GitBranch,
  GraduationCap,
  Briefcase,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "B.Tech CSE (Data Science)",
    org: "TGPCET, Nagpur",
    icon: GraduationCap,
    color: "cyan",
  },
  {
    year: "2024",
    title: "Java Backend Engineering",
    org: "Spring Boot · REST APIs · MySQL",
    icon: Cpu,
    color: "blue",
  },
  {
    year: "2025",
    title: "Smart Campus Connect",
    org: "Full Stack Engineering Platform",
    icon: GitBranch,
    color: "violet",
  },
  {
    year: "2026",
    title: "Fitness Tracker",
    org: "Android + Spring Boot Production Project",
    icon: Briefcase,
    color: "emerald",
  },
  {
    year: "2026",
    title: "Open Source Development",
    org: "GitHub · Full Stack Projects · Continuous Learning",
    icon: Rocket,
    color: "orange",
  },
];
const stats = [
  { label: "Primary Language", value: "Java" },
  { label: "Backend", value: "Spring Boot" },
  { label: "Database", value: "MySQL" },
  { label: "Frontend", value: "React + TS" },
];
export default function DeveloperIntelligence() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/10 bg-[#020617] py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-400" />
            <span className="font-mono text-xs tracking-[0.35em] text-cyan-300">
              DEVELOPER INTELLIGENCE
            </span>
          </div>

          <h2 className="text-5xl font-black leading-none md:text-7xl">
            Engineering
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Evolution
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Every project represents an evolution in architecture, backend
            engineering and intelligent software systems.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          {/* LEFT : Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[30px] top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="relative flex gap-6"
                  >
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border ${
                        item.color === "cyan"
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : item.color === "blue"
                          ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
                          : item.color === "violet"
                          ? "border-violet-400/30 bg-violet-400/10 text-violet-300"
                          : item.color === "emerald"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-orange-400/30 bg-orange-400/10 text-orange-300"
                      }`}
                    >
                      <Icon size={28} />
                    </div>

                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                      <div className="font-mono text-xs tracking-[0.25em] text-cyan-300">
                        {item.year}
                      </div>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-400">{item.org}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT : AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                <Brain size={28} />
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-cyan-300">
                  LIVE PROFILE
                </p>
                <h3 className="text-xl font-bold text-white">
                  Darshan Intelligence
                </h3>
              </div>
            </div>

            {/* Status */}
            <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs tracking-[0.2em] text-cyan-300">
                  STATUS
                </span>
              </div>

              <div className="text-2xl font-black text-white">
                OPEN TO SOFTWARE ENGINEERING INTERNSHIPS
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="text-xs text-slate-500">{stat.label}</div>
                  <div className="mt-1 text-lg font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 font-mono text-xs tracking-[0.25em] text-cyan-300">
                CURRENT FOCUS
              </p>

              <div className="space-y-3">
                {[
                  "Scalable Spring Boot Architecture",
                  "REST API Design & JWT Security",
                  "React + TypeScript Frontend",
                  "Clean Code & System Design",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="font-mono text-xs tracking-[0.25em] text-cyan-300">
                ENGINEERING PHILOSOPHY
              </p>

             <p className="mt-4 text-lg font-medium leading-8 text-white">
               “I'm passionate about building reliable backend systems, writing clean
               code, and solving real-world problems through software engineering.”
             </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}