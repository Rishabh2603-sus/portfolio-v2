import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./components/ui/Preloader";
import { CustomCursor } from "./components/ui/CustomCursor";
import { TopographyBackground } from "./components/ui/TopographyBackground";
import { TerminalMode } from "./components/ui/TerminalMode";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-[#fafafa] min-h-screen selection:bg-white/20 font-sans font-light relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Premium Ambient Texture: Subtle Top Glow & Grain */}
      <div className="pointer-events-none fixed top-[-20%] left-[-10%] w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_60%)] z-0" />
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Generative Topography & Cursor */}
      <TopographyBackground />
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalMode(true)} />

      {/* Terminal Mode Easter Egg */}
      <AnimatePresence>
        {isTerminalMode && <TerminalMode onClose={() => setIsTerminalMode(false)} />}
      </AnimatePresence>

      {/* Main Sections */}
      <main className="relative z-10">
        <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
        </div>
        <SkillsSection />
        <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
