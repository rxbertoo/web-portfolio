import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  const mainCategories = skillCategories.slice(0, 2);
  const secondaryCategories = skillCategories.slice(2);

  return (
    <section id="tecnologias" className="py-14 sm:py-18 border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          04 / Stack Técnico
        </h2>
      </div>

      <div className="space-y-8 sm:space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {mainCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors"
                  >
                    <TechIcon name={skill.name} className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {secondaryCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors"
                  >
                    <TechIcon name={skill.name} className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
