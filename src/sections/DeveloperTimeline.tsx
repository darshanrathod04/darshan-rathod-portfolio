import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Briefcase,
  Trophy,
} from "@phosphor-icons/react";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE (Data Science)",
    subtitle: "TGPCET • Nagpur",
    description:
      "Started my Computer Science journey and built strong programming fundamentals in C, Java and Data Structures.",
    icon: GraduationCap,
    color: "cyan",
  },
  {
    year: "2024",
    title: "Java Backend Development",
    subtitle: "Spring Boot • REST APIs",
    description:
      "Focused on backend engineering using Java, Spring Boot, MySQL, MVC architecture and JWT authentication.",
    icon: Code,
    color: "violet",
  },
  {
    year: "2025",
    title: "Built Full Stack Projects",
    subtitle: "React • TypeScript • MySQL",
    description:
      "Developed Smart Campus Connect, EduFlow 360 and Library Management System with production-oriented architecture.",
    icon: Briefcase,
    color: "emerald",
  },
  {
    year: "2026",
    title: "Preparing for Software Engineering Internship",
    subtitle: "Java Full Stack Developer",
    description:
      "Strengthening backend architecture, clean code practices and scalable system design for internship opportunities.",
    icon: Trophy,
    color: "orange",
  },
];

const colorClasses = {
  cyan: {
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    text: "text-cyan-300",
    line: "from-cyan-400",
  },
  violet: {
    border: "border-violet-400/30",
    bg: "bg-violet-400/10",
    text: "text-violet-300",
    line: "from-violet-400",
  },
  emerald: {
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    text: "text-emerald-300",
    line: "from-emerald-400",
  },
  orange: {
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    text: "text-orange-300",
    line: "from-orange-400",
  },
};

export default function DeveloperTimeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span className="text-xs tracking-[0.3em] text-cyan-300">
              DEVELOPER JOURNEY
            </span>
          </div>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Learning &
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Building
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            My engineering journey focuses on continuous learning, backend
            architecture and building real software products—not hype.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/30 to-transparent md:left-1/2" />

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const style = colorClasses[item.color];

              const left = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Node */}
                  <div
                    className={`absolute left-0 z-20 flex h-14 w-14 items-center justify-center rounded-full border ${style.border} ${style.bg} md:left-1/2 md:-translate-x-1/2`}
                  >
                    <Icon
                      size={26}
                      weight="duotone"
                      className={style.text}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-20 w-full md:ml-0 md:w-[46%] ${
                      left ? "" : ""
                    }`}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-cyan-400/20">
                      <div className="mb-4 flex items-center justify-between">
                        <span
                          className={`text-sm font-bold tracking-[0.25em] ${style.text}`}
                        >
                          {item.year}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {item.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className={`h-full bg-gradient-to-r ${style.line} to-transparent`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <p className="text-lg italic leading-8 text-slate-300">
              “I believe great software comes from understanding systems deeply,
              writing clean code consistently and solving real user problems.”
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            <p className="mt-6 text-sm tracking-[0.25em] text-cyan-300">
              DARSHAN RATHOD · JAVA FULL STACK DEVELOPER
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}