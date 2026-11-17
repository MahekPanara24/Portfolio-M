import React from 'react';
import { m } from 'framer-motion';
import { Shield, Server, GraduationCap } from 'lucide-react';

export const HeroPillars: React.FC = () => {
  return (
    <div className="hidden lg:flex lg:col-span-3 flex-col gap-3.5 text-left">
      {/* Card 1: Cybersecurity */}
      <m.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-md group"
      >
        <div className="text-[11px] font-mono font-bold text-blue-400 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Cybersecurity & Defense</span>
        </div>
        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
          Security Analyst Aspirant
        </h4>
        <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed">
          Vulnerability Assessment, Network Defense & Protocols • Demmisto Tech
        </p>
      </m.div>

      {/* Card 2: Production Stack */}
      <m.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-md group"
      >
        <div className="text-[11px] font-mono font-bold text-blue-400 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Production Stack</span>
        </div>
        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
          Full-Stack MERN Developer
        </h4>
        <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed">
          React.js • Node.js • Express.js • MongoDB • True Twist
        </p>
      </m.div>

      {/* Card 3: Academic Merit */}
      <m.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-md group"
      >
        <div className="text-[11px] font-mono font-bold text-blue-400 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Academic Merit</span>
        </div>
        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
          B.Sc. Information Technology
        </h4>
        <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed">
          LJ University • 2023 – 2026 • Ahmedabad, Gujarat
        </p>
      </m.div>
    </div>
  );
};
