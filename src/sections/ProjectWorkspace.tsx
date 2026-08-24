import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowSquareOut,
  FolderOpen,
  GithubLogo,
  Sparkle,
} from "@phosphor-icons/react";

import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import HolographicCard from "../components/projects/HolographicCard";

export default function ProjectWorkspace() {
  const [selected, setSelected] =
    useState<(typeof projects)[number] | null>(null);

  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-cyan-400" />
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-cyan-300">
              Engineering Portfolio
            </span>
          </div>

          <h2 className="text-5xl font-black leading-none text-white md:text-7xl">
            Flagship{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Real software platforms built with scalable architecture,
            intelligent engineering, and production-ready backend systems.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid gap-7 lg:grid-cols-2">
          {featured.map((project, index) => (
            <HolographicCard
              key={project.id}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl"
              >
                <div
                  className={`${
                    index === 0 ? "lg:grid lg:grid-cols-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Reflection */}
                    <motion.div
                      initial={{ x: "-120%", opacity: 0 }}
                      whileHover={{
                        x: "120%",
                        opacity: 1,
                      }}
                      transition={{ duration: 0.9 }}
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,.22), transparent 70%)",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-black/40 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
                      {project.status}
                    </div>

                    <div className="absolute bottom-5 left-5">
                      <p className="font-mono text-xs tracking-[0.25em] text-cyan-300/80">
                        {project.number} · {project.category}
                      </p>

                      <h3 className="mt-2 text-3xl font-black text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8">
                    <div>
                      <div className="mb-4 flex items-center gap-2 text-cyan-300">
                        <Sparkle size={16} weight="fill" />
                        <span className="text-xs tracking-[0.2em] uppercase">
                          Project Intelligence
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white">
                        {project.tagline}
                      </h4>

                      <p className="mt-4 leading-7 text-slate-400">
                        {project.description}
                      </p>

                      {/* Tech */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelected(project)}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
                      >
                        Open Case Study
                        <ArrowUpRight size={18} weight="bold" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-cyan-400/40"
                        >
                          <GithubLogo size={18} weight="duotone" />
                          Source
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-cyan-400/40"
                        >
                          <ArrowSquareOut size={18} weight="bold" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </HolographicCard>
          ))}
        </div>

        {/* Secondary */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {secondary.map((project, index) => (
            <HolographicCard key={project.id}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelected(project)}
                className="group w-full rounded-[24px] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl transition hover:border-cyan-400/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-cyan-300/70">
                    {project.number}
                  </span>

                  <FolderOpen
                    size={22}
                    weight="duotone"
                    className="text-slate-500 transition group-hover:text-cyan-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-cyan-300">
                  <span className="text-sm">View Project</span>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.button>
            </HolographicCard>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}