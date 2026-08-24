import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "violet" | "blue" | "none";
}

const glowMap = {
  cyan: "from-cyan-400/20 via-cyan-300/5 to-transparent",
  violet: "from-violet-400/20 via-violet-300/5 to-transparent",
  blue: "from-sky-400/20 via-blue-300/5 to-transparent",
  none: "",
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "cyan",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl ${className}`}
    >
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent" />

      {/* Animated Glow */}
      {glow !== "none" && (
        <div
          className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${glowMap[glow]} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
        />
      )}

      {/* Top Reflection */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />

      {/* Side Reflection */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-white/30 via-transparent to-transparent opacity-40" />

      {/* Inner Border */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/5" />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}