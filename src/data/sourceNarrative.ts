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
    'Jose Rizal began his formal schooling in Calamba under private tutors and his mother, Teodora Alonso, before being sent to Manila for higher studies. His years in Manila from 1872 to 1882 covered secondary and the start of collegiate education, shaping the intellectual foundation he later brought to Europe.',
  ateneo: {
    period: '1872–1877',
    summary:
      'Rizal enrolled at the Ateneo Municipal, run by the Jesuits, in June 1872 at around age eleven, shortly after the execution of the GOMBURZA. He initially boarded with a family friend in Intramuros before later living inside the Ateneo as an interno. He excelled academically, consistently earning the rank of sobresaliente and winning medals in religion, Latin, Spanish, and other courses. Jesuit teachers—notably Father Francisco de Paula Sanchez—encouraged his love of literature and the sciences. He graduated in March 1877 with the degree of Bachelor of Arts, delivering a graduation address, and earned recognition as a gold medalist. During this period he wrote early poems including “Mi Primera Inspiración” and later “A la Juventud Filipina” (1879), which won a literary contest of the Liceo Artistico-Literario de Manila.',
  },
  ust: {
    period: '1877–1882',
    summary:
      'After the Ateneo, Rizal enrolled at the University of Santo Tomas in 1877. He first took Philosophy and Letters—reportedly to please his father—then shifted to Medicine, aiming eventually to treat his mother’s failing eyesight. He also studied at the Ateneo concurrently for a surveying and expert assessing course (perito agrimensor), completed around 1877–1878, though he could not claim the title until legal age. At UST he felt discrimination against Filipino students by some Dominican professors; disillusionment with friar-dominated higher education, plus the desire for thorough medical training, became major reasons for continuing his studies abroad.',
  },
};

export const FIRST_TRAVELS = {
  period: '1882–1887',
  intro:
    'Rizal left the Philippines secretly on May 3, 1882, sailing for Spain aboard the steamer Salvadora under the alias “Jose Mercado” to avoid suspicion. He traveled by way of Singapore, then through the Suez Canal, stopping at ports such as Colombo, Aden, and Mediterranean cities before reaching Barcelona.',
  spain: {
    period: '1882–1885',
    summary:
      'Rizal arrived in Barcelona in June 1882 and wrote his early essay “Amor Patrio” under the pen name “Laong Laan.” He then moved to Madrid, enrolling at the Universidad Central de Madrid in November 1882 for Medicine and later Philosophy and Letters. He earned his Licentiate in Medicine in June 1884 and the Licentiate in Philosophy and Letters in June 1885. In Madrid he lived frugally, joined the Filipino ilustrados, became active in the reform movement, joined a Masonic lodge, and took part in the Círculo Hispano-Filipino.',
  },
  franceGermany: {
    period: '1885–1887',
    summary:
      'After Madrid, Rizal went to Paris in 1885, observing at hospitals and working briefly under ophthalmologist Dr. Louis de Wecker to gain practical eye-surgery training for his mother’s condition. In Germany—Heidelberg, Leipzig, and Berlin—he continued ophthalmology under Dr. Otto Becker, wrote “A las Flores de Heidelberg,” joined the Anthropological Society in Berlin, and published Noli Me Tangere in March 1887 with financial help from Maximo Viola. He toured parts of Europe with Viola before returning to the Philippines in August 1887.',
  },
};

export const HIGHER_EDUCATION = {
  intro:
    'Rizal’s higher education was distinguished by its breadth: he pursued and completed formal studies in multiple fields across several countries—an unusually cosmopolitan academic path for a Filipino of his time.',
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
    'The Propaganda Movement was the reform campaign led mainly by ilustrados (educated Filipinos) based in Spain from roughly the mid-1880s to the early 1890s. Its central aim was not independence but assimilation and reform: representation of the Philippines in the Spanish Cortes, secularization of parishes, equal rights and treatment for Filipinos, freedom of the press, and an end to abuses by the friars and colonial officials.',
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
    'The movement gradually weakened due to lack of funds, internal rivalries and factionalism (including tensions between Rizal and del Pilar), and the Spanish government’s unwillingness to grant meaningful reforms. By the early 1890s, many Filipinos abroad—and leaders within the Philippines such as Andres Bonifacio—concluded that peaceful, assimilationist reform through Spain was not achievable, contributing to the shift toward the more radical, independence-oriented Katipunan.',
};
