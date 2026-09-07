import React from 'react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-14 sm:py-18 border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          01 / Experiencia
        </h2>
      </div>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                {exp.role}{' '}
                <span className="text-[var(--text-secondary)] font-normal">
                  {exp.company.toLowerCase() === 'freelance' ? '—' : 'en'}
                </span>{' '}
                {exp.company}
                {exp.modality && (
                  <span className="ml-2.5 inline-block text-[11px] font-mono font-normal text-[var(--text-secondary)] px-1.5 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] align-middle whitespace-nowrap">
                    {exp.modality}
                  </span>
                )}
              </h3>
              <span className="text-xs font-mono text-[var(--text-secondary)] shrink-0">
                {exp.period}
              </span>
            </div>

            {exp.description && (
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.description}
              </p>
            )}

            <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
              {exp.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] select-none text-xs mt-1">
                    •
                  </span>
                  <span className="leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
