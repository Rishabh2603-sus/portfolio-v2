import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users } from "lucide-react";
import { experience, ExperienceItem } from "../../data/content";

export function Experience() {
  // Filter out academic/education entries completely as requested by user
  const industryExperience = experience.filter(
    (item) => item.badge?.toLowerCase() !== "academic" && !item.org.toLowerCase().includes("college")
  );

  return (
    <section id="experience" className="py-28 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            04 / Trajectory
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-200 sticky top-28">
            Experience & Credentials
          </h2>
        </div>

        <div className="md:w-2/3 space-y-16">
          {industryExperience.map((item: ExperienceItem, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/[0.12] transition-colors"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
                <div className="flex items-center gap-3">
                  {item.badge === "Community" ? (
                    <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                  ) : (
                    <Award className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                  <h3 className="text-xl font-medium text-neutral-100">{item.role}</h3>
                </div>
                <span className="text-neutral-500 font-mono text-xs">{item.period}</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <p className="text-neutral-400 text-sm font-mono uppercase tracking-wider">{item.org}</p>
                <span className="text-neutral-700">•</span>
                <span className="text-neutral-500 text-xs">{item.location}</span>
              </div>

              <p className="text-neutral-300 leading-relaxed mb-6 font-light text-sm md:text-base">
                {item.description}
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                {item.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-neutral-400 font-light">
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity text-neutral-300" />
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
