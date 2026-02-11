export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  targetAudience: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  localGuide: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}