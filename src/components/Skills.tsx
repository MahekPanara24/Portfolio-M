import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Shield, Code, Activity, Check, Radio, Award } from 'lucide-react';
import { skillCategories, securityCertifications } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-sky-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-indigo-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-300" />;
      default:
        return <Shield className="w-5 h-5 text-blue-400" />;
    }
  };

  const coreCompetencies = [
    { title: 'Analytical Thinking', desc: 'Systematic analysis of network traffic patterns, security protocols, and system logs.' },
    { title: 'Logical Problem Solving', desc: 'Methodical debugging across database schemas, REST APIs, and application logic.' },
    { title: 'Threat Analysis Awareness', desc: 'Proactive understanding of modern attack vectors, input vulnerabilities, and defense protocols.' },
    { title: 'Agile Adaptability', desc: 'Collaborative development with Git version control in fast-paced sprint cycles.' },
    { title: 'Cross-Functional Communication', desc: 'Articulating technical vulnerability assessments and architectural needs clearly.' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3">
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cybersecurity & <span className="text-blue-400">Full-Stack Competencies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Structured skillsets gained through B.Sc. IT coursework, Demmisto Technologies specialized training, and True Twist internship.
          </p>
        </div>

        {/* Full-width Responsive Grid Tab Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-5xl mx-auto mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-colors duration-200 w-full text-center ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                  : 'bg-[#0d131f] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span className="truncate">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <m.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left"
        >
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 transition-colors shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h4>
                <span className="text-xs sm:text-sm font-mono text-blue-300 bg-blue-950 px-3 py-1 rounded border border-blue-800 font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Solid Blue Animated Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden mb-3">
                <m.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: skill.level / 100 }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  style={{ width: '100%' }}
                  className="h-full bg-blue-500 rounded-full origin-left"
                />
              </div>

              <p className="text-sm text-slate-200 mb-4 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </m.div>

        {/* Core Competencies Ribbon */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-bold text-white mb-6 font-mono text-slate-300">
            // Core Analytical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {coreCompetencies.map((comp) => (
              <div
                key={comp.title}
                className="p-4 rounded-xl bg-[#0d131f] border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-bold font-mono mb-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{comp.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Certifications & Milestones in Preparation */}
        <div className="pt-10 border-t border-slate-800/80 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-2">
              // CREDENTIALS & INDUSTRY ROADMAP
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Security Certifications & Target Milestones
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Active professional coursework and industry exam targets aligned with SOC, defense, and penetration testing benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityCertifications.map((cert) => (
              <div
                key={cert.name}
                className="p-5 rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/50 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${cert.badgeClass}`}>
                      {cert.status}
                    </span>
                    <Award className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.name}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Issuer: {cert.issuer}
                  </div>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-blue-400">
                  Timeline: {cert.period}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
