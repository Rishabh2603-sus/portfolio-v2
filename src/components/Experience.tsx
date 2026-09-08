import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience-header">
        <Reveal as="p" className="eyebrow">
          04 / Trajectory
        </Reveal>
        <Reveal as="h2" delay={60} className="experience-heading">
          Experience & Education
        </Reveal>
      </div>

      <ol className="timeline">
        {experience.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 100} className="timeline-item">
            <div className="timeline-aside">
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-loc">{item.location}</span>
            </div>
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot" aria-hidden="true" />
            </div>
            <div className="timeline-content glass-card">
              <div className="content-top">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.org}</p>
                </div>
                {item.badge && <span className="exp-badge">{item.badge}</span>}
              </div>
              <p className="timeline-description">{item.description}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="timeline-bullets">
                  {item.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>

      <style>{`
        .experience-header {
          margin-bottom: 3rem;
        }
        .experience-heading {
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          margin-top: 0.4rem;
        }
        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 11.5rem;
          top: 1rem;
          bottom: 1rem;
          width: 1px;
          background: var(--border);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 10.5rem 2rem 1fr;
          gap: 0.8rem;
          align-items: start;
        }
        .timeline-aside {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-top: 1.2rem;
          text-align: right;
        }
        .timeline-period {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .timeline-loc {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .timeline-dot-wrapper {
          display: flex;
          justify-content: center;
          padding-top: 1.4rem;
          position: relative;
          z-index: 2;
        }
        .timeline-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px var(--bg);
        }
        .timeline-content {
          padding: 1.8rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .content-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .timeline-role {
          font-size: 1.22rem;
          font-weight: 500;
        }
        .timeline-org {
          font-size: 0.95rem;
          color: var(--accent-brick);
          font-weight: 500;
          margin-top: 0.2rem;
        }
        .exp-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }
        .timeline-description {
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.6;
        }
        .timeline-bullets {
          list-style: square;
          padding-left: 1.2rem;
          margin: 0.4rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .timeline-bullets li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        @media (max-width: 860px) {
          .timeline::before {
            left: 0.9rem;
          }
          .timeline-item {
            grid-template-columns: 2rem 1fr;
          }
          .timeline-aside {
            grid-column: 2;
            text-align: left;
            padding-top: 0;
            margin-bottom: -0.2rem;
          }
          .timeline-dot-wrapper {
            grid-column: 1;
            grid-row: 1 / span 2;
            padding-top: 0.4rem;
          }
          .timeline-content {
            grid-column: 2;
          }
        }
      `}</style>
    </section>
  );
}
