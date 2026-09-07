import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-14 sm:py-18 border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          03 / Proyectos & Código
        </h2>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {projects.map((project) => (
          <article 
            key={project.id}
            className="py-6 first:pt-0 last:pb-0 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-mono font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {project.demoUrl && project.demoUrl !== project.githubUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-xs font-mono text-[var(--accent)] hover:underline"
                  >
                    <span>demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-[var(--text-secondary)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
