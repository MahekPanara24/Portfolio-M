import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Network Defense',
    'Vulnerability Assessment & Scanning',
    'Threat Analysis & Mitigation',
    'Security Protocols & Data Protection',
    'OWASP Web Security',
    'Computer Networking Architecture',
    'Incident Detection Awareness',
    'Authentication Flow Security',
    'Client-Server Input Sanitization',
    'Full-Stack Architecture (MERN)',
    'Database Schema Hardening',
    'Git Version Control',
  ];

  return (
    <div className="w-full bg-[#080a0f] border-t border-b border-slate-800/80 py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 font-mono text-sm text-slate-300">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-slate-600 font-bold">/</span>
            <span className="hover:text-blue-400 transition-colors cursor-default font-semibold">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
