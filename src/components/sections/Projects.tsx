import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { projects, Project } from "../../data/content";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["all", "ai-ml", "systems", "fullstack"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            03 / Selected Works
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-200 sticky top-28">
            Engineered Systems & Products
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-neutral-400 leading-relaxed max-w-xl text-base font-light">
            A curated portfolio of deep-tech systems, machine learning architectures, and native applications built from mathematical foundations to production polish.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold scale-105"
                    : "bg-white/[0.02] border border-white/[0.08] text-neutral-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project: Project, i: number) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/[0.14] transition-all duration-500 ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                        {project.badge || project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-600">{project.year}</span>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-2 text-neutral-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                        title="View GitHub Repository"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight mb-3 text-neutral-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                    {project.summary}
                  </p>

                  {/* Architecture & metrics expander */}
                  {project.architecture && (
                    <div className="mb-6">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors py-1"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        {isExpanded ? "Hide Architecture & Metrics" : "View Architectural Deep-Dive"}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-4 space-y-4 pt-4 border-t border-white/[0.06]"
                          >
                            <div className="space-y-2">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                                Core Architecture
                              </span>
                              <ul className="space-y-1.5">
                                {project.architecture.map((item, idx) => (
                                  <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                                    <span className="text-neutral-600 mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {project.metrics && (
                              <div className="space-y-2 pt-2">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                                  Performance & Impact
                                </span>
                                <ul className="space-y-1.5">
                                  {project.metrics.map((metric, idx) => (
                                    <li key={idx} className="text-xs text-emerald-400/90 flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                      <span>{metric}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.04]">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 border border-white/[0.07] rounded-full text-neutral-400 uppercase tracking-wider font-mono bg-white/[0.015]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
