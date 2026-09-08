import Reveal from "./Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-aside">
          <Reveal as="p" className="eyebrow">
            01 / Background
          </Reveal>
          <Reveal as="h2" delay={60} className="about-heading">
            Engineering with curiosity
          </Reveal>
          <Reveal delay={120} className="about-quote-box glass-card">
            <span className="quote-mark">“</span>
            <p className="quote-text">{about.quote}</p>
          </Reveal>
        </div>

        <div className="about-body">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 90} className="about-paragraph">
              {paragraph}
            </Reveal>
          ))}

          <Reveal delay={280} className="about-languages-pill glass-card">
            <span className="pill-title">Natural Languages:</span>
            <div className="pill-tags">
              <span className="lang-tag">English (Proficient)</span>
              <span className="lang-tag">Hindi (Native)</span>
              <span className="lang-tag">Tamil (Fluent)</span>
              <span className="lang-tag lang-tag-subtle">French (Basic)</span>
              <span className="lang-tag lang-tag-subtle">Japanese (Learning)</span>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 18rem 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .about-aside {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .about-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .about-quote-box {
          padding: 1.4rem 1.6rem;
          border-radius: var(--radius-md);
          position: relative;
          margin-top: 0.5rem;
        }
        .quote-mark {
          font-family: var(--font-display);
          font-size: 2.8rem;
          line-height: 0.8;
          color: var(--accent);
          opacity: 0.3;
          display: block;
        }
        .quote-text {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .about-body {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          max-width: 44rem;
        }
        .about-paragraph {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .about-languages-pill {
          padding: 1.2rem 1.6rem;
          border-radius: var(--radius-md);
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pill-title {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .pill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .lang-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
        }
        .lang-tag-subtle {
          color: var(--text-muted);
          border-style: dashed;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
