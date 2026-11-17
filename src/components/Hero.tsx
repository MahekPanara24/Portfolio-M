import React from 'react';
import { m } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { HeroPillars } from './HeroPillars';
import { HeroAvatar } from './HeroAvatar';
import { HeroSocial } from './HeroSocial';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenTerminal,
  isAudioPlaying,
  onToggleAudio,
}) => {
  return (
    <section id="home" className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center overflow-hidden dot-grid">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 3-Column 2D Grid: Left Cards | Center Hero | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ================= LEFT COLUMN: 3 FLOATING 2D CARDS ================= */}
          <HeroPillars />

          {/* ================= CENTER COLUMN: AVATAR, NAME & STATEMENT ================= */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            
            {/* 2D Concentric Orbiting Avatar */}
            <HeroAvatar onOpenResume={onOpenResume} />

            {/* Name */}
            <m.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-3"
            >
              Mahek
            </m.h1>

            {/* Editorial Hybrid Statement */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight leading-[1.2] max-w-xl mb-4 px-2"
            >
              Architecting Resilient Threat Defense from{' '}
              <span className="font-serif italic text-blue-400 font-normal">
                Code to Network.
              </span>
            </m.div>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed mb-6 font-normal px-4"
            >
              Mahek Panara — Cybersecurity Analyst Aspirant specializing in Network Defense, Web Vulnerability Scanning & Threat Remediation.
            </m.p>

            {/* Action buttons */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 flex-wrap justify-center"
            >
              <a
                href="#summary"
                className="px-6 py-3 rounded-full bg-[#121622] hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-2 group shadow-sm"
              >
                <span>GO ON, SCROLL DOWN</span>
                <ArrowDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="./Mahek_Panara_Security_Assessment_Report.pdf"
                download="Mahek_Panara_Security_Assessment_Report.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 text-xs sm:text-sm font-mono font-semibold text-blue-300 hover:text-white transition-colors shadow-sm flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Sample Audit Report</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3 rounded-full bg-[#121622] hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-mono font-medium text-blue-400 hover:text-white transition-colors shadow-sm"
              >
                &gt;_ Terminal
              </button>
            </m.div>

            {/* Mobile Highlights Strip */}
            <div className="lg:hidden w-full mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800">
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase">Cybersecurity & Defense</div>
                <div className="text-sm font-bold text-white mt-0.5">Security Analyst Aspirant</div>
                <div className="text-xs text-slate-400 mt-0.5">Demmisto Technologies</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800">
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase">Production Stack</div>
                <div className="text-sm font-bold text-white mt-0.5">Full-Stack MERN</div>
                <div className="text-xs text-slate-400 mt-0.5">True Twist Internship</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-slate-800">
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase">Academic Merit</div>
                <div className="text-sm font-bold text-white mt-0.5">B.Sc. IT (2023–2026)</div>
                <div className="text-xs text-slate-400 mt-0.5">LJ University</div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3 PLAYFUL 2D ELEMENTS ================= */}
          <HeroSocial isAudioPlaying={isAudioPlaying} onToggleAudio={onToggleAudio} />

        </div>

      </div>

    </section>
  );
};
