import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../../data/content";
import { Code2, Layout, Cpu, Database, Sparkles } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4 text-neutral-400" />,
  "Frontend & Mobile": <Layout className="w-4 h-4 text-neutral-400" />,
  "AI, ML & Data": <Cpu className="w-4 h-4 text-neutral-400" />,
  "Backend & Cloud": <Database className="w-4 h-4 text-neutral-400" />,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = ["all", ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-28 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            02 / Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-200">
            Technical Stack & Ecosystem
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-neutral-400 leading-relaxed max-w-xl text-base font-light">
            Engineered across systems programming, modern web frontends, and applied AI infrastructure with verified competency in competitive algorithmic problem solving.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeTab === cat
                    ? "bg-white text-black font-semibold shadow-sm scale-105"
                    : "bg-white/[0.02] border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of skill categories */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredCategories.map((cat) => (
            <motion.div
              layout
              key={cat.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  {categoryIcons[cat.title] || <Sparkles className="w-4 h-4 text-neutral-400" />}
                  <h3 className="text-lg font-medium tracking-tight text-neutral-200">{cat.title}</h3>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase">
                  {cat.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-lg border transition-all duration-200 flex flex-col justify-between ${
                      skill.highlight
                        ? "bg-white/[0.03] border-white/[0.12] text-white"
                        : "bg-white/[0.008] border-white/[0.04] text-neutral-400 hover:border-white/[0.08] hover:text-neutral-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" title="Core Strength" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
