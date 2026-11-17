import React from 'react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';

export interface CommandResult {
  output?: React.ReactNode;
  isClear?: boolean;
}

export const executeTerminalCommand = (
  cmd: string,
  onRunHelp: () => void
): CommandResult => {
  const trimmed = cmd.trim().toLowerCase();

  switch (trimmed) {
    case 'help':
      return {
        output: (
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
        ),
      };

    case 'triage':
    case 'analyze-log':
      return {
        output: (
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
        ),
      };

    case 'owasp':
      return {
        output: (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">OWASP Top 10 (2021) Defensive Implementation Matrix:</p>
            <p><span className="text-amber-400">A01 Broken Access Control:</span> Enforce strict role-based authorization (RBAC) and verify ownership tokens on every endpoint.</p>
            <p><span className="text-amber-400">A02 Cryptographic Failures:</span> Enforce TLS 1.3, salt & hash passwords with bcrypt (work factor 12), and use RS256 for JWTs.</p>
            <p><span className="text-amber-400">A03 Injection (SQLi/XSS/NoSQL):</span> Enforce parameterized prepared queries and strict context-aware HTML entity sanitization.</p>
            <p><span className="text-amber-400">A05 Security Misconfiguration:</span> Disable directory browsing, remove debug headers, and deploy strict CSP + HSTS headers.</p>
            <p><span className="text-amber-400">A07 Identification & Auth Failures:</span> Implement rate-limiting against brute force, secure session cookies (HttpOnly, SameSite=Strict).</p>
          </div>
        ),
      };

    case 'mitre':
      return {
        output: (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">MITRE ATT&CK Framework Mapping & Detection Coverage:</p>
            <p><span className="text-emerald-400">T1190 - Exploit Public-Facing App:</span> Monitored via WAF & Burp Suite fuzzing. Mitigated with input validation schemas & SAST.</p>
            <p><span className="text-emerald-400">T1078 - Valid Accounts:</span> Detected via anomaly login geo-velocity & failed attempt thresholds (Event ID 4625).</p>
            <p><span className="text-emerald-400">T1059 - Command & Scripting Interpreter:</span> Blocked by eliminating child_process execution of untrusted user input.</p>
          </div>
        ),
      };

    case 'report':
      return {
        output: (
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
        ),
      };

    case 'security.txt':
      return {
        output: (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-blue-400 font-bold">RFC 9116 Standard Security Disclosure Policy:</p>
            <p className="text-slate-400">Contact: mailto:mahekpanara24@gmail.com</p>
            <p className="text-slate-400">Canonical: https://krishjadav30.github.io/Portfolio-M/.well-known/security.txt</p>
            <p className="text-slate-400">Policy: https://krishjadav30.github.io/Portfolio-M/#contact</p>
            <p className="text-slate-400">Expires: 2027-12-31T23:59:59.000Z</p>
          </div>
        ),
      };

    case 'whoami':
      return {
        output: (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-blue-300 font-semibold">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400 leading-relaxed">{personalInfo.summary}</p>
          </div>
        ),
      };

    case 'skills':
      return {
        output: (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="border-l-2 border-blue-500 pl-2">
                <p className="text-blue-400 font-bold">{cat.title}:</p>
                <p className="text-slate-300">{cat.skills.map(s => s.name).join(' • ')}</p>
              </div>
            ))}
          </div>
        ),
      };

    case 'projects':
      return {
        output: (
          <div className="space-y-2 text-xs">
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-blue-400 font-bold">{p.title}</p>
                <p className="text-slate-300">{p.summary}</p>
                <p className="text-[10px] text-slate-400 mt-1">Tags: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        ),
      };

    case 'contact':
      return {
        output: (
          <div className="text-xs space-y-1 text-slate-300">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:underline">{personalInfo.email}</a></p>
            <p>Phone: <span className="text-white">{personalInfo.phone}</span></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{personalInfo.linkedin}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{personalInfo.github}</a></p>
          </div>
        ),
      };

    case 'clear':
      return { isClear: true };

    default:
      return {
        output: (
          <p className="text-xs text-rose-400">
            Command not recognized: '{cmd}'. Type <button type="button" className="text-blue-300 underline hover:text-blue-200 cursor-pointer inline" onClick={onRunHelp}>'help'</button> for list of commands.
          </p>
        ),
      };
  }
};
