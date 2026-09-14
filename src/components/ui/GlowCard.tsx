import React from "react";
import { useGlowCard } from "../../hooks/useGlowCard";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlowCard({ children, className, onClick }: GlowCardProps) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useGlowCard();
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`glow-card ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
