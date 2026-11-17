import type { Project, SkillCategory, ExperienceItem } from '../types';

export const personalInfo = {
  name: 'Mahek Panara',
  title: 'Cybersecurity Analyst Aspirant | SOC & Network Defense | Application Vulnerability Remediation',
  shortBio: 'B.Sc. IT graduate and aspiring Cybersecurity Analyst specializing in network defense, web vulnerability assessment, threat mitigation, and code-level application hardening.',
  advantageQuote: 'Because I know how full-stack code is built, I know exactly where vulnerabilities hide and how to remediate them.',
  email: 'mahekpanara24@gmail.com',
  phone: '+91 6352760654',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/MahekPanara24',
  linkedin: 'https://linkedin.com/in/mahek-panara-159829327',
  tryhackme: 'https://tryhackme.com/p/MahekPanara',
  summary: `Detail-oriented B.Sc. IT graduate and aspiring Cybersecurity Analyst with specialized training in network defense, web vulnerability assessment, and threat mitigation at Demmisto Technologies. Possesses hands-on engineering experience in full-stack web architectures (MERN Stack) from True Twist, providing a distinctive code-level perspective for diagnosing application vulnerabilities, evaluating authentication flows, and implementing robust defensive remediations. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Information Security role.`,
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Network Analysis & Packet Inspection',
    icon: 'Activity',
    skills: [
      { name: 'Wireshark & TCPDump Packet Analysis', level: 91, description: 'Hands-on packet dissection, analyzing TCP/IP 3-way handshakes, inspecting protocol anomalies, and capturing malicious traffic patterns.', tags: ['Wireshark', 'TCPDump', 'PCAP Analysis', 'Packet Inspection'] },
      { name: 'Nmap Network Scanning & Recon', level: 93, description: 'Port discovery, OS fingerprinting, service version enumeration, and vulnerability probing using Nmap NSE scripts.', tags: ['Nmap', 'Port Scanning', 'NSE Scripts', 'Network Recon'] },
      { name: 'TCP/IP Architecture & Subnetting', level: 90, description: 'Rigorous understanding of OSI & TCP/IP stack layers, CIDR subnetting, VLAN segmentation, and routing protocols.', tags: ['TCP/IP', 'OSI Model', 'CIDR Subnets', 'Routing Protocols'] },
      { name: 'Firewalls, ACLs & Network Defense', level: 88, description: 'Configuring stateless and stateful firewall rules, access control lists (ACLs), and traffic isolation boundaries.', tags: ['Firewalls', 'ACLs', 'IPTables', 'Network Defense'] },
    ],
  },
  {
    title: 'Web App Security & Proxying',
    icon: 'Shield',
    skills: [
      { name: 'Burp Suite Community & Proxy Inspection', level: 92, description: 'Intercepting and modifying HTTP/S requests, analyzing authentication tokens, and testing endpoint parameters for vulnerabilities.', tags: ['Burp Suite', 'HTTP/S Interception', 'Repeater', 'Intruder'] },
      { name: 'OWASP ZAP & Automated Scanning', level: 89, description: 'Executing automated vulnerability scans, spidering web applications, and triaging passive/active alert findings.', tags: ['OWASP ZAP', 'Automated Scanning', 'Vulnerability Triage'] },
      { name: 'OWASP Top 10 Vulnerability Remediation', level: 91, description: 'Practical exploitation and remediation of Broken Access Control (IDOR), SQL/NoSQL Injection, and XSS across live test labs.', tags: ['OWASP Top 10', 'IDOR', 'SQLi', 'XSS Mitigation'] },
      { name: 'Client-Server Input Sanitization', level: 92, description: 'Architecting robust server-side validation schemas, context-aware encoding, and parameter sanitization to block injection payloads.', tags: ['Input Validation', 'Parameter Hardening', 'Sanitization Middleware'] },
    ],
  },
  {
    title: 'SIEM, Monitoring & Log Triage',
    icon: 'Radio',
    skills: [
      { name: 'Splunk Fundamentals & SPL Querying', level: 87, description: 'Searching, filtering, and correlating security logs using Splunk Search Processing Language (SPL) to isolate threat indicators.', tags: ['Splunk', 'SPL', 'Log Correlation', 'Threat Indicators'] },
      { name: 'Wazuh EDR & SIEM Fundamentals', level: 85, description: 'Monitoring endpoint security alerts, file integrity monitoring (FIM), and policy violation detection.', tags: ['Wazuh', 'EDR', 'File Integrity', 'Alert Triage'] },
      { name: 'Snort / Suricata IDS & Threat Rules', level: 86, description: 'Understanding signature-based intrusion detection systems (IDS/IPS) and writing detection rules for anomalous traffic.', tags: ['Snort', 'Suricata', 'IDS/IPS Rules', 'Signature Detection'] },
      { name: 'Windows Event Viewer & Sysmon Triage', level: 88, description: 'Analyzing Event IDs (4624, 4625, 4688) for brute force detection, privilege escalation, and suspicious process creation.', tags: ['Sysmon', 'Windows Event Logs', 'Process Triage', 'Brute Force Detection'] },
    ],
  },
  {
    title: 'Security Frameworks & Standards',
    icon: 'Code',
    skills: [
      { name: 'MITRE ATT&CK Framework Mapping', level: 90, description: 'Mapping threat actor techniques (T1190, T1059, T1078) to defensive detection rules and telemetry checkpoints.', tags: ['MITRE ATT&CK', 'Threat Mapping', 'TTPs', 'Defensive Coverage'] },
      { name: 'NIST Cybersecurity Framework (CSF)', level: 88, description: 'Structuring defensive operations across Identify, Protect, Detect, Respond, and Recover core functions.', tags: ['NIST CSF', 'Risk Assessment', 'Security Governance'] },
      { name: 'Vulnerability Assessment & Audit Reporting', level: 92, description: 'Conducting structured audits, assigning CVSS v3.1 scores, and drafting executive-level remediation reports.', tags: ['CVSS v3.1', 'Audit Reports', 'Risk Scoring', 'Technical Remediation'] },
      { name: 'Secure Code Review & MERN Architecture', level: 89, description: 'Auditing JavaScript/Node.js/Express backend routes, JWT session lifecycles, and MongoDB queries for architectural flaws.', tags: ['Secure Code Review', 'MERN Defense', 'JWT Hardening', 'Node.js Security'] },
    ],
  },
];

