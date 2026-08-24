import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/brand/logo-blue.png";

const bootLogs = [
  "Initializing portfolio",
  "Loading React application",
  "Configuring Spring Boot projects",
  "Fetching developer profile",
  "Preparing engineering showcase",
  "Portfolio ready",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLine((prev) => {
        if (prev === bootLogs.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setVisible(false);
          }, 700);

          return prev;
        }

        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030712]"
        >
          {/* Ambient glow */}
          <div className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-500/10" />
          <div className="absolute h-[620px] w-[620px] rounded-full border border-violet-500/10" />

          <div className="relative w-full max-w-xl px-8">
            {/* Identity */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-10 flex flex-col items-center"
            >
              <img
                src={logo}
                alt="Darshan Rathod"
                className="h-24 w-24 rounded-3xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.25)]"
              />

              <h2 className="mt-5 text-xl font-bold tracking-[0.18em] text-white uppercase">
                DARSHAN RATHOD
              </h2>

              <p className="mt-2 text-xs tracking-[0.28em] uppercase text-cyan-300">
                FULL STACK ENGINEER
              </p>
            </motion.div>

            {/* Terminal */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-2 font-mono text-sm">
                {bootLogs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: index <= line ? 1 : 0,
                      x: index <= line ? 0 : -8,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-cyan-400">$</span>

                    <span
                      className={
                        index === bootLogs.length - 1 && line >= index
                          ? "text-emerald-400"
                          : "text-slate-200"
                      }
                    >
                      {log}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((line + 1) / bootLogs.length) * 100}%`,
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  />
                </div>

                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-400">
                  <span>Loading</span>
                  <span>
                    {Math.round(((line + 1) / bootLogs.length) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <motion.p
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-slate-500"
            >
              Backend Engineering • Spring Boot • React
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}