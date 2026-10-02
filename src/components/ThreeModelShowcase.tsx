import React, { useState } from 'react';
import { ThreeArtifactViewer, ModelType } from './ThreeArtifactViewer';
import {
  Box,
  Sparkles,
  Compass,
  BookOpen,
  Award,
  Eye,
  Feather,
  Maximize2,
  Newspaper,
  ScrollText,
  Printer,
  Ship,
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface ThreeModelShowcaseProps {
  onOpenArtifactModal?: (id: string) => void;
  audioEnabled: boolean;
}

export const ThreeModelShowcase: React.FC<ThreeModelShowcaseProps> = ({
  onOpenArtifactModal,
  audioEnabled,
}) => {
  const [selectedModel, setSelectedModel] = useState<ModelType>('noli');

  const MODEL_TILES = [
    {
      id: 'noli' as ModelType,
      title: 'Noli Me Tangere',
      subtitle: 'Berlin 1887',
      artifactId: 'noli-me-tangere',
      icon: BookOpen,
      tag: 'Novel',
    },
    {
      id: 'fili' as ModelType,
      title: 'El Filibusterismo',
      subtitle: 'Ghent 1891',
      artifactId: 'el-filibusterismo',
      icon: BookOpen,
      tag: 'Novel',
    },
    {
      id: 'medal' as ModelType,
      title: 'Ateneo Medal',
      subtitle: 'Sobresaliente 1877',
      artifactId: 'ateneo-medal',
      icon: Award,
      tag: 'Honor',
    },
    {
      id: 'diploma' as ModelType,
      title: 'Madrid Diploma',
      subtitle: '1884–1885',
      artifactId: 'madrid-diploma',
      icon: ScrollText,
      tag: 'Degree',
    },
    {
      id: 'ophthalmology' as ModelType,
      title: 'Eye Kit',
      subtitle: 'Paris & Heidelberg',
      artifactId: 'ophthalmology-kit',
      icon: Eye,
      tag: 'Medicine',
    },
    {
      id: 'ship' as ModelType,
      title: 'SS Salvadora',
      subtitle: 'May 3, 1882',
      artifactId: 'surveyor-diploma',
      icon: Ship,
      tag: 'Travel',
    },
    {
      id: 'compass' as ModelType,
      title: 'Voyage Compass',
      subtitle: '1882 Journey',
      artifactId: 'surveyor-diploma',
      icon: Compass,
      tag: 'Travel',
    },
    {
      id: 'quill' as ModelType,
      title: 'Quill & Ink',
      subtitle: 'Amor Patrio',
      artifactId: 'amor-patrio',
      icon: Feather,
      tag: 'Writing',
    },
    {
      id: 'solidaridad' as ModelType,
      title: 'La Solidaridad',
      subtitle: '1889–1895',
      artifactId: 'la-solidaridad-paper',
      icon: Newspaper,
      tag: 'Press',
    },
    {
      id: 'press' as ModelType,
      title: 'Printing Press',
      subtitle: 'Berlin 1887',
      artifactId: 'noli-me-tangere',
      icon: Printer,
      tag: 'Press',
    },
  ];

  const handleSelect = (id: ModelType) => {
    playPaperRustle(audioEnabled);
    setSelectedModel(id);
  };

  const handleInspectFullDossier = () => {
    playMuseumChime(audioEnabled);
    const tile = MODEL_TILES.find((t) => t.id === selectedModel);
    if (tile && onOpenArtifactModal) onOpenArtifactModal(tile.artifactId);
  };

  return (
    <section
      id="interactive-3d"
      className="relative py-12 sm:py-20 px-3 sm:px-6 bg-[#f7f3e8] text-[#3d2b1f] border-y border-[#c8b38d]/60"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eee4d2] border border-[#c5ad88] text-xs text-[#6d460d] uppercase tracking-widest font-semibold mb-3">
          <Box className="w-3.5 h-3.5 text-[#825c14] animate-pulse" />
          10 Interactive 3D Relics
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold !text-[#2a170a] tracking-wide mb-2 sm:mb-3 px-2">
          3D Artifact Rotunda
        </h2>
        <p className="text-sm sm:text-base text-[#4a3828] font-serif max-w-2xl mx-auto leading-relaxed px-2">
          Rotate and zoom relics from Rizal’s education, voyages, novels, and the Propaganda press.
        </p>
      </div>

      <div className="relative z-10 mb-6 sm:mb-8 -mx-3 px-3 sm:mx-0 sm:px-0">
        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory">
          {MODEL_TILES.map((tile) => {
            const Icon = tile.icon;
            const isSelected = selectedModel === tile.id;
            return (
              <button
                key={tile.id}
                id={`select-3d-card-${tile.id}`}
                onClick={() => handleSelect(tile.id)}
                className={`snap-start shrink-0 w-[130px] sm:w-auto p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#f5edd9] border-[#966c1e] shadow-md ring-2 ring-[#c59b27]/40 sm:-translate-y-1'
                    : 'bg-[#fffdfa] border-[#c8b38d]/60 hover:border-[#966c1e]/60 hover:bg-[#faf5eb]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      isSelected
                        ? 'bg-[#c59b27] text-[#1a1108] border-[#dfc384]'
                        : 'bg-[#eee4d2] text-[#7a5513] border-[#c8b38d]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#734e10] px-1.5 py-0.5 rounded bg-[#f0e7d5] border border-[#c8b38d]/50 font-medium">
                    {tile.tag}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2a170a] leading-tight mb-0.5">
                    {tile.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#6d5743] font-serif">{tile.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mb-6 sm:mb-8">
        <ThreeArtifactViewer
          modelType={selectedModel}
          audioEnabled={audioEnabled}
          onSelectModel={setSelectedModel}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[#f8f3e6] border border-[#c8b38d] relative z-10 shadow-sm">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#eee4d2] border border-[#c5ad88] flex items-center justify-center text-[#825c14] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#2a170a]">
              Want the full story of this relic?
            </h4>
            <p className="text-xs text-[#4a3828] font-serif">
              Open the archival dossier for provenance and related events.
            </p>
          </div>
        </div>

        <button
          id="btn-open-3d-full-dossier"
          onClick={handleInspectFullDossier}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c59b27] to-[#a87f18] hover:from-[#d6ab32] hover:to-[#b88c22] text-[#180f08] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
        >
          <Maximize2 className="w-4 h-4" />
          <span>Open Full Dossier</span>
        </button>
      </div>
      </div>
    </section>
  );
};
