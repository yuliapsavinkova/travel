import { TravelGuide } from '../../types';
import { content as ubudContent } from './bali-ubud-slow-travel';
import { content as giliIslandsContent } from './gili-trawangan-slow-travel';

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: '1',
    slug: 'bali-ubud-slow-travel',
    title: 'Bali: Ubud Slow Travel Narrative',
    location: 'Bali, Indonesia',
    excerpt: 'A month of intentional living among the terraced rice fields.',
    imageUrl:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    date: 'January 2026',
    sortOrder: 1,
    body: ubudContent,
  },
  {
    id: '2',
    slug: 'gili-trawangan-slow-travel',
    title: 'Gili Trawangan: No Motorbikes, First Scuba',
    location: 'Gili Islands, Indonesia',
    excerpt: 'A transition from Bali’s noise to the horse-drawn silence of the Gili Islands.',
    imageUrl:
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=1200',
    date: 'January 2026',
    sortOrder: 2,
    body: giliIslandsContent,
  },
];
