import React from "react";
import { motion } from "framer-motion";
import { about } from "../../data/content";

export function About() {
  return (
    <section id="about" className="py-28 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            01 / Background
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-200 sticky top-28">
            Engineering with curiosity & clarity
          </h2>
          <div className="mt-8 p-6 rounded-lg border border-white/[0.06] bg-white/[0.01] hidden md:block">
            <span className="text-2xl text-neutral-600 block font-serif">“</span>
            <p className="text-sm italic text-neutral-400 leading-relaxed -mt-2">
              {about.quote.replace(/“|”/g, "")}
            </p>
          </div>
        </div>

        <div className="md:w-2/3 space-y-8">
          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-neutral-300 text-base md:text-lg leading-relaxed font-light"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Polyglot proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
              Natural Languages
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "English", level: "Proficient" },
                { name: "Hindi", level: "Native" },
                { name: "Tamil", level: "Fluent" },
                { name: "French", level: "Basic" },
                { name: "Japanese", level: "Learning" },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="px-3.5 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.015] flex items-center gap-2 text-xs"
                >
                  <span className="text-neutral-200 font-medium">{lang.name}</span>
                  <span className="text-neutral-500 font-mono text-[10px] uppercase">({lang.level})</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
