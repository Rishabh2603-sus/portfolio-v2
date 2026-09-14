import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Download, Menu, X, Volume2, VolumeX } from "lucide-react";
import { useSoundDesign } from "../../hooks/useSoundDesign";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const { playSound, isAmbientPlaying, toggleAmbient } = useSoundDesign();
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Capabilities", href: "#capabilities" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:py-6 md:px-12 lg:px-24 backdrop-blur-md bg-[#050505]/60 border-b border-white/[0.04]"
      >
        <div className="flex items-center gap-3 relative z-50">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0">
            <img src="/avatar.jpg" alt="Rishabh Sharma" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium tracking-tight text-white cursor-pointer">
            Rishabh Sharma
          </span>
        </div>

        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium relative z-50">
          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors"
                onMouseEnter={() => playSound("hover")}
                onClick={() => playSound("click")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Sound / Ambient Music Toggle */}
          <button
            onClick={() => {
              playSound("click");
              toggleAmbient();
            }}
            onMouseEnter={() => playSound("hover")}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
            title={isAmbientPlaying ? "Mute Soundscape" : "Play Soundscape"}
            aria-label="Toggle soundscape"
          >
            {isAmbientPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Trigger */}
          <button
            onClick={() => {
              playSound("click");
              onOpenTerminal?.();
            }}
            onMouseEnter={() => playSound("hover")}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
            title="Open Terminal"
            aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <a
            href="/resume.docx"
            download="Rishabh_Sharma_Resume.docx"
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 duration-200"
          >
            <span className="text-xs font-bold tracking-wide uppercase">Resume</span>
            <Download className="w-3.5 h-3.5 hidden sm:block" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 -mr-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center sm:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl font-light tracking-wide text-neutral-300 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-10 border-t border-white/10 flex gap-6"
              >
                <a href="https://github.com/Rishabh2603-sus" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/rishabh-sharma-a/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white">LinkedIn</a>
                <a href="mailto:rishabh.exe26@gmail.com" className="text-neutral-500 hover:text-white">Email</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
