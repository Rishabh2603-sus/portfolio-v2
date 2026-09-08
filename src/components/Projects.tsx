import { useState } from "react";
import Reveal from "./Reveal";
import { projects, type Project } from "../data/content";
import { useSound } from "../hooks/useLocalTime";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { playClick } = useSound();

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI & Graph ML" },
    { id: "systems", label: "Systems & macOS" },
    { id: "fullstack", label: "Full-Stack & Agents" },
  ];

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section projects">
      <div className="projects-header-row">
        <div>
          <Reveal as="p" className="eyebrow">
            02 / Portfolio
          </Reveal>
          <Reveal as="h2" delay={60} className="projects-heading">
            Architected & Built
          </Reveal>
        </div>

        {/* Filter categories */}
        <Reveal delay={100} className="category-pills">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`cat-btn ${activeCategory === c.id ? "is-active" : ""}`}
              onClick={() => {
                playClick();
                setActiveCategory(c.id);
              }}
            >
              {c.label}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="projects-grid">
        {filtered.map((project, index) => (
          <Reveal as="article" key={project.id} delay={index * 80} className="project-card glass-card">
            <div className="project-header-top">
              <div className="badge-row">
                {project.badge && <span className="project-pill-badge">{project.badge}</span>}
                <span className="project-year">{project.year}</span>
              </div>
              <button
                onClick={() => {
                  playClick();
                  onSelectProject(project);
                }}
                className="inspect-btn"
                title="Inspect architecture details"
              >
                <span>Inspect</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              {/* Highlights/metrics snippet */}
              <div className="project-metrics-preview">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="metric-chip">
                    <span className="metric-dot" style={{ backgroundColor: project.accentColor }} />
                    <span className="metric-text">{metric}</span>
                  </div>
                ))}
              </div>

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <button
                onClick={() => {
                  playClick();
                  onSelectProject(project);
                }}
                className="view-deep-btn"
              >
                Deep Dive Specifications
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="source-code-link"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </Reveal>
        ))}

        {/* GitHub repository highlight card */}
        <Reveal as="article" delay={filtered.length * 80} className="project-card project-card-more glass-card">
          <div className="project-body" style={{ height: "100%", justifyContent: "center" }}>
            <span className="eyebrow" style={{ marginBottom: "0.5rem" }}>Open Source</span>
            <h3 className="project-title">More Repositories on GitHub</h3>
            <p className="project-summary">
              Explore 20+ algorithmic exercises, hackathon decks, neural network prototypes, and mini-projects.
            </p>
            <a
              href="https://github.com/Rishabh2603-sus"
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="more-github-btn"
            >
              Visit github.com/Rishabh2603-sus ↗
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .projects-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .projects-heading {
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          margin-top: 0.4rem;
        }
        .category-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .cat-btn {
          padding: 0.45rem 1rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
        }
        .cat-btn:hover {
          border-color: var(--border-strong);
          color: var(--text-primary);
        }
        .cat-btn.is-active {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
          box-shadow: 0 4px 14px var(--accent-glow);
        }
        [data-theme="light"] .cat-btn.is-active {
          color: #faf6ef;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.6rem;
        }
        .project-card {
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          padding: 1.8rem;
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-strong);
        }
        .project-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.1rem;
        }
        .badge-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .project-pill-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.2rem 0.55rem;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: 999px;
          font-weight: 500;
        }
        .project-year {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
        }
        .inspect-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          transition: all 0.2s ease;
        }
        .inspect-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .project-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .project-title {
          font-size: 1.35rem;
          line-height: 1.25;
          font-weight: 500;
        }
        .project-summary {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .project-metrics-preview {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin: 0.4rem 0;
          padding: 0.75rem 0.9rem;
          background: var(--surface);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }
        .metric-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .metric-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .metric-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .project-tags {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.5rem;
        }
        .project-tags li {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.2rem 0.6rem;
        }
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.4rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .view-deep-btn {
          background: transparent;
          border: none;
          color: var(--accent);
          font-size: 0.86rem;
          font-weight: 500;
          padding: 0;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .view-deep-btn:hover {
          color: var(--accent-hover);
        }
        .source-code-link {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .source-code-link:hover {
          color: var(--text-primary);
        }
        .project-card-more {
          border-style: dashed;
          background: transparent;
        }
        .more-github-btn {
          display: inline-block;
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }
        @media (max-width: 860px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
