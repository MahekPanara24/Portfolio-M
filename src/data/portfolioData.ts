import type { Project, SkillCategory, ExperienceItem } from '../types';

export const personalInfo = {
  name: 'Mahek Panara',
  title: 'Cybersecurity Analyst Aspirant & Full-Stack Web Developer (MERN)',
  shortBio: 'B.Sc. IT graduate combining hands-on MERN full-stack development experience with specialized cybersecurity training in network defense, web vulnerability scanning, and threat mitigation.',
  email: 'mahekpanara24@gmail.com',
  phone: '+91 6352760654',
  location: 'Ahmedabad, Gujarat, India',
  relocationText: 'Open to Relocation: Ahmedabad, Vadodara, Gandhinagar, Surat & across Gujarat',
  github: 'https://github.com/MahekPanara24',
  linkedin: 'https://linkedin.com/in/mahek-panara-159829327',
  availability: 'Available Immediately',
  summary: `Detail-oriented B.Sc. IT graduate combining hands-on full-stack web development experience (MERN Stack) with specialized practical training in Cybersecurity. Experienced in building, debugging, and securing modern web applications using MongoDB, Express.js, React.js, and Node.js, alongside structured coursework in network defense, vulnerability assessment, and web application security. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Application Security role where full-stack architecture knowledge strengthens threat detection and remediation.`,
};

