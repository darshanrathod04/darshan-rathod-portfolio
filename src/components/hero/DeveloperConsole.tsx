import { motion } from "framer-motion";
import {
  Browser,
  Database,
  ShieldCheck,
  BracketsCurly,
  CheckCircle,
} from "@phosphor-icons/react";

const architecture = [
  {
    icon: Browser,
    title: "React Frontend",
    desc: "TypeScript + Tailwind UI",
    color: "from-cyan-400/20 to-sky-500/10",
    iconColor: "text-cyan-300",
  },
  {
    icon: BracketsCurly,
    title: "Spring Boot API",
    desc: "REST Controllers & Services",
    color: "from-violet-400/20 to-fuchsia-500/10",
    iconColor: "text-violet-300",
  },
  {
    icon: ShieldCheck,
    title: "JWT Security",
    desc: "Authentication & Authorization",
    color: "from-emerald-400/20 to-green-500/10",
    iconColor: "text-emerald-300",
  },
  {
    icon: Database,
    title: "MySQL Database",
    desc: "JPA / Hibernate Persistence",
    color: "from-orange-400/20 to-amber-500/10",
    iconColor: "text-orange-300",
  },
];

export default function DeveloperConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[#061224]/90 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,.08)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_45%)]" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <div className="text-xs font-medium tracking-[0.28em] text-cyan-300 uppercase">
          Backend Architecture
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-300">
          <CheckCircle size={16} weight="fill" />
          Ready
        </div>
      </div>

      {/* Hero Card */}
      <div className="relative p-6">
        <div className="rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-transparent p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
            Production Stack
          </p>

          <h3 className="text-3xl font-black leading-tight text-white">
            Java + Spring Boot
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Building scalable backend systems using REST APIs, JWT
            authentication, MySQL and clean layered architecture.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {architecture.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + i * 0.08 }}
                className={`rounded-2xl border border-white/8 bg-gradient-to-br ${item.color} p-4`}
              >
                <Icon
                  size={26}
                  weight="duotone"
                  className={item.iconColor}
                />

                <h4 className="mt-3 text-sm font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Flow */}
        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-500">
            Request Flow
          </p>

          <div className="flex items-center justify-between text-center">
            <Flow title="React" sub="UI" color="text-cyan-300" />
            <Arrow />
            <Flow title="REST" sub="API" color="text-violet-300" />
            <Arrow />
            <Flow title="JWT" sub="Auth" color="text-emerald-300" />
            <Arrow />
            <Flow title="MySQL" sub="DB" color="text-orange-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Flow({
  title,
  sub,
  color,
}: {
  title: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold ${color}`}
      >
        {title.charAt(0)}
      </div>

      <div className={`text-sm font-semibold ${color}`}>{title}</div>

      <div className="text-[10px] uppercase tracking-wider text-slate-500">
        {sub}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-px w-8 bg-gradient-to-r from-cyan-400/20 via-cyan-300 to-cyan-400/20" />
  );
}