export const securityBadges = [
  {
    platform: 'TryHackMe',
    handle: '@MahekPanara',
    badgeTitle: 'SOC Level 1 & Pre-Security',
    status: 'In Progress / Verified Labs',
    focus: 'Network Defense, Phishing Triage, Splunk, Linux Fundamentals, Wireshark',
    metrics: 'Top 15% Global Rank',
    url: 'https://tryhackme.com/p/MahekPanara',
  },
  {
    platform: 'PortSwigger Web Security Academy',
    handle: 'Mahek Panara',
    badgeTitle: 'Web Security Practitioner Labs',
    status: 'Active Labs',
    focus: 'SQL Injection, Cross-Site Scripting (XSS), Broken Access Control (IDOR), CSRF',
    metrics: 'Hands-on Labs Solved',
    url: 'https://portswigger.net/web-security',
  },
  {
    platform: 'HackTheBox & LetsDefend',
    handle: '@MahekPanara24',
    badgeTitle: 'Blue Team & Network Security Labs',
    status: 'Active Learner',
    focus: 'Endpoint Incident Response, Malware Traffic Analysis, SOC Alert Verification',
    metrics: 'Defense Labs',
    url: 'https://www.hackthebox.com/',
  },
];

export const securityCertifications = [
  {
    name: 'Cybersecurity Professional Course',
    issuer: 'Demmisto Technologies',
    status: 'Ongoing Coursework',
    focus: 'Network Defense, Web Vulnerability Scanning, Security Assessment & Mitigation',
    period: '2026 – Present',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60',
  },
  {
    name: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    status: 'Exam Preparation In Progress',
    focus: 'Threats, Attacks & Vulnerabilities, Security Architecture, Incident Response',
    period: 'Target 2026',
    badgeClass: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
  },
  {
    name: 'Blue Team Level 1 (BTL1)',
    issuer: 'Security Blue Team',
    status: 'Target Certification',
    focus: 'Security Operations (SOC), SIEM Log Analysis, Digital Forensics & Threat Hunting',
    period: 'Target 2026',
    badgeClass: 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60',
  },
  {
    name: 'eJPT (Junior Penetration Tester)',
    issuer: 'INE Security',
    status: 'Target Certification',
    focus: 'Assessment Methodologies, Host & Network Auditing, Web App Penetration Testing',
    period: 'Target 2026',
    badgeClass: 'bg-slate-900 text-slate-300 border-slate-700',
  },
];

