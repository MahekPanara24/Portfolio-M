import React, { useState } from 'react';
import { CheckCircle, Search, RefreshCw, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuditCheck {
  title: string;
  category: string;
  status: 'passed' | 'warning' | 'critical';
  details: string;
  remediation: string;
}

export const SecurityScanner: React.FC = () => {
  const [target, setTarget] = useState('demo-portal.internal');
  const [scanning, setScanning] = useState(false);

  const auditChecks: AuditCheck[] = [
    {
      title: 'SQL / NoSQL Injection Safeguards',
      category: 'Input Validation',
      status: 'passed',
      details: 'Mongoose parameterized queries & Express mongo-sanitize in place.',
      remediation: 'Use sanitized regex and object schemas without raw user input.',
    },
    {
      title: 'Cross-Site Scripting (XSS) Prevention',
      category: 'Client Security',
      status: 'passed',
      details: 'DOMPurify sanitization & strict React JSX escaping verified.',
      remediation: 'Avoid dangerouslySetInnerHTML and enforce strict CSP.',
    },
    {
      title: 'Broken Access Control & JWT Revocation',
      category: 'Authentication',
      status: 'passed',
      details: 'Dual-token auth, HttpOnly SameSite=Strict cookies, token blacklisting active.',
      remediation: 'Expire access tokens in 15 mins, check DB on critical mutations.',
    },
    {
      title: 'Security Misconfiguration & Headers',
      category: 'Infrastructure',
      status: 'passed',
      details: 'Helmet.js headers (HSTS 31536000, X-Content-Type-Options: nosniff) loaded.',
      remediation: 'Disable X-Powered-By and enforce TLS 1.3 only.',
    },
    {
      title: 'CORS & Cross-Origin Resource Sharing',
      category: 'API Security',
      status: 'passed',
      details: 'Origin locked to whitelisted domains, credentials explicitly verified.',
      remediation: 'Never use Access-Control-Allow-Origin: * with credentials.',
    },
  ];

  const runAudit = () => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#10b981', '#3b82f6'],
      });
    }, 1200);
  };

  return (
    <div className="w-full bg-slate-900/70 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-2">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Security Tool
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Live Web Application Security Auditor
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Simulate a security assessment demonstrating Mahek's application hardening principles.
          </p>
        </div>

        {/* Target input & button */}
        <div className="flex items-center gap-2 max-w-md w-full">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="e.g. app.domain.com"
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <button
            onClick={runAudit}
            disabled={scanning}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all disabled:opacity-50 shrink-0 shadow-md"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
            {scanning ? 'Scanning...' : 'Audit Target'}
          </button>
        </div>
      </div>

      {/* Scan Status Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="text-[11px] text-slate-400 font-mono">Target Host</div>
          <div className="text-xs font-bold text-cyan-300 truncate mt-0.5">{target}</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="text-[11px] text-slate-400 font-mono">OWASP Compliance</div>
          <div className="text-xs font-bold text-emerald-400 mt-0.5">Top 10 Shielded</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="text-[11px] text-slate-400 font-mono">TLS / SSL Strength</div>
          <div className="text-xs font-bold text-cyan-400 mt-0.5">Grade A+ (TLS 1.3)</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="text-[11px] text-slate-400 font-mono">Security Posture</div>
          <div className="text-xs font-bold text-emerald-400 mt-0.5">HARDENED (98/100)</div>
        </div>
      </div>

      {/* Checks list */}
      <div className="space-y-3">
        {auditChecks.map((check, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
          >
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">{check.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {check.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{check.details}</p>
              </div>
            </div>

            <div className="text-right sm:max-w-xs shrink-0">
              <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-900/30 inline-block">
                Remediation: {check.remediation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
