import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { profile } from "../../data/content";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <motion.div style={{ y, opacity }} className="max-w-4xl space-y-8 relative z-10">
        {/* Top Badge with small avatar easter egg */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3.5"
        >
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/60 transition-colors shadow-lg">
              <img
                src="/avatar.jpg"
                alt="Business Cat"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-neutral-600" />
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              Software & Systems Engineer
            </p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 pb-2"
        >
          Building high-performance software & intelligent systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        {/* Quick Highlights / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06]"
        >
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl font-mono font-medium text-neutral-200">{stat.value}</span>
              <p className="text-xs text-neutral-500 uppercase font-mono tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-6 pt-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
          >
            Explore Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group py-3"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
