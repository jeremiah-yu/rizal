import React, { useState } from 'react';
import { RIZAL_CHRONOLOGY } from '../data/timeline';
import { ChronologyItem } from '../types';
import { 
  Calendar, 
  Filter, 
  GraduationCap, 
  Compass, 
  Newspaper, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface SummaryTimelineProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const SummaryTimeline: React.FC<SummaryTimelineProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedEventId, setSelectedEventId] = useState<string>('ateneo-1872');

  const CATEGORIES = [
    { id: 'all', label: 'All Milestones', icon: Clock },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'travel', label: 'Travels', icon: Compass },
    { id: 'propaganda', label: 'Propaganda Movement', icon: Newspaper },
    { id: 'literary', label: 'Publications & Works', icon: BookOpen }
  ];

  const filteredEvents: ChronologyItem[] = activeCategory === 'all'
    ? RIZAL_CHRONOLOGY
    : RIZAL_CHRONOLOGY.filter((e: ChronologyItem) => e.category === activeCategory);

  const selectedEvent: ChronologyItem = RIZAL_CHRONOLOGY.find((e: ChronologyItem) => e.id === selectedEventId) || filteredEvents[0];

  const handleSelectFilter = (catId: string) => {
    playPaperRustle(audioEnabled);
    setActiveCategory(catId);
  };

  const handleSelectEvent = (event: ChronologyItem) => {
    playPaperRustle(audioEnabled);
    setSelectedEventId(event.id);
  };

  return (
    <section 
      id="summary-timeline" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
          Master Chronological Repository (1872–1896)
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Final Interactive Timeline: The Complete Odyssey
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          Filter and explore every defining chapter of Jose Rizal’s youth, education, European travels, literary masterpieces, and the Propaganda Movement.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => handleSelectFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all ${
                isActive
                  ? 'bg-[#d4af37] text-[#180f07] shadow-lg border border-[#fff]'
                  : 'bg-[#22160d] text-[#c4b5a0] border border-[#d4af37]/30 hover:bg-[#322013] hover:text-[#fff]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Two Column Layout: Chronology List on Left, Selected Milestone Dossier on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Scrollable Chronology Rail */}
        <div className="lg:col-span-6 space-y-3 max-h-[640px] overflow-y-auto antique-scroll pr-2">
          {filteredEvents.map(event => {
            const isSelected = selectedEvent.id === event.id;

            return (
              <div
                key={event.id}
                id={`timeline-card-${event.id}`}
                onClick={() => handleSelectEvent(event)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-start justify-between ${
                  isSelected
                    ? 'bg-[#322013] border-[#d4af37] shadow-lg translate-x-1 ring-1 ring-[#d4af37]/40'
                    : 'bg-[#181009] border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:bg-[#24170d]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                    isSelected ? 'bg-[#d4af37] text-[#180f08]' : 'bg-[#281a0f] text-[#d4af37]'
                  }`}>
                    {event.year}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#fff0d1] leading-tight mb-1">
                      {event.title}
                    </h4>
                    <span className="text-[11px] text-[#c59b27] font-serif block">
                      {event.location}
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-1 ${
                  isSelected ? 'text-[#fceda2]' : 'text-[#6e5d4c]'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Right: Selected Milestone Detail Spotlight */}
        <div className="lg:col-span-6 sticky top-24 p-6 sm:p-8 rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] shadow-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#8b2626]/70 border border-[#8b2626] text-xs font-serif font-bold text-[#fff]">
              YEAR {selectedEvent.year}
            </span>
            <span className="text-xs uppercase font-mono text-[#d4af37]">
              {selectedEvent.category.toUpperCase()}
            </span>
            <span className="text-xs text-[#a89b88]">
              • {selectedEvent.location}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff5e0] mb-3">
            {selectedEvent.title}
          </h3>

          <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-6">
            {selectedEvent.description}
          </p>

          <div className="p-4 rounded-xl bg-[#170f08] border-l-4 border-[#d4af37] mb-6">
            <div className="text-xs font-serif font-bold text-[#fceda2] uppercase tracking-wider mb-1">
              Historical Significance
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a0] leading-relaxed">
              {selectedEvent.significance}
            </p>
          </div>

          {selectedEvent.primaryWork && (
            <div className="p-3 rounded-lg bg-[#20140c] border border-[#d4af37]/25 text-xs text-[#e8dfcf] mb-6">
              <strong className="text-[#d4af37] block mb-0.5">Associated Primary Work:</strong>
              {selectedEvent.primaryWork}
            </div>
          )}

          {selectedEvent.relatedArtifactId && (
            <button
              id={`btn-timeline-inspect-${selectedEvent.relatedArtifactId}`}
              onClick={() => {
                playMuseumChime(audioEnabled);
                onOpenArtifact(selectedEvent.relatedArtifactId!);
              }}
              className="w-full py-2.5 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Inspect Associated Museum Artifact</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
