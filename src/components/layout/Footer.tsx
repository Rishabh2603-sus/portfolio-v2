import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon, HackerRankIcon } from "../common/Icons";

export function Footer() {
  return (
    <footer className="py-14 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
      <div className="text-sm text-neutral-500">
        © {new Date().getFullYear()} Rishabh Sharma. Crafted with intention.
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/Rishabh2603-sus"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-sharma-a/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://leetcode.com/u/rishabhsharma2603"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <LeetCodeIcon />
        </a>
        <a
          href="https://codeforces.com/profile/RishabhSharmaA"
          target="_blank"
          rel="noopener noreferrer"
          title="Codeforces"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <CodeforcesIcon />
        </a>
        <a
          href="https://hackerrank.com/profile/rishabh_exe26"
          target="_blank"
          rel="noopener noreferrer"
          title="HackerRank"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <HackerRankIcon />
        </a>
        <a
          href="mailto:rishabh.exe26@gmail.com"
          title="rishabh.exe26@gmail.com"
          className="text-neutral-400 hover:text-white transition-all hover:scale-110 active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
