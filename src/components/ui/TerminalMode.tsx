import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSoundDesign } from '../../hooks/useSoundDesign';

export function TerminalMode({ onClose }: { onClose: () => void }) {
  const [history, setHistory] = useState<{cmd: string, out: React.ReactNode}[]>([
    { cmd: 'boot_sequence', out: 'Rishabh OS v1.0 initialized. Type "help" to view commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { playSound } = useSoundDesign();

  useEffect(() => {
    playSound('boot');
    inputRef.current?.focus();
    
    // Lock scroll on body
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      playSound('click');
      
      let output: React.ReactNode = '';
      if (cmd === 'help') {
        output = 'Available commands: whoami, skills, clear, exit, sudo, repo';
      } else if (cmd === 'whoami') {
        output = 'Rishabh Sharma. Software & Systems Engineer.';
      } else if (cmd === 'skills') {
        output = 'React, Node.js, Systems Architecture, Applied AI.';
      } else if (cmd === 'repo') {
        output = 'https://github.com/Rishabh2603-sus/portfolio-v2';
      } else if (cmd === 'clear') {
        setHistory([]);
        return;
      } else if (cmd === 'exit') {
        onClose();
        return;
      } else if (cmd === 'sudo') {
        output = 'Nice try. This incident will be reported.';
      } else if (cmd !== '') {
        output = `Command not found: ${cmd}`;
      }

      if (cmd !== '') {
        setHistory(prev => [...prev, { cmd, out: output }]);
      }
    } else if (e.key !== 'Shift' && e.key !== 'Meta' && e.key !== 'Control' && e.key !== 'Alt') {
      playSound('type');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-[#050505] text-emerald-500 font-mono p-6 md:p-12 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      <div className="max-w-4xl mx-auto flex flex-col gap-2 relative z-10 text-sm md:text-base">
        {history.map((h, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-emerald-700">guest@rishabh-os:~$</span>
              <span className="text-white">{h.cmd}</span>
            </div>
            {h.out && <div className="mt-1 mb-4 text-emerald-400 opacity-90">{h.out}</div>}
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-emerald-700">guest@rishabh-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent outline-none flex-1 text-white border-none focus:ring-0 p-0 m-0 w-full"
            autoFocus
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} className="h-20" />
      </div>
    </motion.div>
  );
}
