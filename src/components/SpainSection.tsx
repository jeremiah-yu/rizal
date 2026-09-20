import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Scroll, 
  Award, 
  Users, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Wine,
  Calendar,
  MapPin
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import { FIRST_TRAVELS } from '../data/sourceNarrative';

interface SpainSectionProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const SpainSection: React.FC<SpainSectionProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [activeTab, setActiveTab] = useState<'barcelona' | 'madrid'>('barcelona');
  const [activeMadridPath, setActiveMadridPath] = useState<'medicine' | 'philosophy' | 'organizations'>('medicine');

  return (
    <section 
      id="spain-germany" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
          Iberian Intellectual Crucible (1882–1885)
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Spain: Barcelona & Madrid
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          {FIRST_TRAVELS.spain.summary}
        </p>
      </div>

      {/* City Switcher Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-xl bg-[#1c120a] border border-[#d4af37]/40 shadow-xl">
          <button
            id="tab-btn-barcelona"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setActiveTab('barcelona');
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all ${
              activeTab === 'barcelona'
                ? 'bg-[#d4af37] text-[#180f07] shadow-lg font-black'
                : 'text-[#d6c5b0] hover:text-[#fff] hover:bg-[#2c1d11]'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>BARCELONA (1882)</span>
          </button>

          <button
            id="tab-btn-madrid"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setActiveTab('madrid');
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-serif font-bold uppercase tracking-wider transition-all ${
              activeTab === 'madrid'
                ? 'bg-[#d4af37] text-[#180f07] shadow-lg font-black'
                : 'text-[#d6c5b0] hover:text-[#fff] hover:bg-[#2c1d11]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>MADRID (1882–1885)</span>
          </button>
        </div>
      </div>

      {/* ================= BARCELONA DISPLAY ================= */}
      {activeTab === 'barcelona' && (
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#8b2626]/70 border border-[#8b2626] text-xs font-serif font-bold text-[#fff]">
                  1882
                </span>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#e07a5f]" />
                  Catalonia, Spain
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff5e0] mb-2">
                Barcelona & "Amor Patrio"
              </h3>
              <div className="inline-block px-3 py-1 rounded bg-[#332013] border border-[#d4af37]/40 text-xs text-[#fceda2] font-serif italic mb-6">
                Historic Pen Name: <strong className="text-[#fff]">Laong Laan</strong> (“Ever Prepared”)
              </div>

              <p className="text-sm sm:text-base text-[#ded2be] font-serif leading-relaxed mb-6">
                Arriving in Barcelona in June 1882, Rizal met fellow Filipino expatriates at Plaza de Cataluña. In this atmosphere of Catalan liberal publishing, he wrote his first political manifesto on European soil: <strong>Amor Patrio (Love of Country)</strong>.
              </p>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#c4b5a0] font-serif">
                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#2c1b10] text-[#d4af37] flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#fceda2] block">Publication in Diariong Tagalog (August 20, 1882)</strong>
                    <span>Sent to editor Basilio Teodoro Moran in Manila. Translated into lyrical Tagalog by Marcelo H. del Pilar, uniting the two patriots for the first time in print.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#181008] border border-[#d4af37]/20 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#2c1b10] text-[#d4af37] flex-shrink-0">
                    <Scroll className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#fceda2] block">The Pen Name "Laong Laan"</strong>
                    <span>Chosen to signify his solemn, enduring pledge to the cause of Philippine freedom: "ever prepared" to sacrifice for the motherland.</span>
                  </div>
                </div>
              </div>

              <button
                id="btn-spain-inspect-amor-patrio"
                onClick={() => onOpenArtifact('amor-patrio')}
                className="px-6 py-3 rounded-lg bg-[#8b2626] hover:bg-[#a62f2f] text-[#fff] text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2"
              >
                <Scroll className="w-4 h-4" />
                <span>Inspect "Amor Patrio" Manuscript</span>
              </button>
            </div>

            {/* Right Vignette: Manuscript Reproduction Plate */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-xl p-6 bg-[#f5ecd7] text-[#2b1e15] border-2 border-[#b89758] shadow-2xl relative select-none">
                <div className="text-center border-b border-[#734b1e]/30 pb-3 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#734b1e] font-semibold block">
                    Diariong Tagalog • 20 de Agosto de 1882
                  </span>
                  <h4 className="font-serif font-black text-xl text-[#3d2411]">
                    AMOR PATRIO
                  </h4>
                  <span className="text-xs italic text-[#5c3e24]">
                    Por Laong Laan
                  </span>
                </div>

                <p className="font-serif italic text-xs leading-relaxed text-justify text-[#3a291e] border-b border-[#734b1e]/20 pb-4 mb-4">
                  "El amor á la patria nunca puede borrarse una vez que ha entrado en el corazón, porque lleva en sí una marca divina que lo hace eterno é imperecedero..."
                </p>

                <div className="text-[10px] text-[#734b1e] flex justify-between font-mono">
                  <span>BARCELONA ARCHIVE</span>
                  <span>JUNIO 1882</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= MADRID DISPLAY ================= */}
      {activeTab === 'madrid' && (
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c1209] to-[#120c06] p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#d4af37]/20">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                Interactive University Dossier
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff5e0]">
                Universidad Central de Madrid
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#382414] border border-[#d4af37]/40 text-xs font-serif font-bold text-[#fceda2]">
                1882–1885
              </span>
              <span className="text-xs text-[#a89b88] font-mono">
                Plaza de San Bernardo
              </span>
            </div>
          </div>

          {/* Interactive University Track Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              id="btn-madrid-medicine"
              onClick={() => {
                playPaperRustle(audioEnabled);
                setActiveMadridPath('medicine');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-serif font-bold uppercase tracking-wider border transition-all ${
                activeMadridPath === 'medicine'
                  ? 'bg-[#d4af37] text-[#180f08] border-[#fff] shadow'
                  : 'bg-[#22160d] text-[#c4b5a0] border-[#d4af37]/30 hover:bg-[#342214]'
              }`}
            >
              Licentiate in Medicine (1884)
            </button>

            <button
              id="btn-madrid-philosophy"
              onClick={() => {
                playPaperRustle(audioEnabled);
                setActiveMadridPath('philosophy');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-serif font-bold uppercase tracking-wider border transition-all ${
                activeMadridPath === 'philosophy'
                  ? 'bg-[#d4af37] text-[#180f08] border-[#fff] shadow'
                  : 'bg-[#22160d] text-[#c4b5a0] border-[#d4af37]/30 hover:bg-[#342214]'
              }`}
            >
              Philosophy and Letters (1885)
            </button>

            <button
              id="btn-madrid-organizations"
              onClick={() => {
                playPaperRustle(audioEnabled);
                setActiveMadridPath('organizations');
              }}
              className={`px-4 py-2 rounded-lg text-xs font-serif font-bold uppercase tracking-wider border transition-all ${
                activeMadridPath === 'organizations'
                  ? 'bg-[#d4af37] text-[#180f08] border-[#fff] shadow'
                  : 'bg-[#22160d] text-[#c4b5a0] border-[#d4af37]/30 hover:bg-[#342214]'
              }`}
            >
              Reform Circles & The Brindis Toast
            </button>
          </div>

          {/* Path Detail Body */}
          {activeMadridPath === 'medicine' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4 text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
                <div className="p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/30">
                  <h4 className="text-lg font-serif font-bold text-[#fceda2] mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#d4af37]" />
                    Licentiate in Medicine — June 1884
                  </h4>
                  <p>
                    Rizal completed his degree of <strong>Licenciado en Medicina</strong> on June 21, 1884 from the Universidad Central de Madrid, successfully qualifying him to practice general medicine across the Spanish Empire.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-[#c4b5a0]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                    <span>Completed subjects for the degree of Doctor of Medicine (1884–1885).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                    <span>Did not present his doctoral thesis due to steep diploma and graduation fee expenses, prioritizing practical clinic experience.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#1a1108] border border-[#d4af37]/25 text-center">
                <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Academic Archival Record
                </div>
                <div className="text-lg font-serif font-bold text-[#fff0d1] mb-2">
                  Faculty of Medicine, Madrid
                </div>
                <p className="text-xs text-[#a89b88] mb-4">
                  Transcripts preserved in the Archivo Histórico Nacional demonstrate rigorous training in surgical anatomy, pathology, and therapeutics.
                </p>
                <button
                  id="btn-inspect-madrid-diploma-med"
                  onClick={() => onOpenArtifact('madrid-diploma')}
                  className="px-4 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4e331e] text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider border border-[#d4af37]/40"
                >
                  Inspect Madrid Licentiate Records
                </button>
              </div>
            </div>
          )}

          {activeMadridPath === 'philosophy' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4 text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
                <div className="p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/30">
                  <h4 className="text-lg font-serif font-bold text-[#fceda2] mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#d4af37]" />
                    Licentiate in Philosophy and Letters — June 1885
                  </h4>
                  <p>
                    On June 19, 1885—his 24th birthday—Rizal was conferred the degree of <strong>Licenciado en Filosofía y Letras</strong> with the highest academic distinction: <em>sobresaliente</em> (excellent) across all subjects.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-[#c4b5a0]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                    <span>Excelled in Universal History, Greek, Latin Literature, Hebrew, and Aesthetics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                    <span>Studied under eminent liberal historians such as Don Miguel Morayta.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#1a1108] border border-[#d4af37]/25 text-center">
                <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                  Philosophical Mastery
                </div>
                <div className="text-lg font-serif font-bold text-[#fff0d1] mb-2">
                  Sobresaliente Honors
                </div>
                <p className="text-xs text-[#a89b88] mb-4">
                  This supreme achievement provided the philosophical and rhetorical scaffolding for his masterworks and historical treatises.
                </p>
                <button
                  id="btn-inspect-madrid-diploma-phil"
                  onClick={() => onOpenArtifact('madrid-diploma')}
                  className="px-4 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4e331e] text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider border border-[#d4af37]/40"
                >
                  Inspect Madrid Licentiate Records
                </button>
              </div>
            </div>
          )}

          {activeMadridPath === 'organizations' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
              <div className="p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/30">
                <h4 className="text-lg font-serif font-bold text-[#fceda2] mb-2 flex items-center gap-2">
                  <Wine className="w-5 h-5 text-[#8b2626]" />
                  The Historic Brindis Toast (June 25, 1884)
                </h4>
                <p className="mb-3">
                  At the Hotel Ingles banquet celebrating the gold and silver medals won by Filipino painters Juan Luna (<em>Spoliarium</em>) and Felix Resurreccion Hidalgo (<em>Virgenes Cristianas Expuestas al Populacho</em>) at the Madrid National Exposition of Fine Arts:
                </p>
                <blockquote className="p-3 rounded bg-[#20140c] border-l-4 border-[#d4af37] italic text-[#fceda2]">
                  “Genius knows no country; genius blooms everywhere... Luna and Hidalgo are as much Spanish glories as they are Filipino. Spain is there, where she spreads her benefits!”
                </blockquote>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/20">
                  <span className="font-bold text-[#d4af37] block mb-1">Círculo Hispano-Filipino</span>
                  <span className="text-xs text-[#c4b5a0]">Participated in student meetings discussing colonial reform and contributed poetry ("Me Piden Versos") before the society dissolved due to lack of unity and funds.</span>
                </div>
                <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/20">
                  <span className="font-bold text-[#d4af37] block mb-1">Masonic Lodge Acacia</span>
                  <span className="text-xs text-[#c4b5a0]">Joined Freemasonry in Madrid (Lodge Acacia) to secure support for Philippine freedom against clerical autocracy.</span>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </section>
  );
};
