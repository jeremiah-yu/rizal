import React from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Scroll, 
  Anchor, 
  Eye, 
  PenTool, 
  Sparkles, 
  ArrowDown 
} from 'lucide-react';

interface TravelStoryProps {
  onOpenArtifact: (id: string) => void;
}

interface StoryChapter {
  id: string;
  chapterNumber: string;
  location: string;
  country: string;
  date: string;
  title: string;
  subtitle: string;
  quote?: string;
  narrative: string[];
  historicalHighlights: string[];
  artifactId?: string;
  icon: typeof Compass;
}

export const TRAVEL_CHAPTERS: StoryChapter[] = [
  {
    id: 'philippines-departure',
    chapterNumber: 'CHAPTER I',
    location: 'Philippines (Manila & Calamba)',
    country: 'Spanish East Indies',
    date: 'May 3, 1882',
    title: 'The Secret Departure: A Mission of Enlightenment',
    subtitle: 'Rizal prepares to leave his motherland under a veil of secrecy.',
    quote: 'To observe keenly the life and culture, languages and customs, industries and commerce, and governments and laws of European nations in order to prepare himself in the mighty task of liberating his oppressed people.',
    narrative: [
      'On May 3, 1882, Jose Rizal slipped quietly aboard the Spanish steamer SS Salvadora anchored in Manila Bay. His departure was kept strictly secret even from his own parents and the colonial authorities, who closely monitored liberal families.',
      'Only his elder brother Paciano, uncle Antonio Rivera, sisters Neneng and Lucia, and the Jesuit fathers of Ateneo knew of the voyage. Paciano had arranged his passport under the name "Jose Mercado" and pledged a monthly allowance to finance his studies.',
      'As the Salvadora sailed out past Corregidor Island, young Jose gazed tearfully at the fading silhouette of Manila, recording in his diary his agonizing sorrow at parting from his mother, family, and Leonor Rivera.'
    ],
    historicalHighlights: [
      'Traveled under alias "Jose Mercado" to bypass colonial watchlists.',
      'Aboard the Salvadora, played chess with Spanish passengers, routinely defeating all challengers.',
      'Carried 356 pesos given by Paciano and a diamond ring from his sister Saturnina.'
    ],
    artifactId: 'surveyor-diploma',
    icon: Anchor
  },
  {
    id: 'singapore-transit',
    chapterNumber: 'CHAPTER II',
    location: 'Singapore',
    country: 'British Crown Colony',
    date: 'May 9–11, 1882',
    title: 'The Journey Begins: First Foreign Encounter',
    subtitle: 'Contrasting British colonial efficiency with Spanish stagnation.',
    quote: 'The island is rich and flourishing... the streets are broad and well-paved, the houses clean, and commerce is extraordinarily active.',
    narrative: [
      'After five days at sea, the Salvadora docked in Singapore. Rizal spent two days sightseeing: visiting the historic botanical gardens, Buddhist temples, markets, and the bronze statue of founder Sir Stamford Raffles.',
      'He was deeply struck by the orderliness, religious tolerance, and bustling commerce of the British port—a sharp contrast to the suffocating clerical censorship of Manila.',
      'On May 11, he boarded the French ocean liner SS Djemnah, an elegant vessel bound for Europe carrying passengers of diverse European nationalities.'
    ],
    historicalHighlights: [
      'First physical exposure to a modern non-Spanish colonial administration.',
      'Practiced spoken French daily with French travelers aboard the Djemnah.',
      'Crossed the Indian Ocean encountering tropical storms with steady composure.'
    ],
    icon: Compass
  },
  {
    id: 'suez-canal-route',
    chapterNumber: 'CHAPTER III',
    location: 'Suez Canal & Port Said',
    country: 'Egypt',
    date: 'June 2–11, 1882',
    title: 'The Route Toward Europe: Piercing the Desert',
    subtitle: 'Traversing Ferdinand de Lesseps’ historic engineering triumph.',
    quote: 'An immense ribbon of blue water cutting through endless yellow sands... linking two worlds and transforming history.',
    narrative: [
      'Traversing the Red Sea, the Djemnah entered the historic Suez Canal at Suez, Egypt. Opened in November 1869, the canal had reduced travel time between Manila and Spain from over three months by clipper around the Cape of Good Hope to roughly thirty days.',
      'This maritime shortcut had fundamentally altered Philippine history: it allowed liberal books, newspapers, and republican ideas to flood Manila, and made it feasible for Ilustrados like Rizal to study in Europe.',
      'At Port Said, the Mediterranean terminus, Rizal stepped ashore and listened in fascinated wonder to Arabic, French, Italian, and Greek spoken in the cafes.'
    ],
    historicalHighlights: [
      'Suez Canal cut Europe-Manila voyage from 3+ months to ~30 days.',
      'Vividly described the camel caravans and Bedouin encampments in his travel diary.',
      'Crossed into the Mediterranean, passing Crete, Sicily, and Mount Vesuvius.'
    ],
    icon: MapPin
  },
  {
    id: 'barcelona-arrival',
    chapterNumber: 'CHAPTER IV',
    location: 'Barcelona',
    country: 'Spain (Catalonia)',
    date: 'June 1882',
    title: 'His Early Experience in Spain: "Amor Patrio"',
    subtitle: 'Birth of his patriotic pen name Laong Laan on European soil.',
    quote: 'Love of country can never be obliterated once it has entered the heart, because it bears a divine mark that makes it eternal and imperishable.',
    narrative: [
      'Rizal arrived by train in Barcelona on June 16, 1882. Initially disheartened by the dingy alleys of the old district, his mood brightened when he was welcomed warmly by fellow Filipinos at the famous Café de Pelayo on Plaza de Cataluña.',
      'In Barcelona’s atmosphere of Catalan liberalism and press freedom, Rizal penned his first nationalistic essay abroad: "Amor Patrio" (Love of Country). He sent the manuscript to Basilio Teodoro Moran in Manila.',
      'On August 20, 1882, "Amor Patrio" appeared in Diariong Tagalog in two parallel columns: Spanish and Tagalog (translated by Marcelo H. del Pilar). It was the debut of his legendary pen name: Laong Laan ("Ever Prepared").'
    ],
    historicalHighlights: [
      'Wrote "Amor Patrio", his first patriotic manifesto published abroad.',
      'First historical collaboration with Marcelo H. del Pilar via Diariong Tagalog.',
      'Penned follow-up articles: "Los Viajes" (Travels) and "Revista de Madrid".'
    ],
    artifactId: 'amor-patrio',
    icon: Scroll
  },
  {
    id: 'madrid-studies',
    chapterNumber: 'CHAPTER V',
    location: 'Madrid',
    country: 'Spain',
    date: '1882–1885',
    title: 'University Education and Reform Involvement',
    subtitle: 'Dual licentiates, liberal republicanism, and the electrifying Brindis toast.',
    quote: 'Genius knows no country; genius blooms everywhere... genius is like light, like the air, the patrimony of all, cosmopolitan like the universe!',
    narrative: [
      'In the autumn of 1882, Rizal relocated to the capital and enrolled at the Universidad Central de Madrid for dual programs in Medicine and Philosophy and Letters. Despite meager remittances from home, he lived frugally, purchasing books instead of luxuries.',
      'He immersed himself in the reformist Circulo Hispano-Filipino and joined the liberal Masonic Lodge Acacia. He completed his Licentiate in Medicine in June 1884, followed by his Licentiate in Philosophy and Letters (sobresaliente) in June 1885.',
      'On June 25, 1884, at the banquet honoring painters Juan Luna and Felix Resurreccion Hidalgo at Madrid’s Hotel Ingles, Rizal delivered the celebrated Brindis toast. He boldly proclaimed Filipino equality and warned Spain to grant reforms before it was too late.'
    ],
    historicalHighlights: [
      'Earned Licentiate in Medicine (1884) & Licentiate in Philosophy and Letters (1885).',
      'The Brindis Speech caused a sensation in Madrid and alarmed the Spanish friars in Manila.',
      'Began writing the opening chapters of Noli Me Tangere.'
    ],
    artifactId: 'madrid-diploma',
    icon: BookOpen
  },
  {
    id: 'paris-training',
    chapterNumber: 'CHAPTER VI',
    location: 'Paris',
    country: 'France',
    date: 'Nov 1885 – Feb 1886',
    title: 'Medical and Ophthalmological Training',
    subtitle: 'Mastering cataract surgery under the renowned Dr. Louis de Wecker.',
    quote: 'From 50 to 100 patients are seen every day; 10 to 12 operations are performed. In ophthalmology Dr. Wecker is one of the leading luminaries in Europe.',
    narrative: [
      'Determined to cure his mother’s failing eyesight, Rizal journeyed to Paris to apprentice under Dr. Louis de Wecker at 55 Rue du Cherche-Midi. Dr. de Wecker was celebrated as Europe’s premier cataract surgeon.',
      'Rizal worked as a dedicated clinical assistant, mastering delicate micro-incisions and lens extractions. Outside the clinic, he visited the studio of Juan Luna, posing as the Egyptian priest in "The Death of Cleopatra" and as Chief Sikatuna in "The Blood Compact".',
      'He explored the French National Library, museums, and historical salons, perfecting his French fluency and continuing work on his novel.'
    ],
    historicalHighlights: [
      'Trained directly under Dr. Louis de Wecker in specialized ophthalmic surgery.',
      'Assisted in up to a dozen ocular operations per day.',
      'Posed for Juan Luna’s historic patriotic paintings in Paris.'
    ],
    artifactId: 'ophthalmology-kit',
    icon: Eye
  },
  {
    id: 'heidelberg-poetry',
    chapterNumber: 'CHAPTER VII',
    location: 'Heidelberg',
    country: 'Germany',
    date: 'Feb – Aug 1886',
    title: 'Ophthalmology Studies and German Poetry',
    subtitle: 'Augenklinik under Dr. Otto Becker and "A las Flores de Heidelberg".',
    quote: 'Carry, carry, o flowers, my love to my native soil, and say that my faith and my memories are with her still.',
    narrative: [
      'Arriving in the picturesque university town of Heidelberg in February 1886, Rizal attended lectures at the University of Heidelberg and worked at the University Eye Clinic (Augenklinik) under Dr. Otto Becker.',
      'During his spring walks along the banks of the Neckar River, the sight of blue forget-me-not blossoms inspired him to write his celebrated lyrical poem, "A las Flores de Heidelberg" (To the Flowers of Heidelberg) on April 22, 1886.',
      'He lived for three months in the vicarage of Protestant pastor Karl Ullmer in nearby Wilhelmsfeld, experiencing German domestic affection and observing how Catholic priests and Protestant pastors lived in mutual harmony.'
    ],
    historicalHighlights: [
      'Honed ophthalmic clinical methods at the Augenklinik of Dr. Otto Becker.',
      'Penned the immortal lyric poem "A las Flores de Heidelberg".',
      'Wrote his first letter in German to Professor Ferdinand Blumentritt on July 30, 1886.'
    ],
    artifactId: 'flores-heidelberg',
    icon: PenTool
  },
  {
    id: 'berlin-publication',
    chapterNumber: 'CHAPTER VIII',
    location: 'Berlin',
    country: 'Germany',
    date: 'Nov 1886 – May 1887',
    title: 'Scientific Community & Publication of "Noli Me Tangere"',
    subtitle: 'The crucible of winter poverty, Viola’s rescue, and the birth of a nation’s conscience.',
    quote: 'To the Filipino people... I shall endeavor to show your condition faithfully, lifting a part of the veil that covers the evil.',
    narrative: [
      'In Berlin, Rizal was welcomed into elite European scientific circles, inducted into the Berlin Anthropological and Ethnological Societies by legendary pathologist Dr. Rudolf Virchow and geographer Wilhelm Joest.',
      'Yet the winter of 1886–1887 was his darkest trial: remittances from Calamba failed to arrive, and Rizal was reduced to eating one meal of bread and vegetable soup a day, battling hunger and symptoms of tuberculosis while putting the final touches on Noli Me Tangere.',
      'Just as he contemplated burning the manuscript in despair, Dr. Maximo Viola arrived from Barcelona. Viola loaned him 300 pesos for printing and living expenses. In March 1887, 2,000 copies of Noli Me Tangere rolled off the presses of the Berliner Buchdruckerei-Action-Gesellschaft.'
    ],
    historicalHighlights: [
      'Elected member of the Berlin Anthropological and Geographic Societies.',
      'Saved from destitution and despair by the timely arrival of Dr. Maximo Viola.',
      'March 1887: Publication of Noli Me Tangere, igniting modern Philippine national consciousness.'
    ],
    artifactId: 'noli-me-tangere',
    icon: Sparkles
  }
];

