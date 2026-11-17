import React from 'react';
import { m } from 'framer-motion';
import { Shield } from 'lucide-react';

interface HeroAvatarProps {
  onOpenResume: () => void;
}

export const HeroAvatar: React.FC<HeroAvatarProps> = ({ onOpenResume }) => {
  return (
    <m.div
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
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#141d2d] to-[#0a0d14] border-2 border-blue-500/80 p-1.5 shadow-[0_0_35px_rgba(37,99,235,0.3)] flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_45px_rgba(37,99,235,0.45)]">
        <button
          type="button"
          className="w-full h-full rounded-full bg-[#0d131f] flex flex-col items-center justify-center text-center p-2 relative group cursor-pointer transition-transform"
          onClick={onOpenResume}
          title="Click to view verified resume"
          aria-label="View verified resume"
        >
          <Shield className="w-11 h-11 sm:w-12 sm:h-12 text-blue-400 mb-1 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
          <span className="text-xs font-bold tracking-wider text-slate-100 uppercase font-mono">
            Mahek
          </span>
        </button>
      </div>

      {/* Status pill attached to bottom of circle with Ping indicator */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#0a0e17] border border-blue-500/70 shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
        </span>
        <span className="text-xs font-semibold text-slate-100">Active • Ahmedabad</span>
      </div>
    </m.div>
  );
};
