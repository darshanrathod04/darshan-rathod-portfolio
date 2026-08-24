import { motion } from "framer-motion";
import {
  BracketsCurly,
  Database,
  Cloud,
  Gear,
  Code,
} from "@phosphor-icons/react";

const technologies = [
  {
    icon: Code,
    title: "Java",
    subtitle: "Core Language",
    color: "text-cyan-300",
  },
  {
    icon: Gear,
    title: "Spring Boot",
    subtitle: "Backend Framework",
    color: "text-emerald-300",
  },
  {
    icon: Database,
    title: "MySQL",
    subtitle: "Relational Database",
    color: "text-sky-300",
  },
  {
    icon: BracketsCurly,
    title: "REST APIs",
    subtitle: "Service Architecture",
    color: "text-violet-300",
  },
  {
    icon: Cloud,
    title: "Git & GitHub",
    subtitle: "Version Control",
    color: "text-orange-300",
  },
];

export default function TechnologyEcosystem() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-white/10 bg-[#040816] py-28"
    >
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              ENGINEERING STACK
            </span>
          </div>

          <h2 className="text-5xl font-black leading-none md:text-7xl">
            Technologies
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              I Build With
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            My focus is backend engineering using Java and Spring Boot, supported
            by modern frontend development, secure authentication, relational
            databases and clean REST architecture.
          </p>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="mb-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
              BACKEND FOUNDATION
            </p>

            <h3 className="mt-2 text-3xl font-black text-white">
              Spring Boot Architecture
            </h3>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-3">
            <ArchitectureCard
              title="Frontend"
              subtitle="React + TypeScript"
              color="cyan"
            />

            {/* Center */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(34,211,238,0)",
                    "0 0 30px rgba(34,211,238,.18)",
                    "0 0 0 rgba(34,211,238,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-8 py-6"
              >
                <Gear
                  size={42}
                  weight="duotone"
                  className="mx-auto text-cyan-300"
                />

                <h4 className="mt-3 text-center text-xl font-bold text-white">
                  Spring Boot
                </h4>

                <p className="mt-1 text-center text-sm text-slate-300">
                  REST API Layer
                </p>
              </motion.div>

              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-cyan-300">
                JWT • Services • Controllers
              </div>
            </div>

            <ArchitectureCard
              title="Database"
              subtitle="MySQL + JPA"
              color="emerald"
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-400">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            Client Request

            <div className="h-px w-8 bg-cyan-400/30" />

            Authentication

            <div className="h-px w-8 bg-cyan-400/30" />

            Persistence
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon
                    size={30}
                    weight="duotone"
                    className={tech.color}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {tech.title}
                </h3>

                <p className="mt-2 text-slate-300">{tech.subtitle}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-slate-400">
                  Production Ready Skill
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Architecture Card ---------- */

function ArchitectureCard({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: "cyan" | "emerald";
}) {
  const styles =
    color === "cyan"
      ? "border-cyan-400/20 bg-cyan-400/10"
      : "border-emerald-400/20 bg-emerald-400/10";

  return (
    <div className={`rounded-2xl border p-6 ${styles}`}>
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
        {title}
      </div>

      <h4 className="mt-3 text-xl font-bold text-white">{subtitle}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        Clean architecture with reusable components and maintainable project
        structure.
      </p>
    </div>
  );
}