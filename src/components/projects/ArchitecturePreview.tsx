import { motion } from "framer-motion";
import {
  Monitor,
  Globe,
  Brain,
  Database,
} from "@phosphor-icons/react";

export default function ArchitecturePreview() {
  const nodes = [
    { icon: Monitor, label: "React UI", x: 70, y: 70 },
    { icon: Globe, label: "REST API", x: 250, y: 70 },
    { icon: Brain, label: "AI Core", x: 70, y: 200 },
    { icon: Database, label: "MySQL", x: 250, y: 200 },
  ];

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#040816]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated connections */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {[
          [90, 90, 250, 90],
          [90, 220, 250, 220],
          [90, 90, 90, 220],
          [250, 90, 250, 220],
        ].map((l, i) => (
          <g key={i}>
            <line
              x1={l[0]}
              y1={l[1]}
              x2={l[2]}
              y2={l[3]}
              stroke="rgba(255,255,255,.15)"
              strokeWidth="1.5"
            />

            <motion.circle
              r="4"
              fill="#22d3ee"
              initial={{
                cx: l[0],
                cy: l[1],
              }}
              animate={{
                cx: l[2],
                cy: l[3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((n, i) => {
        const Icon = n.icon;

        return (
          <motion.div
            key={n.label}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: i * 0.1,
            }}
            className="absolute"
            style={{
              left: n.x,
              top: n.y,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex w-28 flex-col items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 backdrop-blur-xl"
            >
              <Icon
                size={26}
                weight="duotone"
                className="text-cyan-300"
              />
              <p className="mt-2 text-center text-xs text-white">
                {n.label}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Status */}
      <div className="absolute bottom-3 right-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1">
        <span className="text-[10px] tracking-[0.2em] text-emerald-300">
          LIVE ARCHITECTURE
        </span>
      </div>
    </div>
  );
}