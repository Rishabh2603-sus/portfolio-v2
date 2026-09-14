import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TopographyBackground() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    // Only desktop mouse parallax
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <motion.svg
        animate={{
          x: mouseOffset.x,
          y: mouseOffset.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="w-[120vw] h-[120vh] -ml-[10vw] -mt-[10vh] opacity-[0.07] stroke-white"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topo-fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Contour Isolines */}
        <g stroke="url(#topo-fade)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3">
          <circle cx="1050" cy="350" r="80" />
          <circle cx="1050" cy="350" r="140" strokeDasharray="none" strokeWidth="0.75" />
          <circle cx="1050" cy="350" r="210" />
          <circle cx="1050" cy="350" r="290" strokeDasharray="none" strokeWidth="0.75" />
          <circle cx="1050" cy="350" r="380" />
          <circle cx="1050" cy="350" r="480" strokeDasharray="none" strokeWidth="0.5" />
          <circle cx="1050" cy="350" r="590" />
          <circle cx="1050" cy="350" r="710" strokeDasharray="none" strokeWidth="0.5" />
        </g>

        {/* Organic Flowing Topographic Waves */}
        <g stroke="url(#topo-fade)" strokeWidth="1" strokeLinecap="round">
          <path
            d="M-100 450 C 250 380, 500 560, 850 420 C 1200 280, 1350 480, 1600 390"
            strokeDasharray="none"
            strokeWidth="0.8"
          />
          <path
            d="M-100 510 C 260 440, 510 620, 860 480 C 1210 340, 1360 540, 1600 450"
            strokeDasharray="4 4"
            strokeWidth="0.6"
          />
          <path
            d="M-100 570 C 270 500, 520 680, 870 540 C 1220 400, 1370 600, 1600 510"
            strokeDasharray="none"
            strokeWidth="0.8"
          />
          <path
            d="M-100 630 C 280 560, 530 740, 880 600 C 1230 460, 1380 660, 1600 570"
            strokeDasharray="2 4"
            strokeWidth="0.6"
          />
          <path
            d="M-100 690 C 290 620, 540 800, 890 660 C 1240 520, 1390 720, 1600 630"
            strokeDasharray="none"
            strokeWidth="0.8"
          />
          <path
            d="M-100 750 C 300 680, 550 860, 900 720 C 1250 580, 1400 780, 1600 690"
            strokeDasharray="6 6"
            strokeWidth="0.5"
          />
          <path
            d="M-100 810 C 310 740, 560 920, 910 780 C 1260 640, 1410 840, 1600 750"
            strokeDasharray="none"
            strokeWidth="0.5"
          />
        </g>

        {/* Technical Cartographic Annotations */}
        <g fill="white" opacity="0.4" fontFamily="monospace" fontSize="10" letterSpacing="0.2em">
          <text x="1060" cy="265">LAT 13.0827° N</text>
          <text x="1060" cy="345">ELEV 420m</text>
          <text x="1060" cy="425">SYS_GRID // 01</text>
          <text x="350" cy="630">CONTOUR INT 20m</text>
          <text x="880" cy="530">TOPOLOGY FLOW</text>
        </g>
      </motion.svg>
    </motion.div>
  );
}
