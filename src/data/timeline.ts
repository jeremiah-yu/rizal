import { TimelineEvent } from '../types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '1872',
    year: '1872',
    title: 'Entrance to Ateneo Municipal de Manila',
    subtitle: 'Jesuit Discipline, Academic Brilliance, and Formative Awakening',
    location: 'Intramuros, Manila',
    country: 'Philippines',
    category: 'education',
    summary: 'After early tutoring in Calamba, eleven-year-old Jose Rizal entered the Ateneo Municipal de Manila under Jesuit instruction, beginning a legendary academic career marked by consistent sobresaliente marks.',
    details: [
      'Enrolled in June 1872 under the surname "Rizal" (suggested by brother Paciano to protect him following the Gomburza executions).',
      'Integrated into the Jesuit pedagogical system dividing classes into the "Roman Empire" and "Carthaginian Empire".',
      'Excelled rapidly from an "externo" (day scholar) to emperor of his class within one month.',
      'Awarded five medals and top honors ("sobresaliente") across Latin, Spanish, Greek, rhetoric, and sciences.'
    ],
    historicalQuote: {
      text: 'My second year was happier... I was awarded first prize, and I would have felt the happiest of mortals had not my mother still been in prison.',
      source: 'Jose Rizal, Memorias de un Estudiante de Manila'
    },
    artifactId: 'ateneo-medal',
    iconName: 'Award',
    accentColor: '#d4af37'
  },
  {
    id: '1877',
    year: '1877',
    title: 'Graduation & Dual Studies at UST',
    subtitle: 'Bachelor of Arts, Agrimensura, and the Transition to Medicine',
    location: 'Manila',
    country: 'Philippines',
    category: 'education',
    summary: 'Graduating with highest honors from Ateneo with a Bachelor of Arts, Rizal pursued dual tracks: studying Philosophy and Letters then Medicine at UST, while finishing land surveying (Perito Agrimensor) at Ateneo.',
    details: [
      'Graduated March 23, 1877 with the degree of Bachiller en Artes (sobresaliente in all subjects).',
      'Passed surveyor examination at Ateneo in 1877, certified as Perito Agrimensor y Tasador de Tierras (expert assessor).',
      'Enrolled in 1877 at the Royal and Pontifical University of Santo Tomas in Philosophy and Letters.',
      'Shifted to Medicine (1878–1882) upon learning of his mother Teodora Alonso’s failing vision due to cataracts.',
      'Encountered racial prejudice and obsolete scholastic methods under Dominican friars, inspiring his desire to study abroad.'
    ],
    historicalQuote: {
      text: 'Why do they withhold from the Filipino youth the light of knowledge which they dispense so freely to others?',
      source: 'Reflections in UST, recorded in historical memoirs'
    },
    artifactId: 'surveyor-diploma',
    iconName: 'Compass',
    accentColor: '#c59b27'
  },
  {
    id: '1882',
    year: '1882',
    title: 'Secret Departure for Spain & "Amor Patrio"',
    subtitle: 'Aboard the Salvadora: The Mission to Observe Europe',
    location: 'Barcelona, Spain',
    country: 'Spain',
    category: 'travel',
    summary: 'Rizal left Manila on May 3, 1882 aboard the SS Salvadora under a passport registered as "Jose Mercado". Reaching Barcelona in June, he penned his stirring manifesto "Amor Patrio" under the pen name Laong Laan.',
    details: [
      'Departed in secrecy with assistance from brother Paciano, uncle Antonio Rivera, and the Jesuit fathers.',
      'Traveled via Singapore, Colombo, Aden, Suez Canal, Naples, and Marseilles before reaching Barcelona on June 16, 1882.',
      'Wrote "Amor Patrio" (Love of Country), published in Diariong Tagalog on August 20, 1882 in Spanish and Tagalog (translated by Marcelo H. del Pilar).',
      'Used his pen name "Laong Laan" (Ever Prepared) for the first time, establishing his patriotic purpose abroad.'
    ],
    historicalQuote: {
      text: 'Love of country can never be obliterated once it has entered the heart, because it bears a divine mark that makes it eternal and imperishable.',
      source: 'Amor Patrio (Barcelona, 1882)'
    },
    artifactId: 'amor-patrio',
    iconName: 'Send',
    accentColor: '#e07a5f'
  },
  {
    id: '1884',
    year: '1884',
    title: 'Licentiate in Medicine & The Historic Brindis Speech',
    subtitle: 'Academic Triumph and a Courageous Public Salvo in Madrid',
    location: 'Madrid, Spain',
    country: 'Spain',
    category: 'propaganda',
    summary: 'Completed his Licentiate in Medicine at Universidad Central de Madrid in June 1884. On June 25, he stunned Spanish society with his audacious Brindis toast celebrating painters Juan Luna and Felix Resurreccion Hidalgo.',
    details: [
      'Graduated with Licenciado en Medicina from Universidad Central de Madrid in June 1884.',
      'Delivered the celebrated Brindis toast at the Hotel Ingles banquet in honor of Juan Luna (Spoliarium) and Hidalgo (Virgenes Cristianas Expuestas al Populacho).',
      'Boldly declared that genius knows no race or country, and demanded that Spain share its enlightenment with the Philippines.',
      'Actively participated in the Circulo Hispano-Filipino and engaged with liberal Spanish intellectuals and politicians.'
    ],
    historicalQuote: {
      text: 'Genius knows no country; genius blooms everywhere; genius is like light, like the air, the patrimony of all, cosmopolitan like the universe!',
      source: 'The Brindis Speech, Madrid (June 25, 1884)'
    },
    artifactId: 'madrid-diploma',
    iconName: 'GraduationCap',
    accentColor: '#3d85c6'
  },
  {
    id: '1885',
    year: '1885',
    title: 'Philosophy Licentiate & French Medical Apprenticeship',
    subtitle: 'Graduation in Madrid and Specialization under Dr. Louis de Wecker',
    location: 'Madrid & Paris',
    country: 'Spain & France',
    category: 'education',
    summary: 'Awarded the Licentiate in Philosophy and Letters with sobresaliente marks on his 24th birthday (June 1885). Later that year, he relocated to Paris to master eye surgery as an assistant to Dr. Louis de Wecker.',
    details: [
      'Awarded Licenciado en Filosofia y Letras (June 19, 1885) by Universidad Central de Madrid.',
      'Arrived in Paris in November 1885; trained daily at the clinic of renowned French ophthalmologist Dr. Louis de Wecker (55 Rue du Cherche-Midi).',
      'Assisted in complex cataract extractions and ophthalmic surgeries to prepare for operating on his mother.',
      'Modelled as a figure in Juan Luna’s studio paintings, including "The Blood Compact" and "The Death of Cleopatra".'
    ],
    historicalQuote: {
      text: 'From 50 to 100 patients are seen every day; 10 to 12 operations are performed. In ophthalmology Dr. Wecker is one of the leading luminaries in Europe.',
      source: 'Letter to his family from Paris (January 1, 1886)'
    },
    artifactId: 'ophthalmology-kit',
    iconName: 'Eye',
    accentColor: '#6aa84f'
  },
  {
    id: '1887',
    year: '1887',
    title: 'Publication of "Noli Me Tangere" in Berlin',
    subtitle: 'A Literary Masterpiece Born through Science, Solitude, and Friendship',
    location: 'Berlin, Germany',
    country: 'Germany',
    category: 'publication',
    summary: 'After studying ophthalmology under Dr. Otto Becker in Heidelberg and drafting his poignant poem "A las Flores de Heidelberg", Rizal completed Noli Me Tangere in Berlin, published in March 1887 with financial rescue from Maximo Viola.',
    details: [
      'Worked at the University Eye Clinic (Augenklinik) of Dr. Otto Becker in Heidelberg, writing "A las Flores de Heidelberg" in April 1886.',
      'Admitted to the prestigious Berlin Anthropological and Ethnological Societies under Dr. Rudolf Virchow.',
      'Faced starvation and winter illness in Berlin until friend Dr. Maximo Viola arrived and loaned 300 pesos for printing.',
      'Printed 2,000 copies of Noli Me Tangere at Berliner Buchdruckerei-Action-Gesellschaft in March 1887, unleashing a peaceful revolution in thought.'
    ],
    historicalQuote: {
      text: 'I have exposed the cancer of our society... I have stripped the veil from the hypocrisies which have deceived our people.',
      source: 'Jose Rizal to Felix R. Hidalgo (March 5, 1887)'
    },
    artifactId: 'noli-me-tangere',
    iconName: 'BookOpen',
    accentColor: '#cc0000'
  },
  {
    id: 'early-1890s',
    year: 'Early 1890s',
    title: 'Propaganda Pinnacle, Factional Rift, and the Path to Revolution',
    subtitle: 'La Solidaridad, El Filibusterismo, and the Shift to the Katipunan',
    location: 'Madrid, Barcelona & Manila',
    country: 'Spain & Philippines',
    category: 'movement',
    summary: 'Rizal published El Filibusterismo in Ghent (1891) and wrote heavily for La Solidaridad. Internal factionalism with Marcelo H. del Pilar and Spanish refusal to reform culminated in Rizal’s 1892 deportation to Dapitan and the emergence of the radical Katipunan.',
    details: [
      'Contributed seminal essays to La Solidaridad: "The Indolence of the Filipinos" (1890) and "The Philippines a Century Hence" (1889–1890).',
      'Published El Filibusterismo in Ghent, Belgium (September 1891) with financial aid from Valentin Ventura.',
      'Experienced painful leadership divergence with Marcelo H. del Pilar in Madrid over the direction of the colony’s expatriate leadership (Responsable election).',
      'Founded La Liga Filipina in Tondo, Manila on July 3, 1892; arrested and exiled to Dapitan days later.',
      'The collapse of peaceful assimilationist reform catalyzed Andres Bonifacio to establish the revolutionary Katipunan (KKK) on July 7, 1892.'
    ],
    historicalQuote: {
      text: 'The field of struggle is no longer Madrid; it is the Philippines. There we must meet, there we must unite, there we must suffer or conquer.',
      source: 'Jose Rizal to Mariano Ponce (1891)'
    },
    artifactId: 'la-solidaridad-paper',
    iconName: 'Flame',
    accentColor: '#b45f06'
  }
];

