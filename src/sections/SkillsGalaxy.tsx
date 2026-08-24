import { motion } from "framer-motion";
import {
  Atom,
  Database,
  GitBranch,
  Cpu,
  Globe,
  BracketsCurly,
  Cloud,
} from "@phosphor-icons/react";

import logo from "../assets/brand/logo-blue.png";

const skills = [
  { icon: Cpu, name: "Java", x: 0, y: -170, orbit: 1 },
  { icon: BracketsCurly, name: "REST API", x: 150, y: -105, orbit: 2 },
  { icon: Globe, name: "React", x: 185, y: 40, orbit: 3 },
  { icon: Database, name: "MySQL", x: 105, y: 165, orbit: 2 },
  { icon: GitBranch, name: "Git", x: -115, y: 165, orbit: 2 },
  { icon: Cloud, name: "Spring Boot", x: -185, y: 40, orbit: 3 },
  { icon: Atom, name: "JPA", x: -150, y: -105, orbit: 2 },
];

export default function SkillsGalaxy() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-32"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
          ENGINEERING SKILLS
        </p>

        <h2 className="mt-4 text-5xl font-black text-white md:text-7xl">
          Technology
          <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Orbit
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          The technologies I use most while building Java backend systems,
          RESTful APIs and modern full-stack applications.
        </p>

        {/* Orbit */}
        <div className="relative mx-auto mt-24 h-[540px] w-[540px]">
          {/* Orbit rings */}
          {[170, 260, 360].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 50 + i * 25,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 rounded-full border border-cyan-400/10"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
              }}
            />
          ))}

          {/* Center Brand */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                "0 0 30px rgba(34,211,238,.20)",
                "0 0 60px rgba(139,92,246,.25)",
                "0 0 30px rgba(34,211,238,.20)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 backdrop-blur-xl"
          >
            <img
              src={logo}
              alt="Darshan Rathod"
              className="h-16 w-16 rounded-2xl"
            />

            <h3 className="mt-3 text-lg font-bold text-white">Darshan</h3>

            <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300">
              Full Stack
            </p>
          </motion.div>

          {/* Skill nodes */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  x: skill.x,
                  y: [skill.y, skill.y - 8, skill.y],
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 3 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-28 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.08]">
                  <Icon
                    size={28}
                    weight="duotone"
                    className="mx-auto text-cyan-300"
                  />

                  <p className="mt-3 text-center text-sm font-semibold text-white">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["Java", "Spring Boot", "React", "MySQL", "REST APIs", "JPA", "Git"].map(
            (tech) => (
              <div
                key={tech}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}