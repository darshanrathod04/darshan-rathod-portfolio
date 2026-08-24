import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function HeroSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main cyan spotlight */}
      <motion.div
        style={{
          translateX: x,
          translateY: y,
        }}
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-70"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(34,211,238,0.08)_35%,transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Violet secondary light */}
      <motion.div
        style={{
          translateX: x,
          translateY: y,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute h-[700px] w-[700px] rounded-full opacity-40"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_65%)] blur-[120px]" />
      </motion.div>

      {/* Center ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />
    </>
  );
}