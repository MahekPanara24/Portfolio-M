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
          <p className="text-emerald-400 font-bold">
            [+] SOC DEFENSE TERMINAL v2.6.4 INITIALIZED
          </p>
          <p className="text-slate-400">
            Welcome to Mahek Panara's Interactive Analyst Shell. Type <span className="text-cyan-400 font-semibold">'help'</span> to see available commands or click the chips below.
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
      setTimeout(() => inputRef.current?.focus(), 100);
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
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-mono">whoami</span> - Display Mahek's background and mission</p>
            <p><span className="text-emerald-400 font-mono">skills</span> - List cybersecurity and full-stack technical competencies</p>
            <p><span className="text-emerald-400 font-mono">projects</span> - Display highlighted security and MERN projects</p>
            <p><span className="text-emerald-400 font-mono">scan</span> - Execute simulated vulnerability & port assessment</p>
            <p><span className="text-emerald-400 font-mono">relocate</span> - Check relocation preferences and availability</p>
            <p><span className="text-emerald-400 font-mono">contact</span> - Retrieve contact info and communication links</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Clear the terminal output</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400">{personalInfo.summary}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500/50 pl-2">
                <p className="text-cyan-400 font-bold">{cat.title}:</p>
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
                <p className="text-emerald-400 font-bold">{p.title}</p>
                <p className="text-slate-300">{p.summary}</p>
                <p className="text-[10px] text-cyan-400 mt-1">Tags: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'scan':
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400">[*] Initiating Simulated Threat & Port Audit...</p>
            <p className="text-slate-400">[+] Port 80 (HTTP): OPEN [Redirecting to HTTPS: Enforced]</p>
            <p className="text-slate-400">[+] Port 443 (HTTPS): OPEN [TLS 1.3 Active | Strict Cipher Suites]</p>
            <p className="text-slate-400">[+] Port 22 (SSH): FILTERED [Key-Based Auth Only]</p>
            <p className="text-slate-400">[+] Security Headers: CSP, HSTS, X-Frame-Options: VALIDATED</p>
            <p className="text-emerald-400 font-bold">[✔] Result: 0 Critical Vulnerabilities Detected. Posture: HARDENED.</p>
          </div>
        );
        break;

      case 'relocate':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-emerald-400 font-bold">📍 Relocation Status: Active & Ready</p>
            <p className="text-slate-300">
              Open to Relocate to: <strong>Ahmedabad, Vadodara, Gandhinagar, Surat & across Gujarat</strong>.
            </p>
            <p className="text-cyan-300">Availability: Immediate Joining</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">{personalInfo.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{personalInfo.phone}</span></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{personalInfo.linkedin}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{personalInfo.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            Command not recognized: '{cmd}'. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for list of commands.
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

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'scan', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-slate-950 border border-cyan-500/40 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[560px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-cyan-900/50 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="ml-3 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              mahek@soc-station: ~ (zsh)
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
              className="text-slate-400 hover:text-red-400 p-1 rounded"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Action Chips */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Quick:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-slate-800 hover:border-cyan-500/50 shrink-0 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono scanline">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-cyan-400">mahek@soc:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={onSubmit} className="p-3 bg-slate-900/90 border-t border-cyan-900/50 flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-sm pl-2">mahek@soc:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-sm font-mono text-white focus:outline-none placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono border border-cyan-500/30 flex items-center gap-1.5"
          >
            <Send className="w-3 h-3" />
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
