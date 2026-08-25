export interface Program {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullContent: {
    overview: string;
    whyItMatters: string;
    keyActivities: string[];
    targetBeneficiaries: string[];
    expectedOutcomes: string[];
  };
  image: string;
  imageAlt: string;
  iconName: string;
}

export interface ImpactStat {
  id: string;
  number: string;
  suffix: string;
  label: string;
  description: string;
  verified: boolean;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface PartnerCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  imageAlt: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
}
