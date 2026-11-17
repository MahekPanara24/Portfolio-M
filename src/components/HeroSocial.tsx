import React from 'react';
import { m } from 'framer-motion';
import { ExternalLink, Volume2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface HeroSocialProps {
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const HeroSocial: React.FC<HeroSocialProps> = ({
  isAudioPlaying,
  onToggleAudio,
}) => {
  return (
    <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 text-left items-start">
      {/* Playful Handwritten Note with Curved Arrow */}
      <m.div
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
      </m.div>

      {/* Social Card */}
      <m.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="w-full p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-md"
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
      </m.div>

      {/* Ambient Audio Player Card */}
      <m.button
        type="button"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        onClick={onToggleAudio}
        aria-label={isAudioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
        className="w-full text-left p-4 sm:p-5 rounded-2xl bg-[#0e121a]/95 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-md cursor-pointer group focus:outline-none focus:ring-1 focus:ring-blue-500/50"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1 h-5 w-5 justify-center">
              <span className={`w-1 bg-blue-500 rounded-full transition-[height] ${isAudioPlaying ? 'h-5 animate-pulse' : 'h-1.5'}`} />
              <span className={`w-1 bg-blue-400 rounded-full transition-[height] ${isAudioPlaying ? 'h-3 animate-pulse delay-75' : 'h-2.5'}`} />
              <span className={`w-1 bg-blue-600 rounded-full transition-[height] ${isAudioPlaying ? 'h-4 animate-pulse delay-150' : 'h-1'}`} />
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
      </m.button>
    </div>
  );
};
