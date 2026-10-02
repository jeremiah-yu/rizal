/**
 * Core narratives distilled from Rizal_Education_Travels_Propaganda.docx
 * Used across section intros and dossier copy so the site mirrors the source outline.
 */

export const SITE_TITLE = 'Jose Rizal: Education, Travels, and the Propaganda Movement';

export const HERO_TAGLINE =
  'Explore the education, travels, intellectual development, and reform movement that shaped Jose Rizal’s journey from Manila to Europe—and into the Propaganda Movement.';

export const EDUCATION_MANILA = {
  period: '1872–1882',
  intro:
    'Rizal studied first in Calamba with tutors and his mother, Teodora Alonso, then in Manila from 1872 to 1882. This schooling is what he later carried to Europe.',
  ateneo: {
    period: '1872–1877',
    summary:
      'He entered the Jesuit Ateneo in June 1872, about age eleven, soon after Gomburza were executed. He often ranked sobresaliente and won medals. Father Francisco de Paula Sanchez encouraged his writing. He graduated Bachelor of Arts in March 1877 and later wrote “A la Juventud Filipina” (1879).',
  },
  ust: {
    period: '1877–1882',
    summary:
      'At UST he took Philosophy and Letters, then Medicine, hoping to treat his mother’s eyes. He also finished surveying at the Ateneo but could not use the title until he was of legal age. Unfair treatment of Filipino students, and weak medical training, pushed him to study in Spain.',
  },
};

export const FIRST_TRAVELS = {
  period: '1882–1887',
  intro:
    'On May 3, 1882 he left in secret on the steamer Salvadora as Jose Mercado. He sailed by Singapore and the Suez Canal, then reached Barcelona.',
  spain: {
    period: '1882–1885',
    summary:
      'In Barcelona he wrote “Amor Patrio” as Laong Laan. In Madrid he earned a Licentiate in Medicine (1884) and in Philosophy and Letters (1885), and joined other Filipinos working for reform.',
  },
  franceGermany: {
    period: '1885–1887',
    summary:
      'In Paris he trained in eye surgery with Dr. Louis de Wecker. In Heidelberg he continued with Dr. Otto Becker and wrote “A las Flores de Heidelberg.” Noli Me Tangere was printed in Berlin in March 1887 with help from Maximo Viola. He returned home in August 1887.',
  },
};

export const HIGHER_EDUCATION = {
  intro:
    'Rizal studied in more than one country and more than one field. Degrees, eye-surgery training, and self-study later made him the leading voice of the reform movement.',
  pillars: [
    {
      title: 'University of Santo Tomas, Manila',
      detail:
        'Philosophy and Letters, then Medicine (1877–1882); left without completing the medical course due to discrimination and dissatisfaction with the curriculum.',
    },
    {
      title: 'Ateneo Municipal',
      detail:
        'Completed surveying (perito agrimensor)—one of his earliest professional qualifications.',
    },
    {
      title: 'Universidad Central de Madrid',
      detail:
        'Licentiate in Medicine (1884) and Licentiate in Philosophy and Letters (1885), with further coursework toward a Doctorate in Medicine.',
    },
    {
      title: 'Practical ophthalmology',
      detail:
        'Training under Dr. Louis de Wecker in Paris and Dr. Otto Becker in Heidelberg, focused on eye surgery.',
    },
    {
      title: 'Independent self-study',
      detail:
        'Largely self-taught in languages (over twenty), literature, sculpture, painting, engineering, and the natural sciences—the polymath reputation he built across Europe.',
    },
  ],
  closing:
    'This combination of formal degrees and self-directed learning gave Rizal the credibility and intellectual range that later made him the leading voice of the Filipino reform movement in Europe.',
};

export const PROPAGANDA_MOVEMENT = {
  period: 'mid-1880s – early 1890s',
  intro:
    'Filipino students in Spain, from the mid-1880s to the early 1890s, asked for reform rather than independence: a voice in the Cortes, Filipino priests in parishes, equal rights, a free press, and an end to friar abuses.',
  keyFigures: [
    {
      name: 'Jose Rizal',
      role: 'Through Noli Me Tangere (1887), El Filibusterismo (1891), and numerous essays, became the movement’s foremost literary and symbolic figure.',
    },
    {
      name: 'Marcelo H. del Pilar',
      role: 'Editor and driving organizational force behind the movement’s main newspaper.',
    },
    {
      name: 'Graciano Lopez Jaena',
      role: 'Fiery orator and writer; founder of La Solidaridad in 1889.',
    },
    {
      name: 'Mariano Ponce',
      role: 'Secretary and treasurer for Filipino associations abroad; maintained correspondence among members.',
    },
  ],
  organizations: [
    {
      name: 'La Solidaridad',
      detail:
        'Principal newspaper of the movement, published in Barcelona and later Madrid, advocating reforms and exposing colonial abuses.',
    },
    {
      name: 'Asociación Hispano-Filipina',
      detail:
        'Organization formed in Madrid to support the reform campaign and lobby Spanish politicians.',
    },
  ],
  decline:
    'The campaign weakened from lack of money, disagreements (including between Rizal and del Pilar), and Spain’s refusal to reform. By the early 1890s many Filipinos decided peaceful appeals were not enough.',
};
