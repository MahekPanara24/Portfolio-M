import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, Layers, CheckCircle2, MapPin, GraduationCap, Award } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: ShieldAlert,
      title: 'Cybersecurity & Threat Defense',
      description: 'Hands-on training in vulnerability scanning, OWASP Top 10 remediation, network traffic auditing, and application-level hardening.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Layers,
      title: 'Full-Stack MERN Engineering',
      description: 'Building end-to-end web apps with MongoDB, Express, React, and Node.js. Designing robust REST APIs and database schemas with client-server validation.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Terminal,
      title: 'Security-First Architecture',
      description: 'Bridging developer code with attacker perspective: understanding how input handling, auth tokens, and session logic fail—and designing them to resist exploits.',
      gradient: 'from-purple-500/20 to-indigo-500/20',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Full-Stack Development</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Cyber Defense</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            I don’t just write code—I architect systems from both builder and defender viewpoints to prevent vulnerabilities before they happen.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${pillar.gradient} border ${pillar.border} backdrop-blur-sm relative group`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Card */}
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Professional Mission & Value Proposition
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As a <strong>B.Sc. IT graduate</strong> from LJ University with an ongoing specialized <strong>Cybersecurity Professional Course at Demmisto Technologies</strong> and internship experience at <strong>True Twist</strong>, I am uniquely positioned to add immediate value to security operations, penetration testing, and development teams.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Unlike analysts who only run automated tools, my hands-on MERN stack engineering background enables me to pinpoint the exact line of JavaScript or database logic causing an issue and collaborate seamlessly with software engineers to implement robust patches.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate relocation readiness across Gujarat</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trained in modern threat triage & mitigation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hands-on MERN & RESTful API development</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strong foundation in Computer Networking & DBMS</span>
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-slate-950 border border-cyan-900/40 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location & Relocation</div>
                <div className="text-sm font-semibold text-white">Ahmedabad, Gujarat</div>
                <div className="text-[11px] text-emerald-400 font-mono">Open to Vadodara, Surat, Gandhinagar</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Degree</div>
                <div className="text-sm font-semibold text-white">B.Sc. Information Technology</div>
                <div className="text-[11px] text-slate-400">LJ University (2023 - 2026)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Specialized Training</div>
                <div className="text-sm font-semibold text-white">Cybersecurity Professional</div>
                <div className="text-[11px] text-purple-400">Demmisto Technologies (Ongoing)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
