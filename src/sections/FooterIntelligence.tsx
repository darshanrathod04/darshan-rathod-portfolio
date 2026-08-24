import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GithubLogo,
  Heart,
  LinkedinLogo,
  Sparkle,
} from "@phosphor-icons/react";

const nav = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function FooterIntelligence() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02050D]">
      {/* Aurora */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2"
            >
              <Sparkle size={14} weight="fill" className="text-cyan-300" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-cyan-300">
                DARSHAN.DEV • 2040
              </span>
            </motion.div>

            <h2 className="text-5xl font-black leading-none md:text-6xl">
              Building
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Intelligent Software
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Java Full Stack Developer passionate about scalable backend
              architecture, AI systems and real-world engineering.
            </p>

            <div className="mt-8 flex gap-3">
              <Social
                href="https://github.com/darshanrathod04"
                icon={<GithubLogo size={22} weight="fill" />}
              />

              <Social
                href="https://www.linkedin.com/in/darshan-rathod-fullstack-developer/"
                icon={<LinkedinLogo size={22} weight="fill" />}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 font-mono text-xs tracking-[0.28em] text-slate-500">
                NAVIGATION
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {nav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-cyan-400/30 hover:bg-white/[0.04]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-emerald-300">
                  Available for Internship & Full-Time Roles
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Open to Java Backend, Spring Boot and AI Engineering
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            © 2026 Darshan Rathod
            <Heart size={14} weight="fill" className="text-red-400" />
            Crafted with React · TypeScript · Framer Motion
          </div>

          <div className="font-mono text-xs tracking-[0.28em] text-cyan-400">
            SHREE ENGINEERING PROTOCOL
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Social Button ---------- */

function Social({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
    >
      {icon}
    </motion.a>
  );
}