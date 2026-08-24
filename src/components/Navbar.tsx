import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/brand/logo-blue.png";
import {
  House,
  Stack,
  Folder,
  GitBranch,
  GithubLogo,
  ChatsCircle,
} from "@phosphor-icons/react";

const links = [
  { id: "home", label: "Home", icon: House },
  { id: "stack", label: "Stack", icon: Stack },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "journey", label: "Journey", icon: GitBranch },
  { id: "github", label: "GitHub", icon: GithubLogo },
  { id: "contact", label: "Contact", icon: ChatsCircle },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
    >
      <motion.div
        animate={{
          width: scrolled ? 980 : 1040,
          y: scrolled ? 0 : 6,
        }}
        transition={{ type: "spring", stiffness: 140, damping: 18 }}
        className="hidden lg:flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,.35)]"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <motion.img
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={logo}
            alt="Darshan Rathod Logo"
            className="h-11 w-11 rounded-full border border-cyan-400/20 shadow-lg shadow-cyan-500/20"
          />

          <div>
            <h3 className="text-sm font-bold text-white">
              Darshan Rathod
            </h3>
            <p className="text-[10px] tracking-[0.25em] uppercase text-cyan-300">
              FULL STACK ENGINEER
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="relative flex items-center gap-1 rounded-full border border-white/5 bg-black/20 p-1">
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor="hover"
                className="relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                    className="absolute inset-0 rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400/20 to-violet-500/20"
                  />
                )}

                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 transition ${
                    isActive
                      ? "text-cyan-200"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon
                    size={17}
                    weight={isActive ? "fill" : "regular"}
                  />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="#contact"
          data-cursor="hover"
          className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/30"
        >
          Hire Me
        </motion.a>
      </motion.div>

      {/* Mobile */}
      <div className="flex lg:hidden rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
        <a href="#home" className="font-bold text-white">
          Darshan
        </a>
      </div>
    </motion.header>
  );
}