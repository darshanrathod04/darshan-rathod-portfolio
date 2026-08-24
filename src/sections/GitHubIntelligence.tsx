import { motion } from "framer-motion";
import logo from "../assets/brand/logo-blue.png";
import {
  GitBranch,
  GitCommit,
  GithubLogo,
  Star,
  Code,
  ArrowSquareOut,
} from "@phosphor-icons/react";

const stats = [
  { icon: GitBranch, label: "Public Repositories", value: "15+" },
  { icon: GitCommit, label: "Git Commits", value: "500+" },
  { icon: Star, label: "Flagship Projects", value: "04" },
  { icon: Code, label: "Primary Stack", value: "Java" },
];

const repositories = [
  {
    name: "Smart Campus Connect",
    description:
      "Full-stack placement and campus collaboration platform with role-based authentication, internships, events and REST APIs.",
    stack: "Java • Spring Boot • React • MySQL",
    status: "Flagship",
  },
  {
    name: "Student App",
    description:
      "Modern student productivity application focused on academic workflows, dashboard experience and reusable frontend architecture.",
    stack: "React • TypeScript • Tailwind",
    status: "Active",
  },
  {
    name: "Fitness Tracker",
    description:
      "Spring Boot backend implementing activities, authentication, DTO pattern, JPA relationships and MySQL persistence.",
    stack: "Spring Boot • JPA • JWT • MySQL",
    status: "Backend",
  },
  {
    name: "EduFlow 360",
    description:
      "Educational dashboard system with responsive analytics, modular UI components and scalable frontend engineering.",
    stack: "React • TypeScript • Charts",
    status: "UI Project",
  },
];

export default function GitHubIntelligence() {
  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-28"
    >
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <GithubLogo size={20} weight="fill" className="text-cyan-300" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-300">
              GITHUB PROFILE
            </span>
          </div>

          <h2 className="text-5xl font-black leading-none md:text-7xl">
            Open Source
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Engineering
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            My GitHub reflects practical backend engineering with Java, Spring
            Boot, REST APIs, JWT authentication, MySQL and modern React
            applications.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <Icon
                  size={28}
                  weight="duotone"
                  className="mb-4 text-cyan-300"
                />

                <div className="text-3xl font-black text-white">
                  {item.value}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <img
                                        src={logo}
                                           alt="Darshan Rathod"
                                            className="h-24 w-24 rounded-3xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.25)]"
                                          />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Darshan Rathod
                </h3>

                <p className="mt-1 text-slate-400">
                  Java Full Stack Developer
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-cyan-300">
                  <GitBranch size={16} weight="duotone" />
                  Backend • Spring Boot • React
                </div>
              </div>
            </div>

            <a
              href="https://github.com/darshanrathod04"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 font-semibold text-cyan-200 transition hover:border-cyan-300"
            >
              <GithubLogo size={22} weight="fill" />
              Visit GitHub
              <ArrowSquareOut size={18} weight="bold" />
            </a>
          </div>
        </motion.div>

        {/* Repository Grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <GithubLogo
                  size={26}
                  className="text-slate-500 transition group-hover:text-cyan-300"
                />

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {repo.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{repo.name}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {repo.description}
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Technology Stack
                </div>

                <div className="text-sm text-cyan-300">{repo.stack}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}