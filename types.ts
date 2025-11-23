import { LucideIcon } from 'lucide-react';

export interface AppItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  url: string; // The link to the app
  status: 'live' | 'beta' | 'coming-soon';
  category: string;
}

export interface AdPlaceholderProps {
  format: 'horizontal' | 'rectangle' | 'vertical';
  label?: string;
  className?: string;
}
