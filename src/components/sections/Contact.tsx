import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";
import { profile } from "../../data/content";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon, HackerRankIcon } from "../ui/SocialIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Inquiry / Collaboration"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-28 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <div className="md:w-1/3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
            05 / Conversation
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-100">
            Let's build something remarkable.
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-neutral-400 leading-relaxed text-base font-light max-w-xl">
            Whether you are looking for an ambitious software engineer, need collaboration on an applied AI system, or want to talk distributed algorithms — my inbox is open.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Copy Card & Quick Links */}
        <div className="space-y-6">
          <div className="p-8 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-white/[0.08] bg-black/40">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm md:text-base font-mono text-neutral-200 hover:text-white truncate"
                  >
                    {profile.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                Competitive Programming & Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/Rishabh2603-sus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <div>
                    <span className="text-xs font-medium text-neutral-200 block">GitHub</span>
                    <span className="text-[11px] font-mono text-neutral-500">@Rishabh2603-sus</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rishabh-sharma-a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <div>
                    <span className="text-xs font-medium text-neutral-200 block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-neutral-500">in/rishabh-sharma-a</span>
                  </div>
                </a>

                <a
                  href="https://leetcode.com/u/rishabhsharma2603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                >
                  <LeetCodeIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <div>
                    <span className="text-xs font-medium text-neutral-200 block">LeetCode</span>
                    <span className="text-[11px] font-mono text-neutral-500">300+ Problems</span>
                  </div>
                </a>

                <a
                  href="https://codeforces.com/profile/RishabhSharmaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                >
                  <CodeforcesIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <div>
                    <span className="text-xs font-medium text-neutral-200 block">Codeforces</span>
                    <span className="text-[11px] font-mono text-neutral-500">RishabhSharmaA</span>
                  </div>
                </a>

                <a
                  href="https://www.hackerrank.com/profile/rishabh_exe26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all group sm:col-span-2"
                >
                  <HackerRankIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <div>
                    <span className="text-xs font-medium text-neutral-200 block">HackerRank Certified</span>
                    <span className="text-[11px] font-mono text-neutral-500">rishabh_exe26</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Send message mailto trigger */}
        <div className="p-8 rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col justify-between">
          <form onSubmit={handleSendMail} className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              Dispatch a direct note
            </span>
            <div>
              <label className="text-xs font-mono text-neutral-400 block mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Software Engineering Role / Project Inquiry"
                className="w-full px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-sm text-neutral-200 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-neutral-400 block mb-1">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Rishabh, loved your work on the AML Graph platform..."
                className="w-full px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-sm text-neutral-200 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-4"
            >
              <span>Launch Mail Client</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-xs text-neutral-600 font-mono pt-6 text-center">
            Zero tracking • Encrypted client-side dispatch
          </p>
        </div>
      </div>
    </section>
  );
}
