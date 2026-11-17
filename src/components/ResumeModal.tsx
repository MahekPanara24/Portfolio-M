import React from 'react';
import { X, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-mono text-cyan-300 font-semibold">
              Mahek_Panara_Cybersecurity_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 text-left font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-4 mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              MAHEK PANARA
            </h1>
            <p className="text-sm font-bold text-cyan-800 mt-1">
              B.Sc. IT Graduate | Cybersecurity Analyst Aspirant & Full-Stack Web Developer (MERN)
            </p>
            <div className="text-xs text-slate-600 mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <span>Ahmedabad, Gujarat, India</span>
              <span>•</span>
              <span>+91 6352760654</span>
              <span>•</span>
              <a href="mailto:mahekpanara24@gmail.com" className="text-cyan-700 hover:underline">mahekpanara24@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/mahek-panara-159829327" target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline">linkedin.com/in/mahek-panara-159829327</a>
            </div>
            <div className="text-xs font-semibold text-emerald-800 mt-1.5">
              Open to Relocation: Ahmedabad, Vadodara, Gandhinagar, Surat & across Gujarat
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Detail-oriented B.Sc. IT graduate combining hands-on full-stack web development experience (MERN Stack) with specialized practical training in Cybersecurity. Experienced in building, debugging, and securing modern web applications using MongoDB, Express.js, React.js, and Node.js, alongside structured coursework in network defense, vulnerability assessment, and web application security. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Application Security role where full-stack architecture knowledge strengthens threat detection and remediation. Available immediately and ready to relocate across Ahmedabad, Vadodara, Gandhinagar, and Surat.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-4 font-bold text-slate-900">Cybersecurity & Networking:</span>
                <span className="sm:col-span-8 text-slate-700">Network Security, Web Application Vulnerability Scanning, Security Assessment, Threat Analysis & Mitigation, Security Protocols, Data Protection, Risk Assessment, Computer Networking Architecture</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-4 font-bold text-slate-900">Web & App Development:</span>
                <span className="sm:col-span-8 text-slate-700">MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript (ES6+), HTML5, CSS3, RESTful APIs, Android Application Development</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-4 font-bold text-slate-900">Databases & Tools:</span>
                <span className="sm:col-span-8 text-slate-700">MongoDB, Database Management Systems (DBMS), Git & Version Control, Data Structures & Algorithms</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-4 font-bold text-slate-900">Core Competencies:</span>
                <span className="sm:col-span-8 text-slate-700">Analytical Thinking, Logical Problem Solving, Threat Analysis Awareness, Agile Adaptability, Cross-Functional Teamwork & Communication</span>
              </div>
            </div>
          </div>

          {/* Internship & Specialized Training */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              INTERNSHIP & SPECIALIZED TRAINING
            </h2>

            {/* Demmisto */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-xs text-slate-900">Cybersecurity Professional Course (Ongoing)</span>
                <span className="text-xs font-semibold text-slate-600">August 2026 – Present</span>
              </div>
              <div className="text-xs font-medium text-cyan-800 mb-1">Demmisto Technologies</div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li>Developing hands-on expertise in network defense, web application vulnerability scanning, and comprehensive security assessments across modern environments.</li>
                <li>Applying core security protocols, threat mitigation strategies, and data protection principles to identify, document, and remediate system vulnerabilities.</li>
                <li>Analyzing web application architectures, authentication flows, and input handling from both an attacker and defender perspective to strengthen application-level security.</li>
              </ul>
            </div>

            {/* True Twist */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-xs text-slate-900">MERN Stack Developer Intern</span>
                <span className="text-xs font-semibold text-slate-600">Completed</span>
              </div>
              <div className="text-xs font-medium text-cyan-800 mb-1">True Twist — Ahmedabad, Gujarat</div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li>Developed full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js (MERN Stack) paired with clean, responsive HTML5/CSS3 interfaces.</li>
                <li>Designed and integrated RESTful APIs, managed backend database queries and schemas, and implemented structured client-server input validation.</li>
                <li>Collaborated within an agile development workflow using Git for version control, systematic code debugging, and production deployment readiness.</li>
              </ul>
            </div>
          </div>

          {/* Technical Focus Areas */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              TECHNICAL FOCUS AREAS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              <li><strong>Web Application Security & Full-Stack Architecture:</strong> Leveraging practical MERN stack development experience to understand backend APIs, database queries, session management, and frontend logic for effective vulnerability identification and secure coding.</li>
              <li><strong>Network Security & Threat Analysis:</strong> Applying foundational networking concepts, security protocols, and structured risk assessment methodologies to monitor, detect, and mitigate potential security threats.</li>
              <li><strong>Mobile & UI Fundamentals:</strong> Knowledgeable in Android application development fundamentals, responsive design principles, and structured database management systems.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-xs text-slate-900">Bachelor of Science in Information Technology (B.Sc. IT)</span>
              <span className="text-xs font-semibold text-slate-600">2023 – 2026</span>
            </div>
            <div className="text-xs text-cyan-800">LJ University — Ahmedabad, Gujarat</div>
            <p className="text-[11px] text-slate-600 mt-1">
              Relevant Coursework: Computer Networking Architecture, Database Management Systems (DBMS), Software Engineering, Data Structures, and Programming Paradigms.
            </p>
          </div>

          {/* Additional Details */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase border-b border-slate-300 pb-1 mb-2">
              ADDITIONAL DETAILS
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>Languages:</strong> English, Hindi, Gujarati</p>
              <p><strong>Preferred Locations:</strong> Ahmedabad, Vadodara, Gandhinagar, Surat (Ready to Relocate)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
