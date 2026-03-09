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

export interface PortfolioData {
  name: string;
  title: string;
  workEligibility: string;
  projects: Project[];
  skills: Skill[];
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
}
