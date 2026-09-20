import { EducationEntry, ReformObjective } from '../types';

export const FORMAL_EDUCATION_DATA: EducationEntry[] = [
  {
    institution: 'Ateneo Municipal de Manila',
    period: '1872 – 1877',
    location: 'Intramuros, Manila',
    degrees: [
      'Bachiller en Artes (Bachelor of Arts, March 23, 1877)',
      'Perito Agrimensor y Tasador de Tierras (Land Surveyor & Assessor, 1877)'
    ],
    achievements: [
      'Graduated with highest academic distinction: sobresaliente (excellent) in all subjects.',
      'Won five first-prize medals in Latin, Spanish, Greek, Rhetoric, and Mathematics.',
      'Rose from externo to "Emperor" of the Roman Empire within the classroom competition system.',
      'Authored early literary works: "Mi Primera Inspiración", "Felicitation", and "Por la Educación Recibe Lustre la Patria".',
      'Completed vocational surveying curriculum at Ateneo simultaneously while taking university courses at UST.'
    ],
    professorsOrMentors: [
      'Fr. Francisco de Paula Sanchez, S.J. (Beloved literature mentor who recognized Rizal’s poetic genius)',
      'Fr. Jose Bech, S.J. (First professor at Ateneo)',
      'Don Agustin Saez (Spanish master of painting)',
      'Romualdo de Jesus (Master sculptor who guided Rizal’s carving of the Sacred Heart of Jesus)'
    ],
    historicalNotes: 'Under the progressive Ratio Studiorum of the Jesuits, Rizal acquired a rigorous classical foundation emphasizing intellectual discipline, humanities, rhetoric, and moral character. His fondest memories of Manila education centered on the Ateneo.'
  },
  {
    institution: 'Royal & Pontifical University of Santo Tomas',
    period: '1877 – 1882',
    location: 'Intramuros, Manila',
    degrees: [
      'Philosophy and Letters (1877–1878)',
      'Medicine (Pre-Med & Medical Coursework, 1878–1882)'
    ],
    achievements: [
      'First prize in the Liceo Artistico-Literario de Manila (1879) for his poem "A la Juventud Filipina" (To the Filipino Youth), hailing the youth as "bella esperanza de la patria mia".',
      'First prize in 1880 for his allegorical drama "El Consejo de los Dioses" (The Council of the Gods), triumphing over Spanish competitors.',
      'Consistently passed medical coursework despite discriminatory grading compared to peninsular Spanish students.',
      'Founded the secret student fraternity "Compañerismo" (1880) to defend Filipino students in street brawls against arrogant Spanish youths.'
    ],
    professorsOrMentors: [
      'Fr. Joaquin Fonseca, O.P. (Rector)',
      'Dominican faculty of Medicine and Philosophy'
    ],
    historicalNotes: 'Rizal’s tenure at UST was clouded by institutional rigidity. Dominican professors treated Filipino students with condescension, laboratory apparatuses were kept behind glass cabinets for display rather than student use, and scholastic dogma stifled inquiry. These grievances prompted his secret departure for Spain in 1882.'
  },
  {
    institution: 'Universidad Central de Madrid',
    period: '1882 – 1885',
    location: 'Madrid, Spain',
    degrees: [
      'Licenciado en Medicina (Licentiate in Medicine, June 21, 1884)',
      'Licenciado en Filosofía y Letras (Licentiate in Philosophy and Letters, June 19, 1885)'
    ],
    achievements: [
      'Conferred Licentiate in Medicine with fair and good ratings, qualifying him to practice general medicine.',
      'Conferred Licentiate in Philosophy and Letters with sobresaliente (excellent) ratings across all subjects.',
      'Passed all subjects for the Doctor of Medicine degree (did not submit the doctoral thesis due to printing and fee expenses).',
      'Delivered the historic Brindis toast (June 25, 1884) at the banquet for Luna and Hidalgo at Hotel Ingles, catapulting him to political prominence.',
      'Engaged with Republican and liberal intellectuals like Don Miguel Morayta and joined the Masonic Lodge Acacia.'
    ],
    professorsOrMentors: [
      'Don Miguel Morayta (Professor of History, champion of academic freedom)',
      'Dr. Francisco de Paula Canalejas',
      'Don Emilio Castelar (Former President of the First Spanish Republic)'
    ],
    historicalNotes: 'In Madrid’s university atmosphere, Rizal encountered academic freedom, political protest, and liberal discourse unthinkable in colonial Manila. The dual licentiates proved that Filipinos possessed intellectual capacities equal or superior to any European.'
  }
];

