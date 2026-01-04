import { Review } from '../types';
import { txt } from '../utils/content';

export const REVIEWS: Review[] = [
  {
    id: '1',
    slug: 'austin-stewardship',
    name: 'Jessica',
    location: 'Austin, Texas',
    rating: 5,
    date: 'May 2025',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    text: 'South Austin Black Cat Gem',
    sitDescription: 'Luxury residence stewardship and senior Golden Retriever care.',
    body: txt(
      'This assignment was verified through TrustedHousesitters, where I maintain a perfect record for reliability and property stewardship.'
    ),
  },
];
