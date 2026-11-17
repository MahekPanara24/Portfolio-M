import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSent(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563eb', '#3b82f6', '#60a5fa'],
    });

    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect & <span className="text-blue-400">Discuss Opportunities</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Application Security role. Ready to relocate and start immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Contact Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-mono font-semibold">Email Direct</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-mono font-semibold">Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-6 rounded-2xl bg-[#0d131f] border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-mono font-semibold">Location</div>
                  <div className="text-base font-bold text-white">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 flex items-center justify-center gap-2 text-slate-200 text-sm font-semibold hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0d131f] border border-slate-800 hover:border-blue-500/40 flex items-center justify-center gap-2 text-slate-200 text-sm font-semibold hover:text-blue-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-blue-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Contact Message Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0d131f] border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an opportunity or interview inquiry? Send a direct message here.
              </p>

              {isSent ? (
                <div className="p-8 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Transmitted</h4>
                  <p className="text-xs text-blue-300">
                    Thank you for reaching out. I will respond to your email promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] border border-slate-800 focus:border-blue-400 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] border border-slate-800 focus:border-blue-400 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Cybersecurity / SOC / MERN Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] border border-slate-800 focus:border-blue-400 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mahek, we would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] border border-slate-800 focus:border-blue-400 text-sm text-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
