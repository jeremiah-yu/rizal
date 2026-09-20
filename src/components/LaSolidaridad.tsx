import React, { useState } from 'react';
import { 
  Newspaper, 
  BookOpen, 
  RotateCw, 
  ZoomIn, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Calendar, 
  FileText, 
  User, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';

interface LaSolidaridadProps {
  onOpenArtifact: (id: string) => void;
  audioEnabled: boolean;
}

interface NewspaperArticle {
  id: string;
  titleSpanish: string;
  titleEnglish: string;
  issueDate: string;
  penName: string;
  synopsis: string;
  fullExcerpt: string;
  significance: string;
}

const SOLIDARIDAD_ARTICLES: NewspaperArticle[] = [
  {
    id: 'filipinas-dentro-cien-anos',
    titleSpanish: 'Filipinas dentro de cien años',
    titleEnglish: 'The Philippines a Century Hence',
    issueDate: 'Sept 30, 1889 – Feb 1, 1890 (Four Issues)',
    penName: 'Dr. Jose Rizal',
    synopsis: 'A brilliant geopolitical essay analyzing Spain’s past abuses and prophesying the inevitable awakening, revolution, and eventual independence of the Philippines, along with the potential entry of the United States.',
    fullExcerpt: '“To govern people who do not think is easy, but to govern men who think and feel is impossible if not done with justice and enlightenment. Either Spain concedes the needed reforms, or the Philippines will inevitably declare herself independent after soaking herself in blood...”',
    significance: 'Accurately predicted the 1896 Philippine Revolution and the 1898 American intervention nearly a decade before they transpired.'
  },
  {
    id: 'indolencia-filipinos',
    titleSpanish: 'Sobre la indolencia de los filipinos',
    titleEnglish: 'On the Indolence of the Filipinos',
    issueDate: 'July 15 – Sept 15, 1890 (Five Issues)',
    penName: 'Dr. Jose Rizal',
    synopsis: 'An exhaustive scholarly defense refuting Spanish colonial charges that Filipinos were inherently lazy. Rizal proved that pre-colonial Filipinos engaged in vigorous commerce, farming, and mining, and that so-called "indolence" was the direct result of tropical climate, forced labor (polo), galleon monopolies, friar estates, and lack of incentive.',
    fullExcerpt: '“A man in the Philippines is only an individual; he is not a member of a nation. Deprive a man of his dignity, and you not only deprive him of his moral strength but also make him useless even for the purposes that you wish him to serve.”',
    significance: 'Historic sociological treatise defending indigenous labor and exposing colonial economic exploitation.'
  },
  {
    id: 'la-verdad-para-todos',
    titleSpanish: 'La Verdad para Todos',
    titleEnglish: 'The Truth for All',
    issueDate: 'May 31, 1889',
    penName: 'Laong Laan',
    synopsis: 'Rizal’s first article published in La Solidaridad, denouncing the corrupt provincial administrators, militarization of peaceful towns, and friar manipulation of government officials.',
    fullExcerpt: '“Truth does not require gold nor power to triumph; it needs only to be spoken to make tyrants tremble in their palaces.”',
    significance: 'Marked Rizal’s formal literary baptism into the official organ of the Propaganda Movement.'
  },
  {
    id: 'sin-nombre',
    titleSpanish: 'Sin Nombre',
    titleEnglish: 'Without a Name',
    issueDate: 'Feb 28, 1890',
    penName: 'Dimasalang',
    synopsis: 'Satirical exposé on the arrest and harassment of Filipino liberals and their families in Manila without formal charges or trial.',
    fullExcerpt: '“When justice is sold, when the law is a snare, when innocence is a crime, who can guarantee the security of the citizen?”',
    significance: 'Highlighted the absence of constitutional rights and due process in the archipelago.'
  }
];

export const LaSolidaridad: React.FC<LaSolidaridadProps> = ({
  onOpenArtifact,
  audioEnabled
}) => {
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [selectedArticle, setSelectedArticle] = useState<NewspaperArticle | null>(null);
  const [newspaperTilt, setNewspaperTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setNewspaperTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setNewspaperTilt({ x: 0, y: 0 });
  };

  const handleNextPage = () => {
    playPaperRustle(audioEnabled);
    setActivePageIndex(prev => (prev === 0 ? 1 : 0));
  };

  const handleOpenArticle = (article: NewspaperArticle) => {
    playMuseumChime(audioEnabled);
    setSelectedArticle(article);
  };

  return (
    <section 
      id="solidaridad" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Newspaper className="w-3.5 h-3.5 text-[#d4af37]" />
          The Voice of Philippine Reform
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          La Solidaridad: The Interactive 3D Gazette
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          Examine the official biweekly organ of the Propaganda Movement. Rotate, turn pages, and read the immortal treatises penned by Jose Rizal under his pen names <em>Laong Laan</em> and <em>Dimasalang</em>.
        </p>
      </div>

      {/* Main Interactive 3D Newspaper Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        
        {/* Left Column: Historical Newspaper Metadata & Editors */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-[#19110a] border border-[#d4af37]/30 shadow-xl">
            <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              Publication Profile
            </div>
            <h3 className="font-serif font-bold text-xl text-[#fff0d1] mb-1">
              LA SOLIDARIDAD
            </h3>
            <div className="text-xs italic text-[#dfb75c] font-serif mb-4">
              “Quincenario democrático y de los intereses filipinos”
            </div>

            <div className="space-y-3 text-xs text-[#c4b5a0] font-serif">
              <div className="flex justify-between py-1 border-b border-[#d4af37]/15">
                <span className="text-[#8c7b69]">First Issue:</span>
                <span className="text-[#fceda2] font-semibold">February 15, 1889 (Barcelona)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#d4af37]/15">
                <span className="text-[#8c7b69]">Transfer to Madrid:</span>
                <span className="text-[#fceda2] font-semibold">November 15, 1889</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#d4af37]/15">
                <span className="text-[#8c7b69]">First Editor:</span>
                <span className="text-[#fff0d1]">Graciano Lopez Jaena</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#d4af37]/15">
                <span className="text-[#8c7b69]">Successive Editor:</span>
                <span className="text-[#fff0d1]">Marcelo H. del Pilar (Plaridel)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8c7b69]">Rizal’s Pen Names:</span>
                <span className="text-[#e07a5f] font-mono font-bold">Laong Laan • Dimasalang</span>
              </div>
            </div>
          </div>

          {/* Interactive Controls for 3D View */}
          <div className="p-4 rounded-xl bg-[#170f08] border border-[#d4af37]/25 flex items-center justify-between">
            <button
              id="btn-turn-newspaper-page"
              onClick={handleNextPage}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#382414] hover:bg-[#4d321c] text-xs font-serif text-[#fceda2] border border-[#d4af37]/30 transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Turn Page ({activePageIndex === 0 ? 'Front' : 'Inner'})</span>
            </button>

            <button
              id="btn-inspect-solidaridad-artifact"
              onClick={() => onOpenArtifact('solidaridad-feb1889')}
              className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-serif"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inspect Original →</span>
            </button>
          </div>
        </div>

        {/* Center / Right: Interactive 3D Skewable Newspaper Page */}
        <div 
          className="lg:col-span-8 flex justify-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="w-full max-w-2xl bg-[#f5ebd7] text-[#2c1e13] rounded-xl border-4 border-[#8c673e] p-6 sm:p-8 shadow-2xl transition-transform duration-200 select-none relative"
            style={{
              transform: `rotateY(${newspaperTilt.x}deg) rotateX(${newspaperTilt.y}deg) scale(${zoomLevel})`,
              transformStyle: 'preserve-3d',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212,175,55,0.2)'
            }}
          >
            {/* Masthead */}
            <div className="text-center border-b-2 border-[#3d2411] pb-4 mb-4">
              <div className="text-[10px] tracking-widest uppercase font-mono text-[#734b1e] mb-1 flex justify-between border-b border-[#734b1e]/30 pb-1">
                <span>AÑO I • NUM. 1</span>
                <span>BARCELONA, 15 DE FEBRERO DE 1889</span>
                <span>PRECIO 10 CÉNTIMOS</span>
              </div>

              <h1 className="font-serif font-black text-3xl sm:text-5xl tracking-widest text-[#24140a] my-2">
                LA SOLIDARIDAD
              </h1>
              
              <div className="text-[11px] sm:text-xs font-serif italic text-[#52351c] uppercase tracking-wider">
                Quincenario Democrático y de los Intereses Filipinos
              </div>
            </div>

            {/* Simulated 2-Column or 3-Column Periodical Layout */}
            {activePageIndex === 0 ? (
              <div>
                <div className="text-center mb-4 pb-2 border-b border-[#734b1e]/20">
                  <span className="text-[10px] uppercase tracking-widest text-[#8b2626] font-bold">
                    NUESTROS PROPÓSITOS (OUR PROGRAMME)
                  </span>
                  <p className="font-serif italic text-xs text-[#3a291e] max-w-lg mx-auto mt-1">
                    “To gather, to harmonize liberal ideas which are now scattered among Filipinos in Spain... to expose the evils that afflict the motherland.”
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-justify text-[#362519]">
                  <div className="p-3 bg-[#ede2ca]/60 rounded border border-[#b89758]/40">
                    <strong className="block text-[#8b2626] font-bold mb-1">
                      Filipinas dentro de cien años
                    </strong>
                    <p className="line-clamp-4 text-[11px]">
                      {SOLIDARIDAD_ARTICLES[0].synopsis}
                    </p>
                    <button
                      id="btn-read-article-1"
                      onClick={() => handleOpenArticle(SOLIDARIDAD_ARTICLES[0])}
                      className="mt-2 text-[10px] font-bold text-[#734b1e] hover:text-[#8b2626] underline uppercase"
                    >
                      Read Full Treatise →
                    </button>
                  </div>

                  <div className="p-3 bg-[#ede2ca]/60 rounded border border-[#b89758]/40">
                    <strong className="block text-[#8b2626] font-bold mb-1">
                      Sobre la indolencia de los filipinos
                    </strong>
                    <p className="line-clamp-4 text-[11px]">
                      {SOLIDARIDAD_ARTICLES[1].synopsis}
                    </p>
                    <button
                      id="btn-read-article-2"
                      onClick={() => handleOpenArticle(SOLIDARIDAD_ARTICLES[1])}
                      className="mt-2 text-[10px] font-bold text-[#734b1e] hover:text-[#8b2626] underline uppercase"
                    >
                      Read Full Treatise →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-4 pb-2 border-b border-[#734b1e]/20">
                  <span className="text-[10px] uppercase tracking-widest text-[#8b2626] font-bold">
                    SECCIÓN POLÍTICA & CRÓNICA
                  </span>
                  <p className="font-serif italic text-xs text-[#3a291e] max-w-lg mx-auto mt-1">
                    Internal Dispatches from Madrid & Manila
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-justify text-[#362519]">
                  <div className="p-3 bg-[#ede2ca]/60 rounded border border-[#b89758]/40">
                    <strong className="block text-[#8b2626] font-bold mb-1">
                      La Verdad para Todos
                    </strong>
                    <p className="line-clamp-4 text-[11px]">
                      {SOLIDARIDAD_ARTICLES[2].synopsis}
                    </p>
                    <button
                      id="btn-read-article-3"
                      onClick={() => handleOpenArticle(SOLIDARIDAD_ARTICLES[2])}
                      className="mt-2 text-[10px] font-bold text-[#734b1e] hover:text-[#8b2626] underline uppercase"
                    >
                      Read Article →
                    </button>
                  </div>

                  <div className="p-3 bg-[#ede2ca]/60 rounded border border-[#b89758]/40">
                    <strong className="block text-[#8b2626] font-bold mb-1">
                      Sin Nombre
                    </strong>
                    <p className="line-clamp-4 text-[11px]">
                      {SOLIDARIDAD_ARTICLES[3].synopsis}
                    </p>
                    <button
                      id="btn-read-article-4"
                      onClick={() => handleOpenArticle(SOLIDARIDAD_ARTICLES[3])}
                      className="mt-2 text-[10px] font-bold text-[#734b1e] hover:text-[#8b2626] underline uppercase"
                    >
                      Read Article →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Footer */}
            <div className="mt-4 pt-3 border-t border-[#734b1e]/30 flex justify-between text-[9px] font-mono text-[#734b1e]">
              <span>REDACCIÓN Y ADMINISTRACIÓN: PLAZA DE BUENSUCESO, MADRID</span>
              <span>TIPOGRAFÍA DE JUAN F. PARADA</span>
            </div>
          </div>
        </div>

      </div>

      {/* Featured Articles Selector Bar */}
      <div className="mt-8">
        <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 text-center">
          Click an Article to Read the Historical Text & Analytical Commentary:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SOLIDARIDAD_ARTICLES.map(art => (
            <button
              key={art.id}
              id={`btn-select-art-${art.id}`}
              onClick={() => handleOpenArticle(art)}
              className="text-left p-3.5 rounded-xl bg-[#1b120a] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#281b10] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#e07a5f] block mb-1">
                  Pen Name: {art.penName}
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#fff0d1] mb-1">
                  {art.titleSpanish}
                </h4>
                <div className="text-[11px] text-[#dfb75c] italic mb-2">
                  {art.titleEnglish}
                </div>
              </div>
              <span className="text-[10px] text-[#8c7b69] flex items-center gap-1 font-serif">
                <FileText className="w-3 h-3 text-[#d4af37]" />
                <span>Examine Source</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Animated Reading Modal for Selected Article */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto antique-scroll rounded-2xl border border-[#d4af37]/50 bg-gradient-to-b from-[#24170e] to-[#120c06] p-6 sm:p-8 text-[#e8dfcf] shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#352316] text-[#dfb75c] hover:bg-[#483120] border border-[#d4af37]/30"
              aria-label="Close article reading modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
              <Newspaper className="w-4 h-4" />
              La Solidaridad Archival Monograph
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6] mb-1">
              {selectedArticle.titleSpanish}
            </h3>
            
            <div className="text-sm text-[#c59b27] font-serif italic mb-2">
              {selectedArticle.titleEnglish}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#a89b88] font-mono mb-6">
              <span>Date: {selectedArticle.issueDate}</span>
              <span>•</span>
              <span>Author: {selectedArticle.penName}</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
              <div className="p-4 rounded-xl bg-[#170f08] border-l-4 border-[#8b2626]">
                <span className="text-[10px] font-mono uppercase text-[#e07a5f] font-bold block mb-1">
                  Historical Excerpt:
                </span>
                <p className="italic text-[#fceda2]">
                  {selectedArticle.fullExcerpt}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  Analytical Synopsis
                </h4>
                <p>{selectedArticle.synopsis}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#181008] border border-[#d4af37]/25">
                <h4 className="font-serif font-bold text-[#fceda2] mb-1">
                  Historical Significance & Prophecy
                </h4>
                <p>{selectedArticle.significance}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/30 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider border border-[#d4af37]/40"
              >
                Return to La Solidaridad
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
