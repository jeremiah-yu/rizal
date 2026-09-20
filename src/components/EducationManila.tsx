import React, { useState } from 'react';
import { 
  GraduationCap, 
  Book, 
  Award, 
  FileText, 
  Compass, 
  Scroll, 
  Eye, 
  Scale, 
  AlertCircle, 
  CheckCircle, 
  X,
  Sparkles,
  Building
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import { EDUCATION_MANILA } from '../data/sourceNarrative';

interface EducationManilaProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

export const EducationManila: React.FC<EducationManilaProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [selectedAteneoObject, setSelectedAteneoObject] = useState<string>('building');
  const [showAteneoModal, setShowAteneoModal] = useState<boolean>(false);
  const [selectedAbroadReason, setSelectedAbroadReason] = useState<number>(0);

  const ATENEO_OBJECTS = [
    {
      id: 'building',
      name: 'Ateneo School Campus',
      icon: Building,
      title: 'Ateneo Municipal de Manila (Intramuros)',
      desc: 'Administered by the Society of Jesus (Jesuits) since 1859. The school stood in Intramuros near the walls facing Manila Bay, providing a structured, modern humanist curriculum divided into the Roman and Carthaginian empires.',
      significance: 'Offered an orderly, progressive environment that fostered Rizal’s discipline, classical languages, and scientific inquiry.'
    },
    {
      id: 'books',
      name: 'Classical Books & Poetry',
      icon: Book,
      title: 'Humanities, Rhetoric & Early Poetry',
      desc: 'Rizal studied classical literature under Fr. Francisco de Paula Sanchez, who inspired him to write verses. Authored "Mi Primera Inspiración", "Felicitation", and "Por la Educación Recibe Lustre la Patria".',
      significance: 'Laid the foundation for his literary eloquence and poetic expression in Spanish.'
    },
    {
      id: 'medals',
      name: 'Five Sobresaliente Medals',
      icon: Award,
      title: 'Academic Medals of Supreme Distinction',
      desc: 'Won five first-prize medals in Latin, Spanish, Greek, rhetoric, and natural sciences. Consistently maintained the highest scholastic rating of "sobresaliente" throughout his five-year stay.',
      significance: 'Proved Filipino intellectual equality with peninsular Spaniards, defeating prejudices.'
    },
    {
      id: 'certificate',
      name: 'Graduation Certificate',
      icon: FileText,
      title: 'Bachiller en Artes (March 23, 1877)',
      desc: 'Conferred the degree of Bachelor of Arts with highest honors at age sixteen. The curriculum included philosophy, physics, chemistry, natural history, and mathematics.',
      significance: 'Completed his secondary education with highest honors before entering university.'
    },
    {
      id: 'notes',
      name: 'Handwritten Notes & Artwork',
      icon: Scroll,
      title: 'Sculpture & Literary Manuscripts',
      desc: 'Under master sculptor Romualdo de Jesus, carved the Sacred Heart of Jesus from batikuling wood at age 14. Studied painting under Don Agustin Saez.',
      significance: 'Exemplified polymathic balance: uniting visual arts with intellectual brilliance.'
    }
  ];

  const ABROAD_REASONS = [
    {
      id: 'discrimination',
      title: '1. Obsolete & Hostile Dominican Scholasticism',
      badge: 'Academic Atmosphere',
      desc: 'At UST, Rizal encountered scholastic rigidity and hostility from Dominican professors who treated Filipino students as racial inferiors. Laboratory instruments in physics and chemistry were locked behind glass cabinets strictly for display rather than hands-on student experimentation (as later satirized in Chapter 13 of El Filibusterismo, "The Class in Physics").'
    },
    {
      id: 'mother-eyesight',
      title: '2. Filial Devotion: Healing His Mother’s Eyes',
      badge: 'Medical Calling',
      desc: 'His beloved mother, Doña Teodora Alonso Realonda, was going blind due to advanced cataracts. To acquire the world’s most advanced surgical techniques in ophthalmology—techniques unavailable in the Philippines—Rizal needed to train directly under European masters in Paris and Germany.'
    },
    {
      id: 'secret-mission',
      title: '3. The Secret Mission of Political Enlightenment',
      badge: 'Patriotic Duty',
      desc: 'Conceived in secret collaboration with his elder brother Paciano and uncle Antonio Rivera, Rizal sailed to Spain to keenly observe European life, laws, administration, and freedoms, in order to prepare himself to liberate his oppressed countrymen from colonial bondage.'
    }
  ];

  return (
    <section 
      id="manila-education" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Visual Transition into Historical Manila */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
          Historical Manila (1872–1882)
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-4">
          Rizal's Education in Manila
        </h2>
        <p className="text-base sm:text-lg text-[#ded2be] font-serif max-w-3xl mx-auto leading-relaxed">
          {EDUCATION_MANILA.intro}
        </p>
      </div>

      {/* Two Historic Locations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* ================= ATENEO MUNICIPAL DE MANILA ================= */}
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c120a] to-[#140e09] p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Secondary & Classical Education
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6]">
                  Ateneo Municipal de Manila
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#3d2716] border border-[#d4af37]/40 text-xs font-serif font-bold text-[#fceda2]">
                1872–1877
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#c8b9a6] leading-relaxed mb-6 font-serif">
              {EDUCATION_MANILA.ateneo.summary}
            </p>

            {/* Core Institutional Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
              <div className="p-3 rounded-lg bg-[#181009] border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-bold block mb-1">Jesuit Education</span>
                <span className="text-[#a89b88]">Ratio Studiorum system dividing class into Roman and Carthaginian empires.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181009] border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-bold block mb-1">“Sobresaliente”</span>
                <span className="text-[#a89b88]">Highest rating across Latin, Spanish, Greek, rhetoric, and sciences.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181009] border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-bold block mb-1">Medals of Merit</span>
                <span className="text-[#a89b88]">Five first-prize medals in religion, languages, and classical studies.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#181009] border border-[#d4af37]/20">
                <span className="text-[#d4af37] font-bold block mb-1">Bachelor of Arts (1877)</span>
                <span className="text-[#a89b88]">Conferred Bachiller en Artes with supreme academic honors.</span>
              </div>
            </div>

            {/* Interactive Objects Bar */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#c59b27] mb-2">
                Click Interactive Historical Objects:
              </div>
              <div className="flex flex-wrap gap-2">
                {ATENEO_OBJECTS.map(obj => {
                  const Icon = obj.icon;
                  const isSelected = selectedAteneoObject === obj.id;
                  return (
                    <button
                      key={obj.id}
                      id={`btn-ateneo-obj-${obj.id}`}
                      onClick={() => {
                        playPaperRustle(audioEnabled);
                        setSelectedAteneoObject(obj.id);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        isSelected
                          ? 'bg-[#d4af37] text-[#1a1108] border-[#fff] shadow-md font-bold'
                          : 'bg-[#291b10] text-[#d6c5b0] border-[#d4af37]/30 hover:bg-[#382516]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{obj.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Object Detail Box */}
              {(() => {
                const currentObj = ATENEO_OBJECTS.find(o => o.id === selectedAteneoObject)!;
                return (
                  <div className="mt-3 p-4 rounded-lg bg-[#160f09] border border-[#d4af37]/30 shadow-inner">
                    <div className="text-xs font-serif font-bold text-[#fceda2] mb-1">
                      {currentObj.title}
                    </div>
                    <p className="text-xs text-[#c4b5a0] leading-relaxed mb-2">
                      {currentObj.desc}
                    </p>
                    <div className="text-[11px] text-[#dfb75c] italic">
                      Significance: {currentObj.significance}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Explore Ateneo Button */}
          <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
            <button
              id="btn-explore-ateneo-modal"
              onClick={() => {
                playMuseumChime(audioEnabled);
                setShowAteneoModal(true);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#3d2716] hover:bg-[#52341e] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>EXPLORE ATENEO</span>
            </button>

            <button
              id="btn-inspect-ateneo-medal"
              onClick={() => onOpenArtifact('ateneo-medal')}
              className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-serif"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Inspect Medal Artifact →</span>
            </button>
          </div>
        </div>

        {/* ================= UNIVERSITY OF SANTO TOMAS ================= */}
        <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#25180f] via-[#1c120a] to-[#140e09] p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Collegiate & Professional Paths
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6]">
                  University of Santo Tomas
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#3d2716] border border-[#d4af37]/40 text-xs font-serif font-bold text-[#fceda2]">
                1877–1882
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#c8b9a6] leading-relaxed mb-6 font-serif">
              {EDUCATION_MANILA.ust.summary}
            </p>

            {/* Two Paths Visualization: Philosophy & Letters -> Medicine */}
            <div className="mb-6 p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/30">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#c59b27] mb-3 text-center">
                Academic Trajectory at Santo Tomas
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                {/* Path 1 */}
                <div className="p-3 rounded-lg bg-[#27190f] border border-[#d4af37]/30 text-center">
                  <span className="text-[11px] text-[#e07a5f] font-mono block">1877 – 1878</span>
                  <span className="text-sm font-serif font-bold text-[#fceda2] block mt-0.5">
                    Philosophy & Letters
                  </span>
                  <span className="text-[11px] text-[#a89b88] mt-1 block">
                    Studied cosmology, metaphysics, theodicy, and history of philosophy following father’s wishes.
                  </span>
                </div>

                {/* Path 2 */}
                <div className="p-3 rounded-lg bg-[#27190f] border border-[#d4af37]/30 text-center">
                  <span className="text-[11px] text-[#6aa84f] font-mono block">1878 – 1882</span>
                  <span className="text-sm font-serif font-bold text-[#fceda2] block mt-0.5">
                    Medicine
                  </span>
                  <span className="text-[11px] text-[#a89b88] mt-1 block">
                    Shifted to medicine after learning his mother was losing her eyesight to cataracts.
                  </span>
                </div>
              </div>
            </div>

            {/* Concurrent Vocational Track: Land Surveying */}
            <div className="mb-6 p-3.5 rounded-lg bg-[#23170e] border border-[#d4af37]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#352316] text-[#d4af37]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#fff0d1] font-serif">
                    Perito Agrimensor y Tasador de Tierras
                  </div>
                  <div className="text-[11px] text-[#c4b5a0]">
                    Surveying & expert assessing title passed at Ateneo in 1877 (issued 1881).
                  </div>
                </div>
              </div>
              <button
                id="btn-inspect-surveyor-diploma"
                onClick={() => onOpenArtifact('surveyor-diploma')}
                className="px-2.5 py-1 text-[11px] rounded bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] border border-[#d4af37]/40 transition-colors"
              >
                Inspect
              </button>
            </div>

            {/* Why Rizal Continued Education Abroad: Interactive Visual */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#c59b27] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#e07a5f]" />
                Why Rizal Continued His Education Abroad:
              </div>

              <div className="flex gap-1.5">
                {ABROAD_REASONS.map((reason, rIdx) => (
                  <button
                    key={reason.id}
                    id={`btn-abroad-reason-${reason.id}`}
                    onClick={() => {
                      playPaperRustle(audioEnabled);
                      setSelectedAbroadReason(rIdx);
                    }}
                    className={`flex-1 py-1.5 px-2 text-[10px] font-semibold rounded border transition-all ${
                      selectedAbroadReason === rIdx
                        ? 'bg-[#8b2626]/70 text-[#fff] border-[#f5c6a5]'
                        : 'bg-[#22160d] text-[#a89b88] border-[#44301f] hover:text-[#d6c5b0]'
                    }`}
                  >
                    Reason {rIdx + 1}
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-[#181009] border border-[#8b2626]/40 text-xs text-[#c4b5a0] leading-relaxed">
                <div className="font-serif font-bold text-[#f5c6a5] mb-1">
                  {ABROAD_REASONS[selectedAbroadReason].title}
                </div>
                <p>{ABROAD_REASONS[selectedAbroadReason].desc}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#d4af37]/20 flex justify-end">
            <span className="text-[11px] text-[#a89b88] italic">
              Rizal secretly sailed for Spain on May 3, 1882 aboard the SS Salvadora.
            </span>
          </div>
        </div>

      </div>

      {/* Deep-Dive Modal for "EXPLORE ATENEO" (without leaving the page) */}
      {showAteneoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto antique-scroll rounded-xl border border-[#d4af37]/50 bg-gradient-to-b from-[#25180f] to-[#120c07] p-6 text-[#e8dfcf] shadow-2xl">
            <button
              onClick={() => {
                playPaperRustle(audioEnabled);
                setShowAteneoModal(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#352316] text-[#dfb75c] hover:bg-[#483120] border border-[#d4af37]/30"
              aria-label="Close Ateneo exploration"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              Archival Monograph
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#fff2d6] mb-2">
              Ateneo Municipal de Manila: Deep Historical Dossier
            </h3>
            <p className="text-xs text-[#c59b27] italic font-serif mb-6">
              Jesuit Classical Curriculum, Pedagogical System, and Student Life (1872–1877)
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#d1c2ae] leading-relaxed">
              <div className="p-4 rounded-lg bg-[#1a1109] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  1. The Jesuit System of Empires
                </h4>
                <p>
                  To stimulate classroom enthusiasm, students were divided into two opposing armies: the <em>Roman Empire</em> (boarders or internos) and the <em>Carthaginian Empire</em> (day-scholars or externos). Each empire had its hierarchy of banners and offices: Emperor, Tribune, Decurion, Centurion, and Standard-Bearer. Starting as a bottom externo, young Jose rose to become the <strong>Emperor of the Carthaginians</strong> in his first month.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1109] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  2. Mentorship of Father Francisco de Paula Sanchez, S.J.
                </h4>
                <p>
                  Of all his professors, Rizal treasured Father Sanchez the most, describing him as a model of rectitude, solicitude, and affection. Father Sanchez recognized Rizal’s literary and poetic genius, guiding him through Spanish versification, rhetoric, and classical philosophy.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1109] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  3. Early Literary Works Produced at Ateneo
                </h4>
                <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
                  <li><strong>Mi Primera Inspiración (My First Inspiration)</strong> — Dedicated to his mother on her birthday.</li>
                  <li><strong>Por la Educación Recibe Lustre la Patria</strong> — Celebrated education as the pillar of national enlightenment.</li>
                  <li><strong>Alianza Íntima entre la Religión y la Buena Educación</strong> — Reflected Jesuit pedagogical harmony.</li>
                  <li><strong>San Eustakio, Martir</strong> — Classical verse drama composed during his vacation in Calamba.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#1a1109] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  4. Conferment of Bachiller en Artes (March 23, 1877)
                </h4>
                <p>
                  At sixteen, Rizal graduated at the head of his class with supreme honors (sobresaliente) in every subject. On the eve of graduation, he wrote in his student memoirs: <em>"I spent the night praying, commending my future to God... I was leaving that peaceful haven to venture out into the stormy sea of the world."</em>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/30 flex justify-end">
              <button
                onClick={() => setShowAteneoModal(false)}
                className="px-5 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider border border-[#d4af37]/40"
              >
                Return to Exhibition
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
