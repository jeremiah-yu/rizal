import { ArticleBlock } from '../components/Article';
import { PageId } from '../pages';

export const POSTS: Partial<Record<PageId, ArticleBlock[]>> = {
  home: [
    {
      type: 'img',
      src: 'jose-rizal.jpg',
      alt: 'Historical portrait of Jose Rizal',
      caption: 'Jose Rizal, 1861–1896.',
      portrait: true,
    },
    {
      type: 'p',
      text: 'Jose Protacio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. His parents were Francisco Mercado and Teodora Alonso, and he grew up in a large family on a Dominican estate. This site follows the parts of his life that shaped the reform movement: schooling in Manila, his first travels from 1882 to 1887, his higher education, and the Propaganda Movement.',
    },
    {
      type: 'p',
      text: 'He wrote under pen names, including Laong Laan and Dimasalang. His novels Noli Me Tangere (1887) and El Filibusterismo (1891) described abuses in the colony and made him the best-known Filipino writer in Spain. Turn the pages above to read each part. The 3D relics are the objects tied to that story: medals, diplomas, and the books.',
    },
  ],
  education: [
    { type: 'h2', text: 'The Beginning: From Laguna to Manila' },
    {
      type: 'p',
      text: 'Jose Rizal was born on June 19, 1861, in Calamba, Laguna. His first lessons were at home. His mother, Teodora Alonso, taught him to read, and private tutors continued that early schooling in the province.',
    },
    {
      type: 'p',
      text: 'Calamba could not give him the formal course he needed next. In June 1872, about eleven years old and soon after Gomburza were executed, his family sent him to Manila. From 1872 to 1882 he studied in the city, first at the Ateneo Municipal and then at the University of Santo Tomas.',
    },
    {
      type: 'img',
      src: 'calamba-marker.jpg',
      alt: 'Historical marker at the birthplace of Jose Rizal in Calamba, Laguna',
      caption: 'The historical marker at Rizal’s birthplace in Calamba, Laguna.',
    },
    { type: 'h2', text: 'Rizal at Ateneo Municipal de Manila' },
    {
      type: 'p',
      text: 'He entered the Jesuit school in June 1872. Paciano advised him to use the surname Rizal so he would not be marked by the Mercado name. He boarded in Intramuros, then lived inside the Ateneo as an interno. In his first years he rose quickly. Classes were split into two “empires,” Roman and Carthaginian, and students competed for rank.',
    },
    {
      type: 'p',
      text: 'The Jesuit course covered Latin, Spanish, rhetoric, philosophy, and science. Father Jose Bech was among his early teachers. Father Francisco de Paula Sanchez later encouraged his writing and his interest in science. Daily life was strict: recitations, medals for high marks, and long hours as a boarder. He also began to write, including the early poem “Mi Primera Inspiración.”',
    },
    {
      type: 'img',
      src: 'rizal-at-16.jpg',
      alt: 'Portrait of Jose Rizal at about sixteen',
      caption: 'José Rizal at about sixteen, during his years at the Ateneo.',
      portrait: true,
    },
    { type: 'h2', text: "Rizal's Achievements at Ateneo" },
    {
      type: 'p',
      text: 'He often ranked sobresaliente and won medals in Latin, Spanish, and other subjects. In March 1877 he graduated Bachelor of Arts and gave a graduation address. Around the same years he finished a surveying course, though he could not use the title of perito agrimensor until he was of legal age. In 1879 his poem “A la Juventud Filipina” won a contest of the Liceo Artistico-Literario.',
    },
    {
      type: 'img',
      src: 'ateneo-municipal.jpg',
      alt: 'The Ateneo Municipal de Manila',
      caption: 'The Ateneo Municipal de Manila, where he finished his Bachelor of Arts in 1877.',
    },
    { type: 'h2', text: 'Rizal at UST' },
    {
      type: 'p',
      text: 'In 1877 he entered the Royal and Pontifical University of Santo Tomas. He took Philosophy and Letters first, reportedly to please his father, then shifted to Medicine so he could treat his mother’s failing eyesight.',
    },
    {
      type: 'p',
      text: 'The climate at UST was stricter and more hostile than at the Ateneo. Some professors treated Filipino students as inferiors, and the laboratories were poorly opened to them. The medical course also fell short of what he wanted. With his brother Paciano, he decided to continue his studies in Spain. He left Manila in secret on May 3, 1882.',
    },
    {
      type: 'img',
      src: 'ust-marker.jpg',
      alt: 'Historical marker for Jose Rizal at the University of Santo Tomas',
      caption: 'The marker at the Arch of the Centuries records his years at Santo Tomas, 1877–1882.',
    },
    { type: 'h2', text: 'The Impact of His Education in Manila' },
    {
      type: 'p',
      text: 'Manila gave him languages, science, the habit of writing, and his first look at a university. Sanchez and the Jesuits shaped his discipline and his poetry. UST showed him the inequality Filipino students faced, and that experience pushed him toward Europe.',
    },
    {
      type: 'p',
      text: 'Those ten years connect directly to what came later: the medical degree in Madrid, and the novels that described the colony he had studied in. The schooling of 1872–1882 is the ground of Noli Me Tangere.',
    },
    {
      type: 'img',
      src: 'noli-cover.jpg',
      alt: 'Original cover of Noli Me Tangere',
      caption: 'The original cover of Noli Me Tangere, the novel shaped by what he saw as a student.',
    },
  ],
  travels: [
    {
      type: 'p',
      text: 'On May 3, 1882 he left Manila in secret on the steamer Salvadora, using the name Jose Mercado. Only a few people knew: his brother Paciano, his uncle Antonio Rivera, and some of the Jesuits. Paciano gave him money for the trip, and his sister Saturnina gave him a diamond ring. He sailed through Singapore, Colombo, Aden, and the Suez Canal. The canal, opened in 1869, cut the voyage between Manila and Spain to about a month.',
    },
    {
      type: 'img',
      src: 'steamship-manila.jpg',
      alt: 'A steamship leaving Manila Bay',
      caption: 'He left Manila Bay on May 3, 1882, aboard the Salvadora.',
    },
    { type: 'h2', text: 'Spain, 1882–1885' },
    {
      type: 'p',
      text: 'He reached Barcelona in June 1882 and wrote “Amor Patrio” under the pen name Laong Laan. The essay appeared in Diariong Tagalog that August, with a Tagalog version by Marcelo H. del Pilar. In Madrid he studied Medicine and Philosophy and Letters at the Universidad Central. He earned the licentiate in Medicine in June 1884 and in Philosophy and Letters in June 1885. He lived simply, joined Filipino students in the Círculo Hispano-Filipino, and on June 25, 1884 gave the Brindis toast for the painters Juan Luna and Felix Resurreccion Hidalgo, saying Filipino talent was equal to any in Europe.',
    },
    {
      type: 'img',
      src: 'madrid-university.jpg',
      alt: 'A nineteenth-century university lecture hall in Madrid',
      caption: 'In Madrid he finished two degrees at the Universidad Central.',
    },
    { type: 'h2', text: 'France and Germany, 1885–1887' },
    {
      type: 'p',
      text: 'In Paris he trained in eye surgery with Dr. Louis de Wecker, hoping to help his mother. In Heidelberg he continued with Dr. Otto Becker and wrote “A las Flores de Heidelberg.”',
    },
    {
      type: 'img',
      src: 'heidelberg.jpg',
      alt: 'The old town and river at Heidelberg',
      caption: 'Heidelberg, where he studied the eye and wrote “A las Flores de Heidelberg.”',
    },
    {
      type: 'p',
      text: 'In Berlin he was admitted to scientific societies, but the winter of 1886–1887 was hard: money from home did not arrive, and he nearly gave up the manuscript. Dr. Maximo Viola lent him 300 pesos. With that help, Noli Me Tangere was printed in March 1887. He toured parts of Europe with Viola, then returned to the Philippines in August 1887.',
    },
    {
      type: 'img',
      src: 'berlin-press.jpg',
      alt: 'A nineteenth-century printing press',
      caption: 'Noli Me Tangere was printed in Berlin in March 1887.',
    },
  ],
  'higher-education': [
    {
      type: 'p',
      text: 'The Knowledge Archive gathers the schools, the medical degree, and the training Rizal pursued beyond the classroom. Formal study and years of reading on his own later made him a leading voice of the reform movement.',
    },
    { type: 'h2', text: 'Ateneo Municipal de Manila' },
    {
      type: 'p',
      text: 'At the Ateneo he finished the Bachelor of Arts in 1877 and, around the same years, a surveying course. He could not use the surveyor’s title until he was of legal age. The Jesuit training in Latin, Spanish, and science stayed with him long after he left Intramuros.',
    },
    {
      type: 'img',
      src: 'ateneo-municipal.jpg',
      alt: 'The Ateneo Municipal de Manila',
      caption: 'Ateneo Municipal de Manila, the Jesuit school of his Bachelor of Arts.',
    },
    { type: 'h2', text: 'Royal and Pontifical University of Santo Tomas' },
    {
      type: 'p',
      text: 'At the University of Santo Tomas he studied Philosophy and Letters, then Medicine, hoping to treat his mother’s failing eyesight. He left without finishing the medical course. Some professors treated Filipino students as inferiors, and the training fell short of what he wanted.',
    },
    {
      type: 'img',
      src: 'ust-building.jpg',
      alt: 'The Royal and Pontifical University of Santo Tomas',
      caption: 'The Royal and Pontifical University of Santo Tomas, where he began medicine.',
    },
    { type: 'h2', text: 'Medicine at the Universidad Central de Madrid' },
    {
      type: 'p',
      text: 'In Madrid he completed what Manila had not. At the Universidad Central he earned a Licentiate in Medicine in June 1884 and a Licentiate in Philosophy and Letters in June 1885. He also took further courses toward a doctorate in Medicine. Those degrees licensed him to practice and proved that a Filipino student could match the standard of a Spanish university.',
    },
    {
      type: 'img',
      src: 'universidad-central-madrid.webp',
      alt: 'The Universidad Central de Madrid',
      caption: 'Universidad Central de Madrid, where he received the Licentiate in Medicine in 1884.',
    },
    { type: 'h2', text: 'Specialized Training and Self-Directed Learning' },
    {
      type: 'p',
      text: 'The degree was not the end of the training. In Paris he assisted Dr. Louis de Wecker, and in Heidelberg he continued with Dr. Otto Becker, so he could operate on the eye. On his own he learned more than twenty languages and kept up literature, sculpture, painting, and the sciences. That mix of a formal degree, clinical practice, and self-study is what later gave his writing its authority.',
    },
    {
      type: 'img',
      src: 'specialized-training.jpg',
      alt: 'Rizal examining a patient’s eyes by candlelight',
      caption: 'Specialized training in the eye, the skill he pursued so he could treat his mother.',
    },
  ],
  propaganda: [
    { type: 'h2', text: 'What was the Propaganda Movement?' },
    {
      type: 'p',
      text: 'The movement wanted to improve the situation of Filipinos under Spanish rule through peaceful reforms, rather than immediately fighting Spain through armed revolution. The propagandists used books, newspapers, essays, speeches, and petitions to expose abuses in the Philippines and convince the Spanish government to make changes.',
    },
    {
      type: 'p',
      text: 'The word “propaganda” here does not simply mean fake news or manipulation, as people sometimes use the word today. It referred more broadly to spreading ideas and information in support of reforms.',
    },
    {
      type: 'img',
      src: 'propaganda-reformists.jpg',
      alt: 'Filipino reformists writing essays and newspapers in a Madrid room',
      caption: 'The propagandists spread reform through books, essays, speeches, and petitions.',
    },
    { type: 'h2', text: 'What did they want?' },
    {
      type: 'p',
      text: 'Their major demands included:',
    },
    {
      type: 'ul',
      items: [
        'Equal treatment of Filipinos and Spaniards',
        'Philippine representation in the Spanish Cortes, or parliament',
        'Recognition of the Philippines as a province of Spain rather than merely a colony',
        'Greater freedom of speech and the press',
        'Reform of the church and secularization of parishes',
        'Ending abuses such as forced labor',
        'Equal opportunities for Filipinos in government and education',
      ],
    },
    {
      type: 'p',
      text: 'At this stage, many propagandists were mainly asking for assimilation and reform, rather than complete Philippine independence.',
    },
    {
      type: 'img',
      src: 'propaganda-cortes.jpg',
      alt: 'Filipino reformists presenting a petition in the Spanish Cortes',
      caption: 'A seat in the Spanish Cortes was one of the movement’s main demands.',
    },
    { type: 'h2', text: "What was José Rizal's role?" },
    {
      type: 'p',
      text: 'Rizal fought primarily through his writing. His novel Noli Me Tangere exposed problems such as abuses by colonial authorities and friars and the inequalities experienced by Filipinos. Later, El Filibusterismo presented an even darker picture of colonial society and the consequences of ignoring demands for reform.',
    },
    {
      type: 'p',
      text: 'Instead of using a weapon, Rizal used his pen to make people aware of the problems in Philippine society. His experiences while studying and traveling in Europe also exposed him to liberal ideas about rights, liberty, government, and equality, which influenced his nationalism.',
    },
    {
      type: 'img',
      src: 'rizal-pen.jpg',
      alt: 'A Filipino writer at a lamp-lit desk with manuscripts and novels',
      caption: 'Rizal’s weapon was the pen: Noli Me Tangere and El Filibusterismo.',
    },
    { type: 'h2', text: 'La Solidaridad' },
    {
      type: 'img',
      src: 'la-solidaridad.jpg',
      alt: 'A nineteenth-century newspaper desk',
      caption: 'La Solidaridad, published in Spain, carried the reformists’ arguments in print.',
    },
    {
      type: 'p',
      text: 'Another major part of the movement was La Solidaridad, a newspaper published in Spain. It became one of the main ways Filipino reformists communicated their arguments to Spanish readers and officials. Graciano López Jaena was its first editor, while Marcelo H. del Pilar later became a major leader of the publication.',
    },
    { type: 'h2', text: 'Why did the movement eventually decline?' },
    {
      type: 'p',
      text: 'The movement struggled because the Spanish authorities did not grant many of the reforms being demanded. It also suffered from financial problems and disagreements among Filipino reformists. La Solidaridad eventually stopped publication in 1895.',
    },
    {
      type: 'p',
      text: 'Rizal increasingly believed that Filipinos needed to organize inside the Philippines, rather than relying only on lobbying Spain. In 1892 he established La Liga Filipina, an organization intended to encourage cooperation and peaceful social reform.',
    },
    {
      type: 'img',
      src: 'la-liga-filipina.jpg',
      alt: 'A small evening meeting in a Manila house',
      caption: 'La Liga Filipina, founded in 1892, organized peaceful reform inside the Philippines.',
    },
    { type: 'h2', text: 'The easiest way to remember it' },
    {
      type: 'ul',
      items: [
        'Propaganda Movement = peaceful campaign for reform.',
        'Problem: Filipinos experienced inequality and abuses under Spanish colonial rule.',
        'Method: Writing, newspapers, novels, speeches, and petitions.',
        'Goal: Equality, rights, representation, and political and social reforms.',
        'Important people: Rizal, del Pilar, López Jaena, and Ponce.',
        "Rizal's contribution: Noli Me Tangere, El Filibusterismo, essays, and other writings exposing colonial problems.",
      ],
    },
    {
      type: 'p',
      text: 'The Propaganda Movement helped awaken Filipino nationalism by exposing colonial abuses and demanding peaceful reforms. Although it did not achieve most of its political demands, its ideas helped Filipinos become more conscious of their rights and contributed to the growth of the nationalist movement that followed.',
    },
  ],
  timeline: [
    { type: 'h2', text: '1872–1882 · Manila' },
    {
      type: 'p',
      text: '1872: enters the Ateneo. 1877: Bachelor of Arts, then the University of Santo Tomas. He starts medicine and also finishes surveying.',
    },
    {
      type: 'img',
      src: 'ateneo-municipal.jpg',
      alt: 'The Ateneo Municipal de Manila',
      caption: 'His formal schooling in Manila began at the Ateneo.',
    },
    { type: 'h2', text: '1882–1887 · Europe' },
    {
      type: 'p',
      text: 'May 3, 1882: secret departure. 1882: “Amor Patrio” in Barcelona. 1884 and 1885: degrees in Madrid. 1885–1886: eye surgery in Paris and Heidelberg. March 1887: Noli Me Tangere printed in Berlin. August 1887: return to the Philippines.',
    },
    {
      type: 'img',
      src: 'berlin-press.jpg',
      alt: 'A printing press',
      caption: 'The Noli was printed in Berlin in 1887.',
    },
    { type: 'h2', text: 'Late 1880s–early 1890s · Propaganda' },
    {
      type: 'p',
      text: '1889: Graciano López Jaena founds La Solidaridad; Marcelo H. del Pilar later leads the paper, with Rizal, López Jaena, and Mariano Ponce among the reformists. 1891: El Filibusterismo is published. 1892: Rizal founds La Liga Filipina to organize peaceful reform inside the Philippines. 1895: La Solidaridad stops. The campaign weakens from lack of money, disagreements, and Spain’s refusal to grant the reforms.',
    },
    {
      type: 'img',
      src: 'la-solidaridad.jpg',
      alt: 'A newspaper on a desk',
      caption: 'La Solidaridad carried the reform campaign in print.',
    },
  ],
};
