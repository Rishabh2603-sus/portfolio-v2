import { useEffect, useRef } from "react";

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    const CELL_SIZE = 18;

    let grid: number[] = [];
    
    // Track scroll for fade-out performance
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;

      cols = Math.floor(width / CELL_SIZE) + 1;
      rows = Math.floor(height / CELL_SIZE) + 1;
      grid = new Array(cols * rows).fill(0);
    }
    resize();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Premium minimal character set
    const chars = ["", ".", ",", "-", "~", "+", "*", "x", "%", "#", "@"];
    let time = 0;
    let rafId: number;

    function render() {
      if (!ctx || !canvas) return;

      const heroOpacity = Math.max(0, 1 - scrollY / (height * 0.8));
      
      // Stop completely if out of view (saves massive CPU/GPU)
      if (heroOpacity <= 0) {
        rafId = requestAnimationFrame(render);
        return;
      }

      time += 0.015;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = heroOpacity;

      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * CELL_SIZE + CELL_SIZE / 2;
          const y = j * CELL_SIZE + CELL_SIZE / 2;
          const index = i + j * cols;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Mouse interaction (Fluid Ripple)
          if (dist < 140) {
            const force = Math.pow((140 - dist) / 140, 2); 
            grid[index] += force * 0.12;
          }

          // Smooth decay
          grid[index] *= 0.94;

          // Ambient topography noise (flowing wave)
          const wave = (Math.sin(x * 0.005 + time) + Math.sin(y * 0.005 - time * 0.5)) * 0.5;
          const ambient = Math.max(0, wave * 0.15); // Very subtle background glow

          const intensity = Math.min(1, Math.max(0, grid[index] + ambient));

          if (intensity > 0.02) {
            const charIndex = Math.floor(intensity * (chars.length - 1));
            const char = chars[charIndex];

            // Opacity maps to intensity, maxing out at 60% for a premium dark vibe
            const alpha = intensity * 0.6;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fillText(char, x, y);
          }
        }
      }
      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1] will-change-transform" />;
}