export const stats = [
  { label: 'Security & MERN Stack Tools', value: '15+' },
  { label: 'Vulnerability Scenarios Studied', value: '50+' },
  { label: 'Academic & Practical Projects', value: '8+' },
  { label: 'Immediate Relocation Readiness', value: '100%' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity & Defense',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Web App Vulnerability Scanning', level: 90, description: 'OWASP Top 10, SQLi, XSS, CSRF, IDOR, and input sanitization', tags: ['OWASP', 'Burp Suite', 'Scanning'] },
      { name: 'Network Security Architecture', level: 85, description: 'Firewall rules, packet analysis, port management, OSI model security', tags: ['Wireshark', 'Nmap', 'TCP/IP'] },
      { name: 'Threat Analysis & Mitigation', level: 82, description: 'Risk posture evaluation, attack vectors, incident triage and reporting', tags: ['Threat Modeling', 'Risk Assessment'] },
      { name: 'Security Protocols & Hardening', level: 88, description: 'TLS/SSL, SSH, HTTPS, secure headers (CORS, CSP, HSTS)', tags: ['Cryptography', 'Hardening'] },
      { name: 'SOC Fundamentals', level: 80, description: 'Log monitoring, event correlation, detection workflows, alert triage', tags: ['SIEM Basics', 'Log Analysis'] },
    ],
  },
  {
    title: 'Full-Stack Development (MERN)',
    icon: 'Code2',
    skills: [
      { name: 'React.js & Modern Frontend', level: 92, description: 'Hooks, responsive SPA design, state management, component architecture', tags: ['React', 'TypeScript', 'Tailwind'] },
      { name: 'Node.js & Express.js Backend', level: 88, description: 'RESTful API engineering, secure routing, middleware, auth guards', tags: ['Node', 'Express', 'JWT'] },
      { name: 'MongoDB & Database Security', level: 85, description: 'Schema validation, indexing, aggregation pipelines, injection prevention', tags: ['NoSQL', 'Mongoose', 'Sanitization'] },
      { name: 'Secure Authentication & RBAC', level: 90, description: 'JWT authentication, bcrypt password hashing, session tokens, roles', tags: ['Auth', 'Bcrypt', 'RBAC'] },
      { name: 'RESTful API Architecture', level: 89, description: 'Clean endpoint contracts, status codes, payload validation, rate-limiting', tags: ['API', 'JSON', 'Zod'] },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: 'Cpu',
    skills: [
      { name: 'Git & Version Control', level: 90, description: 'Branching, PR workflows, code reviews, collaborative repository hygiene', tags: ['Git', 'GitHub', 'CI/CD'] },
      { name: 'DBMS & Query Optimization', level: 84, description: 'Relational & document data models, normalization, transaction safety', tags: ['DBMS', 'SQL Basics', 'MongoDB'] },
      { name: 'Android Development Basics', level: 75, description: 'Mobile UI fundamentals, lifecycle management, client API consumption', tags: ['Android', 'Java/Kotlin'] },
      { name: 'Data Structures & Algorithms', level: 82, description: 'Algorithmic efficiency, time/space complexity analysis, problem solving', tags: ['DSA', 'Logic'] },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'cyber-sentinel',
    title: 'CyberWatch SOC & Threat Vulnerability Portal',
    category: 'cybersecurity',
    iconName: 'ShieldAlert',
    summary: 'An interactive security assessment & vulnerability simulation dashboard demonstrating automated web scanner triage, port auditing, and threat remediation workflows.',
    description: 'Built to simulate Security Operations Center (SOC) alert triage and OWASP Top 10 remediation. Analyzes target URL headers, detects simulated SQLi/XSS endpoints, generates vulnerability severity matrices (CVSS-style), and suggests immediate mitigation code blocks.',
    tags: ['React', 'Node.js', 'Cybersecurity', 'OWASP Top 10', 'Tailwind CSS'],
    features: [
      'Interactive Live Security Scanner Simulator',
      'OWASP Top 10 remediation advisory and CVSS calculation',
      'Port analysis & firewall rules matrix',
      'Security posture score generation',
    ],
    securityHighlights: [
      'Content Security Policy (CSP) & CORS header validation',
      'Strict client-side payload sanitization and defense in depth',
      'Zero third-party telemetry leakage design',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: '99.9% Simulated Scan Accuracy',
  },
  {
    id: 'secure-auth-gateway',
    title: 'SecureAuth - MERN Hardened Auth Gateway',
    category: 'fullstack',
    iconName: 'KeyRound',
    summary: 'A production-grade authentication and Role-Based Access Control (RBAC) microservice fortified against brute-force attacks and session hijacking.',
    description: 'Implements dual-token JWT authentication (short-lived access tokens with rotating encrypted refresh cookies), bcrypt hashing with salt rounds, rate-limiting IP buckets, strict CORS policies, and account lockout mechanisms.',
    tags: ['MERN Stack', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Security'],
    features: [
      'Rotating refresh token mechanism with blacklist revocation',
      'Dynamic Role-Based Access Control (Admin, Analyst, User)',
      'Brute-force protection via Redis / Memory rate limiting',
      'Audit log trail capturing login IPs and timestamps',
    ],
    securityHighlights: [
      'HttpOnly & SameSite=Strict cookies to prevent XSS credential theft',
      'Input validation schemas preventing NoSQL injection',
      'Automated session revocation on suspicious activity',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Zero Plaintext Exposure',
  },
  {
    id: 'packet-pulse',
    title: 'PacketPulse - Network Security Protocol Auditor',
    category: 'cybersecurity',
    iconName: 'Activity',
    summary: 'Interactive network protocol analyzer modeling packet flow, TLS handshake verification, and anomaly detection rules for modern enterprise subnets.',
    description: 'Demonstrates deep understanding of OSI Layers 3-7, analyzing simulated network streams for SYN-flood patterns, DNS exfiltration anomalies, and unencrypted HTTP transmissions across network nodes.',
    tags: ['Network Security', 'Wireshark Concepts', 'TCP/IP', 'TypeScript', 'Data Viz'],
    features: [
      'Simulated Packet Inspector with protocol breakdown (TCP, UDP, ICMP)',
      'TLS 1.3 handshake sequence interactive visualizer',
      'Anomaly detection threshold alerts',
      'Exportable network audit summary report',
    ],
    securityHighlights: [
      'Protocol anomaly heuristics detection',
      'Cipher suite strength grading',
      'Visual demonstration of MITM defense with TLS pinning',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'OSI Layers 3-7 Covered',
  },
  {
    id: 'truetwist-platform',
    title: 'Enterprise Management & Logistics Web App',
    category: 'fullstack',
    iconName: 'Layers',
    summary: 'Full-stack MERN application engineered during internship at True Twist, featuring responsive interfaces, RESTful APIs, and strict input validation.',
    description: 'Developed to streamline internal workflow operations. Features MongoDB database aggregation pipelines, Express.js middleware for data validation, React frontend with responsive UI, and clean Git collaboration workflows.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'Agile'],
    features: [
      'Complex database query optimization reducing latency',
      'Secure client-server input validation reducing bad inputs by 95%',
      'Fully responsive UI across mobile, tablet, and desktop',
      'Clean modular REST architecture for rapid feature iteration',
    ],
    securityHighlights: [
      'Sanitized payload inputs against NoSQL injections',
      'Structured error handling without exposing internal stack traces',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Production Deployed Ready',
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Cybersecurity Professional Course (Specialized Training)',
    organization: 'Demmisto Technologies',
    location: 'Ahmedabad, Gujarat',
    period: 'August 2026 – Present',
    type: 'training',
    status: 'Ongoing',
    points: [
      'Developing hands-on expertise in network defense, web application vulnerability scanning, and comprehensive security assessments across modern environments.',
      'Applying core security protocols, threat mitigation strategies, and data protection principles to identify, document, and remediate system vulnerabilities.',
      'Analyzing web application architectures, authentication flows, and input handling from both an attacker and defender perspective to strengthen application-level security.',
    ],
    skillsGained: ['Network Defense', 'OWASP Assessment', 'Threat Mitigation', 'Vulnerability Scanning', 'Architecture Security'],
  },
  {
    role: 'MERN Stack Developer Intern',
    organization: 'True Twist',
    location: 'Ahmedabad, Gujarat',
    period: 'Completed',
    type: 'internship',
    status: 'Completed',
    points: [
      'Developed full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js (MERN Stack) paired with clean, responsive HTML5/CSS3 interfaces.',
      'Designed and integrated RESTful APIs, managed backend database queries and schemas, and implemented structured client-server input validation.',
      'Collaborated within an agile development workflow using Git for version control, systematic code debugging, and production deployment readiness.',
    ],
    skillsGained: ['MERN Stack', 'RESTful APIs', 'Database Design', 'Client-Server Validation', 'Git Collaboration'],
  },
  {
    role: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    organization: 'LJ University',
    location: 'Ahmedabad, Gujarat',
    period: '2023 – 2026',
    type: 'education',
    status: 'Ongoing',
    points: [
      'Rigorous academic coursework in Computer Networking Architecture, Database Management Systems (DBMS), Software Engineering, Data Structures, and Programming Paradigms.',
      'Led technical group discussions and developed multiple academic software prototypes incorporating secure coding principles.',
    ],
    skillsGained: ['Computer Networking Architecture', 'DBMS', 'Software Engineering', 'Data Structures & Algorithms'],
  },
];
