import React from 'react';
import { BookOpen, ShieldCheck, ArrowUp, Landmark, Sparkles, Feather } from 'lucide-react';
import { playPaperRustle } from '../utils/audio';

interface FooterProps {
  audioEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ audioEnabled }) => {
  const scrollToTop = () => {
    playPaperRustle(audioEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#100a06] border-t-2 border-[#d4af37]/30 text-[#ded2be] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
        
        {/* Col 1: Exhibition Identity */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#27190f] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-black text-lg text-[#fff2d6] block leading-none">
                DIGITAL HISTORY MUSEUM
              </span>
              <span className="text-[10px] text-[#c59b27] tracking-widest uppercase font-mono">
                National Historical Repository
              </span>
            </div>
          </div>

          <h3 className="font-serif font-bold text-xl text-[#fceda2]">
            Jose Rizal: Education, Travels, and the Propaganda Movement
          </h3>

          <p className="text-xs sm:text-sm text-[#b5a38f] font-serif leading-relaxed">
            An interactive educational monograph dedicated to the academic formation, European journeys, and peaceful reformist struggle of Dr. Jose Rizal (1861–1896), the National Hero of the Philippines.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a1108] border border-[#d4af37]/25 text-xs text-[#d4af37]">
            <ShieldCheck className="w-4 h-4 text-[#6aa84f]" />
            <span>Curated from primary archival sources and documented historical registries.</span>
          </div>
        </div>

        {/* Col 2: Exhibition Galleries Links */}
        <div className="md:col-span-4 space-y-2">
          <div className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-semibold mb-3">
            Exhibition Halls
          </div>
          <ul className="space-y-2 text-xs font-serif text-[#c4b5a0]">
            <li>
              <a href="#manila-education" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Ateneo Municipal & University of Santo Tomas (1872–1882)</span>
              </a>
            </li>
            <li>
              <a href="#travel-map" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Interactive Cartographic Odyssey: Manila to Berlin</span>
              </a>
            </li>
            <li>
              <a href="#travel-story" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Scroll-Based Travel Storytelling & Journal</span>
              </a>
            </li>
            <li>
              <a href="#spain-germany" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Barcelona, Madrid, Paris & Heidelberg Ophthalmology</span>
              </a>
            </li>
            <li>
              <a href="#france-germany" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Berlin Hand Press: Printing of Noli Me Tangere</span>
              </a>
            </li>
            <li>
              <a href="#propaganda" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• The Propaganda Movement & Five Reform Demands</span>
              </a>
            </li>
            <li>
              <a href="#figures-gallery" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Key Figures Gallery & Ilustrado Fraternity</span>
              </a>
            </li>
            <li>
              <a href="#solidaridad" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• La Solidaridad 3D Interactive Gazette</span>
              </a>
            </li>
            <li>
              <a href="#artifacts" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Reliquary & 3D Historical Artifact Inspection</span>
              </a>
            </li>
            <li>
              <a href="#summary-timeline" className="hover:text-[#fceda2] transition-colors flex items-center gap-2">
                <span>• Final Interactive Master Chronology (1872–1896)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Primary Sources Citation */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-semibold mb-3">
            Primary References
          </div>
          <p className="text-xs text-[#9d8c79] font-serif leading-relaxed">
            Content derived strictly from archival documents: <em>Memorias de un Estudiante de Manila</em> (1879–1881), <em>Epistolario Rizalino</em>, <em>Diariong Tagalog</em> (1882), <em>La Solidaridad</em> (1889–1895), and university registry rolls of Madrid and Manila.
          </p>

          <button
            id="btn-footer-return-top"
            onClick={scrollToTop}
            className="mt-4 w-full py-2.5 rounded-lg bg-[#27190f] hover:bg-[#3d2716] border border-[#d4af37]/40 text-[#fceda2] text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
          >
            <ArrowUp className="w-4 h-4 text-[#d4af37]" />
            <span>Return to Grand Hall</span>
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8c7b69] font-serif">
        <div>
          © {new Date().getFullYear()} Digital History Museum • Dedicated to Philippine Historical Education.
        </div>
        <div className="mt-2 sm:mt-0 italic text-[#a89b88]">
          “Consummatum est” — Jose Rizal (1861–1896)
        </div>
      </div>
    </footer>
  );
};
