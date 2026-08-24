import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

import BootSequence from "../components/hero/BootSequence";
import BackgroundGrid from "../components/hero/BackgroundGrid";
import HeroSpotlight from "../components/hero/HeroSpotlight";
import ParticleGalaxy from "../components/hero/ParticleGalaxy";
import HolographicBackground from "../components/background/HolographicBackground";

import MagneticButton from "../components/ui/MagneticButton";
import GlassCard from "../components/ui/GlassCard";
import DeveloperConsole from "../components/hero/DeveloperConsole";

export default function Hero() {
  return (
    <>
      <BootSequence />

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
      >
        {/* Background */}
        <HolographicBackground />
        <BackgroundGrid />
        <ParticleGalaxy />
        <HeroSpotlight />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_.95fr]">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl"
              >
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                  JAVA · SPRING BOOT · REACT
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8 }}
                className="text-[58px] font-black leading-[0.9] md:text-[92px]"
              >
                BUILD
                <br />
                <span className="text-white">SCALABLE</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  BACKENDS
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
              >
                I'm <span className="font-semibold text-white">Darshan Rathod</span>,
                a Java Full Stack Developer passionate about building secure REST APIs,
                Spring Boot backend systems and modern web applications with clean architecture.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <MagneticButton>
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
                  >
                    View Projects
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://github.com/darshanrathod04"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 2.1.1 2.6.1.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 4.5 7.2 4.4 4.4 0 0 1 4.6 4s1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C16.6 3.7 17.6 4 17.6 4a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                    </svg>

                    GitHub
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Real Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                className="mt-14 grid grid-cols-3 gap-4"
              >
                <GlassCard glow="cyan" className="p-5">
                  <div className="text-3xl font-black text-cyan-300">4</div>
                  <p className="mt-1 text-xs tracking-wide text-slate-400">
                    Flagship Projects
                  </p>
                </GlassCard>

                <GlassCard glow="violet" className="p-5">
                  <div className="text-3xl font-black text-violet-300">
                    Java
                  </div>
                  <p className="mt-1 text-xs tracking-wide text-slate-400">
                    Primary Language
                  </p>
                </GlassCard>

                <GlassCard glow="blue" className="p-5">
                  <div className="text-3xl font-black text-sky-300">
                    REST
                  </div>
                  <p className="mt-1 text-xs tracking-wide text-slate-400">
                    Backend APIs
                  </p>
                </GlassCard>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 }}
                className="mt-10 flex gap-3"
              >
                <SocialIcon
                  href="https://linkedin.com/in/darshan-rathod-fullstack-developer"
                  type="linkedin"
                />

                <SocialIcon
                  href="https://github.com/darshanrathod04"
                  type="github"
                />
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7, duration: 0.8 }}
            >
              <DeveloperConsole />
            </motion.div>
          </div>
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-[10px] uppercase tracking-[0.35em]">
              SCROLL
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

/* ---------- Social Icons ---------- */

function SocialIcon({
  href,
  type,
}: {
  href: string;
  type: "github" | "linkedin";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400/40 hover:bg-white/5"
    >
      {type === "github" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 2.1.1 2.6.1.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 4.5 7.2 4.4 4.4 0 0 1 4.6 4s1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C16.6 3.7 17.6 4 17.6 4a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8h3V22h-3V8Zm7 0h2.9v1.9h.04c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V22h-3v-7.1c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V22h-3V8Z" />
        </svg>
      )}
    </a>
  );
}