import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layers, Activity, Smartphone, Check, ArrowRight } from 'lucide-react';
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
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'ShieldAlert':
        return <Shield className="w-6 h-6 text-indigo-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sky-400" />;
      default:
        return <Smartphone className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090d16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3">
            <span>KEY PROJECTS & WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Applied Engineering & <span className="text-blue-400">Security Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Work developed during internship at True Twist, coursework at Demmisto Technologies, and academic projects at LJ University.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#0d131f] border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'cybersecurity'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#0d131f] border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Cybersecurity & Defense
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'fullstack'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-[#0d131f] border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack & Mobile
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.2)] group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    {getProjectIcon(project.iconName)}
                  </div>
                  {project.metrics && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800/80">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                    Key Implementations:
                  </div>
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Security Focus */}
                <div className="p-3.5 rounded-xl bg-[#080c14] border border-slate-800/80 mb-5">
                  <div className="text-xs font-mono font-bold text-blue-400 mb-1.5">
                    Security & Architecture Focus:
                  </div>
                  <ul className="space-y-1">
                    {project.securityHighlights.map((sec, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tags & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-blue-400" />
                    <span>GitHub Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full max-w-2xl bg-[#0d131f] border border-blue-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-600/15 border border-blue-500/30">
                  {getProjectIcon(selectedProject.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs font-mono text-blue-400">{selectedProject.category.toUpperCase()}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Security Architecture</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.securityHighlights.map((s, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-blue-400" />
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
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
