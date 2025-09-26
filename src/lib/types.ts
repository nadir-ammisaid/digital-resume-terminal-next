export interface Skill {
  level: number;
  description: string;
}

export interface Skills {
  frontend: Record<string, Skill>;
  backend: Record<string, Skill>;
  database: Record<string, Skill>;
  tools: Record<string, Skill>;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[];
  status?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
  features: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalData {
  name: string;
  title: string;
  location: string;
  status: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
  };
  about: {
    short: string;
    detailed: string;
  };
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  asciiArt: string;
  files: {
    resume: string;
    portfolio: string;
  };
  config: {
    version: string;
    lastUpdate: string;
    theme: string;
    sound: boolean;
    animations: boolean;
  };
}

export interface Command {
  description: string;
  category: string;
  hidden?: boolean;
  execute: (args?: string[]) => string | Promise<string>;
}

export interface CommandHistory {
  command: string;
  timestamp: number;
}

export interface TerminalOutput {
  id: string;
  content: string;
  type: "command" | "result" | "error";
  timestamp: number;
}

export interface Theme {
  name: string;
  colors: {
    bg: string;
    secondary: string;
    header: string;
    primary: string;
    text: string;
    error: string;
    info: string;
    warning: string;
  };
}
