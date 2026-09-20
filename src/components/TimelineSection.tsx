import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE_EVENTS } from '../data/timeline';
import { TimelineEvent } from '../types';
import { 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Award, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Scroll, 
  ArrowRight 
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import gsap from 'gsap';

interface TimelineSectionProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
  reduceMotion: boolean;
  onNavigateSection: (sectionId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  onOpenArtifact,
  audioEnabled,
  reduceMotion,
  onNavigateSection
}) => {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const activeEvent: TimelineEvent = TIMELINE_EVENTS[activeEventIndex];

  // GSAP animation on timeline card change
  useEffect(() => {
    if (reduceMotion || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 18, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out' }
    );
  }, [activeEventIndex, reduceMotion]);

  const handleSelectEvent = (index: number) => {
    if (index === activeEventIndex) return;
    playPaperRustle(audioEnabled);
    setActiveEventIndex(index);
  };

  const handleNext = () => {
    if (activeEventIndex < TIMELINE_EVENTS.length - 1) {
      playMuseumChime(audioEnabled);
      setActiveEventIndex(activeEventIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeEventIndex > 0) {
      playPaperRustle(audioEnabled);
      setActiveEventIndex(activeEventIndex - 1);
    }
  };

  return (
    <section 
      id="timeline" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
          Chronological Master Timeline
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Chronicles of Jose Rizal (1872 – 1890s)
        </h2>
        <p className="text-sm sm:text-base text-[#bfaea0] font-serif max-w-2xl mx-auto">
          Explore the formative milestones from his academic emergence at Ateneo to the transatlantic struggle of the Propaganda Movement. Click each milestone to inspect historical records.
        </p>
      </div>

      {/* Horizontal Interactive Timeline Stepper Bar */}
      <div className="relative mb-12">
        {/* Continuous track connecting line */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#5a3a1f] via-[#d4af37]/60 to-[#5a3a1f] z-0" />

        {/* Scrollable container for mobile */}
        <div className="relative z-10 flex items-center justify-between overflow-x-auto pb-4 pt-2 antique-scroll gap-4 sm:gap-2 px-2">
          {TIMELINE_EVENTS.map((event, idx) => {
            const isSelected = idx === activeEventIndex;
            return (
              <button
                key={event.id}
                id={`timeline-step-${event.id}`}
                onClick={() => handleSelectEvent(idx)}
                className={`group flex flex-col items-center flex-shrink-0 transition-all duration-300 focus:outline-none ${
                  isSelected ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Year Marker Circle */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-serif font-bold text-xs sm:text-sm border-2 transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#fceda2] via-[#d4af37] to-[#8b5a19] text-[#1a1108] border-[#fff] ring-4 ring-[#d4af37]/30 shadow-[#d4af37]/40'
                      : 'bg-[#23170e] text-[#d6c5b0] border-[#d4af37]/40 hover:border-[#d4af37]'
                  }`}
                >
                  {event.year}
                </div>

                {/* Event Location Badge underneath */}
                <span className={`mt-2 text-[11px] font-semibold tracking-wider uppercase transition-colors text-center max-w-[90px] truncate ${
                  isSelected ? 'text-[#fceda2] font-bold' : 'text-[#8c7b69] group-hover:text-[#d6c5b0]'
                }`}>
                  {event.location.split(',')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Event Showcase Container */}
      <div 
        ref={cardRef}
        className="relative rounded-2xl border border-[#d4af37]/35 bg-gradient-to-b from-[#24170e] via-[#1a110a] to-[#120c07] p-6 sm:p-10 shadow-2xl"
      >
        {/* Ambient Top Glow Line matching event category */}
        <div 
          className="absolute top-0 left-8 right-8 h-[2px] opacity-80 rounded-t-2xl"
          style={{ backgroundColor: activeEvent.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Metadata, Year, Title & Narrative */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Event Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-serif font-black tracking-widest uppercase text-[#fff] shadow"
                  style={{ backgroundColor: activeEvent.accentColor }}
                >
                  {activeEvent.year}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#352316] text-[#dfb75c] border border-[#d4af37]/30 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                  {activeEvent.location}, {activeEvent.country}
                </span>

                <span className="text-xs uppercase tracking-widest text-[#a89b88] font-mono">
                  MILESTONE {activeEventIndex + 1} OF {TIMELINE_EVENTS.length}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#fff5e0] tracking-wide mb-2 leading-tight">
                {activeEvent.title}
              </h3>
              
              <h4 className="text-sm sm:text-base font-serif italic text-[#d4af37] mb-6">
                {activeEvent.subtitle}
              </h4>

              {/* Historical Summary */}
              <p className="text-base text-[#ded2be] leading-relaxed mb-6 font-serif">
                {activeEvent.summary}
              </p>

              {/* Verified Historical Points */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs uppercase font-semibold tracking-wider text-[#c59b27] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  Documented Historical Facts & Milestones:
                </div>
                <ul className="space-y-2">
                  {activeEvent.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c4b5a0] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historical Primary Quote */}
              {activeEvent.historicalQuote && (
                <div className="p-4 rounded-lg bg-[#160f09] border-l-4 border-[#d4af37] mb-6 shadow-inner">
                  <p className="font-serif italic text-sm sm:text-base text-[#eedfc8] leading-relaxed">
                    “{activeEvent.historicalQuote.text}”
                  </p>
                  <span className="block mt-2 text-xs text-[#c59b27] font-semibold tracking-wide">
                    — {activeEvent.historicalQuote.source}
                  </span>
                </div>
              )}
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#d4af37]/20 mt-4">
              <button
                id="timeline-btn-prev"
                onClick={handlePrev}
                disabled={activeEventIndex === 0}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#2d1e13] hover:bg-[#3d2a1c] disabled:opacity-40 disabled:cursor-not-allowed text-[#dfb75c] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Event</span>
              </button>

              <div className="flex items-center gap-2">
                {activeEvent.artifactId && (
                  <button
                    id="timeline-btn-inspect-artifact"
                    onClick={() => onOpenArtifact(activeEvent.artifactId!)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#8b2626]/80 hover:bg-[#a53232] text-[#fff] text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                  >
                    <Scroll className="w-4 h-4" />
                    <span>Inspect Related Artifact</span>
                  </button>
                )}

                <button
                  id="timeline-btn-next"
                  onClick={handleNext}
                  disabled={activeEventIndex === TIMELINE_EVENTS.length - 1}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-[#d4af37] to-[#aa821c] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed text-[#181008] font-bold text-xs uppercase tracking-wider shadow transition-all"
                >
                  <span>Continue to Next Event</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Exhibit Card / Artifact Preview */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full rounded-xl bg-[#1a1109] border border-[#d4af37]/30 p-6 shadow-xl text-center relative overflow-hidden group">
              {/* Exhibit Stamp */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-[#8c7b69] border border-[#8c7b69]/40 px-2 py-0.5 rounded">
                EXHIBIT {activeEvent.year}
              </div>

              {/* Visual Icon / Motif */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#291b10] border-2 border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow-inner group-hover:scale-105 transition-transform">
                <BookOpen className="w-9 h-9" />
              </div>

              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                Historical Focus
              </div>
              <h5 className="font-serif font-bold text-lg text-[#fff0d1] mb-3">
                {activeEvent.title}
              </h5>

              <p className="text-xs text-[#b8a792] leading-relaxed mb-6 font-serif">
                Location: <strong className="text-[#eedbc1]">{activeEvent.location}</strong>. Marked by significant milestones in education, medical specialization, and civic defense.
              </p>

              {activeEvent.artifactId ? (
                <button
                  id={`open-artifact-${activeEvent.artifactId}`}
                  onClick={() => onOpenArtifact(activeEvent.artifactId!)}
                  className="w-full py-2.5 rounded-lg bg-[#3a2616] hover:bg-[#4d331f] border border-[#d4af37]/40 text-[#fceda2] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4 text-[#d4af37]" />
                  <span>View Museum Artifact</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigateSection('manila-education')}
                  className="w-full py-2.5 rounded-lg bg-[#27190e] hover:bg-[#382414] border border-[#d4af37]/30 text-[#d6c5b0] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Exhibition Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
