import React, { useState } from 'react';
import { REFORM_OBJECTIVES_DATA } from '../data/education';
import { PROPAGANDA_MOVEMENT } from '../data/sourceNarrative';
import { ReformObjective } from '../types';
import { 
  Newspaper, 
  Building2, 
  Church, 
  Scale, 
  FileText, 
  ShieldAlert, 
  Sparkles, 
  UserCheck, 
  AlertTriangle,
  ArrowRight,
  Printer,
  Feather
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface PropagandaMovementProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
  reduceMotion: boolean;
}

export const PropagandaMovement: React.FC<PropagandaMovementProps> = ({
  onOpenArtifact,
  audioEnabled,
  reduceMotion
}) => {
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>('representation');

  const ICON_MAP: Record<string, typeof Building2> = {
    Building2,
    Church,
    Scale,
    FileText,
    ShieldAlert
  };

  const activeObjective = REFORM_OBJECTIVES_DATA.find(o => o.id === selectedObjectiveId)!;

  const handleSelectCard = (id: string) => {
    playMuseumChime(audioEnabled);
    setSelectedObjectiveId(id);
  };

  return (
    <section 
      id="propaganda" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Visual Transition into a 19th-Century Historical Newspaper Office */}
      <div className="relative rounded-3xl border border-[#d4af37]/40 bg-[#19110a] overflow-hidden p-8 sm:p-12 mb-16 shadow-2xl">
        
        {/* Atmosphere Vignette: Printing Press, Ink, Papers, Letters */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c1d11] border border-[#d4af37]/40 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-4">
            <Newspaper className="w-3.5 h-3.5 text-[#d4af37]" />
            Madrid & Barcelona Editorial Bureaus (c. 1885–1892)
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#fff5e0] tracking-wide mb-4">
            THE PROPAGANDA MOVEMENT
          </h2>

          <p className="text-base sm:text-lg text-[#ded2be] font-serif leading-relaxed mb-6">
            {PROPAGANDA_MOVEMENT.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-serif text-[#c4b5a0]">
            {PROPAGANDA_MOVEMENT.organizations.map((org) => (
              <div key={org.name} className="p-3 rounded-lg bg-[#2b1b0f]/80 border border-[#d4af37]/25">
                <strong className="text-[#fceda2] block mb-1">{org.name}</strong>
                <span>{org.detail}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d4af37]/20 text-xs font-serif text-[#c4b5a0]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#2b1b0f] text-[#d4af37]">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#fceda2] block">Instrument: The Press</strong>
                <span>Newspapers, political pamphlets, and open telegrams.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#2b1b0f] text-[#d4af37]">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#fceda2] block">Method: Peaceful Pen</strong>
                <span>Assimilation into Spain as a regular province.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#2b1b0f] text-[#d4af37]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#fceda2] block">Goal: Human Dignity</strong>
                <span>Dismantling friar autocracy and racial castes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11: REFORM OBJECTIVES (Five Interactive 3D/Elevation Cards) */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27190e] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-2">
          <Scale className="w-3.5 h-3.5 text-[#d4af37]" />
          Foundational Demands
        </div>
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff2d6]">
          The Five Reform Objectives
        </h3>
        <p className="text-sm text-[#ded2be] font-serif max-w-xl mx-auto mt-2">
          Click any card to animate it forward and reveal its historical background, advocacy leaders, and the colonial barriers it confronted.
        </p>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {REFORM_OBJECTIVES_DATA.map(obj => {
          const Icon = ICON_MAP[obj.iconName] || FileText;
          const isSelected = selectedObjectiveId === obj.id;

          return (
            <button
              key={obj.id}
              id={`reform-card-${obj.id}`}
              onClick={() => handleSelectCard(obj.id)}
              className={`text-left rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-[#3a2516] to-[#24170d] border-[#d4af37] ring-2 ring-[#d4af37]/40 shadow-2xl -translate-y-2'
                  : 'bg-[#1b120a] border-[#d4af37]/25 hover:border-[#d4af37]/60 hover:-translate-y-1'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected ? 'bg-[#d4af37] text-[#180f08]' : 'bg-[#291b10] text-[#d4af37]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#fff2d6] mb-1 leading-snug">
                  {obj.title}
                </h4>
                <p className="text-[11px] text-[#c4b5a0] line-clamp-2">
                  {obj.tagline}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#d4af37]/20 flex items-center justify-between text-[10px] font-semibold">
                <span className={isSelected ? 'text-[#fceda2]' : 'text-[#8c7b69]'}>
                  {isSelected ? 'ACTIVE OBJECTIVE' : 'CLICK TO EXPAND'}
                </span>
                <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-[#fceda2]' : 'text-[#8c7b69]'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Objective Showcase Dossier */}
      <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#24170e] via-[#1a1109] to-[#120c06] p-6 sm:p-10 shadow-2xl transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Detailed Analytical Dossier
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6] mb-2">
              {activeObjective.title}
            </h3>
            
            <div className="text-sm font-serif italic text-[#dfb75c] mb-6">
              {activeObjective.tagline}
            </div>

            <div className="space-y-4 font-serif text-sm sm:text-base text-[#ded2be] leading-relaxed mb-6">
              <p>{activeObjective.description}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#170f08] border-l-4 border-[#d4af37] mb-4">
              <div className="text-xs uppercase font-mono text-[#c59b27] font-bold mb-1">
                Historical Colonial Context:
              </div>
              <p className="text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
                {activeObjective.historicalContext}
              </p>
            </div>
          </div>

          {/* Right Column: Advocates & Colonial Reality */}
          <div className="lg:col-span-4 space-y-4">
            {/* Advocates */}
            <div className="p-4 rounded-xl bg-[#181008] border border-[#d4af37]/30">
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#6aa84f]" />
                Primary Advocates in Spain
              </div>
              <ul className="space-y-1 text-xs text-[#eedfc8] font-serif">
                {activeObjective.primaryAdvocates.map((adv, aIdx) => (
                  <li key={aIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonial Reality */}
            <div className="p-4 rounded-xl bg-[#1f130b] border border-[#8b2626]/40">
              <div className="text-xs uppercase tracking-widest text-[#f5c6a5] font-semibold mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#e07a5f]" />
                Colonial Reality & Resistance
              </div>
              <p className="text-xs text-[#c4b5a0] leading-relaxed">
                {activeObjective.colonialReality}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
