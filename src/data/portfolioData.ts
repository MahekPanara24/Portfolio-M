import type { Project, SkillCategory, ExperienceItem } from '../types';

export const personalInfo = {
  name: 'Mahek Panara',
  title: 'Cybersecurity Analyst Aspirant & Full-Stack Web Developer (MERN)',
  shortBio: 'B.Sc. IT graduate combining practical full-stack web development experience (MERN Stack) with specialized cybersecurity training in network defense, vulnerability assessment, and threat mitigation.',
  email: 'mahekpanara24@gmail.com',
  phone: '+91 6352760654',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/MahekPanara24',
  linkedin: 'https://linkedin.com/in/mahek-panara-159829327',
  summary: `Detail-oriented B.Sc. IT graduate combining hands-on full-stack web development experience (MERN Stack) with specialized practical training in Cybersecurity. Experienced in building, debugging, and securing modern web applications using MongoDB, Express.js, React.js, and Node.js, alongside structured coursework in network defense, vulnerability assessment, and web application security. Seeking an entry-level Cybersecurity Analyst, SOC Analyst, or Application Security role where full-stack architecture knowledge strengthens threat detection and remediation.`,
};

export const stats = [
  { label: 'Degree & University', value: 'B.Sc. IT (LJ Univ)' },
  { label: 'Specialized Training', value: 'Demmisto Tech' },
  { label: 'Industry Internship', value: 'True Twist' },
  { label: 'Core Specialization', value: 'Security & MERN' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity & Networking',
    icon: 'Shield',
    skills: [
      { name: 'Network Security', level: 90, description: 'Network defense architectures, security protocols, and computer networking principles.', tags: ['TCP/IP', 'Firewalls', 'Security Protocols'] },
      { name: 'Web App Vulnerability Scanning', level: 88, description: 'Identifying and documenting vulnerabilities in modern web environments.', tags: ['Vulnerability Assessment', 'Web Security'] },
      { name: 'Threat Analysis & Mitigation', level: 85, description: 'Analyzing attack vectors, input handling, and implementing defensive remediation strategies.', tags: ['Threat Analysis', 'Mitigation'] },
      { name: 'Security Assessment & Data Protection', level: 86, description: 'Applying core security protocols and data protection principles across applications.', tags: ['Data Protection', 'Risk Assessment'] },
      { name: 'Computer Networking Architecture', level: 88, description: 'Comprehensive understanding of network layers, routing, and defense protocols.', tags: ['OSI Model', 'Network Defense'] },
    ],
  },
  {
    title: 'Web & App Development',
    icon: 'Code',
    skills: [
      { name: 'MERN Stack (Full-Stack)', level: 90, description: 'Hands-on development of modern web applications using MongoDB, Express.js, React.js, and Node.js.', tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
      { name: 'RESTful API Engineering', level: 88, description: 'Designing, structuring, and integrating scalable REST APIs with client-server validation.', tags: ['RESTful APIs', 'JSON', 'Backend Integration'] },
      { name: 'JavaScript (ES6+) & Modern Web', level: 90, description: 'Proficient in modern ES6+, HTML5, CSS3, responsive design, and clean component logic.', tags: ['JavaScript', 'HTML5', 'CSS3'] },
      { name: 'Android Application Development', level: 78, description: 'Mobile application fundamentals, UI architecture, and mobile database systems.', tags: ['Android SDK', 'Mobile UI'] },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: 'Database',
    skills: [
      { name: 'MongoDB & Database Systems', level: 88, description: 'Database modeling, schema design, queries, and Database Management Systems (DBMS).', tags: ['MongoDB', 'DBMS', 'Query Optimization'] },
      { name: 'Git & Version Control', level: 90, description: 'Agile team workflows, branch management, collaborative code review, and version hygiene.', tags: ['Git', 'GitHub', 'Agile Workflows'] },
      { name: 'Data Structures & Algorithms', level: 82, description: 'Strong grounding in core algorithms, time complexity, and logical problem solving.', tags: ['DSA', 'Algorithmic Thinking'] },
      { name: 'Systematic Debugging & Deployment', level: 85, description: 'Production deployment readiness, error tracing, and systematic code debugging.', tags: ['Debugging', 'Production Readiness'] },
    ],
  },
];

export const technicalFocusAreas = [
  {
    title: 'Web Application Security & Full-Stack Architecture',
    description: 'Leveraging practical MERN stack development experience to understand backend APIs, database queries, session management, and frontend logic for effective vulnerability identification and secure coding.',
  },
  {
    title: 'Network Security & Threat Analysis',
    description: 'Applying foundational networking concepts, security protocols, and structured risk assessment methodologies to monitor, detect, and mitigate potential security threats.',
  },
  {
    title: 'Mobile & UI Fundamentals',
    description: 'Knowledgeable in Android application development fundamentals, responsive design principles, and structured database management systems.',
  },
];

export const projects: Project[] = [
  {
    id: 'mern-enterprise-app',
    title: 'Full-Stack MERN Web Application with Client-Server Validation',
    category: 'fullstack',
    iconName: 'Layers',
    summary: 'Engineered responsive web applications at True Twist using MongoDB, Express.js, React.js, and Node.js with structured input validation and robust REST APIs.',
    description: 'Developed full-stack web applications paired with clean, responsive HTML5/CSS3 interfaces. Designed and integrated RESTful APIs, managed backend database queries and schemas, and implemented structured client-server input validation within an agile development workflow.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs', 'Git'],
    features: [
      'Engineered responsive user interfaces with modular React component architecture',
      'Implemented structured backend API endpoints and database schemas in MongoDB',
      'Built strict client-server input validation to secure data pipelines',
      'Collaborated within an agile team workflow with Git version control',
    ],
    securityHighlights: [
      'Server-side payload validation preventing injection attacks',
      'Systematic code debugging for production deployment readiness',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Production Intern Project',
  },
  {
    id: 'web-vuln-assessment',
    title: 'Web Application Vulnerability Assessment & Mitigation Suite',
    category: 'cybersecurity',
    iconName: 'ShieldAlert',
    summary: 'Practical security assessment suite developed through Demmisto Technologies coursework, covering vulnerability scanning and application architecture hardening.',
    description: 'Hands-on practical training covering web application vulnerability scanning, network defense, and comprehensive security assessments. Focuses on analyzing web architectures, authentication flows, and input handling from both an attacker and defender perspective.',
    tags: ['Cybersecurity', 'Vulnerability Scanning', 'Network Defense', 'Threat Mitigation', 'Security Protocols'],
    features: [
      'Web application vulnerability scanning and threat vector analysis',
      'Analysis of authentication flows and session integrity',
      'Evaluating input handling mechanisms against common web exploits',
      'Documenting security assessment findings and mitigation strategies',
    ],
    securityHighlights: [
      'Core security protocol application across client-server communications',
      'Vulnerability identification and structured patch remediation documentation',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'Specialized Training Lab',
  },
  {
    id: 'network-security-auditor',
    title: 'Network Security & Protocols Architecture Project',
    category: 'cybersecurity',
    iconName: 'Activity',
    summary: 'Academic & laboratory project at LJ University exploring Computer Networking Architecture, security protocols, and threat mitigation principles.',
    description: 'Developed to analyze computer networking architecture, protocols, and data protection mechanisms. Evaluates how network defense strategies safeguard modern environments against unauthorized access and traffic eavesdropping.',
    tags: ['Computer Networking', 'Network Security', 'Security Protocols', 'Data Protection', 'Architecture'],
    features: [
      'Analysis of network layers, packet transmission, and routing security',
      'Security protocol evaluation for authenticated data transfer',
      'Risk assessment methodologies for threat identification',
      'Structured reporting on network defense posture',
    ],
    securityHighlights: [
      'Comprehensive adherence to data protection principles',
      'Layered defense-in-depth networking architecture',
    ],
    githubUrl: 'https://github.com/MahekPanara24/Portfolio',
    metrics: 'LJ University Coursework',
  },
  {
    id: 'android-secure-app',
    title: 'Android Mobile Application with Structured Database Integration',
    category: 'fullstack',
    iconName: 'Code',
    summary: 'Mobile application exploring Android development fundamentals, responsive UI principles, and structured database storage.',
    description: 'Built to understand mobile application fundamentals, lifecycle management, client API consumption, and structured local database systems. Designed with responsive mobile UI principles.',
    tags: ['Android', 'Mobile Development', 'DBMS', 'REST APIs', 'Java'],
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