export const projects: Project[] = [
  {
    id: 'web-vuln-assessment',
    title: 'Web Application Vulnerability Assessment & Mitigation Suite',
    category: 'cybersecurity',
    iconName: 'ShieldAlert',
    summary: 'Practical cybersecurity assessment suite developed through Demmisto Technologies coursework, covering vulnerability scanning, attack vector analysis, and application hardening.',
    description: 'Hands-on cybersecurity project covering web application vulnerability scanning, network defense, and comprehensive security assessments. Focuses on analyzing web architectures, authentication flows, and input handling from both an attacker and defender perspective.',
    tags: ['Cybersecurity', 'Vulnerability Scanning', 'Network Defense', 'Threat Mitigation', 'Security Protocols'],
    features: [
      'Web application vulnerability scanning and threat vector identification',
      'Analysis of authentication flows, session integrity, and access controls',
      'Evaluating input handling mechanisms against common web exploits (OWASP)',
      'Documenting security assessment findings and structured patch remediation strategies',
    ],
    securityHighlights: [
      'Core security protocol application across client-server communications',
      'Vulnerability identification and structured patch remediation documentation',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Cybersecurity Training Lab',
  },
  {
    id: 'network-security-auditor',
    title: 'Network Security Architecture & Protocols Defense Project',
    category: 'cybersecurity',
    iconName: 'Activity',
    summary: 'Academic & laboratory project at LJ University exploring Computer Networking Architecture, defensive protocol evaluation, and threat mitigation principles.',
    description: 'Developed to analyze computer networking architecture, protocols, and data protection mechanisms. Evaluates how network defense strategies safeguard modern environments against unauthorized access and traffic eavesdropping.',
    tags: ['Computer Networking', 'Network Security', 'Security Protocols', 'Data Protection', 'Architecture'],
    features: [
      'Analysis of network layers, packet transmission, and routing security',
      'Security protocol evaluation for authenticated and encrypted data transfer',
      'Risk assessment methodologies for proactive threat identification',
      'Structured reporting on defensive network posture and traffic integrity',
    ],
    securityHighlights: [
      'Comprehensive adherence to data protection and network boundary defense',
      'Layered defense-in-depth networking architecture',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'LJ University Coursework',
  },
  {
    id: 'mern-enterprise-app',
    title: 'Secure Full-Stack Web Application with Input Defense & Sanitization',
    category: 'fullstack',
    iconName: 'Layers',
    summary: 'Engineered web applications at True Twist using MongoDB, Express.js, React.js, and Node.js with strict client-server input validation and hardened REST APIs.',
    description: 'Developed full-stack web applications paired with clean, responsive interfaces. Designed and integrated RESTful APIs, managed backend database queries and schemas, and implemented structured client-server input validation to prevent injection exploits.',
    tags: ['Secure Coding', 'Input Validation', 'React.js', 'Node.js', 'MongoDB', 'RESTful APIs'],
    features: [
      'Engineered responsive user interfaces with modular React component architecture',
      'Implemented structured backend API endpoints and secure database schemas in MongoDB',
      'Built strict client-server input validation to defend data ingestion pipelines',
      'Collaborated within an agile team workflow with Git version control',
    ],
    securityHighlights: [
      'Server-side payload validation preventing injection attacks',
      'Systematic code debugging for production security readiness',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Production Intern Project',
  },
  {
    id: 'android-secure-app',
    title: 'Mobile Application Architecture & Secure Data Storage Laboratory',
    category: 'fullstack',
    iconName: 'Code',
    summary: 'Mobile application exploring Android development fundamentals, responsive UI principles, and structured local database storage.',
    description: 'Built to understand mobile application fundamentals, lifecycle management, client API consumption, and structured local database systems. Designed with responsive mobile UI principles and secure data storage considerations.',
    tags: ['Mobile Security', 'Android', 'DBMS', 'REST APIs', 'Java'],
    features: [
      'Responsive mobile interfaces conforming to UI fundamentals',
      'Structured database management and local data persistence',
      'API integration for dynamic client-server communication',
      'Efficient resource and lifecycle management',
    ],
    securityHighlights: [
      'Structured data storage adhering to mobile security best practices',
      'Validated input handling on mobile user forms',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Mobile Engineering',
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Cybersecurity Professional Course (Ongoing)',
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
    skillsGained: ['Network Defense', 'Vulnerability Scanning', 'Threat Mitigation', 'Security Assessment', 'Authentication Flows'],
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
    skillsGained: ['MERN Stack', 'RESTful APIs', 'Database Schemas', 'Input Validation', 'Git Collaboration'],
  },
  {
    role: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    organization: 'LJ University',
    location: 'Ahmedabad, Gujarat',
    period: '2023 – 2026',
    type: 'education',
    status: 'Completed',
    points: [
      'Relevant Coursework: Computer Networking Architecture, Database Management Systems (DBMS), Software Engineering, Data Structures, and Programming Paradigms.',
      'Developed foundational depth in computer systems architecture, algorithmic problem solving, and software engineering methodologies.',
    ],
    skillsGained: ['Computer Networking Architecture', 'DBMS', 'Software Engineering', 'Data Structures & Algorithms'],
  },
];
