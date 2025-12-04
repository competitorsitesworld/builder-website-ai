export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  company: string;
}

export interface ProjectAnalysis {
  summary: string;
  recommendedService: string;
  complexityEstimation: 'Low' | 'Medium' | 'High' | 'Enterprise';
  estimatedTimeline: string;
}
