import React from 'react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="educacion" className="py-14 sm:py-18 border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          02 / Formación Académica
        </h2>
      </div>

      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                {item.degree}
              </h3>
              {item.period && (
                <span className="text-xs font-mono text-[var(--text-secondary)] shrink-0">
                  {item.period}
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm font-mono">
              <span className="text-[var(--accent)]">
                {item.institution}
              </span>
              {item.location && (
                <span className="text-xs text-[var(--text-secondary)]">
                  {item.location}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
