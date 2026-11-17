import React from 'react';
import { m } from 'framer-motion';
import { Shield, GraduationCap, Briefcase, Award, FileText, ExternalLink, Terminal } from 'lucide-react';
import { securityBadges, personalInfo } from '../data/portfolioData';

export const ExecutiveOverview: React.FC = () => {
  return (
    <section id="summary" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newspaper Masthead */}
        <div className="border-t border-b border-slate-800 py-3 mb-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs font-mono text-slate-300 gap-2 sm:gap-4">
          <div className="font-semibold">PROFILE • AHMEDABAD, GUJARAT, INDIA</div>
          <div className="hidden md:block font-semibold">DEMMISTO TECHNOLOGIES & TRUE TWIST</div>
          <div className="font-semibold">2026 • PROFESSIONAL RECORD</div>
        </div>

        {/* Big Editorial Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight uppercase leading-[1.15] mb-3 px-2">
            SECURITY & ENGINEERING OVERVIEW
          </h2>
          <p className="font-serif italic text-sm sm:text-lg md:text-xl text-slate-300 px-2">
            Systems Architecture, Threat Defense & Full-Stack Delivery — Mahek Panara
          </p>
        </div>

        {/* Secondary Metadata Strip */}
        <div className="border-t border-b border-slate-800 py-3 mb-10 sm:mb-14 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs font-mono text-slate-300 gap-2 sm:gap-4 font-semibold">
          <div>FOCUS: CYBERSECURITY & THREAT DEFENSE</div>
          <div className="hidden sm:block">ROLE: CYBERSECURITY ANALYST ASPIRANT</div>
          <div>STATUS: AVAILABLE FOR ENTRY-LEVEL ROLES</div>
        </div>

        {/* Editorial Bold Headline */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 px-2">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.2]">
            PROACTIVE <span className="px-3 py-0.5 rounded-lg bg-blue-600 text-white inline-block">CYBERSECURITY DEFENSE</span> & INCIDENT MITIGATION POWERED BY DEEP <span className="text-blue-400">APPLICATION ARCHITECTURE</span>.
          </h3>
        </div>

        {/* 3-Column Editorial Grid: Narrative | Polaroid ID Card | Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column (5 cols): Executive Summary with Drop Cap */}
          <div className="lg:col-span-5 space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
            <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-2">
              Cybersecurity Profile & Focus
            </div>
            <p className="text-justify leading-relaxed">
              <span className="float-left text-5xl font-bold font-serif text-blue-500 pr-3 pt-1 leading-none">
                I
              </span>
              am a detail-oriented B.Sc. IT graduate focused on launching a high-impact career in Cybersecurity. My practical training at Demmisto Technologies centers on network defense, web application vulnerability scanning, and proactive threat remediation across modern enterprise environments.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
              Alongside core cybersecurity coursework, my industry engineering background in full-stack web architectures provides an essential defender advantage: I understand system attack surfaces at the source code, API, and database layers.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
              This dual foundation enables me to analyze threat vectors from both attacker and defender viewpoints, detect vulnerabilities before exploitation, and collaborate seamlessly with technical teams to implement robust security patches.
            </p>

            {/* Defender Advantage Highlight Box */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-200 text-xs sm:text-sm font-medium leading-relaxed">
              <span className="text-blue-400 font-bold uppercase tracking-wider block text-[11px] mb-1 font-mono">
                ✦ The Defender Advantage
              </span>
              &ldquo;{personalInfo.advantageQuote}&rdquo;
            </div>
          </div>

          {/* Center Column (3 cols): Polaroid ID Card */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <m.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="w-full max-w-xs p-5 rounded-2xl bg-white text-slate-900 shadow-2xl rotate-0 sm:rotate-[-2deg] transition-transform relative border border-slate-200"
            >
              {/* Paperclip graphic */}
              <div className="w-12 h-4 rounded-full bg-slate-300 absolute -top-2 left-1/2 -translate-x-1/2 border border-slate-400/50 shadow-sm" />

              {/* ID Badge graphic */}
              <div className="w-full h-44 rounded-xl bg-[#0d131f] border border-slate-300 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden mb-3">
                <Shield className="w-12 h-12 text-blue-400 mb-2" />
                <div className="text-base font-bold tracking-tight">Mahek Panara</div>
                <div className="text-xs font-mono text-blue-400 mt-0.5">Cybersecurity Analyst Aspirant</div>
              </div>

              <div className="pt-1">
                <div className="font-handwriting text-2xl font-bold text-slate-900 leading-none">
                  Mahek Panara
                </div>
                <div className="text-xs font-mono text-slate-600 uppercase mt-1 flex items-center justify-between">
                  <span>Ahmedabad, Gujarat</span>
                  <span className="text-blue-600 font-bold">✓ Verified</span>
                </div>
              </div>
            </m.div>

            {/* Direct Download for Sample Security Audit Report */}
            <a
              href="Mahek_Panara_Security_Assessment_Report.pdf"
              download="Mahek_Panara_Security_Assessment_Report.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-xs mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-colors shadow-md hover:shadow-blue-500/20 text-center"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Sample Audit Report (PDF)</span>
            </a>
          </div>

          {/* Right Column (4 cols): Dashed Metric Cards */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Card 1: Demmisto */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1018] border border-dashed border-slate-700/80 hover:border-blue-500/60 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Specialized Training
                </span>
                <Award className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Demmisto Technologies
              </div>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Ongoing Cybersecurity Professional Course in network defense, web vulnerability scanning, and security assessment.
              </p>
            </div>

            {/* Card 2: True Twist */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1018] border border-dashed border-slate-700/80 hover:border-blue-500/60 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Industry Internship
                </span>
                <Briefcase className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                True Twist (Completed)
              </div>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                MERN Stack Developer Intern developing full-stack web applications, RESTful APIs, and structured input validation.
              </p>
            </div>

            {/* Card 3: LJ University */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1018] border border-dashed border-slate-700/80 hover:border-blue-500/60 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Academic Degree
                </span>
                <GraduationCap className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                B.Sc. Information Technology
              </div>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                LJ University (2023 – 2026). Coursework in Networking Architecture, DBMS, Software Engineering & DSA.
              </p>
            </div>

          </div>

        </div>

        {/* Proof of Practice: Hands-on Lab Portals & RFC 9116 Disclosure */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                // PROOF OF PRACTICE & HANDS-ON SECURITY LABS
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                Verified Cyber Training & Offensive/Defensive Labs
              </h3>
            </div>
            <a
              href=".well-known/security.txt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500 transition-colors w-fit"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>RFC 9116 security.txt</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {securityBadges.map((badge) => (
              <div
                key={badge.platform}
                className="p-5 rounded-2xl bg-[#0b0e15] border border-slate-800 hover:border-blue-500/50 transition-colors group text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800/80 font-bold">
                    {badge.metrics}
                  </span>
                  <a
                    href={badge.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={badge.platform}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {badge.platform}
                </h4>
                <div className="text-xs font-mono text-blue-400 mt-0.5">
                  {badge.badgeTitle} • <span className="text-slate-300">{badge.status}</span>
                </div>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {badge.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
