import { motion } from "framer-motion";
import logo from "../assets/brand/logo-blue.png";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  ArrowUpRight,
  PaperPlaneTilt,
  CheckCircle,
} from "@phosphor-icons/react";

const contacts = [
  {
    icon: EnvelopeSimple,
    title: "Email",
    value: "darshanmrathod.2005@gmail.com",
    href: "mailto:darshanmrathod.2005@gmail.com",
    color: "text-cyan-300",
  },
  {
    icon: LinkedinLogo,
    title: "LinkedIn",
    value: "Darshan Rathod",
    href: "https://linkedin.com/in/darshan-rathod-fullstack-developer",
    color: "text-sky-300",
  },
  {
    icon: GithubLogo,
    title: "GitHub",
    value: "github.com/darshanrathod04",
    href: "https://github.com/darshanrathod04",
    color: "text-violet-300",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nagpur, Maharashtra, India",
    href: "",
    color: "text-emerald-300",
  },
];

const skills = [
  "Java & Spring Boot Development",
  "REST API & JWT Authentication",
  "React + TypeScript Frontend",
  "MySQL Database Design",
];

export default function ContactCommandCenter() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-28"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              CONTACT
            </span>
          </div>

          <h2 className="text-5xl font-black leading-none md:text-7xl">
            Let's Build
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm a Java Full Stack Developer currently seeking Software
            Engineering Internship opportunities. If you're hiring backend or
            full stack developers, I'd love to connect.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            {/* Profile */}
            <div className="mb-8 flex items-center gap-4">
              <img
                          src={logo}
                             alt="Darshan Rathod"
                              className="h-24 w-24 rounded-3xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.25)]"
                            />

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Darshan Rathod
                </h3>
                <p className="text-slate-400">Java Full Stack Developer</p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contacts.map((item, index) => {
                const Icon = item.icon;

                if (item.href === "") {
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                        <Icon
                          size={24}
                          weight="duotone"
                          className={item.color}
                        />
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          {item.title}
                        </div>
                        <div className="mt-1 text-white">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                        <Icon
                          size={24}
                          weight="duotone"
                          className={item.color}
                        />
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          {item.title}
                        </div>
                        <div className="mt-1 text-white">{item.value}</div>
                      </div>
                    </div>

                    <ArrowUpRight size={18} className="text-slate-500" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <PaperPlaneTilt size={28} weight="fill" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">
                Open to Internship Opportunities
              </span>
            </div>

            <h3 className="text-3xl font-black text-white">
              Available for Software Engineering Internships
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              I'm looking for opportunities where I can contribute to Java
              backend development, Spring Boot REST APIs, database design and
              scalable full stack applications while continuing to grow as a
              software engineer.
            </p>

            <div className="mt-8 space-y-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-cyan-300"
                  />
                  <span className="text-slate-200">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Preferred Roles
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Java Developer",
                  "Backend Intern",
                  "Full Stack Intern",
                  "Spring Boot",
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="mailto:darshanmrathod.2005@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-4 font-semibold text-black transition hover:scale-105"
            >
              Send Email
              <ArrowUpRight size={18} weight="bold" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}