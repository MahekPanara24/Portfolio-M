import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, ArrowUpRight, Menu, X, FileDown, FileText } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenTerminal,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'summary', 'showcase', 'work', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Summary', href: '#summary', id: 'summary' },
    { name: 'Showcase', href: '#showcase', id: 'showcase' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      
      {/* Top Editorial Ticker Bar */}
      <div className="bg-[#080a0f] border-b border-slate-800/80 py-2 px-6 text-xs font-mono text-slate-300 hidden md:flex items-center justify-between select-none">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold text-xs">
            CYBERSECURITY 2026
          </span>
          <span className="font-medium text-slate-200">B.Sc. IT Graduate • LJ University</span>
        </div>

        <div className="flex items-center gap-2 text-slate-200 font-medium">
          <span className="text-blue-400">✦</span>
          <span>Proactive network defense, vulnerability assessment & threat mitigation</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-medium text-slate-200">Ahmedabad, Gujarat, India</span>
        </div>
      </div>

      {/* Main Floating Navigation Bar */}
      <div className={`transition-colors duration-300 px-3 sm:px-6 lg:px-8 py-3 ${
        scrolled ? 'bg-[#0b0e14]/90 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Logo / Badge */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/15 border border-blue-500/40 flex items-center justify-center font-bold text-sm text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
              MP
            </div>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight flex items-center gap-1.5">
                <span>Mahek Panara</span>
              </div>
              <div className="text-[11px] sm:text-xs text-blue-400 font-mono font-medium">
                Cybersecurity Analyst
              </div>
            </div>
          </a>

          {/* Center Floating Pill Menu */}
          <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-[#121620]/90 border border-slate-800 shadow-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Terminal Button */}
            <button
              onClick={onOpenTerminal}
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#121620] border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white transition-colors"
              title="Open Interactive Analyst Shell"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
            </button>

            {/* Audio Toggle Button */}
            <button
              onClick={onToggleAudio}
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#121620] border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white transition-colors"
              title={isAudioPlaying ? 'Mute Ambient Audio' : 'Play Ambient Audio'}
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-blue-400 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Sample Audit Report Button */}
            <a
              href="Mahek_Panara_Security_Assessment_Report.pdf"
              download="Mahek_Panara_Security_Assessment_Report.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-950/40 border border-blue-800/80 hover:border-blue-500 text-xs font-semibold text-blue-300 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Audit Report</span>
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#121620] border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0b0e14] border-b border-slate-800 px-4 py-4 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 py-2 rounded-lg bg-[#121620] border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Analyst Shell</span>
              </button>

              <a
                href="Mahek_Panara_Security_Assessment_Report.pdf"
                download="Mahek_Panara_Security_Assessment_Report.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-lg bg-blue-950/60 border border-blue-800 text-xs font-semibold text-blue-300 flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Audit Report (PDF)</span>
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>

    </header>
  );
};
