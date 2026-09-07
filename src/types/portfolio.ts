export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  modality?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  location?: string;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  status: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  avatarUrl: string;
  metrics: {
    label: string;
    value: string;
  }[];
}
