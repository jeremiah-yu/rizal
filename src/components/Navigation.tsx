import React from 'react';
import { Box } from 'lucide-react';
import { NAV_PAGES } from '../pages';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  reduceMotion: boolean;
  onToggleReduceMotion: () => void;
  onOpenArtifacts: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onNavigate,
  onOpenArtifacts,
}) => {
  const go = (id: string) => onNavigate(id);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf9f6]/95 backdrop-blur-md border-b border-[#e4ddd2]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <button
          id="museum-brand-logo"
          onClick={() => go('home')}
          className="text-left shrink-0"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-[#1c140c] block leading-none">
            Jose Rizal
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#8a7358] block mt-1">
            A short history
          </span>
        </button>

        <button
          id="nav-open-3d-models"
          onClick={onOpenArtifacts}
          className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold shrink-0 ${
            currentSection === 'relics' ? 'text-[#1c140c]' : 'text-[#6b542f] hover:text-[#1c140c]'
          }`}
        >
          <Box className="w-4 h-4" />
          3D Relics
        </button>
      </div>

      <nav className="nav-scroll max-w-5xl mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto">
        {NAV_PAGES.map((page) => {
          const isActive = currentSection === page.id;
          return (
            <button
              key={page.id}
              id={`nav-link-${page.id}`}
              onClick={() => go(page.id)}
              className={`shrink-0 px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? 'border-[#1c140c] text-[#1c140c]'
                  : 'border-transparent text-[#5c5146] hover:text-[#1c140c]'
              }`}
            >
              {page.navLabel}
            </button>
          );
        })}
        <button
          onClick={onOpenArtifacts}
          className={`sm:hidden shrink-0 px-3 py-3 text-sm font-medium border-b-2 ${
            currentSection === 'relics'
              ? 'border-[#1c140c] text-[#1c140c]'
              : 'border-transparent text-[#5c5146]'
          }`}
        >
          3D Relics
        </button>
      </nav>
    </header>
  );
};
