import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function HolographicCard({
  children,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 18);
    rotateX.set(-(py - 0.5) * 18);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 160,
      }}
      className={`relative ${className}`}
    >
      {/* Glass Reflection */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0"
        whileHover={{ opacity: 1 }}
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,.18), transparent 35%, transparent 65%, rgba(255,255,255,.12))",
        }}
      />

      {/* Neon Border */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-[30px]"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,.5), rgba(139,92,246,.45), rgba(34,211,238,.5))",
          filter: "blur(8px)",
        }}
      />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
}