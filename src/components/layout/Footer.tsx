import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { profile } from "../../data/content";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon, HackerRankIcon } from "../ui/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6 mt-20">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} Rishabh Sharma.</span>
        <span className="hidden sm:inline text-neutral-700">•</span>
        <span>Crafted with intention & performance.</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Rishabh2603-sus"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-sharma-a/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="https://leetcode.com/u/rishabhsharma2603"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LeetCodeIcon className="w-4 h-4" />
        </a>
        <a
          href="https://codeforces.com/profile/RishabhSharmaA"
          target="_blank"
          rel="noopener noreferrer"
          title="Codeforces"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <CodeforcesIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/rishabh_exe26"
          target="_blank"
          rel="noopener noreferrer"
          title="HackerRank"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <HackerRankIcon className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          title="Email"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="text-neutral-500 hover:text-neutral-200 p-2 hover:bg-white/5 rounded-full transition-colors ml-2"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
