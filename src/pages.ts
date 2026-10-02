export type PageId =
  | 'home'
  | 'education'
  | 'travels'
  | 'higher-education'
  | 'propaganda'
  | 'timeline'
  | 'closing'
  | 'relics';

export interface TopicSection {
  heading: string;
  text: string;
}

export interface TopicPage {
  id: PageId;
  label: string;
  navLabel: string;
  kicker: string;
  title: string;
  summary: string;
  sections: TopicSection[];
}

export const PAGES: TopicPage[] = [
  {
    id: 'home',
    label: 'Home',
    navLabel: 'Home',
    kicker: 'Overview',
    title: 'Jose Rizal',
    summary: 'His schooling, travels, and writing led the Propaganda Movement.',
    sections: [],
  },
  {
    id: 'education',
    label: "Rizal's Education in Manila",
    navLabel: 'Education in Manila',
    kicker: '1872–1882',
    title: "Rizal's Education in Manila (1872–1882)",
    summary:
      'From early lessons in Calamba to the Ateneo and the University of Santo Tomas, the Manila years explain why he later studied and wrote in Europe.',
    sections: [
      {
        heading: 'The Beginning: From Laguna to Manila',
        text: 'Born in Calamba in 1861, he first studied with his mother and private tutors. In June 1872 he was sent to Manila, where he attended the Ateneo and then Santo Tomas.',
      },
      {
        heading: 'Rizal at Ateneo Municipal de Manila',
        text: 'He entered in 1872 under the surname Rizal, lived as a boarder, and studied under the Jesuit system of two competing empires. Father Francisco de Paula Sanchez encouraged his writing.',
      },
      {
        heading: "Rizal's Achievements at Ateneo",
        text: 'He often ranked sobresaliente, won medals, and graduated Bachelor of Arts in March 1877. He also finished surveying and later wrote “A la Juventud Filipina” (1879).',
      },
      {
        heading: 'Rizal at UST',
        text: 'From 1877 to 1882 he studied Philosophy and Letters, then Medicine. Unfair treatment and weak training led him, with Paciano, to continue in Spain in 1882.',
      },
      {
        heading: 'The Impact of His Education in Manila',
        text: 'The city gave him languages, discipline, and a clear view of inequality. Those years stand behind his later degrees and behind Noli Me Tangere.',
      },
    ],
  },
  {
    id: 'travels',
    label: "Rizal's First Travels Abroad (1882–1887)",
    navLabel: 'First Travels Abroad',
    kicker: '1882–1887',
    title: "Rizal's First Travels Abroad (1882–1887)",
    summary:
      'From the secret departure on the Salvadora in May 1882 to the return to Manila in August 1887, stop by stop through Asia and Europe.',
    sections: [
      {
        heading: 'Philippines to Spain, 1882',
        text: 'He left Manila on May 3, 1882 as Jose Mercado, then stopped in Singapore, Ceylon, Aden, the Suez Canal, Naples, and Marseilles before Barcelona and Madrid.',
      },
      {
        heading: 'Paris, Germany, and the Noli, 1883–1887',
        text: 'He trained in ophthalmology in Paris and Heidelberg, wrote in Wilhelmsfeld, and published Noli Me Tangere in Berlin in March 1887.',
      },
      {
        heading: 'The way home, 1887',
        text: 'He met Blumentritt in Leitmeritz, toured Vienna, Switzerland, and Rome, sailed from Marseilles in July, and reached Manila in August 1887.',
      },
    ],
  },
  {
    id: 'higher-education',
    label: 'Higher Education',
    navLabel: 'Higher Education',
    kicker: 'The Knowledge Archive',
    title: 'Higher Education',
    summary:
      'Rizal studied in more than one country and more than one field. Formal degrees plus practical training and self-study made him a leading voice of the reform movement.',
    sections: [
      {
        heading: 'Manila',
        text: 'At UST he studied Philosophy and Letters, then Medicine, but left without finishing the medical course. At the Ateneo he completed surveying, one of his first professional qualifications.',
      },
      {
        heading: 'Madrid',
        text: 'At the Universidad Central de Madrid he earned a Licentiate in Medicine (1884) and a Licentiate in Philosophy and Letters (1885), and took further courses toward a doctorate in Medicine.',
      },
      {
        heading: 'Eye surgery and self-study',
        text: 'He trained under Dr. Louis de Wecker in Paris and Dr. Otto Becker in Heidelberg. On his own he learned many languages, plus literature, art, and science.',
      },
    ],
  },
  {
    id: 'propaganda',
    label: 'Propaganda Movement',
    navLabel: 'Propaganda Movement',
    kicker: '1880s–early 1890s',
    title: 'Propaganda Movement',
    summary:
      'A peaceful campaign for reform. Propagandists used writing, newspapers, and petitions to expose colonial abuses and ask Spain for equality, representation, and rights.',
    sections: [
      {
        heading: 'What was the Propaganda Movement?',
        text: 'The movement sought peaceful reforms under Spanish rule, not an immediate armed revolution. “Propaganda” here means spreading ideas in support of reform.',
      },
      {
        heading: 'What did they want?',
        text: 'Equal treatment, a seat in the Spanish Cortes, recognition as a province of Spain, freedom of speech and the press, secularization of parishes, an end to abuses such as forced labor, and equal opportunities in government and education.',
      },
      {
        heading: "What was José Rizal's role?",
        text: 'He fought with his pen. Noli Me Tangere and El Filibusterismo exposed colonial abuses. Study and travel in Europe shaped his nationalism.',
      },
      {
        heading: 'La Solidaridad',
        text: 'A newspaper published in Spain. Graciano López Jaena was its first editor; Marcelo H. del Pilar later led the publication. It stopped in 1895.',
      },
      {
        heading: 'Why it declined',
        text: 'Spain did not grant the reforms. The campaign also ran out of money and split among its leaders. In 1892 Rizal founded La Liga Filipina to organize peaceful reform inside the Philippines.',
      },
    ],
  },
  {
    id: 'timeline',
    label: 'Timeline',
    navLabel: 'Timeline',
    kicker: '1872–1896',
    title: 'Timeline',
    summary: 'The same story in order, from the Ateneo to the end of the reform campaign.',
    sections: [],
  },
  {
    id: 'closing',
    label: 'The End',
    navLabel: 'The End',
    kicker: 'The end',
    title: 'The End',
    summary: 'The story of his education, travels, and the Propaganda Movement closes here.',
    sections: [],
  },
  {
    id: 'relics',
    label: '3D Relics',
    navLabel: '3D Relics',
    kicker: 'Objects',
    title: '3D Relics',
    summary:
      'These objects mark moments in the story: the Ateneo medal, Madrid diplomas, “Amor Patrio,” and the first edition of Noli Me Tangere. Turn a model to look at it.',
    sections: [],
  },
];

