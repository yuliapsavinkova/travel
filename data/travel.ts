import { TravelGuide } from '../types';
import { txt } from '../utils/content';
import { giliIslandsContent } from './articles/travel/gili-islands';

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
    body: txt(`Ubud is where slow travel becomes a lifestyle. I spent a month reflecting on architecture and intentionality while living in a traditional bamboo home, learning the rhythm of the local community and the art of presence.

The morning light in Bali dictates the pace of the day. It taught me the importance of being fully present in a destination, a skill that translates directly to the attentive care and technical stewardship I provide on every sit.

Exploring the intersection of ancient traditions and modern nomadic life has been a defining chapter of my global journey across 35+ countries and continues to influence my professional standards.`),
    nextLink: {
      label: 'Next Guide',
      title: 'Gili Trawangan',
      href: '/travel/gili-trawangan-slow-travel',
    },
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
    body: giliIslandsContent,
    prevLink: {
      label: 'Previous Guide',
      title: 'Bali Ubud',
      href: '/travel/bali-ubud-slow-travel',
    },
    nextLink: { label: 'Go to', title: 'Toolkit', href: '/toolkit' },
  },
];
