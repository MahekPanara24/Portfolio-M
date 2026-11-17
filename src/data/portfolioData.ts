import type { Project, SkillCategory, ExperienceItem } from '../types';

export const personalInfo = {
  name: 'Mahek Panara',
  title: 'Cybersecurity Analyst Aspirant | Network Defense & Threat Mitigation',
  shortBio: 'B.Sc. IT graduate and aspiring Cybersecurity Analyst specializing in network defense, web vulnerability assessment, threat mitigation, and code-level application hardening.',
  email: 'mahekpanara24@gmail.com',
  phone: '+91 6352760654',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/MahekPanara24',
  linkedin: 'https://linkedin.com/in/mahek-panara-159829327',
  summary: `Detail-oriented B.Sc. IT graduate and aspiring Cybersecurity Analyst with specialized training in network defense, web vulnerability assessment, and threat mitigation at Demmisto Technologies. Possesses hands-on engineering experience in full-stack web architectures (MERN Stack) from True Twist, providing a distinctive code-level perspective for diagnosing application vulnerabilities, evaluating authentication flows, and implementing robust defensive remediations. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Information Security role.`,
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity & Threat Defense',
    icon: 'Shield',
    skills: [
      { name: 'Web App Vulnerability Scanning', level: 92, description: 'Hands-on scanning, triage, and documentation of vulnerabilities in web applications and services.', tags: ['Vulnerability Assessment', 'OWASP Top 10', 'Web Defense'] },
      { name: 'Threat Analysis & Mitigation', level: 90, description: 'Analyzing attack vectors, evaluating system exposures, and executing defensive mitigation strategies.', tags: ['Threat Modeling', 'Attack Surface Analysis', 'Patch Remediation'] },
      { name: 'Security Assessment & Data Protection', level: 88, description: 'Conducting structured security assessments and implementing data protection protocols.', tags: ['Data Protection', 'Risk Assessment', 'Security Audits'] },
      { name: 'Authentication & Session Integrity', level: 87, description: 'Analyzing access control mechanisms, session management, and authentication pipelines.', tags: ['Auth Flows', 'Session Hardening', 'Access Control'] },
      { name: 'Incident Detection & SOC Fundamentals', level: 85, description: 'Monitoring traffic anomalies, log analysis awareness, and proactive threat triage.', tags: ['SOC Operations', 'Log Analysis', 'Incident Triage'] },
    ],
  },
  {
    title: 'Network Security & Protocols',
    icon: 'Activity',
    skills: [
      { name: 'Network Defense & Architecture', level: 90, description: 'Comprehensive knowledge of OSI model layers, packet flow, firewall filtering, and subnet defense.', tags: ['TCP/IP', 'Firewalls', 'Routing Defense'] },
      { name: 'Security Protocols Evaluation', level: 88, description: 'Assessing encryption protocols, SSL/TLS handshakes, and secure client-server communication channels.', tags: ['SSL/TLS', 'HTTPS', 'Security Protocols'] },
      { name: 'Computer Networking Architecture', level: 89, description: 'Academic and lab foundation in network topologies, routing policies, and traffic inspection.', tags: ['Networking Architecture', 'Traffic Analysis'] },
      { name: 'Systematic Security Debugging', level: 86, description: 'Methodical isolation of network misconfigurations, connection leaks, and permission faults.', tags: ['Network Debugging', 'Security Diagnostics'] },
    ],
  },
  {
    title: 'Secure Full-Stack & Systems',
    icon: 'Code',
    skills: [
      { name: 'Secure Web Architecture (MERN)', level: 88, description: 'Deep architectural understanding of MongoDB, Express.js, React.js, and Node.js for code-level security.', tags: ['Secure Coding', 'React.js', 'Node.js', 'Express.js'] },
      { name: 'Client-Server Input Sanitization', level: 90, description: 'Designing robust validation pipelines to prevent SQL/NoSQL injection, XSS, and payload tampering.', tags: ['Input Validation', 'Injection Defense', 'API Security'] },
      { name: 'Database Security & DBMS Schema', level: 86, description: 'MongoDB and relational DBMS structure with parameterized querying and restricted access rights.', tags: ['MongoDB', 'DBMS', 'Schema Hardening'] },
      { name: 'Git Version Hygiene & Code Review', level: 88, description: 'Agile team collaboration with Git, code audits, and secure version tracking.', tags: ['Git', 'Code Review', 'Agile Defense'] },
    ],
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
