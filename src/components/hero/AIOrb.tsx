import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AIOrb() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(my, { stiffness: 120, damping: 18 });
  const ry = useSpring(mx, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;

      mx.set(x);
      my.set(-y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="absolute right-10 top-8 z-20 hidden lg:block"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
        }}
        className="relative h-72 w-72"
      >
        {/* Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute inset-0 rounded-full bg-cyan-400 blur-[70px]"
        />

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="absolute inset-2 rounded-full border border-cyan-400/30"
        >
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee]" />
        </motion.div>

        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "linear",
          }}
          className="absolute inset-8 rounded-full border border-sky-400/20"
        >
          <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_#38bdf8]" />
        </motion.div>

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="absolute inset-14 rounded-full border border-violet-400/20"
        />

        {/* Core Sphere */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            },
            scale: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #7dd3fc, #2563eb 55%, #312e81 100%)",
            boxShadow:
              "0 0 60px rgba(34,211,238,.45), inset 0 0 40px rgba(255,255,255,.18)",
          }}
        >
          {/* Hex Grid */}
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
              `,
              backgroundSize: "12px 12px",
            }}
          />

          {/* Core Light */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-sm"
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + i,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute h-2 w-2 rounded-full bg-cyan-300"
              style={{
                left: `${50 + Math.cos(i) * 42}%`,
                top: `${50 + Math.sin(i) * 42}%`,
                boxShadow: "0 0 12px #22d3ee",
              }}
            />
          </motion.div>
        ))}

        {/* Label */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/20 bg-black/40 px-4 py-2 backdrop-blur-xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-cyan-300">
            SHREE CORE
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}