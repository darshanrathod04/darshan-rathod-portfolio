import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MagnifyingGlass,
  Folder,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  DownloadSimple,
  House,
  Sparkle,
} from "@phosphor-icons/react";

type Action = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const actions: Action[] = useMemo(
    () => [
      {
        title: "Go to Home",
        subtitle: "Hero Section",
        icon: <House size={18} weight="duotone" />,
        action: () => scrollTo("home"),
      },
      {
        title: "Open Projects",
        subtitle: "Flagship Engineering Work",
        icon: <Folder size={18} weight="duotone" />,
        action: () => scrollTo("projects"),
      },
      {
        title: "GitHub Profile",
        subtitle: "github.com/darshanrathod04",
        icon: <GithubLogo size={18} weight="duotone" />,
        action: () =>
          window.open(
            "https://github.com/darshanrathod04",
            "_blank"
          ),
      },
      {
        title: "LinkedIn",
        subtitle: "Professional Profile",
        icon: <LinkedinLogo size={18} weight="duotone" />,
        action: () =>
          window.open(
            "https://www.linkedin.com/in/darshan-rathod-fullstack-developer/",
            "_blank"
          ),
      },
      {
        title: "Contact Me",
        subtitle: "Jump to Contact Terminal",
        icon: <EnvelopeSimple size={18} weight="duotone" />,
        action: () => scrollTo("contact"),
      },
      {
        title: "Download Resume",
        subtitle: "PDF Resume",
        icon: <DownloadSimple size={18} weight="duotone" />,
        action: () => {
          window.open("/resume.pdf", "_blank");
        },
      },
    ],
    []
  );

  const filtered = actions.filter((item) =>
    (item.title + item.subtitle)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const keys = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((v) => Math.min(v + 1, filtered.length - 1));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((v) => Math.max(v - 1, 0));
      }

      if (e.key === "Enter" && filtered[selected]) {
        filtered[selected].action();
        setOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", keys);
    return () => window.removeEventListener("keydown", keys);
  }, [filtered, selected, open]);

  return (
    <>
      {/* Floating Hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-300 backdrop-blur-xl transition hover:border-cyan-400/30 lg:flex"
      >
        <Sparkle size={16} weight="fill" className="text-cyan-300" />
        Command
        <kbd className="rounded bg-white/10 px-2 py-0.5 text-xs">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md"
            />

            {/* Palette */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              className="fixed left-1/2 top-24 z-[130] w-[92vw] max-w-2xl -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/95 backdrop-blur-2xl"
            >
              {/* Search */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <MagnifyingGlass
                  size={22}
                  className="text-cyan-300"
                />

                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-white outline-none placeholder:text-slate-500"
                />

                <kbd className="rounded bg-white/10 px-2 py-1 text-xs text-slate-400">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[420px] overflow-y-auto p-2">
                {filtered.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      item.action();
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition ${
                      selected === index
                        ? "bg-cyan-400/10 border border-cyan-400/20"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="rounded-xl bg-white/5 p-3 text-cyan-300">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <div className="font-medium text-white">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-400">
                        {item.subtitle}
                      </div>
                    </div>
                  </button>
                ))}

                {filtered.length === 0 && (
                  <div className="p-10 text-center text-slate-500">
                    No matching command found.
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-slate-500">
                <span>Navigate your portfolio instantly</span>

                <div className="flex gap-3">
                  <span>↑↓ Move</span>
                  <span>Enter Open</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}