import { ChronologyItem } from '../types';

export const RIZAL_CHRONOLOGY: ChronologyItem[] = [
  {
    id: 'ateneo-1872',
    year: '1872',
    title: 'Enrolls at Ateneo Municipal de Manila',
    location: 'Intramuros, Manila',
    category: 'education',
    description: 'Enters the Ateneo Municipal under Jesuit fathers shortly after the martyrdom of Fathers Gomez, Burgos, and Zamora (Gomburza). He adopts the surname Rizal.',
    significance: 'Began rigorous humanities and science formation, rapidly advancing from class externo to "Emperor" of his classroom.',
    primaryWork: 'Early lyrical poetry and religious sculpture ("The Sacred Heart of Jesus")',
    relatedArtifactId: 'ateneo-medal'
  },
  {
    id: 'ateneo-1877',
    year: '1877',
    title: 'Receives Bachelor of Arts with Highest Distinction',
    location: 'Manila',
    category: 'education',
    description: 'Graduates from Ateneo Municipal with highest honors (sobresaliente in all subjects) receiving five academic medals and Bachiller en Artes degree.',
    significance: 'Established his reputation as the foremost student intellectual among native Filipinos of his generation.',
    primaryWork: 'Graduation poem "Por la Educación Recibe Lustre la Patria"',
    relatedArtifactId: 'ateneo-medal'
  },
  {
    id: 'ust-1877',
    year: '1877',
    title: 'Studies at University of Santo Tomas',
    location: 'Intramuros, Manila',
    category: 'education',
    description: 'Enrolls at the Royal and Pontifical University of Santo Tomas, studying Philosophy and Letters then shifting to Medicine.',
    significance: 'Experienced the hostility of Dominican professors toward native students, contrasting with Jesuit warmth and fostering early national consciousness.',
    primaryWork: '"A la Juventud Filipina" (Prize-winning poem, 1879) & "El Consejo de los Dioses" (1880)'
  },
  {
    id: 'surveyor-1881',
    year: '1881',
    title: 'Conferred Title of Perito Agrimensor',
    location: 'Manila',
    category: 'education',
    description: 'Officially conferred the title of land surveyor and property assessor from Ateneo upon reaching the legal age of 20.',
    significance: 'Provided practical scientific and engineering credentials that he later utilized in Calamba and Dapitan.',
    primaryWork: 'Agrimensura examination portfolio',
    relatedArtifactId: 'surveyor-diploma'
  },
  {
    id: 'travel-spain-1882',
    year: '1882',
    title: 'Leaves the Philippines for Spain (Secret Departure)',
    location: 'Manila → Singapore → Spain',
    category: 'travel',
    description: 'Boards the steamer SS Salvadora on May 3, 1882 bound for Spain to finish medical studies and observe European nations.',
    significance: 'Initiated his life in exile, backed by his brother Paciano and uncle Antonio Rivera, away from Dominican censorship.',
    primaryWork: 'Travel journal entries and sketches of passengers aboard ship'
  },
  {
    id: 'amor-patrio-1882',
    year: '1882',
    title: 'Writes "Amor Patrio" in Barcelona',
    location: 'Barcelona, Spain',
    category: 'literary',
    description: 'Pens his first published essay on European soil under the pseudonym "Laong Laan", published in Diariong Tagalog.',
    significance: 'Historic first collaboration with Marcelo H. del Pilar (who translated it into Tagalog) and the conceptual birth of civic patriotism.',
    primaryWork: '"Amor Patrio" (Love of Country)',
    relatedArtifactId: 'amor-patrio'
  },
  {
    id: 'medicine-1884',
    year: '1884',
    title: 'Completes Licentiate in Medicine',
    location: 'Madrid, Spain',
    category: 'education',
    description: 'Finishes all degree examinations for the Licenciatura en Medicina at the Universidad Central de Madrid.',
    significance: 'Legally qualified him as a medical doctor throughout the Spanish dominions.',
    primaryWork: 'Clinical dissertation notes in pharmacology, clinical surgery, and legal medicine',
    relatedArtifactId: 'madrid-diploma'
  },
  {
    id: 'brindis-1884',
    year: '1884',
    title: 'Historic Brindis Speech at Hotel Inglés',
    location: 'Madrid, Spain',
    category: 'propaganda',
    description: 'Delivers a famous dinner toast on June 25, 1884 celebrating Juan Luna (Spoliarium) and Felix R. Hidalgo before Spanish statesmen.',
    significance: 'Boldly asserted that genius is not the monopoly of race and called for mutual respect and enlightened colonial reforms.',
    primaryWork: 'The Brindis Speech transcript (reported in El Imparcial)'
  },
  {
    id: 'philosophy-1885',
    year: '1885',
    title: 'Completes Licentiate in Philosophy and Letters',
    location: 'Madrid, Spain',
    category: 'education',
    description: 'Graduates with the grade of sobresaliente from the Universidad Central de Madrid in Philosophy and Letters.',
    significance: 'Mastered world history, literature, and European philosophy, providing intellectual ammunition against Spanish hegemony.',
    primaryWork: 'Academic treatises in Spanish literature and world history',
    relatedArtifactId: 'madrid-diploma'
  },
  {
    id: 'paris-1885',
    year: '1885',
    title: 'Studies Ophthalmology in Paris',
    location: 'Paris, France',
    category: 'travel',
    description: 'Works as assistant in the renowned eye clinic of Dr. Louis de Wecker at 55 Rue du Cherche-Midi.',
    significance: 'Acquired advanced surgical skills to operate on his mother’s cataract-blinded eyes; frequented Juan Luna’s studio.',
    primaryWork: 'Clinical ophthalmology notes and sketches in Luna’s atelier',
    relatedArtifactId: 'ophthalmology-kit'
  },
  {
    id: 'heidelberg-1886',
    year: '1886',
    title: 'Writes "A las Flores de Heidelberg"',
    location: 'Heidelberg & Wilhelmsfeld, Germany',
    category: 'literary',
    description: 'Attends lectures under Dr. Otto Becker and composes his nostalgic masterpiece along the Neckar River.',
    significance: 'Expressed profound longing for the homeland and respect for German intellectual, religious, and scientific freedom.',
    primaryWork: '"A las Flores de Heidelberg" (April 22, 1886)',
    relatedArtifactId: 'flores-heidelberg'
  },
  {
    id: 'noli-1887',
    year: '1887',
    title: 'Publishes "Noli Me Tangere" in Berlin',
    location: 'Berlin, Germany',
    category: 'literary',
    description: 'Completes and prints 2,000 copies of his foundational novel with financial rescue from Dr. Maximo Viola.',
    significance: 'Shattered the silence surrounding colonial abuses, friar tyranny, and native subjection, igniting the national revolution of thought.',
    primaryWork: 'Noli Me Tangere (Berliner Buchdruckerei-Action-Gesellschaft)',
    relatedArtifactId: 'noli-me-tangere'
  },
  {
    id: 'solidaridad-1889',
    year: '1889',
    title: 'First Issue of "La Solidaridad"',
    location: 'Barcelona, Spain',
    category: 'propaganda',
    description: 'Graciano Lopez Jaena and expatriates launch the principal newspaper organ of the Propaganda Movement.',
    significance: 'Provided an unceasing transatlantic platform for reform petitions, anti-friar exposés, and democratic advocacy.',
    primaryWork: 'La Solidaridad, Año I, Número 1',
    relatedArtifactId: 'la-solidaridad-paper'
  },
  {
    id: 'morga-1890',
    year: '1890',
    title: 'Annotates Antonio de Morga’s "Sucesos"',
    location: 'London & Paris',
    category: 'literary',
    description: 'Researches at the British Museum and publishes an annotated edition of Morga’s 1609 historical work.',
    significance: 'Proven scientifically that Filipinos had an advanced, prosperous, and civilized culture long before Spanish arrival.',
    primaryWork: 'Sucesos de las Islas Filipinas por el Dr. Antonio de Morga, anotada por Jose Rizal'
  },
  {
    id: 'fili-1891',
    year: '1891',
    title: 'Publishes "El Filibusterismo" in Ghent',
    location: 'Ghent, Belgium',
    category: 'literary',
    description: 'Prints his darker, political sequel dedicated to the memory of the martyred priests Gomez, Burgos, and Zamora.',
    significance: 'Examined the inevitability, tragedy, and moral prerequisites of armed national revolution.',
    primaryWork: 'El Filibusterismo (F. Meyer-van Loo Press, Ghent)'
  },
  {
    id: 'liga-1892',
    year: '1892',
    title: 'Returns to Manila & Founds "La Liga Filipina"',
    location: 'Manila, Philippines',
    category: 'propaganda',
    description: 'Returns courageously to Manila and establishes a civic league for mutual protection and native education at Ilaya St., Tondo.',
    significance: 'Shifted the struggle directly to Philippine soil; his immediate arrest and exile to Dapitan spurred the founding of the Katipunan.',
    primaryWork: 'Constitution and Statutes of La Liga Filipina'
  },
  {
    id: 'bagumbayan-1896',
    year: '1896',
    title: 'Martyrdom at Bagumbayan Field',
    location: 'Bagumbayan (Rizal Park), Manila',
    category: 'all',
    description: 'Executed by Spanish firing squad on the morning of December 30, 1896, following a military show trial.',
    significance: 'His supreme sacrifice sealed the doom of Spanish colonial rule and immortalized him as the Father of the Nation.',
    primaryWork: '"Mi Último Adiós" (hidden inside an alcohol cooking lamp)'
  }
];
