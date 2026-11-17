import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, KeyRound, Activity, Layers, ShieldCheck, Check } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cybersecurity' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Security & Scalability</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Explore applications where full-stack developer architecture directly powers defensive cybersecurity methodologies.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'cybersecurity'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Cybersecurity & Defense
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'fullstack'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack (MERN)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.iconName)}
                  </div>
                  {project.metrics && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/40">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Key Features:
                  </div>
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Security Highlights Box */}
                <div className="p-3 rounded-xl bg-slate-950/90 border border-cyan-900/30 mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Security Hardening:
                  </div>
                  <ul className="space-y-1">
                    {project.securityHighlights.map((sec, sIdx) => (
                      <li key={sIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tags & Buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                  >
                    Deep Dive
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40">
                  {getProjectIcon(selectedProject.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs font-mono text-cyan-400">{selectedProject.category.toUpperCase()}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Features</h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Security Architecture</h4>
                  <ul className="space-y-1">
                    {selectedProject.securityHighlights.map((s, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  Visit GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
