import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import { useSound } from "../hooks/useLocalTime";

export default function Contact() {
  const { playClick } = useSound();
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Exciting opportunity / Inquiry");

  const handleCopy = () => {
    playClick();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMail = () => {
    playClick();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-grid">
        <div className="contact-info">
          <Reveal as="p" className="eyebrow">
            05 / Conversation
          </Reveal>
          <Reveal delay={60}>
            <h2 className="contact-heading">Let's build something remarkable.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="contact-copy">
              Whether you are looking for an ambitious software engineer, need collaboration on an applied AI project, or just want to chat systems and algorithms — my inbox is always open.
            </p>
          </Reveal>

          <Reveal delay={180} className="contact-actions-box">
            <button onClick={handleCopy} className="contact-email-card glass-card">
              <span className="email-label">Primary Inbox</span>
              <span className="email-address">{profile.email}</span>
              <span className="copy-indicator">{copied ? "✓ Copied to clipboard!" : "Click to copy"}</span>
            </button>
          </Reveal>

          <Reveal delay={240}>
            <div className="socials-wrapper">
              <span className="socials-title">Find me across the web:</span>
              <ul className="contact-socials">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClick}
                      className="social-badge glass-card"
                    >
                      <span>{social.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Interactive quick draft card */}
        <Reveal delay={140} className="contact-composer glass-card">
          <div className="composer-header">
            <span className="composer-dot" />
            <span className="composer-title">Quick Message Dispatcher</span>
          </div>

          <div className="composer-field">
            <label htmlFor="msg-subject">Subject</label>
            <input
              id="msg-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="E.g. Internship inquiry / Project collaboration"
            />
          </div>

          <div className="composer-field">
            <label htmlFor="msg-body">Note / Message</label>
            <textarea
              id="msg-body"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Rishabh, saw your portfolio and would love to connect about..."
            />
          </div>

          <button onClick={handleSendMail} className="composer-send-btn">
            Open in Mail Client <span aria-hidden="true">→</span>
          </button>
        </Reveal>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .contact-heading {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.12;
          margin: 0.5rem 0 1rem;
        }
        .contact-copy {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 32rem;
        }
        .contact-actions-box {
          margin: 2rem 0;
        }
        .contact-email-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 1.2rem 1.6rem;
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 24rem;
          text-align: left;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .contact-email-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
        }
        .email-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }
        .email-address {
          font-family: var(--font-mono);
          font-size: 1.08rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .copy-indicator {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
        }
        .socials-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .socials-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .contact-socials {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          padding: 0;
          margin: 0;
        }
        .social-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .social-badge:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }
        .contact-composer {
          padding: 2rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .composer-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .composer-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }
        .composer-title {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          font-weight: 500;
        }
        .composer-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .composer-field label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .composer-field input,
        .composer-field textarea {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.2s ease;
        }
        .composer-field input:focus,
        .composer-field textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .composer-send-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1.5rem;
          border-radius: 999px;
          background: var(--accent);
          color: #ffffff;
          font-weight: 500;
          font-size: 0.92rem;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px var(--accent-glow);
        }
        [data-theme="light"] .composer-send-btn {
          color: #faf6ef;
        }
        .composer-send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-glow);
        }
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
