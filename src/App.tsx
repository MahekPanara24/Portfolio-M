import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { Showcase } from './components/Showcase';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/Terminal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.suspend();
      }
      setIsAudioPlaying(false);
    } else {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Warm ambient master gain
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.035, ctx.currentTime);
          masterGain.connect(ctx.destination);

          // Low-pass filter for smooth warmth
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450, ctx.currentTime);
          filter.connect(masterGain);

          // Ambient chord frequencies (D minor: D3, F3, A3, C4)
          const freqs = [146.83, 174.61, 220.0, 261.63];
          freqs.forEach((freq) => {
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime);

            const oscGain = ctx.createGain();
            oscGain.gain.setValueAtTime(0.25, ctx.currentTime);
            osc.connect(oscGain);
            oscGain.connect(filter);
            osc.start();
          });
        }

        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
        setIsAudioPlaying(true);
      } catch (e) {
        console.error('Audio initialization error:', e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-300">
      {/* Editorial Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section: 3-Column Layout with 2D Concentric Rings, Avatar & Playful Elements */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={toggleAudio}
        />

        {/* Continuous Horizontal Technology Tape */}
        <Marquee />

        {/* Editorial Newspaper Overview with Polaroid ID Card */}
        <ExecutiveOverview />

        {/* Tabbed Feature Architecture Showcase */}
        <Showcase />

        {/* Work & Education Timeline */}
        <Experience />

        {/* Technical Skills Competencies */}
        <Skills />

        {/* Contact & Inquiry Channel */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
