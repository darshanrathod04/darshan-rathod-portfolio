import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hover, setHover] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 500, damping: 35 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 35 });

  const trailX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "button, a, [data-cursor='hover']"
      );

      setHover(!!interactive);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Energy Trail */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="h-full w-full rounded-full bg-cyan-400/10 blur-3xl" />
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        style={{ x, y }}
        animate={{
          scale: hover ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-6 w-6 items-center justify-center">
          {/* outer ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-cyan-300/70"
          />

          {/* glow */}
          <div className="absolute h-10 w-10 rounded-full bg-cyan-400/20 blur-xl" />

          {/* core */}
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
        </div>
      </motion.div>
    </>
  );
}