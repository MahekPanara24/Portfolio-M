import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, ArrowRight, FileText, CheckCircle2, MapPin, Mail } from 'lucide-react';
import { CyberCanvas } from './3d/CyberCanvas';
import { stats } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const roles = [
    'Cybersecurity Analyst Aspirant',
    'SOC Analyst in Training',
    'Application Security Specialist',
    'Full-Stack MERN Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden cyber-grid">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOC & Threat Defense • MERN Architecture</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Mahek Panara</span>
              </h1>
              
              <div className="h-12 flex items-center mt-2">
                <span className="text-xl sm:text-2xl font-mono text-slate-300">
                  {'> '}
                  <span className="text-cyan-400 font-semibold">{displayText}</span>
                  <span className="animate-pulse text-emerald-400">_</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Detail-oriented <strong className="text-white">B.Sc. IT graduate</strong> bridging full-stack web development (MERN) with specialized cybersecurity training. Passionate about securing architectures, vulnerability assessments, and proactive threat remediation.
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                Network Defense & Threat Analysis
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                OWASP Web Scanning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                MERN Production Ready
              </span>
            </div>

            {/* Location & Contact info chip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Ahmedabad, Gujarat (Ready to Relocate)
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                mahekpanara24@gmail.com
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group"
              >
                <span>View Security & MERN Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono text-sm transition-all hover:border-cyan-400 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Simulate SOC Terminal</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all hover:border-slate-500"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Cyber Orb Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 h-[420px] sm:h-[480px] w-full relative"
          >
            <div className="w-full h-full rounded-2xl border border-cyan-500/20 bg-slate-950/60 backdrop-blur-md overflow-hidden relative shadow-[0_0_50px_-10px_rgba(6,182,212,0.2)]">
              {/* Header bar of 3D frame */}
              <div className="absolute top-0 left-0 right-0 z-20 px-4 py-2.5 bg-slate-950/80 border-b border-cyan-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-cyan-300 ml-2">cyber_defense_core.glb</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  REAL-TIME 3D
                </div>
              </div>

              {/* 3D Canvas Rendering */}
              <CyberCanvas />
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center group hover:bg-slate-900/90"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
                {item.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium group-hover:text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
