import Reveal from "./Reveal";
import { skillCategories } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills-header">
        <Reveal as="p" className="eyebrow">
          03 / Competencies
        </Reveal>
        <Reveal as="h2" delay={60} className="skills-heading">
          Technical Arsenal
        </Reveal>
        <Reveal as="p" delay={100} className="skills-lead">
          From algorithmic systems in C++ & Python to modern reactive web and native macOS applications.
        </Reveal>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <Reveal as="div" key={group.title} delay={index * 90} className="skill-card glass-card">
            <div className="skill-card-top">
              <span className="skill-category-icon">✦</span>
              <h3 className="skill-group-label">{group.title}</h3>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill.name} className={`skill-item ${skill.highlight ? "is-highlight" : ""}`}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <style>{`
        .skills-header {
          margin-bottom: 2.5rem;
        }
        .skills-heading {
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          margin-top: 0.4rem;
        }
        .skills-lead {
          color: var(--text-secondary);
          max-width: 32rem;
          margin-top: 0.5rem;
          font-size: 1.02rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .skill-card {
          padding: 1.8rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .skill-card-top {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .skill-category-icon {
          color: var(--accent);
          font-size: 0.9rem;
        }
        .skill-group-label {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .skill-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.92rem;
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
        }
        .skill-item:hover {
          background: var(--surface);
        }
        .skill-item.is-highlight {
          border-left: 2px solid var(--accent);
          padding-left: 0.6rem;
        }
        .skill-name {
          color: var(--text-primary);
          font-weight: 480;
        }
        .skill-level {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
