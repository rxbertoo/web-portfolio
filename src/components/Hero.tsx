import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-14 sm:pt-28 sm:pb-20 border-b border-[var(--border)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] overflow-hidden flex items-center justify-center font-mono font-semibold text-xs tracking-wider text-[var(--accent)] shrink-0">
          {personalInfo.avatarUrl ? (
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          ) : (
            'RB'
          )}
        </div>
        <div>
          <div className="text-xs font-mono text-[var(--text-secondary)]">
            {personalInfo.location}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          {personalInfo.name}
        </h1>
        <p className="text-base sm:text-lg font-mono text-[var(--accent)]">
          {personalInfo.title}
        </p>
      </div>

      <p className="mt-5 text-base text-[var(--text-secondary)] leading-relaxed">
        {personalInfo.bio}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-mono">
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-0.5"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
        </a>

        <a
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-0.5"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-0.5"
        >
          <span>Correo</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
        </a>
      </div>
    </section>
  );
};
