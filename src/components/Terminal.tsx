import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send } from 'lucide-react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="text-blue-400 font-bold">
            [+] MAHEK PANARA — ANALYST SHELL v2.4 (ACTIVE)
          </p>
          <p className="text-slate-400">
            Welcome to Mahek Panara's interactive profile terminal. Type <span className="text-white font-semibold">'help'</span> or select a command below.
          </p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-blue-400 font-bold">Available Commands:</p>
            <p><span className="text-white font-mono">whoami</span> - Display background & professional summary</p>
            <p><span className="text-white font-mono">skills</span> - List cybersecurity & MERN competencies</p>
            <p><span className="text-white font-mono">projects</span> - Display technical projects & features</p>
            <p><span className="text-white font-mono">contact</span> - Retrieve verified contact info</p>
            <p><span className="text-white font-mono">clear</span> - Clear output history</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-blue-300 font-semibold">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400 leading-relaxed">{personalInfo.summary}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="border-l-2 border-blue-500 pl-2">
                <p className="text-blue-400 font-bold">{cat.title}:</p>
                <p className="text-slate-300">{cat.skills.map(s => s.name).join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            {projects.map((p, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-blue-400 font-bold">{p.title}</p>
                <p className="text-slate-300">{p.summary}</p>
                <p className="text-[10px] text-slate-400 mt-1">Tags: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;


      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:underline">{personalInfo.email}</a></p>
            <p>Phone: <span className="text-white">{personalInfo.phone}</span></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{personalInfo.linkedin}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{personalInfo.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <p className="text-xs text-rose-400">
            Command not recognized: '{cmd}'. Type <span className="text-blue-300 underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-[#0a0e17] border border-blue-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[560px]'
        }`}
      >
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#070a10] border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-blue-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="ml-3 text-xs font-mono text-slate-300 flex items-center gap-1.5 font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              mahek@analyst-station: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white p-1 rounded"
              title="Toggle size"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-rose-400 p-1 rounded"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#090d16] border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 text-blue-400" />
            Commands:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-blue-950 text-slate-300 hover:text-blue-300 border border-slate-800 hover:border-blue-500/50 shrink-0 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Log */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3 font-mono">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-blue-400 font-semibold">mahek@profile:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={onSubmit} className="p-3 bg-[#070a10] border-t border-slate-800 flex items-center gap-2">
          <span className="text-blue-400 font-mono text-xs pl-2">mahek@profile:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <Send className="w-3 h-3" />
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
