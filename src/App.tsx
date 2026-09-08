import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Terminal, Mail, ArrowUpRight, ArrowRight, Download, Menu, X } from "lucide-react";
import { TerminalMode } from "./components/ui/TerminalMode";
import { useSoundDesign } from "./hooks/useSoundDesign";
import { projects, experience, skillCategories } from "./data/content";
import { cn } from "./utils";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8L8 16"/><path d="M12 4l-6.5 6.5a4.95 4.95 0 0 0 0 7 4.95 4.95 0 0 0 7 0L19 11"/><path d="M16 11h5"/></svg>
);

const CodeforcesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="4" height="11" rx="1"/><rect x="10" y="4" width="4" height="17" rx="1"/><rect x="18" y="7" width="4" height="14" rx="1"/></svg>
);

const HackerRankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v18"/><path d="M18 3v18"/><path d="M6 12h12"/></svg>
);


function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Keep it onscreen just long enough to register, then trigger the fade
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-[#fafafa] pointer-events-none"
    >
      <div
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      
      <div className="relative z-10 flex items-center gap-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="w-2 h-2 rounded-full bg-white hidden sm:block"
        />
        <motion.div className="overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-20%", opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-2xl md:text-3xl font-light tracking-[0.2em] text-neutral-200 uppercase block"
          >
            Rishabh Sharma
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-[#fafafa] min-h-screen selection:bg-white/20 font-sans font-light relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Premium Texture: Subtle Top Glow & Grain */}
      <div className="pointer-events-none fixed top-[-20%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_60%)] z-0"></div>
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <CustomCursor />
      <Navbar onOpenTerminal={() => setIsTerminalMode(true)} />
      <AnimatePresence>{isTerminalMode && <TerminalMode onClose={() => setIsTerminalMode(false)} />}</AnimatePresence>
      <main className="relative z-10">
        <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
        </div>
        <SkillsSection />
        <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
          <Footer />
        </div>
      </main>
    </div>
  );
}


function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden sm:block"
      animate={{
        x: mousePosition.x - (isHovering ? 16 : 8),
        y: mousePosition.y - (isHovering ? 16 : 8),
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.5
      }}
    />
  );
}

function Navbar({ onOpenTerminal }: { onOpenTerminal?: () => void }) {
  const { playSound } = useSoundDesign();
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
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
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Terminal Trigger */}
          <button 
            onClick={() => { playSound('click'); onOpenTerminal?.(); }}
            onMouseEnter={() => playSound('hover')}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
            title="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <a
            href="/resume.docx"
            download="Rishabh_Sharma_Resume.docx"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
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
                <a href="https://github.com/Rishabh2603-sus" target="_blank" className="text-neutral-500 hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/rishabh-sharma-a/" target="_blank" className="text-neutral-500 hover:text-white">LinkedIn</a>
                <a href="mailto:rishabh.exe26@gmail.com" className="text-neutral-500 hover:text-white">Email</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="h-screen flex flex-col justify-center pt-16 relative">
      <motion.div style={{ y, opacity }} className="max-w-4xl space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="w-8 h-[1px] bg-neutral-500"></div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Systems Architect & Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 pb-2"
        >
          Building intelligent systems & highly-crafted digital experiences.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
          >
            Explore works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-32 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-medium tracking-tight sticky top-32 text-neutral-200">
            Selected Works
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-neutral-400 leading-relaxed max-w-lg">
            A collection of systems, interfaces, and architectures crafted with precision. Focused on AI integration and scalable web infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project: any, i: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "group relative flex flex-col justify-between p-8 md:p-12 border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-lg",
              i % 2 === 1 ? "md:mt-24" : ""
            )}
          >
            <div className="mb-24">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  {project.badge}
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-all p-2 -m-2 hover:scale-110 active:scale-95 bg-white/5 rounded-full"
                >
                  <ArrowUpRight className="w-4 h-4 text-neutral-300" />
                </a>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-neutral-200 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{project.summary}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 border border-white/[0.06] rounded-full text-neutral-400 uppercase tracking-widest font-mono bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-[10px] px-3 py-1 border border-transparent text-neutral-500 uppercase tracking-widest font-mono">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  // Purely industry/community experience (no academic/college)
  const experienceItems = experience.filter(
    (item: any) => item.badge?.toLowerCase() !== "academic" && !item.org.toLowerCase().includes("college")
  );

  return (
    <section id="experience" className="py-32 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-medium tracking-tight sticky top-32 text-neutral-200">
            Experience
          </h2>
        </div>
        <div className="md:w-2/3 space-y-24">
          {experienceItems.map((item: any, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-medium text-neutral-100">{item.role}</h3>
                <span className="text-neutral-500 font-mono text-sm mt-1 md:mt-0">{item.period}</span>
              </div>
              <p className="text-neutral-400 mb-6 text-sm uppercase tracking-wide">
                {item.org} — {item.location}
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="flex gap-4 text-sm text-neutral-400">
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Flatten all skills to create a continuous marquee
const allSkills = skillCategories.flatMap((c) => c.skills);
// Duplicate to ensure seamless infinite scroll
const marqueeItems = [...allSkills, ...allSkills];

function SkillsSection() {
  return (
    <section id="capabilities" className="py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            02 / Capabilities
          </span>
          <h2 className="text-2xl font-medium tracking-tight text-neutral-200">
            Ecosystem
          </h2>
        </div>
        <div className="md:w-2/3">
           <p className="text-neutral-400 leading-relaxed text-base font-light">
            Engineered across systems programming, modern web frontends, and applied AI infrastructure.
          </p>
        </div>
      </div>

      {/* Infinite Tech Stack Marquee */}
      <div className="relative w-full py-10 flex items-center overflow-hidden border-y border-white/[0.04] bg-white/[0.01] mb-24">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-scroll items-center gap-8 pl-8">
          {marqueeItems.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/[0.08] bg-[#0a0a0a] text-neutral-300 text-sm font-medium whitespace-nowrap shadow-sm hover:text-white hover:scale-105 hover:border-white/20 transition-all cursor-default"
            >
              {skill.name}
              {skill.highlight && (
                <span className="ml-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Structured Capabilities Grid */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-20">
        {skillCategories.map((cat: any, i: number) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-lg font-medium mb-8 flex items-center gap-3 border-b border-white/[0.06] pb-4 text-neutral-200">
              {cat.title}
            </h3>
            <ul className="space-y-4">
              {cat.skills.map((skill: any) => (
                <li key={skill.name} className="flex justify-between items-center text-sm group cursor-default">
                  <span
                    className={cn(
                      "text-neutral-400 group-hover:text-neutral-200 transition-colors",
                      skill.highlight && "text-neutral-200 font-medium"
                    )}
                  >
                    {skill.name}
                  </span>
                  <span className="text-neutral-600 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
      <div className="text-sm text-neutral-500">
        © {new Date().getFullYear()} Rishabh Sharma. Crafted with intention.
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/Rishabh2603-sus"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-sharma-a/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://leetcode.com/u/rishabhsharma2603"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LeetCodeIcon />
        </a>
        <a
          href="https://codeforces.com/profile/RishabhSharmaA"
          target="_blank"
          rel="noopener noreferrer"
          title="Codeforces"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <CodeforcesIcon />
        </a>
        <a
          href="https://www.hackerrank.com/profile/rishabh_exe26"
          target="_blank"
          rel="noopener noreferrer"
          title="HackerRank"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <HackerRankIcon />
        </a>
        <a
          href="mailto:rishabh.exe26@gmail.com"
          title="rishabh.exe26@gmail.com"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}

export default App;
