export interface Project {
  id: string;
  title: string;
  category: 'cybersecurity' | 'fullstack' | 'all';
  summary: string;
  description: string;
  tags: string[];
  features: string[];
  securityHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'training' | 'education';
  status: 'Ongoing' | 'Completed';
  points: string[];
  skillsGained: string[];
}
