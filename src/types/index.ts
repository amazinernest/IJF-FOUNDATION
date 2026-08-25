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

export interface Campaign {
  id: string;
  title: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
  votesCount: number;
  status: 'Live' | 'Active' | 'Completed';
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  image: string;
}

export interface LiveFeedItem {
  id: string;
  type: 'donation' | 'vote' | 'volunteer' | 'grant';
  actor: string;
  action: string;
  amount?: string;
  timeAgo: string;
}
