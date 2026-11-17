import React from 'react';
import { m } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Check, Shield, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-blue-400 mb-3 tracking-wider uppercase">
            Career Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Training, Internship & <span className="text-blue-500">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Hands-on technical progression across cybersecurity training, MERN web engineering, and academic studies.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-12 space-y-10 text-left">
          {experiences.map((exp, idx) => {
            const isEducation = exp.type === 'education';
            const isOngoing = exp.status === 'Ongoing';

            return (
              <m.div
                key={`${exp.organization}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* 2D Node checkpoint */}
                <div
                  className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isOngoing
                      ? 'bg-[#07090e] border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                      : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : exp.type === 'internship' ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <Shield className="w-4 h-4" />
                  )}
                </div>

                {/* Main Card */}
                <m.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0c1018] border border-slate-800/90 hover:border-blue-500/50 transition-colors shadow-lg hover:shadow-2xl"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-blue-400 mt-1 flex items-center gap-2">
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="text-xs sm:text-sm text-slate-200 font-medium flex items-center gap-1.5 bg-[#141a26] px-3.5 py-1.5 rounded-lg border border-slate-800">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        {exp.period}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg border ${
                          isOngoing
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                            : 'bg-slate-800 text-slate-200 border-slate-700'
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Location Tag */}
                  <div className="flex items-center gap-2 text-sm text-slate-300 mb-5 font-medium">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((pt) => (
                      <li key={pt} className="text-sm sm:text-base text-slate-200 leading-relaxed flex items-start gap-3">
                        <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 shrink-0 mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-blue-400 font-bold mb-3 uppercase tracking-wider">
                      Key Competencies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg bg-[#141a26] text-slate-200 border border-slate-800 hover:border-blue-500/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </m.div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
