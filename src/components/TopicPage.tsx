import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NAV_PAGES, TopicPage as Topic } from '../pages';

interface TopicPageProps {
  page: Topic;
  onNavigate: (id: string) => void;
  hideIntro?: boolean;
  children?: React.ReactNode;
}

export const TopicPage: React.FC<TopicPageProps> = ({ page, onNavigate, hideIntro, children }) => {
  const index = NAV_PAGES.findIndex((item) => item.id === page.id);
  const prev = index > 0 ? NAV_PAGES[index - 1] : null;
  const next = index >= 0 && index < NAV_PAGES.length - 1 ? NAV_PAGES[index + 1] : null;

  return (
    <article>
      {!hideIntro && (
      <header className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <p className="text-base font-semibold text-[#7a5513]">{page.kicker}</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-[#2c1b10] leading-tight">
          {page.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-[#3d2b1f]">{page.summary}</p>
        {page.sections.length > 0 && (
          <div className="mt-8 space-y-6">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-2xl font-bold text-[#2c1b10]">{section.heading}</h2>
                <p className="mt-2 text-lg leading-relaxed text-[#3d2b1f]">{section.text}</p>
              </section>
            ))}
          </div>
        )}
      </header>
      )}

      {children}

      {(prev || next) && (
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-3">
          {prev ? (
            <button
              onClick={() => onNavigate(prev.id)}
              className="flex-1 flex items-center gap-2 rounded-xl border border-[#c8b38d] bg-[#fffdf8] px-4 py-3 text-left text-lg font-semibold text-[#2c1b10] hover:bg-[#fff9ee]"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" />
              <span>{prev.navLabel}</span>
            </button>
          ) : (
            <span className="flex-1" />
          )}
          {next && (
            <button
              onClick={() => onNavigate(next.id)}
              className="flex-1 flex items-center justify-end gap-2 rounded-xl bg-[#2c1b10] px-4 py-3 text-right text-lg font-semibold text-[#fff8e8] hover:bg-[#3d2b1f]"
            >
              <span>{next.navLabel}</span>
              <ChevronRight className="w-5 h-5 shrink-0" />
            </button>
          )}
        </nav>
      )}
    </article>
  );
};
