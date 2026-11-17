import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Server, Database, Code, CheckCircle, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'security' | 'mern' | 'code'>('security');

  return (
    <div className="w-full h-full rounded-2xl border border-slate-800 bg-[#0c1018] shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col text-left">
      
      {/* Window Titlebar */}
      <div className="px-5 py-3.5 bg-[#090d15] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-blue-500/80" />
          <span className="text-xs text-slate-300 ml-2 font-semibold">
            system_architecture.config
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800 text-[11px] font-medium text-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Verified Profile
          </span>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="px-5 py-2.5 bg-[#080b12] border-b border-slate-800/80 flex items-center gap-2">
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'security'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Cyber Defense</span>
        </button>

        <button
          onClick={() => setActiveTab('mern')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'mern'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Server className="w-3.5 h-3.5" />
          <span>MERN Pipeline</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'code'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Secure Code</span>
        </button>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: CYBER DEFENSE POSTURE */}
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Cybersecurity Defense Modules
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Coursework & training focus at Demmisto Technologies
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                  Active Focus
                </span>
              </div>

              {/* Status Modules */}
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-[#090d15] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Network Security & Defense</div>
                      <div className="text-[11px] text-slate-400">Firewall policies, packet routing & protocols</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400">Enforced</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d15] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Web App Vulnerability Assessment</div>
                      <div className="text-[11px] text-slate-400">Scanning, vulnerability triage & threat mitigation</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400">Analyzed</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d15] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Application Security Architecture</div>
                      <div className="text-[11px] text-slate-400">Authentication flow analysis & input handling</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400">Secured</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: MERN DATA PIPELINE */}
          {activeTab === 'mern' && (
            <motion.div
              key="mern"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-400" />
                  MERN Full-Stack Data Flow
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Production internship architecture executed at True Twist
                </p>
              </div>

              {/* 3 Step Interactive Flow */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3.5 rounded-xl bg-[#090d15] border border-slate-800 text-center">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">React.js</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Responsive UI</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d15] border border-blue-500/50 text-center relative shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-blue-300">Node / Express</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">REST APIs & Auth</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d15] border border-slate-800 text-center">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-2">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">MongoDB</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Schemas & DBMS</div>
                </div>
              </div>

              {/* Validation Ribbon */}
              <div className="p-3.5 rounded-xl bg-[#0e1626] border border-blue-900/60">
                <div className="text-xs font-bold text-blue-300 mb-1">
                  Structured Client-Server Validation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sanitized request bodies, robust schema validation, and systematic debugging ensure error-free data persistence.
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 3: REAL SECURE CODE VIEW */}
          {activeTab === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">// inputValidationMiddleware.js</span>
                <span className="text-xs font-semibold text-blue-400">Node.js / Express</span>
              </div>

              <div className="p-4 rounded-xl bg-[#070a10] border border-slate-800 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <p><span className="text-blue-400">const</span> validateInput = (req, res, next) =&gt; &#123;</p>
                <p className="pl-4 text-slate-500">// Clean & sanitize request parameters</p>
                <p className="pl-4"><span className="text-blue-400">const</span> &#123; email, payload &#125; = req.body;</p>
                <p className="pl-4"><span className="text-indigo-400">if</span> (!email || !isValidEmail(email)) &#123;</p>
                <p className="pl-8"><span className="text-indigo-400">return</span> res.status(400).json(&#123; error: <span className="text-amber-300">'Invalid input'</span> &#125;);</p>
                <p className="pl-4">&#125;</p>
                <p className="pl-4 text-blue-400">next(); <span className="text-slate-500">// Safe to proceed</span></p>
                <p>&#125;;</p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Bottom Status Ticker */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-slate-300">Architecture Verified</span>
          </div>
          <span className="text-blue-400 font-semibold">Ahmedabad • Gujarat</span>
        </div>

      </div>

    </div>
  );
};
