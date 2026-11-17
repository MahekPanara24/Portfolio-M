import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <span>CAREER & TRAINING PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship, Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Education</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Verified milestones demonstrating continuous hands-on progression across web engineering and cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-900/50 ml-4 sm:ml-32 space-y-12 text-left">
          {experiences.map((exp, idx) => {
            const isEducation = exp.type === 'education';
            const isOngoing = exp.status === 'Ongoing';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Checkpoint Node */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                    isOngoing
                      ? 'bg-slate-950 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]'
                      : 'bg-slate-900 border-slate-700 text-emerald-400'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Shield className="w-4 h-4" />
                  )}
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all backdrop-blur-sm shadow-lg group-hover:bg-slate-900/90">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded border ${
                          isOngoing
                            ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/50'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Location info */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {exp.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-cyan-300 border border-cyan-900/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
