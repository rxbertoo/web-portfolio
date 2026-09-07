import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="py-14 sm:py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          05 / Contacto
        </h2>
      </div>

      <div className="space-y-6">
        <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
          Si quieres hablar sobre un proyecto, una oportunidad técnica o simplemente intercambiar ideas, escríbeme directamente.
        </p>

        <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors border-b border-[var(--accent)] pb-0.5"
          >
            {personalInfo.email}
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] transition-colors cursor-pointer"
          >
            {copied ? '¡Copiado!' : 'copiar'}
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-secondary)]">
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              <span>↑ Volver arriba</span>
            </button>

            <span>
              © {currentYear} {personalInfo.name}
            </span>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer shadow-lg"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">inicio</span>
        </button>
      )}
    </footer>
  );
};
