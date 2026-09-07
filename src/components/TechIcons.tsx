import React from 'react';

interface IconProps {
  className?: string;
}

export const ReactIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 16c0 1.1-.9 2-2 2H6" />
    <path d="M14 18c1.7 0 3-.9 3-2.3 0-1.5-1.1-2-2.3-2.3l-.8-.2c-.9-.2-1.4-.6-1.4-1.2 0-.8.7-1.3 1.7-1.3 1.2 0 2 .5 2.4 1.3" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M6 10h6m-3 0v8" />
    <path d="M14 18c1.7 0 3-.9 3-2.3 0-1.5-1.1-2-2.3-2.3l-.8-.2c-.9-.2-1.4-.6-1.4-1.2 0-.8.7-1.3 1.7-1.3 1.2 0 2 .5 2.4 1.3" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

export const MaterialUIIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 2 10 6v8l-10 6L2 16V8l10-6z" />
    <path d="M12 22V12" />
    <path d="m22 8-10 4-10-4" />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export const SpringBootIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4L12 15l5.5 5.4C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10z" />
    <path d="M12 7v8" />
    <path d="M9 11l3-3 3 3" />
  </svg>
);

export const ExpressIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="7" rx="2" />
    <rect x="2" y="14" width="20" height="7" rx="2" />
    <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="2.5" />
    <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="2.5" />
    <path d="m14 6 2 2-2 2" />
    <path d="m14 17 2 2-2 2" />
  </svg>
);

export const MySQLIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const MongoDBIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C8 6 6 10 6 14c0 3.3 2.7 6 6 8 3.3-2 6-4.7 6-8 0-4-2-8-6-12z" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

export const AWSIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="m8 15 4 4 4-4" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="12" r="3" />
    <path d="M6 9v6" />
    <path d="M18 9a9 9 0 0 0-9 9" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const VercelIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.5L22.5 20.5H1.5L12 2.5Z" />
  </svg>
);

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-3.5 h-3.5" }) => {
  switch (name) {
    case 'React':
      return <ReactIcon className={className} />;
    case 'JavaScript':
      return <JavaScriptIcon className={className} />;
    case 'TypeScript':
      return <TypeScriptIcon className={className} />;
    case 'Tailwind CSS':
      return <TailwindIcon className={className} />;
    case 'Material UI':
      return <MaterialUIIcon className={className} />;
    case 'Java':
      return <JavaIcon className={className} />;
    case 'Spring Boot':
      return <SpringBootIcon className={className} />;
    case 'Express':
      return <ExpressIcon className={className} />;
    case 'MySQL':
      return <MySQLIcon className={className} />;
    case 'MongoDB':
      return <MongoDBIcon className={className} />;
    case 'AWS':
      return <AWSIcon className={className} />;
    case 'Git':
      return <GitIcon className={className} />;
    case 'GitHub':
      return <GitHubIcon className={className} />;
    case 'Vercel':
      return <VercelIcon className={className} />;
    default:
      return null;
  }
};
