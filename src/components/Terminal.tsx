import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send } from 'lucide-react';
import { executeTerminalCommand } from '../utils/terminalCommands';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init-welcome',
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
    const result = executeTerminalCommand(cmd, () => handleCommand('help'));
    if (result.isClear) {
      setHistory([]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      { id: `${cmd}-${Date.now()}-${prev.length}`, command: cmd, output: result.output },
    ]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const quickCommands = ['help', 'triage', 'owasp', 'mitre', 'report', 'skills', 'projects', 'security.txt', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-[#0a0e17] border border-blue-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-[max-width,height,transform] duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[560px]'
        }`}
      >
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#070a10] border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Close terminal"
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer transition-colors"
              onClick={onClose}
            />
            <button
              type="button"
              aria-label="Minimize terminal"
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer transition-colors"
              onClick={() => setIsMaximized(!isMaximized)}
            />
            <button
              type="button"
              aria-label="Maximize terminal"
              className="w-3 h-3 rounded-full bg-blue-500/80 hover:bg-blue-500 cursor-pointer transition-colors"
              onClick={() => setIsMaximized(!isMaximized)}
            />
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
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
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
          <label htmlFor="terminal-command-input" className="text-blue-400 font-mono text-xs pl-2 cursor-text">
            mahek@profile:~$
          </label>
          <input
            id="terminal-command-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or any command..."
            aria-label="Terminal command input"
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
