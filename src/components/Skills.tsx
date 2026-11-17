import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Cpu, Check, Zap } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SecurityScanner } from './SecurityScanner';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const coreCompetencies = [
    { title: 'Analytical Thinking', desc: 'Deconstructing complex network packet traces and application stack errors into root causes.' },
    { title: 'Logical Problem Solving', desc: 'Systematic debugging across database layers, REST contracts, and frontend states.' },
    { title: 'Threat Analysis Awareness', desc: 'Continuous vigilance regarding evolving attack vectors and defense-in-depth methodologies.' },
    { title: 'Agile Adaptability', desc: 'Quickly mastering new toolchains, frameworks, and security benchmarks in collaborative sprints.' },
    { title: 'Cross-Functional Communication', desc: 'Articulating technical security findings clearly to non-technical stakeholders.' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Development Arsenal</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Equipped with practical coursework and production internship experience across both software defense and web application engineering.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-slate-900 border-2 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left"
        >
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:bg-slate-900/90 shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/40">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                />
              </div>

              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Core Competencies Ribbon */}
        <div className="mb-20">
          <h3 className="text-center text-lg font-bold text-white mb-6 font-mono text-slate-300">
            // Core Professional Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono mb-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  {comp.title}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Security Scanner Section */}
        <div className="mt-8">
          <SecurityScanner />
        </div>

      </div>
    </section>
  );
};
