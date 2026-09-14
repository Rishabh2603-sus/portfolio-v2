import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experience } from "../../data/content";

export function ExperienceSection() {
  // Purely industry/community experience (no academic/college)
  const experienceItems = experience.filter(
    (item: any) =>
      item.badge?.toLowerCase() !== "academic" &&
      !item.org.toLowerCase().includes("college")
  );

  return (
    <section id="experience" className="py-32 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            02 / Trajectory
          </span>
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
                <span className="text-neutral-500 font-mono text-sm mt-1 md:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-neutral-400 mb-6 text-sm uppercase tracking-wide font-mono">
                {item.org} — {item.location}
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6 font-light">{item.description}</p>
              <ul className="space-y-3">
                {item.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="flex gap-4 text-sm text-neutral-400 font-light">
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-neutral-300" />
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
