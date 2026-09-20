import React, { useState } from 'react';
import { MUSEUM_ARTIFACTS } from '../data/artifacts';
import { MuseumArtifact } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  Scroll, 
  FileText, 
  Eye, 
  Newspaper, 
  Search, 
  Calendar, 
  MapPin, 
  Maximize2 
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface ArtifactGalleryProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const ArtifactGallery: React.FC<ArtifactGalleryProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ARTIFACT_CATEGORIES = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'books', label: 'Books & Newspapers' },
    { id: 'manuscripts', label: 'Manuscripts' },
    { id: 'medals', label: 'Medals & Diplomas' },
    { id: 'medical', label: 'Medical Instruments' }
  ];

  const filteredArtifacts = MUSEUM_ARTIFACTS.filter(art => {
    // category filter
    if (filterCategory === 'books' && !art.id.includes('noli') && !art.id.includes('solidaridad')) return false;
    if (filterCategory === 'manuscripts' && !art.id.includes('amor') && !art.id.includes('flores')) return false;
    if (filterCategory === 'medals' && !art.id.includes('medal') && !art.id.includes('diploma')) return false;
    if (filterCategory === 'medical' && !art.id.includes('ophthalmology')) return false;

    // text search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.whatIsThis.toLowerCase().includes(q) ||
        art.location.toLowerCase().includes(q) ||
        art.whyIsItImportant.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getCategoryIcon = (id: string) => {
    if (id.includes('noli')) return BookOpen;
    if (id.includes('solidaridad')) return Newspaper;
    if (id.includes('amor') || id.includes('flores')) return Scroll;
    if (id.includes('medal')) return Award;
    if (id.includes('diploma')) return FileText;
    if (id.includes('ophthalmology')) return Eye;
    return Sparkles;
  };

  return (
    <section 
      id="artifacts" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Curated Reliquary & Material Culture
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Historical Objects Archive
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          Step up to the glass museum showcases. Select any historical artifact to inspect its 3D provenance, material composition, and constitutional significance to Philippine liberty.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-[#1a1109] border border-[#d4af37]/30 rounded-2xl p-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {ARTIFACT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              id={`artifact-filter-${cat.id}`}
              onClick={() => {
                playPaperRustle(audioEnabled);
                setFilterCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif font-semibold transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#d4af37] text-[#180f07] font-bold shadow'
                  : 'bg-[#25170d] text-[#c4b5a0] hover:bg-[#342214] hover:text-[#fff]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8c7b69] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="artifact-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search relics by keyword..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#140c06] border border-[#d4af37]/30 text-[#fff] placeholder-[#6e5d4c] focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArtifacts.map(art => {
          const Icon = getCategoryIcon(art.id);

          return (
            <div
              key={art.id}
              className="group rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#140d07] p-5 shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Artifact Museum Case Box (Glass effect with 3D light) */}
                <div className="relative w-full aspect-video rounded-xl bg-[#110b06] border border-[#d4af37]/25 p-4 flex flex-col items-center justify-center text-center overflow-hidden mb-4 group-hover:border-[#d4af37]/60 transition-colors">
                  {/* Subtle Corner Hardware */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#d4af37]/60" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#d4af37]/60" />
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#d4af37]/60" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#d4af37]/60" />

                  <div className="w-12 h-12 rounded-full bg-[#27190f] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#180f08] transition-all duration-300 shadow">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] text-[#fceda2] font-serif italic truncate max-w-[90%]">
                    {art.badge}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#a89b88] mb-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#d4af37]" />
                    {art.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#e07a5f]" />
                    {art.location.split(',')[0]}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[#fff0d1] leading-snug mb-1 group-hover:text-[#fceda2] transition-colors">
                  {art.title}
                </h3>

                <div className="text-[11px] text-[#c59b27] font-serif italic mb-3 line-clamp-1">
                  {art.subtitle}
                </div>

                <p className="text-xs text-[#c4b5a0] font-serif line-clamp-3 leading-relaxed mb-4">
                  {art.whatIsThis}
                </p>
              </div>

              {/* Action Button */}
              <button
                id={`btn-inspect-artifact-${art.id}`}
                onClick={() => {
                  playMuseumChime(audioEnabled);
                  onOpenArtifact(art.id);
                }}
                className="w-full py-2 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Inspect in 3D Modal</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
