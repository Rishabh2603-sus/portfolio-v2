import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSoundDesign } from "../../hooks/useSoundDesign";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { playSound } = useSoundDesign();
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
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
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
