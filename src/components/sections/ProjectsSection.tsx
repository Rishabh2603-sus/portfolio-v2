import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu } from "lucide-react";
import { projects, Project } from "../../data/content";
import { GlowCard } from "../ui/GlowCard";
import { ProjectBlueprintModal } from "../ui/ProjectBlueprintModal";
import { useSoundDesign } from "../../hooks/useSoundDesign";
import { cn } from "../../utils";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playSound } = useSoundDesign();

  return (
    <section id="projects" className="py-32 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            01 / Work
          </span>
          <h2 className="text-2xl font-medium tracking-tight sticky top-32 text-neutral-200">
            Selected Works
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-neutral-400 leading-relaxed max-w-lg text-base font-light">
            A collection of systems, interfaces, and architectures crafted with precision. Focused on graph intelligence, audio streaming, and high-velocity web infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project: Project, i: number) => (
          <GlowCard
            key={project.id}
            className={cn(
              "rounded-lg cursor-pointer",
              i % 2 === 1 ? "md:mt-24" : ""
            )}
            onClick={() => {
              playSound("click");
              setSelectedProject(project);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative z-[2] flex flex-col justify-between p-8 md:p-12 border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-lg min-h-[420px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {project.badge || project.year}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playSound("click");
                        }}
                        onMouseEnter={() => playSound("hover")}
                        title="Direct GitHub Repo"
                        className="opacity-0 group-hover:opacity-100 transition-all p-2 -m-2 hover:scale-110 active:scale-95 bg-white/5 hover:bg-white/15 rounded-full"
                      >
                        <ArrowUpRight className="w-4 h-4 text-neutral-300" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-neutral-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Micro blueprint trigger pill */}
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors mb-6">
                  <Cpu className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  <span>Inspect Blueprint & Architecture →</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] px-3 py-1 border border-white/[0.06] rounded-full text-neutral-400 uppercase tracking-widest font-mono bg-white/[0.02] group-hover:border-white/10 transition-colors"
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
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </div>

      {/* Interactive Blueprint & Architecture Spec Modal */}
      <ProjectBlueprintModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
