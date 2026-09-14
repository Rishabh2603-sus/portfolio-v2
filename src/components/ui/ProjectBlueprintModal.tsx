import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Cpu, Activity, Layers, GitBranch, ExternalLink } from "lucide-react";
import { Project } from "../../data/content";
import { useSoundDesign } from "../../hooks/useSoundDesign";

interface ProjectBlueprintModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectBlueprintModal({ project, onClose }: ProjectBlueprintModalProps) {
  const { playSound } = useSoundDesign();

  // Handle escape key and scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playSound("click");
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, playSound]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            playSound("click");
            onClose();
          }}
          className="fixed inset-0 bg-[#050505]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 custom-scrollbar text-[#fafafa]"
        >
          {/* Subtle top accent gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              backgroundImage: project.accentColor
                ? `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`
                : undefined,
            }}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                {project.badge && (
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {project.badge}
                  </span>
                )}
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                  {project.category.toUpperCase()} • {project.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                playSound("click");
                onClose();
              }}
              className="p-2 -mr-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overview */}
          <div className="py-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-neutral-400" />
              System Architecture & Design
            </h3>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
              {project.description || project.summary}
            </p>
          </div>

          {/* Architecture Modules Breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="py-6 border-t border-white/[0.06] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-neutral-400" />
                Architectural Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-start gap-3 hover:border-white/15 transition-all"
                  >
                    <span className="font-mono text-xs text-neutral-500 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics & Performance Telemetry */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="py-6 border-t border-white/[0.06] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                Performance Telemetry & Verification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-emerald-500/10 bg-emerald-950/10 flex items-start gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-pulse" />
                    <span className="text-xs text-neutral-300 leading-normal">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack & Links */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 border border-white/[0.08] rounded-full text-neutral-300 font-mono uppercase tracking-wider bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound("click")}
                  onMouseEnter={() => playSound("hover")}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-medium text-xs tracking-wide uppercase shadow-lg hover:scale-105 active:scale-95"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound("click")}
                  onMouseEnter={() => playSound("hover")}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-medium text-xs tracking-wide uppercase hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live App</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