export const MEDICAL_TRAINING_DATA = [
  {
    city: 'Paris, France',
    period: 'November 1885 – February 1886',
    preceptor: 'Dr. Louis de Wecker (1832–1906)',
    institution: 'Clinical Ophthalmic Institute (55 Rue du Cherche-Midi)',
    details: [
      'Dr. de Wecker was celebrated as one of Europe’s foremost pioneers in modern cataract extractions and sclerotomy.',
      'Rizal served as an active clinical assistant, witnessing and assisting in 10 to 12 delicate ocular surgeries daily.',
      'Acquired precise mastery of microscopic eye surgery techniques, explicitly preparing himself to restore his mother’s failing eyesight.',
      'In his letters home, Rizal described de Wecker as a medical luminary whose surgical dexterities were unparalleled in Europe.'
    ]
  },
  {
    city: 'Heidelberg, Germany',
    period: 'February – August 1886',
    preceptor: 'Dr. Otto Becker (1828–1890)',
    institution: 'Augenklinik (University Eye Hospital), University of Heidelberg',
    details: [
      'Trained under Dr. Otto Becker, legendary director of the Heidelberg University Eye Clinic and pioneer of ophthalmic pathology.',
      'Attended lectures by Becker and Wilhelm Kuehne (famed physiologist who coined the term "enzyme").',
      'Honed clinical diagnostic skills using the ophthalmoscope and mastered German medical and surgical literature.',
      'While in Heidelberg, lived with Lutheran pastor Karl Ullmer in Wilhelmsfeld, learning profound lessons in religious tolerance and German scientific discipline.'
    ]
  }
];

export const SELF_DIRECTED_LEARNING_DATA = [
  {
    category: 'Polyglot Linguistics',
    subtitle: 'Fluency & Literacy in 22+ Languages',
    description: 'Rizal mastered or read Tagalog, Spanish, Latin, Greek, French, German, English, Italian, Hebrew, Arabic, Portuguese, Catalan, Japanese, Sanskrit, Dutch, Swedish, Russian, Chinese, Visayan, Ilocano, and Subanon. In Berlin, he composed letters in German and translated Schiller into Tagalog.',
    examples: ['Translation of Schiller’s William Tell (1886)', 'Gramática Tagala (1893)', 'Correspondence with Blumentritt in scholarly German']
  },
  {
    category: 'Literature, Poetry & Drama',
    subtitle: 'Foundational Voice of Filipino Romanticism & Realism',
    description: 'Composed iconic lyrical poetry starting from childhood through his farewell masterpiece. He pioneered the social realist novel in Southeast Asia, using incisive satire, dramatic irony, and deep sociopolitical critique.',
    examples: ['A la Juventud Filipina (1879)', 'A las Flores de Heidelberg (1886)', 'Noli Me Tangere (1887)', 'El Filibusterismo (1891)', 'Mi Último Adiós (1896)']
  },
  {
    category: 'Fine Arts: Sculpture & Painting',
    subtitle: 'Classicist Form and Emotional Pathos',
    description: 'Trained under Agustin Saez and Romualdo de Jesus in Manila, and frequented European master studios including Juan Luna’s atelier in Paris. His terracotta and batingaw wood carvings exhibited exceptional anatomical fidelity.',
    examples: ['The Sacred Heart of Jesus (carved at age 14 from batikuling wood)', 'The Triumph of Science over Death (terracotta, gifted to Blumentritt)', 'Dapitan Clay Busts']
  },
  {
    category: 'Engineering & Land Surveying',
    subtitle: 'Practical Utility and Civil Works',
    description: 'Certified as Perito Agrimensor y Tasador de Tierras by the Ateneo Municipal. During his later exile in Dapitan, he put this training into practice by engineering a gravity-flow municipal waterworks system using clay pipes and lime mortar, praised by American engineers.',
    examples: ['Ateneo Surveying License (1877)', 'Dapitan Municipal Water System (1894)', 'Relief Map of Mindanao in Dapitan Town Plaza']
  },
  {
    category: 'Natural Sciences, Biology & Ethnography',
    subtitle: 'Specimen Collection and European Scholarly Societies',
    description: 'Member of the Anthropological and Geographic Societies of Berlin under Dr. Rudolf Virchow. In Dapitan, collected hundreds of rare biological specimens sent to the Dresden Museum, three of which were named in his honor by European scientists.',
    examples: [
      'Draco rizali (flying lizard)',
      'Apogonia rizali (small beetle)',
      'Rhacophorus rizali (rare frog species)',
      'Scholarly paper on Tagalog metrical art read before Berlin Anthropological Society (1887)'
    ]
  }
];

