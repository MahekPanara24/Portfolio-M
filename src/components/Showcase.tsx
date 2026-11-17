import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Check, Code, Server, Database, Lock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Showcase: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = projects[selectedIdx];

  const tabs = [
    { code: 'DM-01', name: 'Vulnerability Suite' },
    { code: 'NS-02', name: 'Network Defense' },
    { code: 'WA-03', name: 'Secure Web App' },
    { code: 'AD-04', name: 'Mobile Security Lab' },
  ];

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3 tracking-wider uppercase font-semibold">
            Feature Architecture • Cybersecurity Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight px-2">
            Take a closer look.{' '}
            <span className="font-serif italic font-normal text-blue-400">
              Architected for defense.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed px-4">
            Every system is audited and engineered for resilience. Select any architecture below to inspect defensive workflows, threat mitigation mechanisms, and verified technical outcomes.
          </p>
        </div>

        {/* Full-width Responsive Grid Tabs (No scrollbar, uses whole row space) */}
        <div className="w-full max-w-5xl mx-auto mb-10 p-1.5 sm:p-2 rounded-2xl bg-[#10141e] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            {tabs.map((tab, idx) => (
              <button
                key={tab.code}
                onClick={() => setSelectedIdx(idx)}
                className={`group flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-colors w-full text-center whitespace-nowrap ${
                  selectedIdx === idx
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[11px] font-mono shrink-0 transition-colors ${
                  selectedIdx === idx
                    ? 'bg-blue-950/90 text-blue-200 border border-blue-400/30'
                    : 'bg-slate-900/90 text-blue-400 border border-slate-800 group-hover:border-slate-700'
                }`}>
                  {tab.code}
                </span>
                <span className="truncate">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Large Architecture Display Card */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0c1018] border border-slate-800 p-6 sm:p-10 shadow-2xl text-left"
          >
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  {tabs[selectedIdx].code} • Technical Architecture
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs sm:text-sm font-mono font-semibold px-4 py-1.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                  {activeProject.metrics}
                </span>
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-xs sm:text-sm font-semibold text-white border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-blue-400" />
                  <span>Repository</span>
                </a>
              </div>
            </div>

            {/* Main Content: Overview & 3-Tier Architecture Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
              
              {/* Left Column (5 cols): Description & Features */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                    System Summary
                  </h4>
                  <p className="text-base text-slate-200 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                    Core Security Implementations
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-sm sm:text-base text-slate-200 flex items-start gap-3">
                        <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 shrink-0 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (7 cols): 3-Tier Architecture Visual */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                  Defensive Three-Tier Security Breakdown
                </h4>

                {/* Tier 1 */}
                <div className="p-5 rounded-xl bg-[#080b11] border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                        <Code className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">Tier 1: Client Defense & UI Input Sanitization</span>
                    </div>
                    <span className="text-xs font-mono text-blue-400 font-semibold">Web / UI Defense</span>
                  </div>
                  <p className="text-sm text-slate-300 pl-9 leading-relaxed">
                    Client-side validation guards, XSS filter encoding, strict layout boundaries, and proactive sanitization prior to payload dispatch.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className="p-5 rounded-xl bg-[#080b11] border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400">
                        <Server className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">Tier 2: API Security & Authentication Logic</span>
                    </div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold">REST / Auth Logic</span>
                  </div>
                  <p className="text-sm text-slate-300 pl-9 leading-relaxed">
                    Route protection middleware, token-based session management, rate limiting, and defensive input schema parsing.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className="p-5 rounded-xl bg-[#080b11] border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-sky-600/10 text-sky-400">
                        <Database className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">Tier 3: Database Hardening & Schema Protection</span>
                    </div>
                    <span className="text-xs font-mono text-sky-400 font-semibold">DBMS / Data Layer</span>
                  </div>
                  <p className="text-sm text-slate-300 pl-9 leading-relaxed">
                    Parameterized database operations, NoSQL injection defenses, strict schema rules, and least-privilege credential access.
                  </p>
                </div>

              </div>

            </div>

            {/* Footer Tag Strip */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-mono text-slate-400 mr-2">Technologies:</span>
                {activeProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-lg bg-[#141a26] text-slate-200 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 font-mono font-semibold">
                <Lock className="w-4 h-4" />
                <span>Verified Architecture</span>
              </div>
            </div>

          </m.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
