import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,transparent_55%)]" />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-[-140px] top-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      {/* Violet Glow */}
      <motion.div
        animate={{
          x: [30, -20, 30],
          y: [0, -20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-[-180px] right-[-120px] h-[560px] w-[560px] rounded-full bg-violet-500/10 blur-[150px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}