export const REFORM_OBJECTIVES_DATA: ReformObjective[] = [
  {
    id: 'representation',
    title: 'Representation in the Spanish Cortes',
    tagline: 'A Democratic Voice in Madrid’s Parliament',
    description: 'Filipinos demanded the restoration of Philippine representation in the Spanish parliament (Cortes Generales), which the archipelago had enjoyed briefly during liberal interludes (1810–1813, 1820–1823, 1834–1837) before being revoked.',
    historicalContext: 'Without deputies in the Cortes, the Philippines was ruled by arbitrary ministerial decrees and autocratic Governors-General who could suspend laws at will.',
    primaryAdvocates: ['Marcelo H. del Pilar', 'Graciano Lopez Jaena', 'Jose Rizal'],
    colonialReality: 'The Spanish Cortes repeatedly shelved representation petitions, fearing Filipino deputies would expose colonial financial plunder and demand colonial autonomy.',
    iconName: 'Building2'
  },
  {
    id: 'secularization',
    title: 'Secularization of the Parishes',
    tagline: 'Restoring Parishes to Native Clergy',
    description: 'Transferring parish administration from Spanish regular friars (Dominicans, Augustinians, Franciscans, Recollects) to secular native Filipino priests, fulfilling Council of Trent decrees.',
    historicalContext: 'The execution of Fathers Gomez, Burgos, and Zamora (Gomburza) in 1872 had martyred the secularization cause. The Propaganda Movement continued their fight against friar monopolization of fertile haciendas and local political power.',
    primaryAdvocates: ['Father Jose Burgos (inspiration)', 'Marcelo H. del Pilar', 'Mariano Ponce'],
    colonialReality: 'Spanish friar corporations held immense economic estates (such as the Dominican Calamba hacienda) and functioned as colonial police inspectors, censoring books and persecuting dissenters.',
    iconName: 'Church'
  },
  {
    id: 'equal-rights',
    title: 'Equal Rights and Treatment for Filipinos',
    tagline: 'Assimilation as a Spanish Province, Not an Exploited Colony',
    description: 'Equality before the law for both Indios and peninsular Spaniards, dismantling racial discrimination in courts, administrative appointments, university faculties, and taxation.',
    historicalContext: 'Filipinos were legally classified as "Indios," subjected to the onerous tribute (later cédula personal), polo y servicio (forced labor), and corporal punishments barred for Europeans.',
    primaryAdvocates: ['Jose Rizal', 'Antonio Luna', 'Jose Maria Panganiban'],
    colonialReality: 'Colonial authorities maintained a rigid caste hierarchy: Peninsulares (Spanish-born) held high offices, Insulares/Criollos held secondary posts, and native Filipinos were treated as racial inferiors.',
    iconName: 'Scale'
  },
  {
    id: 'press-freedom',
    title: 'Freedom of Speech and Press',
    tagline: 'The Right to Speak, Publish, and Assemble',
    description: 'Abolition of the draconian Permanent Board of Censorship (Comisión Permanente de Censura) in Manila to allow free publication of periodicals, books, and public assembly.',
    historicalContext: 'In Manila, possessing Rizal’s novels or del Pilar’s pamphlets was deemed an act of high treason punishable by imprisonment or exile to remote islands. Free discourse could only occur in Spain.',
    primaryAdvocates: ['Marcelo H. del Pilar', 'Graciano Lopez Jaena', 'Basilio Teodoro Moran'],
    colonialReality: 'Newspapers in Manila were heavily redacted with blank columns where government or church censors had snipped articles critical of friars or corrupt magistrates.',
    iconName: 'FileText'
  },
  {
    id: 'reform-anti-abuse',
    title: 'Ending Friar & Colonial Abuses',
    tagline: 'Judicial Integrity, Fair Taxation, and Human Dignity',
    description: 'Curbing the unchecked powers of the Guardia Civil, eradicating arbitrary deportations without trial, ending usurious agrarian leaseholds on church estates, and modernizing infrastructure and schools.',
    historicalContext: 'The Calamba Agrarian Dispute (1887–1888) saw Rizal’s family and townspeople evicted, their houses burned, and his father and sisters exiled to distant provinces when they questioned Dominican rent increases.',
    primaryAdvocates: ['Jose Rizal', 'Paciano Rizal', 'Mariano Ponce'],
    colonialReality: 'The Governor-General wielded the "cumplase" and arbitrary executive power to deport any native without habeas corpus or public trial upon mere suspicion of disloyalty.',
    iconName: 'ShieldAlert'
  }
];
