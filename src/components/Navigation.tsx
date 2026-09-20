import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  Map, 
  GraduationCap, 
  Newspaper, 
  Users, 
  Calendar, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  EyeOff, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Archive,
  Box
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  reduceMotion: boolean;
  onToggleReduceMotion: () => void;
  onOpenArtifacts: () => void;
}

export const SECTIONS = [
  { id: 'hero', label: 'HOME', icon: Compass },
  { id: 'timeline', label: 'TIMELINE', icon: Calendar },
  { id: 'manila-education', label: 'EDUCATION', icon: GraduationCap },
  { id: 'travel-map', label: 'TRAVEL MAP', icon: Map },
  { id: 'travel-story', label: 'TRAVEL STORY', icon: BookOpen },
  { id: 'spain-germany', label: 'SPAIN & GERMANY', icon: Compass },
  { id: 'higher-education', label: 'HIGHER ED', icon: Archive },
  { id: 'interactive-3d', label: '3D RELICS', icon: Box },
  { id: 'propaganda', label: 'PROPAGANDA', icon: Newspaper },
  { id: 'key-figures', label: 'KEY FIGURES', icon: Users },
  { id: 'la-solidaridad', label: 'LA SOLIDARIDAD', icon: Newspaper },
  { id: 'decline', label: 'DECLINE', icon: Compass },
  { id: 'final-timeline', label: 'JOURNEY RECAP', icon: Calendar }
];

