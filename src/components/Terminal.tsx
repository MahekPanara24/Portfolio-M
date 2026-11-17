import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send } from 'lucide-react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';

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
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-blue-400 font-bold">Available Security & Profile Commands:</p>
            <p><span className="text-white font-mono">triage</span> (or <span className="text-white font-mono">analyze-log</span>) - Interactive SOC incident & SQLi log analysis</p>
            <p><span className="text-white font-mono">owasp</span> - Practical OWASP Top 10 mitigation matrix</p>
            <p><span className="text-white font-mono">mitre</span> - MITRE ATT&CK framework mapping & detection</p>
            <p><span className="text-white font-mono">report</span> - Download Sample Vulnerability Assessment (PDF)</p>
            <p><span className="text-white font-mono">security.txt</span> - Display RFC 9116 security disclosure policies</p>
            <p><span className="text-white font-mono">whoami</span> - Display background & professional summary</p>
            <p><span className="text-white font-mono">skills</span> - List cybersecurity arsenal & competencies</p>
            <p><span className="text-white font-mono">projects</span> - Display security & engineering features</p>
            <p><span className="text-white font-mono">contact</span> - Retrieve verified contact info</p>
            <p><span className="text-white font-mono">clear</span> - Clear terminal session output</p>
          </div>
        );
        break;

      case 'triage':
      case 'analyze-log':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-emerald-400 font-bold">[SOC INCIDENT ANALYSIS SIMULATION — LIVE STREAM]</p>
            <p className="text-slate-400">// Ingesting Apache HTTP Access Logs for anomaly correlation...</p>
            <div className="p-2.5 rounded bg-black/80 border border-rose-900/60 text-[11px] text-rose-300 space-y-1">
              <p>198.51.100.42 - - [17/Nov/2026:14:10:02 +0530] "GET /products?id=1 HTTP/1.1" 200 4520</p>
              <p>198.51.100.42 - - [17/Nov/2026:14:10:14 +0530] "GET /products?id=1%27%20OR%201=1-- HTTP/1.1" 500 892</p>
              <p>198.51.100.42 - - [17/Nov/2026:14:10:28 +0530] "GET /products?id=1%20UNION%20SELECT%20null,username,password%20FROM%20users-- HTTP/1.1" 200 7820</p>
              <p className="text-amber-300 font-bold mt-1.5">[!] ALERT [SEV-HIGH]: Active SQL Injection exploitation verified from 198.51.100.42</p>
            </div>
            <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800 text-[11px] text-slate-300 space-y-1.5">
              <p className="text-blue-300 font-bold">Analyst Defensive Remediation Protocol:</p>
              <p>1. Immediate Containment: Execute firewall perimeter block: <code className="text-amber-300 bg-slate-900 px-1 py-0.5 rounded">iptables -A INPUT -s 198.51.100.42 -j DROP</code></p>
              <p>2. Incident Scoping: Audit database transaction logs and revoke all JWT session tokens active during exploitation window.</p>
              <p>3. Application Hardening: Refactor dynamic query into parameterized prepared statement: <code className="text-emerald-300 bg-slate-900 px-1 py-0.5 rounded">db.query('SELECT * FROM products WHERE id = $1', [id])</code></p>
            </div>
          </div>
        );
        break;

      case 'owasp':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">OWASP Top 10 (2021) Defensive Implementation Matrix:</p>
            <p><span className="text-amber-400">A01 Broken Access Control:</span> Enforce strict role-based authorization (RBAC) and verify ownership tokens on every endpoint.</p>
            <p><span className="text-amber-400">A02 Cryptographic Failures:</span> Enforce TLS 1.3, salt & hash passwords with bcrypt (work factor 12), and use RS256 for JWTs.</p>
            <p><span className="text-amber-400">A03 Injection (SQLi/XSS/NoSQL):</span> Enforce parameterized prepared queries and strict context-aware HTML entity sanitization.</p>
            <p><span className="text-amber-400">A05 Security Misconfiguration:</span> Disable directory browsing, remove debug headers, and deploy strict CSP + HSTS headers.</p>
            <p><span className="text-amber-400">A07 Identification & Auth Failures:</span> Implement rate-limiting against brute force, secure session cookies (HttpOnly, SameSite=Strict).</p>
          </div>
        );
        break;

      case 'mitre':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">MITRE ATT&CK Framework Mapping & Detection Coverage:</p>
            <p><span className="text-emerald-400">T1190 - Exploit Public-Facing App:</span> Monitored via WAF & Burp Suite fuzzing. Mitigated with input validation schemas & SAST.</p>
            <p><span className="text-emerald-400">T1078 - Valid Accounts:</span> Detected via anomaly login geo-velocity & failed attempt thresholds (Event ID 4625).</p>
            <p><span className="text-emerald-400">T1059 - Command & Scripting Interpreter:</span> Blocked by eliminating child_process execution of untrusted user input.</p>
          </div>
        );
        break;

      case 'report':
        response = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">Sample Vulnerability Assessment & Audit Report (PDF):</p>
            <p>Target: OWASP Juice Shop & E-Commerce REST API Assessment (Confidential / Sanitized)</p>
            <div className="pt-1">
              <a
                href="Mahek_Panara_Security_Assessment_Report.pdf"
                download="Mahek_Panara_Security_Assessment_Report.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
              >
                <span>[↓ Click to Download Assessment Report PDF]</span>
              </a>
            </div>
          </div>
        );
        break;

      case 'security.txt':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">RFC 9116 Standard Security Disclosure Policy:</p>
            <p className="text-slate-400">Contact: mailto:mahekpanara24@gmail.com</p>
            <p className="text-slate-400">Canonical: https://krishjadav30.github.io/Portfolio-M/.well-known/security.txt</p>
            <p className="text-slate-400">Policy: https://krishjadav30.github.io/Portfolio-M/#contact</p>
            <p className="text-slate-400">Expires: 2027-12-31T23:59:59.000Z</p>
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
            {skillCategories.map((cat) => (
              <div key={cat.title} className="border-l-2 border-blue-500 pl-2">
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
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800">
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

    setHistory((prev) => [
      ...prev,
      { id: `${cmd}-${Date.now()}-${prev.length}`, command: cmd, output: response },
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
