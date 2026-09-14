import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/content";
import { cn } from "../../utils";

// Flatten all skills to create a continuous marquee
const allSkills = skillCategories.flatMap((c) => c.skills);
// Duplicate to ensure seamless infinite scroll
const marqueeItems = [...allSkills, ...allSkills];

export function SkillsSection() {
  return (
    <section id="capabilities" className="py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            03 / Capabilities
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
                <li
                  key={skill.name}
                  className="flex justify-between items-center text-sm group cursor-default"
                >
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