export const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onNavigate,
  audioEnabled,
  onToggleAudio,
  reduceMotion,
  onToggleReduceMotion,
  onOpenArtifacts
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentIndex = SECTIONS.findIndex(s => s.id === currentSection);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < SECTIONS.length - 1;

  const handleSectionClick = (id: string) => {
    playPaperRustle(audioEnabled);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handlePrev = () => {
    if (canGoPrev) {
      const prevSection = SECTIONS[currentIndex - 1];
      playPaperRustle(audioEnabled);
      onNavigate(prevSection.id);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      const nextSection = SECTIONS[currentIndex + 1];
      playPaperRustle(audioEnabled);
      onNavigate(nextSection.id);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf7ee]/95 backdrop-blur-md border-b border-[#c8b38d]/50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand & Museum Crest */}
        <div 
          onClick={() => handleSectionClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
          id="museum-brand-logo"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c59b27] to-[#8b5a19] p-[1px] shadow-sm flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#f4ecde] flex items-center justify-center border border-[#dfc384]">
              <span className="font-serif font-black text-[#6d460d] text-sm group-hover:scale-110 transition-transform">
                JR
              </span>
            </div>
          </div>
          <div>
            <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-[#2a170a] group-hover:text-[#825c14] transition-colors block leading-tight">
              JOSE RIZAL
            </span>
            <span className="text-[10px] text-[#825c14] uppercase tracking-widest block font-medium">
              Digital History Museum
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {SECTIONS.slice(0, 8).map(sec => {
            const isActive = currentSection === sec.id;
            return (
              <button
                key={sec.id}
                id={`nav-link-${sec.id}`}
                onClick={() => handleSectionClick(sec.id)}
                className={`px-2.5 py-1.5 rounded text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#eddcb8] text-[#2c1b10] border border-[#bfa77e] shadow-xs font-bold'
                    : 'text-[#5a432d] hover:text-[#2c1b10] hover:bg-[#ede5d3]'
                }`}
              >
                {sec.label}
              </button>
            );
          })}

          {/* More dropdown / remaining items */}
          <div className="relative group">
            <button
              className="px-2.5 py-1.5 rounded text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#7a5513] hover:bg-[#ede5d3] border border-[#cbb793]/60 flex items-center gap-1"
            >
              MORE...
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 rounded-lg bg-[#fdfbf6] border border-[#c8b38d] shadow-xl py-2 hidden group-hover:block">
              {SECTIONS.slice(8).map(sec => {
                const isActive = currentSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSectionClick(sec.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                      isActive ? 'bg-[#eddcb8] text-[#2c1b10]' : 'text-[#4e3926] hover:bg-[#f4ecdb] hover:text-[#2c1b10]'
                    }`}
                  >
                    {sec.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Right Controls: Prev/Next, Artifacts, Audio, Reduce Motion */}
        <div className="flex items-center gap-2">
          
          {/* Quick Step Controls */}
          <div className="hidden sm:flex items-center bg-[#ede4d3] rounded border border-[#c8b38d]/60 p-0.5">
            <button
              id="nav-step-prev"
              onClick={handlePrev}
              disabled={!canGoPrev}
              title="Previous Gallery"
              className="p-1.5 text-[#734e10] disabled:text-[#b8a791] hover:bg-[#e2d5be] rounded transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="nav-step-next"
              onClick={handleNext}
              disabled={!canGoNext}
              title="Next Gallery"
              className="p-1.5 text-[#734e10] disabled:text-[#b8a791] hover:bg-[#e2d5be] rounded transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3D Relics Quick Button */}
          <button
            id="nav-open-3d-models"
            onClick={() => {
              playMuseumChime(audioEnabled);
              onNavigate('interactive-3d');
            }}
            title="Interactive 3D Relics Rotunda"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-serif font-bold text-[#1f140a] bg-[#c59b27] hover:bg-[#d6ab32] border border-[#e0c66d] shadow-sm transition-all"
          >
            <Box className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">3D Relics</span>
          </button>

          {/* Artifacts Cabinet Quick Button */}
          <button
            id="nav-open-artifacts"
            onClick={() => {
              playMuseumChime(audioEnabled);
              onOpenArtifacts();
            }}
            title="Examine Historical Artifacts"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-semibold text-[#2c1b10] bg-[#ede2cd] hover:bg-[#e4d5bc] border border-[#c5ad88] shadow-xs transition-all"
          >
            <Archive className="w-3.5 h-3.5 text-[#7a5513]" />
            <span className="hidden md:inline">Artifacts</span>
          </button>

          {/* Audio Synthesizer Ambient Toggle */}
          <button
            id="nav-toggle-audio"
            onClick={onToggleAudio}
            title={audioEnabled ? "Disable Audio Effects" : "Enable Audio Effects"}
            className={`p-2 rounded border transition-colors ${
              audioEnabled
                ? 'bg-[#eddcb8] text-[#3b2716] border-[#c2aa7f]'
                : 'bg-[#ede5d4] text-[#826b55] border-[#d4c5ae] hover:text-[#3b2716]'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-[#734e10]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Reduce Motion Accessibility Toggle */}
          <button
            id="nav-toggle-reduce-motion"
            onClick={onToggleReduceMotion}
            title={reduceMotion ? "Motion: Reduced (Accessible)" : "Motion: Full Animations"}
            className={`p-2 rounded border transition-colors ${
              reduceMotion
                ? 'bg-[#d98282]/30 text-[#852222] border-[#ba6464]'
                : 'bg-[#ede5d4] text-[#826b55] border-[#d4c5ae] hover:text-[#3b2716]'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${reduceMotion ? 'opacity-40' : 'text-[#825c14]'}`} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="nav-mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-[#ede5d4] border border-[#c8b38d] text-[#2c1b10]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf6ed] border-b border-[#c8b38d] px-4 py-4 max-h-[80vh] overflow-y-auto antique-scroll shadow-lg">
          <div className="text-[11px] uppercase tracking-widest text-[#825c14] font-semibold mb-2 px-2">
            Exhibition Galleries & Sections
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {SECTIONS.map(sec => {
              const Icon = sec.icon;
              const isActive = currentSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleSectionClick(sec.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#eddcb8] text-[#2c1b10] border border-[#bfa77e]'
                      : 'text-[#5a432d] hover:bg-[#ede5d3]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#825c14]" />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
