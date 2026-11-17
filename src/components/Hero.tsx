import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, GraduationCap, ArrowDown, ExternalLink, Volume2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';

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
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-3.5 text-left">
            
            {/* Card 1: Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md group"
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
            </motion.div>

            {/* Card 2: Production Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md group"
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
            </motion.div>

            {/* Card 3: Academic Merit */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md group"
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
            </motion.div>

          </div>

          {/* ================= CENTER COLUMN: AVATAR, NAME & STATEMENT ================= */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            
            {/* 2D Concentric Orbiting Avatar with Dynamic Pulses & Transitions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center select-none"
            >
              {/* Radar pulse ripples */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping opacity-25 pointer-events-none" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-pulse" />

              {/* Outer dashed rotating orbit */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 animate-orbit" />
              
              {/* Secondary counter-rotating dashed ring */}
              <div className="absolute inset-3 rounded-full border border-dotted border-blue-400/40 animate-orbit-reverse" />

              {/* Inner glowing ring */}
              <div className="absolute inset-6 rounded-full bg-blue-600/10 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.25)]" />

              {/* Central Avatar Visual Container */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#141d2d] to-[#0a0d14] border-2 border-blue-500/80 p-1.5 shadow-[0_0_35px_rgba(37,99,235,0.3)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_45px_rgba(37,99,235,0.45)]">
                <div
                  className="w-full h-full rounded-full bg-[#0d131f] flex flex-col items-center justify-center text-center p-2 relative group cursor-pointer transition-transform"
                  onClick={onOpenResume}
                  title="Click to view verified resume"
                >
                  <Shield className="w-11 h-11 sm:w-12 sm:h-12 text-blue-400 mb-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <span className="text-xs font-bold tracking-wider text-slate-100 uppercase font-mono">
                    Mahek
                  </span>
                </div>
              </div>

              {/* Status pill attached to bottom of circle with Ping indicator */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#0a0e17] border border-blue-500/70 shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                </span>
                <span className="text-xs font-semibold text-slate-100">Active • Ahmedabad</span>
              </div>
            </motion.div>

            {/* Name with Capital M as requested: Mahek */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-3"
            >
              Mahek
            </motion.h1>

            {/* Editorial Hybrid Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight leading-[1.2] max-w-xl mb-4 px-2"
            >
              Architecting Resilient Threat Defense from{' '}
              <span className="font-serif italic text-blue-400 font-normal">
                Code to Network.
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed mb-6 font-normal px-4"
            >
              Mahek Panara — Cybersecurity Analyst Aspirant specializing in Network Defense, Web Vulnerability Scanning & Threat Remediation.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 flex-wrap justify-center"
            >
              <a
                href="#summary"
                className="px-6 py-3 rounded-full bg-[#121622] hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2 group shadow-sm"
              >
                <span>GO ON, SCROLL DOWN</span>
                <ArrowDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3 rounded-full bg-[#121622] hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-mono font-medium text-blue-400 hover:text-white transition-all shadow-sm"
              >
                &gt;_ Terminal
              </button>
            </motion.div>

            {/* Mobile Highlights Strip (Shows on Mobile/Tablet so they don't miss the 3 core pillars) */}
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
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 text-left items-start">
            
            {/* Playful Handwritten Note with Curved Arrow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-4"
            >
              <div className="font-handwriting text-3xl sm:text-4xl text-blue-400 rotate-[-4deg] font-semibold tracking-wide">
                say hi before overthinking :)
              </div>
              <svg
                className="w-11 h-11 text-blue-400 ml-16 -mt-1 rotate-12"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 5 C 25 15, 30 25, 20 35 M 20 35 L 28 32 M 20 35 L 22 26" />
              </svg>
            </motion.div>

            {/* Social Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-full p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">@MahekPanara24</div>
                    <div className="text-xs text-slate-300 mt-0.5">Behind the builds & code</div>
                  </div>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Ambient Audio Player Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={onToggleAudio}
              className="w-full p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-5 w-5 justify-center">
                    <span className={`w-1 bg-blue-500 rounded-full transition-all ${isAudioPlaying ? 'h-5 animate-pulse' : 'h-1.5'}`} />
                    <span className={`w-1 bg-blue-400 rounded-full transition-all ${isAudioPlaying ? 'h-3 animate-pulse delay-75' : 'h-2.5'}`} />
                    <span className={`w-1 bg-blue-600 rounded-full transition-all ${isAudioPlaying ? 'h-4 animate-pulse delay-150' : 'h-1'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      Cyber Defense & SOC Ambient
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {isAudioPlaying ? 'Audio Playing • Click to Mute' : 'Studio Sound • Click to Play'}
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-800 text-blue-400">
                  <Volume2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
