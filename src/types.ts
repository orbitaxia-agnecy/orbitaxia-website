/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string; // Lucide icon identifier
  description: string;
  detailedDescription: string;
  benefits: string[];
  process: string[];
  pricingRange?: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  clientType: string;
  achievement: string;
  tags: string[];
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  interestedService: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  growthTactics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
