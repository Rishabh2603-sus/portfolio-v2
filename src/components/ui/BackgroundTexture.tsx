import React from "react";

export function BackgroundTexture() {
  return (
    <>
      {/* Subtle top ambient glow */}
      <div className="pointer-events-none fixed top-[-25%] left-[-10%] w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_65%)] z-0" />
      {/* Physical film noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
    </>
  );
}
