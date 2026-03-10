export interface Project {
  id: string;
  title: string;
  studio?: string;
  role: string;
  description: string;
  contributions: string[];
  tech: string[];
  youtubeUrl: string;
  type: 'portfolio' | 'project';
  period?: string;
  longDescription?: string;
  images?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  period: string;
  location: string;
  degree: string;
}

export interface Language {
  name: string;
  proficiency: string;
  detail?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  workEligibility: string;
  projects: Project[];
  skills: Skill[];
  education: Education[];
  languages: Language[];
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
}
