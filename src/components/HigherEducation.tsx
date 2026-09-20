import React, { useState } from 'react';
import { 
  FORMAL_EDUCATION_DATA, 
  MEDICAL_TRAINING_DATA, 
  SELF_DIRECTED_LEARNING_DATA 
} from '../data/education';
import { HIGHER_EDUCATION } from '../data/sourceNarrative';
import { 
  GraduationCap, 
  Eye, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Sparkles, 
  Compass, 
  Languages, 
  Palette, 
  Microscope,
  FileCheck
} from 'lucide-react';
import { playPaperRustle } from '../utils/audio';

interface HigherEducationProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const HigherEducation: React.FC<HigherEducationProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [expandedSection, setExpandedSection] = useState<'formal' | 'medical' | 'self-directed' | null>('formal');

  const toggleSection = (section: 'formal' | 'medical' | 'self-directed') => {
    playPaperRustle(audioEnabled);
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section 
      id="higher-education" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
          Polymathic Archive & Academic Registry
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          The Knowledge Archive: Higher Education
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          {HIGHER_EDUCATION.intro} {HIGHER_EDUCATION.closing}
        </p>
      </div>

      {/* Accordion / Expandable Dossiers */}
      <div className="space-y-6">
        
        {/* ================= 1. FORMAL EDUCATION ================= */}
        <div className="rounded-2xl border border-[#d4af37]/35 bg-gradient-to-b from-[#22160d] via-[#1a1109] to-[#120c06] overflow-hidden shadow-xl transition-all">
          <button
            id="accordion-btn-formal"
            onClick={() => toggleSection('formal')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-[#2c1d12] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#362315] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Category I • Classical & University Curriculum
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff5e0]">
                  FORMAL EDUCATION
                </h3>
                <span className="text-xs text-[#b8a792]">
                  Ateneo Municipal de Manila • University of Santo Tomas • Universidad Central de Madrid
                </span>
              </div>
            </div>

            <div className="p-2 rounded-full bg-[#2a1b10] border border-[#d4af37]/30 text-[#d4af37]">
              {expandedSection === 'formal' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {expandedSection === 'formal' && (
            <div className="p-6 sm:p-8 pt-0 border-t border-[#d4af37]/20 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FORMAL_EDUCATION_DATA.map((entry, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#160e08] border border-[#d4af37]/30 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono text-[#e07a5f] uppercase tracking-wider">
                          {entry.period}
                        </span>
                        <span className="text-[10px] text-[#a89b88]">
                          {entry.location}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#fff0d1] mb-2">
                        {entry.institution}
                      </h4>

                      <div className="space-y-1 mb-3">
                        {entry.degrees.map((deg, dIdx) => (
                          <div key={dIdx} className="text-xs font-semibold text-[#d4af37] flex items-center gap-1">
                            <FileCheck className="w-3 h-3 text-[#d4af37]" />
                            <span>{deg}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-[#c4b5a0] font-serif leading-relaxed mb-4">
                        {entry.historicalNotes}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#d4af37]/20 text-[11px] text-[#a89b88]">
                      <strong>Distinctions:</strong> {entry.achievements[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= 2. MEDICAL TRAINING ================= */}
        <div className="rounded-2xl border border-[#d4af37]/35 bg-gradient-to-b from-[#22160d] via-[#1a1109] to-[#120c06] overflow-hidden shadow-xl transition-all">
          <button
            id="accordion-btn-medical"
            onClick={() => toggleSection('medical')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-[#2c1d12] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#362315] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Category II • Specialized European Preceptors
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff5e0]">
                  MEDICAL TRAINING
                </h3>
                <span className="text-xs text-[#b8a792]">
                  Paris (Dr. Louis de Wecker) • Heidelberg (Dr. Otto Becker)
                </span>
              </div>
            </div>

            <div className="p-2 rounded-full bg-[#2a1b10] border border-[#d4af37]/30 text-[#d4af37]">
              {expandedSection === 'medical' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {expandedSection === 'medical' && (
            <div className="p-6 sm:p-8 pt-0 border-t border-[#d4af37]/20 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MEDICAL_TRAINING_DATA.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#160e08] border border-[#d4af37]/30">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-serif font-bold text-[#fceda2]">
                        {item.city}
                      </span>
                      <span className="text-[10px] font-mono text-[#a89b88]">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-serif font-semibold text-[#d4af37] mb-1">
                      Preceptor: {item.preceptor}
                    </div>
                    <div className="text-xs text-[#a89b88] mb-4">
                      {item.institution}
                    </div>

                    <ul className="space-y-2">
                      {item.details.map((det, dIdx) => (
                        <li key={dIdx} className="text-xs text-[#ded2be] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= 3. SELF-DIRECTED LEARNING ================= */}
        <div className="rounded-2xl border border-[#d4af37]/35 bg-gradient-to-b from-[#22160d] via-[#1a1109] to-[#120c06] overflow-hidden shadow-xl transition-all">
          <button
            id="accordion-btn-self-directed"
            onClick={() => toggleSection('self-directed')}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-[#2c1d12] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#362315] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Category III • Polymathic Pursuits & Scientific Disciplines
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff5e0]">
                  SELF-DIRECTED LEARNING
                </h3>
                <span className="text-xs text-[#b8a792]">
                  Languages • Literature • Sculpture • Painting • Engineering • Natural Sciences
                </span>
              </div>
            </div>

            <div className="p-2 rounded-full bg-[#2a1b10] border border-[#d4af37]/30 text-[#d4af37]">
              {expandedSection === 'self-directed' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {expandedSection === 'self-directed' && (
            <div className="p-6 sm:p-8 pt-0 border-t border-[#d4af37]/20 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SELF_DIRECTED_LEARNING_DATA.map((discipline, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#160e08] border border-[#d4af37]/25 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#fceda2] mb-1">
                        {discipline.category}
                      </h4>
                      <div className="text-[11px] text-[#dfb75c] italic mb-2">
                        {discipline.subtitle}
                      </div>
                      <p className="text-xs text-[#c4b5a0] leading-relaxed mb-3">
                        {discipline.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#d4af37]/15">
                      <span className="text-[10px] text-[#8c7b69] uppercase font-mono block mb-1">
                        Exemplars & Works:
                      </span>
                      <ul className="text-[11px] text-[#ded2be] space-y-1">
                        {discipline.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="truncate">• {ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
