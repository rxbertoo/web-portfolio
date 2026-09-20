import type { PersonalInfo, Experience, Project, SkillCategory, Education } from '../types/portfolio';
import profileImg from '../assets/profile.png';

export const personalInfo: PersonalInfo = {
  name: "Roberto Barrios Negrete",
  title: "Ingeniero de Software",
  subtitle: "Full Stack Developer",
  status: "Disponible para proyectos",
  bio: "Desarrollador Full Stack con base en Sonora, México. Me enfoco en construir software bien estructurado: desde servicios backend seguros en Java y Spring Boot, hasta interfaces rápidas y limpias con React y TypeScript. Me interesan la seguridad práctica, el código legible y la simplicidad visual.",
  location: "Sonora, México — Trabajo remoto",
  email: "contacto@rbarrios.dev",
  githubUrl: "https://github.com/rxbertoo",
  linkedinUrl: "https://www.linkedin.com/in/roberto-barrios-negrete-47282241b/",
  cvUrl: "#",
  avatarUrl: profileImg,
  metrics: []
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador Sr. Full Stack",
    company: "Lecosy Legal Compliance",
    period: "Noviembre 2025 — Agosto 2026",
    location: "Hermosillo, Sonora",
    modality: "Presencial",
    description: "Desarrollo y mantenimiento de la plataforma web SaaS de la empresa.",
    achievements: [
      "Participé en el desarrollo y mantenimiento continuo de la plataforma web SaaS.",
      "Lideré el desarrollo de módulos del SaaS para la automatización de procesos clave.",
      "Desarrollé interfaces responsivas y funcionalidades backend con integración de APIs y bases de datos.",
      "Apliqué buenas prácticas de desarrollo y mejoras continuas para optimizar el rendimiento y mantenimiento del sistema."
    ],
    technologies: ["React", "TypeScript", "Express", "Bases de Datos", "Git"]
  },
  {
    id: "exp-2",
    role: "Desarrollador Front-End",
    company: "Freelance",
    period: "Septiembre 2024 — Junio 2025",
    location: "Remoto",
    modality: "Remoto",
    description: "Desarrollo de landing pages, sitios web y paneles de administración para profesionistas y negocios locales.",
    achievements: [
      "Maquetación de landing pages e interfaces responsivas a partir de diseños y bocetos con React, TypeScript y Tailwind CSS.",
      "Integración de formularios de contacto, botones directos de atención por WhatsApp y consumo de APIs REST.",
      "Configuración de dominios personalizados, certificados SSL y despliegue de proyectos en producción con Vercel."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel", "Git"]
  },
  {
    id: "exp-3",
    role: "Desarrollador de Software",
    company: "Secretaría de Economía del Estado de Sonora",
    period: "Mayo 2024 — Agosto 2024",
    location: "Hermosillo, Sonora",
    modality: "Presencial",
    description: "Aplicación móvil para control y gestión de inventarios con sincronización en tiempo real.",
    achievements: [
      "Desarrollé una aplicación móvil para control de inventarios con actualización en tiempo real.",
      "Optimicé la experiencia de usuario mediante interfaces intuitivas y flujos de captura simplificados.",
      "Integré sincronización en la nube para mejorar la disponibilidad y gestión de datos."
    ],
    technologies: ["Mobile", "Cloud Sync", "APIs"]
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Ingeniería en Desarrollo y Gestión de Software",
    institution: "Universidad Tecnológica de Hermosillo",
    period: "Abril 2026",
    location: "Hermosillo, Sonora"
  },
  {
    id: "edu-2",
    degree: "Tecnologías de la Información área Desarrollo de Software Multiplataforma (TSU)",
    institution: "Universidad Tecnológica de Hermosillo",
    period: "Agosto 2024",
    location: "Hermosillo, Sonora"
  }
];

export const projects: Project[] = [
  {
    id: "proj-auth-backend",
    title: "auth-backend",
    description: "Servicio backend para registro y autenticación segura de usuarios. Implementa Spring Security con tokens JWT almacenados en cookies HttpOnly contra ataques XSS, hashing de contraseñas con BCrypt y arquitectura modular por dominios.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "Maven"],
    imageUrl: "",
    demoUrl: "https://github.com/rxbertoo/auth-backend",
    githubUrl: "https://github.com/rxbertoo/auth-backend"
  },
  {
    id: "proj-time-keeper",
    title: "time-keeper",
    description: "Cronómetro web de precisión enfocado en buenas prácticas de desarrollo frontend. Implementa control de ciclo de vida con hooks para evitar fugas de memoria en intervalos temporales, tipado estricto en TypeScript y despliegue continuo en Vercel.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    imageUrl: "",
    demoUrl: "https://www.rbarrios.dev/time-keeper",
    githubUrl: "https://github.com/rxbertoo/time-keeper"
  },
  {
    id: "proj-web-portfolio",
    title: "web-portfolio",
    description: "Portafolio web personal con diseño editorial minimalista. Desarrollado con enfoque en rendimiento, tipografía técnica, paleta oscura en azul cobalto y renderizado estático sin dependencias visuales pesadas.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "",
    demoUrl: "https://github.com/rxbertoo/web-portfolio",
    githubUrl: "https://github.com/rxbertoo/web-portfolio"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Material UI" }
    ]
  },
  {
    title: "Backend",
    description: "",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Express" }
    ]
  },
  {
    title: "Bases de Datos",
    description: "",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" }
    ]
  },
  {
    title: "Herramientas",
    description: "",
    skills: [
      { name: "Git" },
      { name: "GitHub" }
    ]
  },
  {
    title: "Cloud & Despliegue",
    description: "",
    skills: [
      { name: "AWS" },
      { name: "Vercel" }
    ]
  }
];
