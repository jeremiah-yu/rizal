import React, { useState } from 'react';
import { 
  Eye, 
  PenTool, 
  Sparkles, 
  Printer, 
  BookOpen, 
  User, 
  Calendar, 
  MapPin, 
  Scroll, 
  Award,
  Layers
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import confetti from 'canvas-confetti';
import { FIRST_TRAVELS } from '../data/sourceNarrative';

interface FranceGermanyProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
  reduceMotion: boolean;
}

export const FranceGermany: React.FC<FranceGermanyProps> = ({
  onOpenArtifact,
  audioEnabled,
  reduceMotion
}) => {
  const [activeTab, setActiveTab] = useState<'paris' | 'heidelberg' | 'berlin'>('paris');
  const [pressCount, setPressCount] = useState<number>(0);
  const [isPressing, setIsPressing] = useState<boolean>(false);

  const handlePrintPress = () => {
    setIsPressing(true);
    playMuseumChime(audioEnabled);

    if (!reduceMotion) {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#d4af37', '#fceda2', '#8b2626']
      });
    }

    setTimeout(() => {
      setPressCount(prev => prev + 1);
      setIsPressing(false);
    }, 450);
  };

  return (
    <section 
      id="france-germany" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
          Transcontinental Science & Literature (1885–1887)
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          France & Germany: Medicine, Poetry & Noli Me Tangere
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          {FIRST_TRAVELS.franceGermany.summary}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-xl bg-[#1c120a] border border-[#d4af37]/40 shadow-xl overflow-x-auto max-w-full">
          <button
            id="tab-btn-paris"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setActiveTab('paris');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'paris'
                ? 'bg-[#d4af37] text-[#180f07] shadow-lg font-black'
                : 'text-[#f0e4d0] hover:text-[#fff] hover:bg-[#2c1d11]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>PARIS: DE WECKER</span>
          </button>

          <button
            id="tab-btn-heidelberg"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setActiveTab('heidelberg');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'heidelberg'
                ? 'bg-[#d4af37] text-[#180f07] shadow-lg font-black'
                : 'text-[#f0e4d0] hover:text-[#fff] hover:bg-[#2c1d11]'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>HEIDELBERG: POETRY</span>
          </button>

          <button
            id="tab-btn-berlin"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setActiveTab('berlin');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'berlin'
                ? 'bg-[#8b2626] text-[#fff] shadow-lg font-black border border-[#fceda2]'
                : 'text-[#f0e4d0] hover:text-[#fff] hover:bg-[#2c1d11]'
            }`}
          >
            <Printer className="w-4 h-4 text-[#fceda2]" />
            <span>BERLIN: PRINTING NOLI</span>
          </button>
        </div>
      </div>

      {/* ================= PARIS ================= */}
      {activeTab === 'paris' && (
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#3d85c6]/30 border border-[#3d85c6] text-xs font-serif font-bold text-[#bfe0ff]">
                  Nov 1885 – Feb 1886
                </span>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                  Paris, France (55 Rue du Cherche-Midi)
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff5e0] mb-2">
                Paris: Clinical Apprenticeship under Dr. Louis de Wecker
              </h3>
              
              <div className="text-sm font-serif text-[#d4af37] italic mb-4">
                Specialization Focus: Advanced Ophthalmic Surgery & Cataract Extraction
              </div>

              <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-6">
                To fulfill his filial pledge to cure his mother’s failing eyesight, Rizal became a clinical assistant to <strong>Dr. Louis de Wecker</strong> (1832–1906), a leading authority of modern European ophthalmology.
              </p>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#c4b5a0] font-serif">
                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#3d85c6] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fceda2] block">Intensive Surgical Training</strong>
                    <span>Dr. de Wecker’s busy clinic saw 50 to 100 eye patients daily and performed 10 to 12 delicate intraocular operations every day. Rizal mastered cataract knives and suture techniques.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fceda2] block">Atelier of Juan Luna in Paris</strong>
                    <span>Posed for master painter Juan Luna as an Egyptian priest in "The Death of Cleopatra" and as Chief Sikatuna in the monumental "The Blood Compact" (El Pacto de Sangre).</span>
                  </div>
                </div>
              </div>

              <button
                id="btn-inspect-ophthalmology-kit"
                onClick={() => onOpenArtifact('ophthalmology-kit')}
                className="px-5 py-2.5 rounded-lg bg-[#3a2516] hover:bg-[#4e331e] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#3d85c6]" />
                <span>Inspect 19th-Century Ophthalmic Instruments</span>
              </button>
            </div>

            {/* Right: Simulated Clinical Diagram */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-xl p-6 bg-[#181008] border border-[#d4af37]/30 text-center shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2a1b10] border-2 border-[#3d85c6] flex items-center justify-center text-[#3d85c6]">
                  <Eye className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                  Dr. Louis de Wecker Clinic
                </div>
                <h4 className="font-serif font-bold text-lg text-[#fff0d1] mb-2">
                  Institut Ophtalmique de Paris
                </h4>
                <p className="text-xs text-[#a89b88] font-serif leading-relaxed mb-4">
                  "In ophthalmology Dr. Wecker is one of the leading luminaries in Europe. I can now perform all kinds of operations with steady hand."
                </p>
                <span className="text-[11px] text-[#c59b27] font-mono block">
                  — Rizal's Letter to Family (1886)
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= HEIDELBERG ================= */}
      {activeTab === 'heidelberg' && (
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#6aa84f]/30 border border-[#6aa84f] text-xs font-serif font-bold text-[#b2e59e]">
                  Feb – Aug 1886
                </span>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                  Heidelberg & Wilhelmsfeld, Germany
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff5e0] mb-2">
                Heidelberg: Dr. Otto Becker & Romantic Poetry
              </h3>

              {/* Animated Handwriting for the Poem Title */}
              <div className="my-4 p-4 rounded-xl bg-[#181008] border border-[#d4af37]/40">
                <div className="text-[10px] uppercase tracking-widest text-[#a89b88] font-mono mb-1">
                  Poetic Masterpiece (April 22, 1886)
                </div>
                <div className="font-serif italic text-2xl sm:text-3xl text-[#fceda2] tracking-wider py-1 border-b border-dashed border-[#d4af37]/30">
                  <span className="animate-pulse">✍️</span> “A las Flores de Heidelberg”
                </div>
                <p className="text-xs text-[#c4b5a0] font-serif italic mt-2">
                  (To the Flowers of Heidelberg — Written along the banks of the Neckar River)
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-6">
                In Heidelberg, Rizal attended lectures at the venerable university and worked at the Augenklinik directed by <strong>Dr. Otto Becker</strong> (1828–1890). During his walks along the Neckar River, the sight of blooming forget-me-nots moved him to write his immortal prayer for his homeland.
              </p>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#c4b5a0] font-serif">
                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#6aa84f] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fceda2] block">University Eye Clinic (Augenklinik)</strong>
                    <span>Studied ophthalmic diagnostics and surgical procedures under Dr. Becker and observed Wilhelm Kuehne's physiological research.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <Scroll className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fceda2] block">Pastor Karl Ullmer in Wilhelmsfeld</strong>
                    <span>Lived for three months with a Protestant vicarage family, observing practical religious tolerance between Catholic and Protestant villagers.</span>
                  </div>
                </div>
              </div>

              <button
                id="btn-inspect-flores-poem"
                onClick={() => onOpenArtifact('flores-heidelberg')}
                className="px-5 py-2.5 rounded-lg bg-[#3a2516] hover:bg-[#4e331e] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Scroll className="w-4 h-4 text-[#d4af37]" />
                <span>Inspect "A las Flores de Heidelberg" Manuscript</span>
              </button>
            </div>

            {/* Right: Neckar River Poem Excerpt Plate */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-xl p-6 bg-[#f5ecd7] text-[#2b1e15] border-2 border-[#b89758] shadow-2xl relative select-none">
                <div className="text-center border-b border-[#734b1e]/30 pb-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#734b1e] font-semibold">
                    Neckar River, Heidelberg • April 1886
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#3d2411] italic">
                    A las Flores de Heidelberg
                  </h4>
                </div>

                <p className="font-serif italic text-xs leading-relaxed text-justify text-[#3a291e] border-b border-[#734b1e]/20 pb-3 mb-3">
                  "Llevad, llevad, ¡oh flores!, á mi suelo,
                  gratos recuerdos del viajero errante,
                  haced que allí por mi adorada tierra
                  vuestro aroma respire..."
                </p>

                <div className="text-[10px] text-[#734b1e] text-center font-mono">
                  HISTORISCHES ARCHIV HEIDELBERG
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= BERLIN & PRINTING PRESS ================= */}
      {activeTab === 'berlin' && (
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#8b2626] border border-[#fceda2] text-xs font-serif font-bold text-[#fff]">
                  March 1887
                </span>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                  Berlin, Germany
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff5e0] mb-2">
                Berlin: The Historic Printing of "Noli Me Tangere"
              </h3>

              <div className="text-sm font-serif text-[#d4af37] italic mb-4">
                Berliner Buchdruckerei-Action-Gesellschaft • 2,000 Copies Printed
              </div>

              <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-4">
                In Berlin, Rizal gained entry to top scientific circles under legendary pathologist <strong>Dr. Rudolf Virchow</strong>. But facing freezing poverty and near starvation, he came close to burning the manuscript of <em>Noli Me Tangere</em>.
              </p>

              {/* Maximo Viola Financial Savior Card */}
              <div className="p-4 rounded-xl bg-[#26160d] border border-[#d4af37]/40 mb-6 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#fceda2] uppercase tracking-wider mb-1">
                  <User className="w-4 h-4 text-[#d4af37]" />
                  Dr. Maximo Viola: Savior of the "Noli"
                </div>
                <p className="text-xs text-[#ded2be] font-serif leading-relaxed">
                  His wealthy friend from San Miguel, Bulacan, <strong>Dr. Maximo Viola</strong>, arrived in Berlin. Shocked to find Rizal ill and starving, Viola loaned him <strong>300 pesos</strong> to pay for printing 2,000 copies and provided living expenses. In gratitude, Rizal presented Viola with the first printed copy and the galley pen.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  id="btn-inspect-noli-first-edition"
                  onClick={() => onOpenArtifact('noli-me-tangere')}
                  className="px-5 py-2.5 rounded-lg bg-[#8b2626] hover:bg-[#a62f2f] text-[#fff] text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Inspect First Edition "Noli"</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Animated Printing Press */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-md rounded-2xl bg-[#170f08] border-2 border-[#d4af37]/40 p-6 text-center shadow-2xl relative overflow-hidden">
                
                {/* Mechanical Press Header */}
                <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Historical Hand Press Simulation
                </div>
                <h4 className="font-serif font-bold text-xl text-[#fff0d1] mb-4">
                  Berliner Buchdruckerei (1887)
                </h4>

                {/* Animated Press Illustration Machine */}
                <div className="relative w-full h-44 bg-[#22150c] rounded-xl border border-[#d4af37]/20 flex flex-col items-center justify-center p-4 overflow-hidden mb-4 shadow-inner">
                  {/* Movable Platens */}
                  <div 
                    className={`w-32 h-6 bg-gradient-to-r from-[#44301d] via-[#8c673e] to-[#44301d] rounded border border-[#d4af37]/50 shadow transition-transform duration-300 ${
                      isPressing ? 'translate-y-6 scale-95' : 'translate-y-0'
                    }`}
                  >
                    <span className="text-[9px] uppercase font-mono text-[#fceda2] block mt-0.5">
                      LETTERPRESS PLATEN
                    </span>
                  </div>

                  {/* Bed & Paper Output */}
                  <div className="mt-6 w-40 h-16 bg-[#f5ecd7] text-[#2b1e15] border border-[#734b1e] rounded shadow flex flex-col items-center justify-center p-2 transform -rotate-1">
                    <span className="text-[9px] font-black tracking-widest uppercase text-[#8b2626]">
                      NOLI ME TANGERE
                    </span>
                    <span className="text-[8px] font-serif text-[#3d2411]">
                      Jose Rizal • Berlin 1887
                    </span>
                    <span className="text-[7px] text-[#734b1e] font-mono mt-1">
                      MARCH 1887 • BERLIN PRINT
                    </span>
                  </div>

                  {/* Pressure Levers */}
                  <div className="absolute top-2 right-4 text-[10px] font-mono text-[#c59b27]">
                    COPIES STRUCK: {2000 + pressCount}
                  </div>
                </div>

                {/* Lever Button to Print */}
                <button
                  id="btn-pull-printing-press-lever"
                  onClick={handlePrintPress}
                  disabled={isPressing}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#fceda2] to-[#aa821c] text-[#1a1108] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4 text-[#1a1108]" />
                  <span>Pull Printing Press Lever</span>
                </button>

                <span className="block mt-2 text-[10px] text-[#a89b88] italic">
                  Click to strike an archival letterpress sheet from the March 1887 run.
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