/** The four topic pages shown in the navbar. Home is the logo. 3D Relics stays as its own button. */
export const NAV_PAGES = PAGES.filter(
  (page) => page.id !== 'home' && page.id !== 'relics' && page.id !== 'closing',
);

const ALIASES: Record<string, PageId> = {
  home: 'home',
  hero: 'home',
  'manila-education': 'education',
  'travel-map': 'travels',
  'travel-story': 'travels',
  europe: 'travels',
  'spain-germany': 'travels',
  'france-germany': 'travels',
  'higher-education': 'higher-education',
  'higher-ed': 'higher-education',
  propaganda: 'propaganda',
  'figures-gallery': 'propaganda',
  'key-figures': 'propaganda',
  solidaridad: 'propaganda',
  'la-solidaridad': 'propaganda',
  decline: 'propaganda',
  'interactive-3d': 'relics',
  artifacts: 'relics',
  relics: 'relics',
  timeline: 'timeline',
  'summary-timeline': 'timeline',
  'final-timeline': 'timeline',
};

export function resolvePage(id: string): PageId {
  if (PAGES.some((page) => page.id === id)) return id as PageId;
  return ALIASES[id] ?? 'education';
}

export function pageFromHash(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  if (!raw) return 'home';
  return resolvePage(raw);
}
