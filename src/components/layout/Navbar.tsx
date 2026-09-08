import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLocalTime } from "../../hooks/useLocalTime";

export function Navbar() {
  const localTime = useLocalTime();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 backdrop-blur-md bg-[#050505]/70 border-b border-white/[0.05]"
    >
      <div className="flex items-center gap-3.5">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors shadow-sm shrink-0">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors cursor-pointer">
            Rishabh Sharma
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-neutral-400 ml-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chennai {localTime}</span>
        </div>
      </div>

      <div className="flex items-center gap-6 md:gap-8 text-sm font-medium">
        <a href="#about" className="text-neutral-400 hover:text-white transition-colors hidden md:inline-block">
          About
        </a>
        <a href="#skills" className="text-neutral-400 hover:text-white transition-colors hidden sm:inline-block">
          Skills
        </a>
        <a href="#projects" className="text-neutral-400 hover:text-white transition-colors hidden sm:inline-block">
          Works
        </a>
        <a href="#experience" className="text-neutral-400 hover:text-white transition-colors hidden md:inline-block">
          Experience
        </a>
        <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">
          Contact
        </a>
        <a
          href="/resume.docx"
          download="Rishabh_Sharma_Resume.docx"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 duration-200 shadow-sm"
        >
          <span className="text-xs font-semibold tracking-wide uppercase">Resume</span>
          <Download className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
}
