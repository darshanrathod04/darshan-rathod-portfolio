import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const particles = [...Array(32)].map((_, i) => ({
  id: i,
  size: 6 + (i % 5) * 3,
  x: (i * 83) % 100,
  y: (i * 47) % 100,
  delay: i * 0.15,
}));

export default function HolographicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 60);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 60);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const aurora1X = useTransform(springX, (v) => v * -1.2);
  const aurora1Y = useTransform(springY, (v) => v * -1.2);

  const aurora2X = useTransform(springX, (v) => v * 0.8);
  const aurora2Y = useTransform(springY, (v) => v * 0.8);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora 1 */}
      <motion.div
        style={{ x: aurora1X, y: aurora1Y }}
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Aurora 2 */}
      <motion.div
        style={{ x: aurora2X, y: aurora2Y }}
        className="absolute bottom-[-180px] right-[-140px] h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-[160px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            y: [0, -45, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + (p.id % 5),
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.7)]"
        />
      ))}

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(3,7,18,.88)_100%)]" />
    </div>
  );
}