export interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  detailedBio: string;
  email: string;
  location: string;
  status: string;
  degree: string;
  githubUrl: string;
  linkedinUrl: string;
  interests: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Programming' | 'Tools & Version Control' | 'Core CS & Databases';
  description: string;
  yearsOrAcademic: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gradeOrScore?: string;
  status: 'In Progress' | 'Completed';
  coursework: string[];
  highlights: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  category: 'Web Development' | 'Programming / DSA' | 'Academic Project' | 'Full Stack';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  keyFeatures: string[];
  metrics?: string;
  gradient: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
  type: 'Course' | 'Bootcamp' | 'Assessment' | 'Academic';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}
