export interface Indicator {
  id: string;
  label: string;
  value: string;
  unit: string;
  iconName: string;
  description: string;
  colorClass: string;
  neonColor: string;
  impactType: 'impact' | 'benefit';
}

export interface TimelineEvent {
  id: string;
  stageNumber: number;
  name: string;
  description: string;
  iconName: string;
  positives: string[];
  negatives: string[];
  details: string;
}

export interface ImpactSolutionGroup {
  id: string;
  title: string;
  iconName: string;
  items: {
    id: string;
    title: string;
    text: string;
    metric?: string;
  }[];
}

export interface OdsGoal {
  id: string;
  number: number;
  name: string;
  tagline: string;
  colorClass: string;
  badgeColor: string;
  connectionText: string;
  unTargets: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[]; // List of paragraphs for reading flow
  author: string;
  date: string;
  readTime: string;
  category: string;
  imgUrl: string;
}

export interface GoodPractice {
  id: string;
  title: string;
  description: string;
  category: string;
  impactLevel: 'Alto' | 'Médio' | 'Sustentável';
  colorClass: string;
}
