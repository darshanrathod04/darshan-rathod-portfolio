import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Vertical glow sweep */}
      <motion.div
        animate={{
          x: ["-10%", "110%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-3xl"
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Violet Orb */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-160px] right-[-100px] h-[460px] w-[460px] rounded-full bg-violet-500/20 blur-[160px]"
      />

      {/* Tiny stars */}
      {Array.from({ length: 35 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: Math.random(),
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}