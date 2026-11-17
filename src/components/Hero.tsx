import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, ArrowRight, FileText, MapPin, Mail, Server, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { stats } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const roles = [
    'Cybersecurity Analyst Aspirant',
    'Full-Stack Web Developer (MERN)',
    'Network Defense & Threat Analysis',
    'Application Security Specialist',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1800);
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

  const statIcons = [GraduationCap, Award, Briefcase, Code];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden solid-grid bg-[#07090e]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c1018] border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Cybersecurity Training (Demmisto) • MERN Intern (True Twist)</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-blue-500">Mahek Panara</span>
              </h1>
              
              <div className="h-10 flex items-center mt-3">
                <span className="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2">
                  <span className="text-blue-500 font-bold">&gt;</span>
                  <span className="text-white font-semibold">{displayText}</span>
                  <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Detail-oriented <strong className="text-white font-semibold">B.Sc. IT graduate</strong> combining practical full-stack web development experience (MERN Stack) with specialized training in Cybersecurity. Experienced in building, debugging, and securing modern web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1018] border border-slate-800 text-xs text-slate-300 font-medium">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                Network Defense & Threat Analysis
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1018] border border-slate-800 text-xs text-slate-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                Vulnerability Assessment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1018] border border-slate-800 text-xs text-slate-300 font-medium">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                Full-Stack MERN Engineering
              </span>
            </div>

            {/* Location & Email Direct */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                Ahmedabad, Gujarat, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-400" />
                mahekpanara24@gmail.com
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md group"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0c1018] hover:bg-slate-800 border border-slate-700 text-white text-sm font-semibold transition-all hover:border-slate-500"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#0c1018] hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-all hover:border-slate-700"
              >
                <Terminal className="w-4 h-4 text-slate-400" />
                <span>Analyst Terminal</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 h-[420px] sm:h-[460px] w-full relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* 4 Stat Cards with Proper Spacing, Icons, & 2D Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((item, index) => {
            const Icon = statIcons[index];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0c1018] border border-slate-800 hover:border-blue-500/50 transition-all text-left group shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.value}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
