import React, { useState } from 'react';
import { PROPAGANDA_FIGURES } from '../data/figures';
import { HistoricalFigure } from '../types';
import { 
  Users, 
  Sparkles, 
  Award, 
  FileText, 
  ChevronRight, 
  X, 
  HeartHandshake, 
  Share2 
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface FiguresGalleryProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const FiguresGallery: React.FC<FiguresGalleryProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [selectedFigureId, setSelectedFigureId] = useState<string>('rizal');
  const [modalFigure, setModalFigure] = useState<HistoricalFigure | null>(null);

  const activeFigure = PROPAGANDA_FIGURES.find(f => f.id === selectedFigureId)!;

  const handleSelectFigure = (figure: HistoricalFigure) => {
    playPaperRustle(audioEnabled);
    setSelectedFigureId(figure.id);
  };

  const handleOpenBiographyModal = (figure: HistoricalFigure) => {
    playMuseumChime(audioEnabled);
    setModalFigure(figure);
  };

  return (
    <section 
      id="figures-gallery" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Users className="w-3.5 h-3.5 text-[#d4af37]" />
          Portraiture & Intellectual Fraternity
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Key Figures of the Propaganda Movement
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          The Ilustrado vanguard in Europe who wielded the pen, the brush, and the rostrum to demand democratic representation and civic dignity for the Filipino people.
        </p>
      </div>

      {/* Grid of 6 Portrait Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {PROPAGANDA_FIGURES.map(fig => {
          const isSelected = selectedFigureId === fig.id;

          return (
            <div
              key={fig.id}
              className={`rounded-xl border p-3.5 transition-all duration-300 flex flex-col justify-between cursor-pointer text-center ${
                isSelected
                  ? 'bg-[#322013] border-[#d4af37] ring-2 ring-[#d4af37]/50 shadow-xl -translate-y-1'
                  : 'bg-[#1a1109] border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:bg-[#25170d]'
              }`}
              onClick={() => handleSelectFigure(fig)}
            >
              {/* Antique Gilt Portrait Frame Silhouette */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 rounded-full border-2 border-[#d4af37]/50 p-1 bg-[#120b06] shadow-md flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-[#24170d] flex flex-col items-center justify-center text-[#d4af37]">
                  <span className="font-serif font-black text-xl sm:text-2xl text-[#fceda2]">
                    {fig.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                  <span className="text-[9px] text-[#a89b88] font-mono">
                    {fig.alias ? `"${fig.alias}"` : 'ILUSTRADO'}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#fff0d1] leading-tight mb-1">
                  {fig.name}
                </h4>
                <div className="text-[10px] text-[#c59b27] font-serif font-medium mb-1 line-clamp-1">
                  {fig.title}
                </div>
                <div className="text-[10px] text-[#8c7b69] font-mono">
                  {fig.years}
                </div>
              </div>

              <button
                id={`btn-fig-bio-${fig.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenBiographyModal(fig);
                }}
                className="mt-3 w-full py-1 rounded bg-[#25170e] hover:bg-[#3d2716] border border-[#d4af37]/30 text-[10px] font-serif text-[#fceda2] transition-colors"
              >
                Inspect Bio
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Figure Showcase & Relationship with Rizal */}
      <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180e] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Dossier */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#8b2626]/70 border border-[#8b2626] text-xs font-serif font-bold text-[#fff]">
                {activeFigure.years}
              </span>
              <span className="text-xs text-[#d4af37] font-serif">
                {activeFigure.title}
              </span>
              {activeFigure.alias && (
                <span className="text-xs text-[#a89b88] font-mono">
                  Pen Name: "{activeFigure.alias}"
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff5e0] mb-2">
              {activeFigure.name}
            </h3>

            <div className="text-xs font-semibold text-[#c59b27] uppercase tracking-wider mb-4">
              Movement Role: {activeFigure.role}
            </div>

            <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-6">
              {activeFigure.biography}
            </p>

            {/* Major Contributions */}
            <div className="p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/25 mb-4">
              <div className="text-xs font-serif font-bold text-[#fceda2] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                Major Historical Contribution:
              </div>
              <p className="text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
                {activeFigure.majorContribution}
              </p>
            </div>
          </div>

          {/* Right: Connection Line / Relationship with Rizal */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#181008] border border-[#d4af37]/35 flex flex-col justify-between h-full shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                <HeartHandshake className="w-4 h-4 text-[#e07a5f]" />
                Historical Nexus with Rizal
              </div>

              <div className="p-3.5 rounded-lg bg-[#24170d] border-l-4 border-[#d4af37] mb-4">
                <h4 className="font-serif font-bold text-sm text-[#fceda2] mb-1">
                  Alliance, Collaboration & Intellectual Debate
                </h4>
                <p className="text-xs text-[#ded2be] font-serif leading-relaxed">
                  {activeFigure.relationshipWithRizal}
                </p>
              </div>

              <div className="text-[11px] text-[#a89b88] font-serif italic leading-relaxed">
                "The Propaganda was not a single voice, but a chorus of distinct, passionate minds united in the love of the motherland."
              </div>
            </div>

            <button
              id={`btn-open-full-bio-${activeFigure.id}`}
              onClick={() => handleOpenBiographyModal(activeFigure)}
              className="mt-6 w-full py-2.5 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow"
            >
              Examine Complete Archival Dossier
            </button>
          </div>

        </div>
      </div>

      {/* Modal for Deep Biography Inspection */}
      {modalFigure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto antique-scroll rounded-2xl border border-[#d4af37]/50 bg-gradient-to-b from-[#25180f] to-[#120c07] p-6 sm:p-8 text-[#e8dfcf] shadow-2xl">
            <button
              onClick={() => setModalFigure(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#352316] text-[#dfb75c] hover:bg-[#483120] border border-[#d4af37]/30"
              aria-label="Close biography modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Users className="w-4 h-4" />
              National Historical Commission Dossier
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6] mb-1">
              {modalFigure.name}
            </h3>
            
            <div className="text-xs text-[#c59b27] font-serif italic mb-6">
              {modalFigure.title} ({modalFigure.years}) • Pen Name: {modalFigure.alias || 'None'}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
              <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  1. Role in the Propaganda Movement
                </h4>
                <p>{modalFigure.role}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  2. Major Historical Contribution
                </h4>
                <p>{modalFigure.majorContribution}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  3. Dynamic with Jose Rizal
                </h4>
                <p>{modalFigure.relationshipWithRizal}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  4. Extended Biography
                </h4>
                <p>{modalFigure.biography}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/30 flex justify-end">
              <button
                onClick={() => setModalFigure(null)}
                className="px-5 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider border border-[#d4af37]/40"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