export const TravelStory: React.FC<TravelStoryProps> = ({ onOpenArtifact }) => {
  return (
    <section 
      id="travel-story" 
      className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#d4af37]/20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1a0f] border border-[#d4af37]/30 text-xs text-[#c59b27] uppercase tracking-widest font-semibold mb-3">
          <Scroll className="w-3.5 h-3.5 text-[#d4af37]" />
          Scroll-Based Historical Narrative
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Travel Storytelling: From Calamba to Berlin
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          Journey through Rizal’s travel journal as each chapter unfolds his intellectual awakening, scientific training, and political crystallization across Europe.
        </p>
      </div>

      {/* Vertical Timeline Track Line */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#d4af37]/30 space-y-16">
        {TRAVEL_CHAPTERS.map((chapter, index) => {
          const Icon = chapter.icon;

          return (
            <div 
              key={chapter.id}
              className="relative group"
            >
              {/* Node Point on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#26180f] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-lg group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#180f08] transition-all duration-300">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Chapter Card Container */}
              <div className="rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#22160d] via-[#1a1109] to-[#140d07] p-6 sm:p-8 shadow-xl">
                
                {/* Chapter Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#d4af37] font-bold">
                      {chapter.chapterNumber}
                    </span>
                    <span className="text-xs text-[#8c7b69]">•</span>
                    <span className="text-xs text-[#f5c6a5] font-serif font-semibold">
                      {chapter.location} ({chapter.country})
                    </span>
                  </div>

                  <span className="text-xs text-[#c59b27] font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {chapter.date}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff2d6] mb-1">
                  {chapter.title}
                </h3>
                <h4 className="text-sm font-serif italic text-[#dfb75c] mb-6">
                  {chapter.subtitle}
                </h4>

                {/* Primary Historical Quote */}
                {chapter.quote && (
                  <div className="p-4 rounded-lg bg-[#160e08] border-l-4 border-[#8b2626] mb-6 shadow-inner">
                    <p className="font-serif italic text-sm sm:text-base text-[#edd8bf] leading-relaxed">
                      “{chapter.quote}”
                    </p>
                    <span className="block mt-1 text-[11px] text-[#a89b88] font-mono uppercase tracking-wider">
                      — Dr. Jose Rizal, Archival Correspondence & Writings
                    </span>
                  </div>
                )}

                {/* Narrative Paragraphs */}
                <div className="space-y-3 font-serif text-sm sm:text-base text-[#ded2be] leading-relaxed mb-6">
                  {chapter.narrative.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Key Points Badge List */}
                <div className="p-4 rounded-lg bg-[#181008] border border-[#d4af37]/20 mb-6">
                  <div className="text-xs font-serif font-bold text-[#fceda2] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    Key Milestones Recorded in Source:
                  </div>
                  <ul className="space-y-1.5">
                    {chapter.historicalHighlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="text-xs text-[#c4b5a0] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Artifact Link Button */}
                {chapter.artifactId && (
                  <div className="flex justify-end pt-2">
                    <button
                      id={`story-inspect-${chapter.artifactId}`}
                      onClick={() => onOpenArtifact(chapter.artifactId!)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3a2516] hover:bg-[#4d321d] text-[#fceda2] border border-[#d4af37]/40 text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow"
                    >
                      <Scroll className="w-4 h-4 text-[#d4af37]" />
                      <span>Inspect Chapter Artifact</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
