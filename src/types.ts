
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}