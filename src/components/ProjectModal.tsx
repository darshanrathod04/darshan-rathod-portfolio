import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArchitecturePreview from "./projects/ArchitecturePreview";
import {
  X,
  GithubLogo,
  ArrowSquareOut,
  Stack,
  Cpu,
  Database,
  ShieldCheck,
} from "@phosphor-icons/react";

type Project = {
  id: number;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  image: string;
  featured: boolean;
  technologies: string[];
  github?: string;
  demo?: string;
};

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
            }}
            className="fixed left-1/2 top-1/2 z-[100] h-[88vh] w-[94vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#050816] shadow-[0_0_80px_rgba(34,211,238,.15)]"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,.12),transparent_60%)]" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 px-8 py-6">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-cyan-300">
                  {project.number} · {project.category}
                </p>

                <h2 className="mt-2 text-3xl font-black">{project.title}</h2>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Body */}
            <div className="grid h-[calc(88vh-92px)] lg:grid-cols-[1.2fr_.8fr]">
              {/* LEFT */}
              <div className="overflow-y-auto p-8">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                 <ArchitecturePreview />
                </div>

                <h3 className="mt-8 text-xl font-bold text-cyan-300">
                  {project.tagline}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                                <div className="rounded-xl bg-white/5 p-3 text-center">
                                  <div className="text-xl font-black text-cyan-300">REST</div>
                                  <div className="text-[10px] text-slate-500">Architecture</div>
                                </div>

                                <div className="rounded-xl bg-white/5 p-3 text-center">
                                  <div className="text-xl font-black text-violet-300">JWT</div>
                                  <div className="text-[10px] text-slate-500">Security</div>
                                </div>

                                <div className="rounded-xl bg-white/5 p-3 text-center">
                                  <div className="text-xl font-black text-emerald-300">MVC</div>
                                  <div className="text-[10px] text-slate-500">Design</div>
                                </div>
                              </div>
              </div>



              {/* RIGHT */}
              <div className="border-l border-white/10 bg-white/[0.02] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {project.status}
                  </span>

                  <span className="text-xs text-slate-500">BUILD 2026</span>
                </div>

                <h3 className="text-lg font-bold">Architecture Overview</h3>

                <div className="mt-6 space-y-4">
                  <Metric
                    icon={<Stack size={20} weight="duotone" />}
                    title="System Design"
                    value="Modular Architecture"
                  />

                  <Metric
                    icon={<Cpu size={20} weight="duotone" />}
                    title="Backend"
                    value="Spring Boot + REST"
                  />

                  <Metric
                    icon={<Database size={20} weight="duotone" />}
                    title="Database"
                    value="MySQL"
                  />

                  <Metric
                    icon={<ShieldCheck size={20} weight="duotone" />}
                    title="Security"
                    value="JWT + Spring Security"
                  />
                </div>

                <div className="my-8 border-t border-white/10" />

                {/* Actions */}
                <div className="space-y-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400/40"
                    >
                      <div className="flex items-center gap-3">
                        <GithubLogo size={22} weight="duotone" />
                        <span>Source Code</span>
                      </div>

                      <ArrowSquareOut size={18} weight="bold" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-4 font-semibold text-black"
                    >
                      <span>Launch Project</span>

                      <ArrowSquareOut size={20} weight="bold" />
                    </a>
                  )}
                </div>

                {/* Note */}
                <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
                  <p className="font-mono text-xs tracking-[0.25em] text-cyan-300">
                    ENGINEERING NOTE
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Every flagship project in this portfolio follows reusable
                    architecture, scalable backend principles, and
                    production-oriented engineering practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------- Metric Card ---------- */

function Metric({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-3 text-cyan-300">
        {icon}
        <span className="text-sm">{title}</span>
      </div>

      <div className="mt-2 text-lg font-bold text-white">{value}</div>
    </div>
  );
}