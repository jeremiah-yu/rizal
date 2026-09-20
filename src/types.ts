export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  country: string;
  category: 'education' | 'travel' | 'propaganda' | 'publication' | 'movement';
  summary: string;
  details: string[];
  historicalQuote?: {
    text: string;
    source: string;
  };
  artifactId?: string;
  iconName: string;
  accentColor: string;
}

export interface MapDestination {
  id: string;
  name: string;
  country: string;
  year: string;
  coordinates: { x: number; y: number }; // Percentage on custom illustrated map
  event: string;
  relatedWorkOrPerson: string;
  penNameOrRole?: string;
  narrative: string;
  routeStopNumber: number;
  significance: string;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  penNames?: string[];
  lifespan: string;
  birthplace: string;
  role: string;
  keyWorksAndContributions: string[];
  description: string;
  connectionToMovement: string;
  accentQuote: string;
  title: string;
  years: string;
  alias?: string;
  biography: string;
  majorContribution: string;
  relationshipWithRizal: string;
}

export interface ChronologyItem {
  id: string;
  year: string;
  title: string;
  location: string;
  category: 'education' | 'travel' | 'propaganda' | 'literary' | 'all';
  description: string;
  significance: string;
  primaryWork?: string;
  relatedArtifactId?: string;
}

export interface ReformObjective {
  id: string;
  title: string;
  tagline: string;
  description: string;
  historicalContext: string;
  primaryAdvocates: string[];
  colonialReality: string;
  iconName: string;
}

export interface MuseumArtifact {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  medium: string;
  whatIsThis: string;
  whyIsItImportant: string;
  relatedEvent: string;
  curatorNotes: string;
  badge: string;
}

export interface EducationEntry {
  institution: string;
  period: string;
  location: string;
  degrees: string[];
  achievements: string[];
  professorsOrMentors?: string[];
  historicalNotes: string;
}
