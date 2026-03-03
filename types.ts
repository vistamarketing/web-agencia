import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  features?: string[];
}

export interface CaseStudyItem {
  client: string;
  sector: string;
  result: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface ToolItem {
  name: string;
  category: string;
}

export interface SectorItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}