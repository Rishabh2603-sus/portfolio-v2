import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import { useLocalTime, useSound } from "../hooks/useLocalTime";

export default function Hero() {
  const time = useLocalTime();
  const { playClick } = useSound();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="intro" className="section hero">
      <div className="hero-top-bar">
        <Reveal as="div" className="badge-pill">
          <span className="radar-dot" />
          <span>{profile.status}</span>
        </Reveal>

        <Reveal as="div" delay={40} className="badge-pill hero-time-pill">
          <span>{profile.location}</span>
          <span className="bullet">·</span>
          <span>{time} IST</span>
        </Reveal>
      </div>

      <div className="hero-content">
        <Reveal delay={80}>
          <h1 className="hero-name">
            Building software with <span className="hero-name-italic">rigor</span>, <span className="hero-name-accent">curiosity</span>, and craft.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="hero-bio-row">
            <span className="hero-avatar-tag">RS</span>
            <p className="hero-role-lead">
              I'm <strong>{profile.name}</strong> — {profile.role}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero-tagline">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={260}>
          <div className="hero-actions">
            <a href="#work" onClick={playClick} className="hero-cta">
              Explore Selected Work <span aria-hidden="true">→</span>
            </a>
            <button onClick={copyEmail} className="hero-email-btn" title="Copy email address">
              <span>{copied ? "✓ Copied Email!" : profile.email}</span>
            </button>
            <a href="/resume.pdf" download onClick={playClick} className="hero-resume">
              <span aria-hidden="true">↓</span> Resume
            </a>
          </div>
        </Reveal>
      </div>

      {/* Metric strip */}
      <Reveal delay={320} className="hero-stats-strip glass-card">
        {profile.stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </Reveal>

      <style>{`
        .hero {
          min-height: 94vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.8rem;
          padding-top: clamp(5rem, 12vh, 8rem);
          padding-bottom: 3rem;
        }
        .hero-top-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-time-pill {
          color: var(--text-muted);
        }
        .hero-time-pill .bullet {
          opacity: 0.5;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 54rem;
        }
        .hero-name {
          font-size: clamp(2.4rem, 6.2vw, 4.4rem);
          line-height: 1.08;
          font-weight: 480;
          letter-spacing: -0.025em;
        }
        .hero-name-italic {
          font-style: italic;
          font-weight: 380;
        }
        .hero-name-accent {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }
        .hero-bio-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-avatar-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--bg);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
        }
        .hero-role-lead {
          font-family: var(--font-mono);
          font-size: 1.02rem;
          color: var(--text-secondary);
        }
        .hero-role-lead strong {
          color: var(--text-primary);
          font-weight: 600;
        }
        .hero-tagline {
          max-width: 40rem;
          font-size: 1.18rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.6rem;
          width: fit-content;
          border-radius: 999px;
          font-size: 0.96rem;
          font-weight: 500;
          background: var(--accent);
          color: #ffffff;
          box-shadow: 0 4px 18px var(--accent-glow);
          transition: all 0.25s ease;
        }
        [data-theme="light"] .hero-cta {
          color: #faf6ef;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-glow);
          gap: 0.85rem;
        }
        .hero-email-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.82rem 1.4rem;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          transition: all 0.25s ease;
        }
        .hero-email-btn:hover {
          border-color: var(--accent);
          background: var(--surface-hover);
          color: var(--accent);
          transform: translateY(-2px);
        }
        .hero-resume {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1.2rem;
          font-family: var(--font-mono);
          font-size: 0.86rem;
          color: var(--text-secondary);
          border-radius: 999px;
          transition: all 0.2s ease;
        }
        .hero-resume:hover {
          color: var(--accent-brick);
          background: var(--surface);
        }
        .hero-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          padding: 1.4rem 2rem;
          border-radius: var(--radius-md);
          margin-top: 1rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          .hero-stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
            padding: 1.2rem 1.4rem;
          }
          .hero-name {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </section>
  );
}
