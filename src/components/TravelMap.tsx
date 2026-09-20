import React, { useState, useEffect } from 'react';
import { TRAVEL_DESTINATIONS } from '../data/locations';
import { MapDestination } from '../types';
import {
  Compass,
  Navigation2,
  MapPin,
  User,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Ship,
  X,
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import { FIRST_TRAVELS } from '../data/sourceNarrative';

interface TravelMapProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
  reduceMotion: boolean;
}

export const TravelMap: React.FC<TravelMapProps> = ({
  onOpenArtifact,
  audioEnabled,
  reduceMotion,
}) => {
  const [selectedDestIndex, setSelectedDestIndex] = useState<number | null>(null);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  const activeDest: MapDestination | null =
    selectedDestIndex !== null ? TRAVEL_DESTINATIONS[selectedDestIndex] : null;

  useEffect(() => {
    if (!isPlayingTour) return;

    const timer = setInterval(() => {
      setSelectedDestIndex((prev) => {
        const next = prev === null ? 0 : prev + 1;
        if (next >= TRAVEL_DESTINATIONS.length) {
          setIsPlayingTour(false);
          return prev;
        }
        playPaperRustle(audioEnabled);
        setPanelOpen(true);
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlayingTour, audioEnabled]);

  const handleSelectDest = (index: number) => {
    setIsPlayingTour(false);
    playPaperRustle(audioEnabled);
    setSelectedDestIndex(index);
    setPanelOpen(true);
  };

  const handleNext = () => {
    if (selectedDestIndex === null) {
      handleSelectDest(0);
      return;
    }
    if (selectedDestIndex < TRAVEL_DESTINATIONS.length - 1) {
      playPaperRustle(audioEnabled);
      setSelectedDestIndex(selectedDestIndex + 1);
      setPanelOpen(true);
    }
  };

  const handlePrev = () => {
    if (selectedDestIndex !== null && selectedDestIndex > 0) {
      playPaperRustle(audioEnabled);
      setSelectedDestIndex(selectedDestIndex - 1);
      setPanelOpen(true);
    }
  };

  const togglePlayTour = () => {
    playMuseumChime(audioEnabled);
    if (!isPlayingTour) {
      if (selectedDestIndex === null || selectedDestIndex === TRAVEL_DESTINATIONS.length - 1) {
        setSelectedDestIndex(0);
      }
      setPanelOpen(true);
    }
    setIsPlayingTour(!isPlayingTour);
  };

  const closePanel = () => {
    playPaperRustle(audioEnabled);
    setPanelOpen(false);
    setIsPlayingTour(false);
  };

  const shipIndex = selectedDestIndex ?? 0;
  const shipDest = TRAVEL_DESTINATIONS[shipIndex];

  return (
    <section id="travel-map" className="relative border-t border-[#d4af37]/25 bg-[#140e09]">
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/40 text-xs text-[#e8c547] uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#e8c547]" />
            Interactive Cartographic Odyssey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff8e8] tracking-wide mb-3">
            Interactive Travel Map: Manila to Berlin
          </h2>
          <p className="text-sm sm:text-base text-[#e0d4c0] font-serif max-w-2xl mx-auto leading-relaxed">
            {FIRST_TRAVELS.intro} Tap any numbered stop on the map to open its story beside the route.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-[#1a1109] border border-[#d4af37]/35 rounded-xl p-3 sm:px-5">
          <div className="flex items-center gap-2">
            <button
              id="btn-toggle-tour"
              onClick={togglePlayTour}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3a2616] hover:bg-[#4e331d] text-[#fff0c8] border border-[#d4af37]/50 text-xs font-serif font-bold uppercase tracking-wider"
            >
              {isPlayingTour ? <Pause className="w-4 h-4 text-[#e07a5f]" /> : <Play className="w-4 h-4 text-[#e8c547]" />}
              <span>{isPlayingTour ? 'Pause Tour' : 'Autoplay Tour'}</span>
            </button>
            <button
              id="btn-reset-tour"
              onClick={() => {
                playPaperRustle(audioEnabled);
                setSelectedDestIndex(0);
                setPanelOpen(true);
                setIsPlayingTour(false);
              }}
              className="p-2 rounded-lg bg-[#22160d] text-[#d6c5b0] hover:text-[#fff0c8] border border-[#3b2a1a]"
              title="Reset to Manila"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-[#e0d4c0] font-serif">
            {activeDest && panelOpen ? (
              <>
                Stop <strong className="text-[#ffe08a]">{activeDest.routeStopNumber}</strong>: {activeDest.name}
              </>
            ) : (
              <span className="text-[#c4b5a0]">Tap a numbered pin on the map</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              id="map-btn-prev"
              onClick={handlePrev}
              disabled={selectedDestIndex === null || selectedDestIndex === 0}
              className="p-2 rounded-lg bg-[#24170d] text-[#e8c547] disabled:opacity-30 border border-[#d4af37]/30 hover:bg-[#342214]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="map-btn-next"
              onClick={handleNext}
              disabled={selectedDestIndex === TRAVEL_DESTINATIONS.length - 1}
              className="p-2 rounded-lg bg-[#24170d] text-[#e8c547] disabled:opacity-30 border border-[#d4af37]/30 hover:bg-[#342214]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Map + side panel */}
        <div className="relative w-full rounded-2xl border border-[#d4af37]/40 bg-[#160e08] shadow-2xl overflow-hidden">
          <div
            className="relative w-full aspect-[16/10] min-h-[360px] sm:min-h-[480px]"
            style={{
              background: 'radial-gradient(ellipse at 40% 40%, #2a1b11 0%, #1a1009 65%, #100a06 100%)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.4) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {TRAVEL_DESTINATIONS.map((dest, i) => {
                if (i === 0) return null;
                const prev = TRAVEL_DESTINATIONS[i - 1];
                const isPastOrCurrent = selectedDestIndex !== null && i <= selectedDestIndex;
                return (
                  <line
                    key={`path-${i}`}
                    x1={`${prev.coordinates.x}%`}
                    y1={`${prev.coordinates.y}%`}
                    x2={`${dest.coordinates.x}%`}
                    y2={`${dest.coordinates.y}%`}
                    stroke={isPastOrCurrent ? '#d4af37' : '#5a3d24'}
                    strokeWidth={isPastOrCurrent ? 3 : 1.5}
                    strokeDasharray={isPastOrCurrent ? 'none' : '4 4'}
                    strokeOpacity={isPastOrCurrent ? 0.9 : 0.4}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Ship */}
            <div
              className={`absolute pointer-events-none z-20 transition-all duration-700 -translate-x-1/2 -translate-y-1/2 ${
                reduceMotion ? '' : 'animate-pulse'
              }`}
              style={{ left: `${shipDest.coordinates.x}%`, top: `${shipDest.coordinates.y}%` }}
            >
              <div className="relative">
                <div className="absolute -inset-2.5 rounded-full bg-[#d4af37]/30 animate-ping pointer-events-none" />
                <div className="w-8 h-8 rounded-full bg-[#8b2626] border-2 border-white shadow-xl flex items-center justify-center text-white">
                  <Ship className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Pins */}
            {TRAVEL_DESTINATIONS.map((dest, idx) => {
              const isSelected = idx === selectedDestIndex && panelOpen;
              const isCompleted = selectedDestIndex !== null && idx < selectedDestIndex;
              return (
                <button
                  key={dest.id}
                  id={`map-pin-${dest.id}`}
                  onClick={() => handleSelectDest(idx)}
                  style={{ left: `${dest.coordinates.x}%`, top: `${dest.coordinates.y}%` }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none transition-all duration-300 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                  title={`${dest.routeStopNumber}. ${dest.name}`}
                >
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] font-bold border transition-all ${
                      isSelected
                        ? 'bg-[#ffe08a] text-[#1a1108] border-white ring-4 ring-[#d4af37]/50 shadow-lg'
                        : isCompleted
                          ? 'bg-[#d4af37] text-[#1a1108] border-[#fceda2]'
                          : 'bg-[#291b11] text-[#f0e4d0] border-[#8c673e] hover:border-[#d4af37]'
                    }`}
                  >
                    {dest.routeStopNumber}
                  </div>
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-serif font-bold whitespace-nowrap border pointer-events-none transition-opacity ${
                      isSelected
                        ? 'bg-[#22150c] text-[#ffe08a] border-[#d4af37] opacity-100'
                        : 'bg-[#180f08]/90 text-[#e0d4c0] border-[#44301f] opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {dest.name.split('(')[0]}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-3 left-3 p-3 rounded-lg bg-[#1a1109]/90 border border-[#d4af37]/30 text-[10px] font-serif backdrop-blur-sm pointer-events-none max-w-[200px] hidden sm:block z-10">
              <div className="text-[#e8c547] font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                <Navigation2 className="w-3 h-3 text-[#e07a5f]" />
                Route Legend
              </div>
              <p className="text-[#e0d4c0] leading-tight">
                Tap a number to open its story on the side of the map.
              </p>
            </div>

            {/* SIDE PANEL — always anchored to the LEFT of the map */}
            {panelOpen && activeDest && (
              <aside
                id="map-side-panel"
                className={`absolute z-40 inset-y-0 left-0 w-[min(92%,320px)] sm:w-[360px] md:w-[380px] border-r border-[#d4af37]/50 bg-[#1a120a]/97 backdrop-blur-md shadow-[12px_0_40px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden rounded-r-xl sm:rounded-r-2xl ${
                  reduceMotion ? '' : 'animate-[fadeSlideInLeft_0.28s_ease-out]'
                }`}
              >
                <div className="flex items-start justify-between gap-2 p-4 border-b border-[#d4af37]/25 bg-[#22160e]/90">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8b2626] text-[10px] font-bold text-white mb-1.5">
                      STOP #{activeDest.routeStopNumber} · {activeDest.year}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#fff8e8] leading-snug">
                      {activeDest.event}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-[#e8c547]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {activeDest.name} · {activeDest.country}
                      </span>
                    </div>
                  </div>
                  <button
                    id="btn-close-map-panel"
                    onClick={closePanel}
                    className="p-1.5 rounded-lg bg-[#2a1a10] text-[#e8c547] border border-[#d4af37]/30 hover:bg-[#3a2616] shrink-0"
                    aria-label="Close stop details"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto antique-scroll p-4 space-y-3">
                  {activeDest.penNameOrRole && (
                    <div className="px-3 py-1.5 rounded bg-[#2b1b10] border border-[#d4af37]/30 text-xs text-[#ffe08a] font-serif italic">
                      {activeDest.penNameOrRole}
                    </div>
                  )}

                  <p className="text-sm text-[#f0e6d6] font-serif leading-relaxed">{activeDest.narrative}</p>

                  <div className="p-3 rounded-lg bg-[#120c07] border-l-4 border-[#d4af37]">
                    <strong className="text-[#ffe08a] text-xs block mb-1">Why it matters</strong>
                    <p className="text-xs text-[#e0d4c0] leading-relaxed">{activeDest.significance}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#170f08] border border-[#d4af37]/25">
                    <div className="text-[10px] uppercase tracking-widest text-[#e8c547] font-semibold mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      Related
                    </div>
                    <div className="font-serif font-bold text-sm text-[#fff0d1]">{activeDest.relatedWorkOrPerson}</div>
                  </div>

                  {activeDest.id === 'barcelona' && (
                    <button
                      id="btn-map-inspect-amor-patrio"
                      onClick={() => onOpenArtifact('amor-patrio')}
                      className="w-full py-2.5 rounded-lg bg-[#382415] hover:bg-[#4d321d] border border-[#d4af37]/40 text-xs font-serif font-bold text-[#ffe08a] uppercase tracking-wider"
                    >
                      Inspect &quot;Amor Patrio&quot;
                    </button>
                  )}
                  {activeDest.id === 'berlin' && (
                    <button
                      id="btn-map-inspect-noli"
                      onClick={() => onOpenArtifact('noli-me-tangere')}
                      className="w-full py-2.5 rounded-lg bg-[#8b2626] hover:bg-[#a53232] text-xs font-serif font-bold text-white uppercase tracking-wider"
                    >
                      Inspect First Edition &quot;Noli&quot;
                    </button>
                  )}
                </div>

                <div className="p-3 border-t border-[#d4af37]/20 flex gap-2 bg-[#160e08]/90">
                  <button
                    onClick={handlePrev}
                    disabled={selectedDestIndex === 0}
                    className="flex-1 py-2 rounded-lg border border-[#d4af37]/30 text-xs font-serif font-bold text-[#e8c547] disabled:opacity-30 hover:bg-[#2a1a10]"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedDestIndex === TRAVEL_DESTINATIONS.length - 1}
                    className="flex-1 py-2 rounded-lg bg-[#c59b27] text-xs font-serif font-bold text-[#1a1108] disabled:opacity-30 hover:bg-[#d6ab32]"
                  >
                    Next →
                  </button>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
