import { PersonalData } from "./types";

export const personalData: PersonalData = {
  name: "Nadir AMMI SAID",
  title: "Développeur Full-Stack",
  location: "Lyon, France",
  status: "Étudiant & Future Alternant",

  contact: {
    email: "nadir.ammisaid@outlook.com",
    linkedin: "linkedin.com/in/nadir-ammisaid",
    github: "github.com/nadir-ammisaid",
    phone: "+33 6 18 72 83 10",
  },

  about: {
    short:
      "Développeur Full-Stack spécialisé en TypeScript avec React pour le front-end, et Node.js, Express, et Java (Spring Boot) pour le back-end, le tout adossé à une base de données MySQL.",
    detailed: `Je suis un développeur Full-Stack passionné, actuellement en Master d'Architecture des Systèmes d'Information à Epitech. 

Avec une expérience pratique sur des projets web et mobile concrets, je conçois des applications qui allient utilité, performance et clarté d'architecture.

Je rejoindrai Worldline en janvier 2026 pour mon alternance en tant que développeur Full-Stack.

Bilingue français/anglais, je suis à l'aise dans des environnements techniques ou internationaux.`,
  },

  skills: {
    frontend: {
      TypeScript: {
        level: 85,
        description: "Type-safe development, advanced features",
      },
      React: {
        level: 90,
        description: "Hooks, Context API, component architecture",
      },
      "Next.js": { level: 80, description: "SSR, SSG, App Router" },
      "HTML/CSS": {
        level: 95,
        description: "Semantic HTML, modern CSS, responsive design",
      },
      "Tailwind CSS": { level: 70, description: "Utility-first CSS framework" },
    },
    backend: {
      "Node.js": { level: 75, description: "REST APIs, async programming" },
      Express: {
        level: 75,
        description: "Middleware, routing, API development",
      },
      "Spring Boot": { level: 50, description: "Java enterprise applications" },
      "REST APIs": { level: 80, description: "API design and implementation" },
    },
    database: {
      MySQL: { level: 80, description: "Database design, optimization" },
      MongoDB: { level: 50, description: "NoSQL document database" },
    },
    tools: {
      Git: { level: 95, description: "Version control, branching strategies" },
      Docker: { level: 50, description: "Containerization basics" },
      Linux: { level: 70, description: "Command line, system administration" },
      "Agile/Scrum": {
        level: 90,
        description: "Project management methodology",
      },
    },
  },

  experience: [
    {
      title: "Développeur Full-Stack - Future Alternant",
      company: "Worldline",
      period: "Janvier 2026 - 2029",
      location: "Lyon, France",
      description:
        "Alternance de 3 ans dans le développement d'applications d'entreprise.",
      technologies: ["Java", "Spring Boot", "React", "TypeScript"],
      status: "À venir",
    },
    {
      title: "Développeur Web et Web Mobile",
      company: "Projets personnels",
      period: "Décembre 2024 - Présent",
      location: "Lyon, France",
      description:
        "Développement d'applications full-stack avec focus sur l'architecture MVC.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Java",
        "Spring Boot",
      ],
    },
    {
      title: "Développeur Full Stack - Projets",
      company: "Wild Code School",
      period: "Septembre 2024 - Avril 2025",
      location: "Lyon, France",
      description: "Formation intensive avec projets pratiques en équipe.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MySQL",
        "Jest",
      ],
    },
  ],

  projects: [
    {
      name: "Task Connect",
      description:
        "Plateforme responsive mettant en relation clients et prestataires pour des services",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      status: "En cours",
      github: "https://github.com/nadir-ammisaid/taskconnect",
      demo: "https://www.taskconnect.fr",
      features: [
        "Authentification sécurisée",
        "Gestion d'annonces",
        "Profils utilisateurs",
        "Architecture MVC",
      ],
    },
    {
      name: "Aventurier",
      description:
        "Jeu interactif Java/React avec carte ASCII dynamique et déplacement via API REST",
      technologies: ["Java", "Spring Boot", "React", "TypeScript"],
      status: "Terminé",
      github: "https://github.com/nadir-ammisaid/aventurier",
      features: [
        "Carte ASCII dynamique",
        "API REST",
        "Logique serveur",
        "Gestion des collisions",
      ],
    },
    {
      name: "Smart Choice Hub",
      description:
        "Plateforme collaborative avec authentification et gestion des décisions CRUD",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MySQL",
        "Jest",
      ],
      status: "Terminé",
      github: "https://github.com/nadir-ammisaid/smart-choice-hub",
      features: [
        "Auth sécurisée",
        "CRUD complet",
        "Commentaires WYSIWYG",
        "Tests Jest",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science Développement Web et Mobile",
      school: "Epitech",
      period: "Décembre 2025 - Septembre 2028",
      location: "Lyon, France",
      description:
        "Formation en alternance : développement web, mobile, IA, UX, sécurité, DevOps",
    },
    {
      degree: "Développeur Web et Web Mobile - Full Stack",
      school: "Wild Code School",
      period: "Septembre 2024 - Avril 2025",
      location: "Lyon, France",
      description:
        "Formation intensive 700h : React.js, TypeScript, Node.js, MySQL, méthodologie Agile",
    },
  ],

  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Bilingue" },
    { name: "Arabe", level: "Bilingue" },
    { name: "Amazigh", level: "Langue maternelle" },
    { name: "Allemand", level: "Intermédiaire (B1)" },
  ],

  asciiArt: `
███╗   ██╗ █████╗ ██████╗ ██╗██████╗ 
████╗  ██║██╔══██╗██╔══██╗██║██╔══██╗
██╔██╗ ██║███████║██║  ██║██║██████╔╝
██║╚██╗██║██╔══██║██║  ██║██║██╔══██╗
██║ ╚████║██║  ██║██████╔╝██║██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝
  `,

  files: {
    resume: "/assets/files/cv-nadir.pdf",
    portfolio: "https://github.com/nadir-ammisaid",
  },

  config: {
    version: "2.0.0",
    lastUpdate: "2024-12-27",
    theme: "matrix",
    sound: false,
    animations: true,
  },
};
