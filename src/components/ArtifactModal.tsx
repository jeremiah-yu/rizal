import React, { useState } from 'react';
import { MuseumArtifact } from '../types';
import { X, ZoomIn, ZoomOut, Compass, BookOpen, Calendar, MapPin, Award, Sparkles, Volume2, Box, Layers } from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import { ThreeArtifactViewer, ModelType } from './ThreeArtifactViewer';

interface ArtifactModalProps {
  artifact: MuseumArtifact | null;
  onClose: () => void;
  audioEnabled?: boolean;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifact, onClose, audioEnabled = true }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [viewMode, setViewMode] = useState<'3d' | 'document'>('3d');

  if (!artifact) return null;

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
    playPaperRustle(audioEnabled);
  };

  // Map artifact id to 3D model
  const get3DModelType = (id: string): ModelType => {
    if (id.includes('filibusterismo') || id.includes('fili')) return 'fili';
    if (id.includes('noli')) return 'noli';
    if (id.includes('medal')) return 'medal';
    if (id.includes('ophthalmology')) return 'ophthalmology';
    if (id.includes('solidaridad')) return 'solidaridad';
    if (id.includes('madrid') || id.includes('diploma')) return 'diploma';
    if (id.includes('surveyor')) return 'compass';
    if (id.includes('amor') || id.includes('flores')) return 'quill';
    return 'noli';
  };

  const modelType = get3DModelType(artifact.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity">
      <div 
        id="museum-artifact-dialog"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto antique-scroll rounded-2xl border border-[#d4af37]/45 bg-gradient-to-b from-[#22170f] via-[#1a120b] to-[#120c07] shadow-2xl p-6 sm:p-8 text-[#e8dfcf]"
      >
        {/* Close Button */}
        <button
          id="close-artifact-modal-button"
          onClick={() => {
            playPaperRustle(audioEnabled);
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#352316] text-[#dfb75c] hover:bg-[#4a3220] hover:text-[#fff8e7] border border-[#d4af37]/30 transition-colors shadow-lg"
          aria-label="Close artifact viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Museum Badge & Category */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pr-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#8b2626]/40 text-[#f5c6a5] border border-[#8b2626]">
              <Award className="w-3.5 h-3.5 text-[#e07a5f]" />
              {artifact.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#c59b27]">
              <Calendar className="w-3.5 h-3.5" />
              {artifact.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#a89b88]">
              <MapPin className="w-3.5 h-3.5" />
              {artifact.location}
            </span>
          </div>

          {/* Mode Switcher: 3D Interactive Model vs Document Plate */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#110a05] border border-[#d4af37]/30 text-xs">
            <button
              onClick={() => {
                playPaperRustle(audioEnabled);
                setViewMode('3d');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-serif font-semibold transition-all ${
                viewMode === '3d'
                  ? 'bg-[#d4af37] text-[#180f08] font-bold shadow'
                  : 'text-[#b8a792] hover:text-[#fff]'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Model (Interactive)</span>
            </button>
            <button
              onClick={() => {
                playPaperRustle(audioEnabled);
                setViewMode('document');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-serif font-semibold transition-all ${
                viewMode === 'document'
                  ? 'bg-[#d4af37] text-[#180f08] font-bold shadow'
                  : 'text-[#b8a792] hover:text-[#fff]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Document Plate</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6] tracking-wide mb-1">
          {artifact.title}
        </h2>
        <p className="text-sm sm:text-base text-[#d4af37] italic font-serif mb-6">
          {artifact.subtitle}
        </p>

        {/* Visual Showcase: 3D Model Mode OR Document Plate Mode */}
        {viewMode === '3d' ? (
          <div className="mb-8">
            <ThreeArtifactViewer
              modelType={modelType}
              audioEnabled={audioEnabled}
              autoHeight={true}
            />
          </div>
        ) : (
          <div className="relative mb-8 rounded-xl overflow-hidden border border-[#d4af37]/30 bg-[#160f09] shadow-inner flex flex-col items-center justify-center p-6 text-center">
            {/* Stylized Historical Document Plate */}
            <div 
              className={`w-full max-w-xl transition-all duration-300 rounded border border-[#b89758]/40 p-6 sm:p-8 bg-[#f5ecd8] text-[#2b1e15] shadow-2xl relative select-none ${
                isZoomed ? 'scale-105 sm:scale-110 shadow-2xl ring-2 ring-[#d4af37]' : ''
              }`}
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), rgba(235,217,180,0.95))'
              }}
            >
              {/* Wax seal ornament in corner */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#8b2626] border-2 border-[#d4af37] shadow-lg flex items-center justify-center text-[#fff] text-[10px] font-serif font-black">
                JR
              </div>

              {/* Decorative Header Border */}
              <div className="border-b border-[#734b1e]/30 pb-3 mb-4 text-center">
                <div className="text-[11px] uppercase tracking-widest text-[#734b1e] font-semibold">
                  Archival Historical Document & Artifact
                </div>
                <div className="text-lg font-serif font-bold text-[#3d2411]">
                  {artifact.title}
                </div>
                <div className="text-xs italic text-[#5c3e24]">
                  {artifact.medium}
                </div>
              </div>

              {/* Simulated Manuscript Excerpt or Emblem */}
              <div className="py-4 px-2 font-serif text-sm leading-relaxed text-[#3a291e] border-y border-dashed border-[#734b1e]/20 text-justify">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#8b2626] italic">
                  "{artifact.whatIsThis.slice(0, 160)}..."
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center text-[10px] text-[#734b1e] font-mono">
                <span>REF: JR-{artifact.id.toUpperCase()}</span>
                <span>HISTORICAL ARCHIVE DEPOSIT</span>
              </div>
            </div>

            {/* Zoom Action Button */}
            <div className="mt-4 flex items-center gap-3">
              <button
                id="toggle-artifact-zoom"
                onClick={handleZoomToggle}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#332215] hover:bg-[#483120] text-[#dfb75c] border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                {isZoomed ? 'Reset View' : 'Zoom Document'}
              </button>
              <span className="text-xs text-[#a89b88] hidden sm:inline">
                Medium: {artifact.medium}
              </span>
            </div>
          </div>
        )}

        {/* 3 Core Historical Inquiries: What is this? Why is it important? Related event */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* 1. What is this? */}
          <div className="rounded-lg p-4 bg-[#261a10]/80 border border-[#d4af37]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] font-serif font-semibold text-base mb-2">
                <BookOpen className="w-4 h-4 text-[#e07a5f]" />
                What is this?
              </div>
              <p className="text-xs sm:text-sm text-[#e0d6c5] leading-relaxed">
                {artifact.whatIsThis}
              </p>
            </div>
          </div>

          {/* 2. Why is it important? */}
          <div className="rounded-lg p-4 bg-[#261a10]/80 border border-[#d4af37]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] font-serif font-semibold text-base mb-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                Why is it important?
              </div>
              <p className="text-xs sm:text-sm text-[#e0d6c5] leading-relaxed">
                {artifact.whyIsItImportant}
              </p>
            </div>
          </div>

          {/* 3. Related event */}
          <div className="rounded-lg p-4 bg-[#261a10]/80 border border-[#d4af37]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] font-serif font-semibold text-base mb-2">
                <Compass className="w-4 h-4 text-[#6aa84f]" />
                Related event
              </div>
              <p className="text-xs sm:text-sm text-[#e0d6c5] leading-relaxed">
                {artifact.relatedEvent}
              </p>
            </div>
          </div>
        </div>

        {/* Curator's Notes */}
        <div className="rounded-lg p-4 bg-[#18110a] border-l-4 border-[#d4af37] text-xs text-[#bfb39e]">
          <span className="font-semibold text-[#d4af37] uppercase tracking-wider block mb-1">
            Curatorial Provenance & Conservation Notes:
          </span>
          {artifact.curatorNotes}
        </div>
      </div>
    </div>
  );
};
