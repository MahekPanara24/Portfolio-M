import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Smartphone, CheckCircle2, MapPin, GraduationCap, Award } from 'lucide-react';
import { technicalFocusAreas } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusIcons = [Shield, Server, Smartphone];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3">
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Full-Stack Development with <span className="text-blue-400">Cybersecurity Defense</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Hands-on MERN stack development background paired with structured training in network defense, vulnerability assessment, and threat mitigation.
          </p>
        </div>

        {/* Technical Focus Areas (From Resume) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {technicalFocusAreas.map((area, idx) => {
            const Icon = focusIcons[idx];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 transition-all shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{area.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Profile Summary Card */}
        <div className="p-8 rounded-2xl bg-[#0d131f] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Why Full-Stack Knowledge Matters in Cybersecurity
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Modern cyber threats target application logic, API endpoints, authentication flows, and database queries. Having designed and built production-ready web applications using MongoDB, Express.js, React.js, and Node.js, I understand the architectural decisions behind web systems.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Combined with specialized coursework in network defense and web application vulnerability scanning at Demmisto Technologies, this dual foundation allows me to analyze vulnerabilities from both builder and defender viewpoints, enabling faster detection and precise remediation.
            </p>

            {/* Verification Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Specialized practical training in Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Hands-on MERN & RESTful API development</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Trained in network defense & threat mitigation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Strong foundation in Computer Networking & DBMS</span>
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-[#090d16] border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Location</div>
                <div className="text-sm font-semibold text-white">Ahmedabad, Gujarat, India</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Degree</div>
                <div className="text-sm font-semibold text-white">B.Sc. Information Technology</div>
                <div className="text-[11px] text-slate-400">LJ University (2023 - 2026)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-600/10 border border-sky-500/20 text-sky-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Specialized Training</div>
                <div className="text-sm font-semibold text-white">Cybersecurity Professional</div>
                <div className="text-[11px] text-sky-300">Demmisto Technologies (Ongoing)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
