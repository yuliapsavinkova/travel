import { BlogPost } from '../types';
import { firstHouseSitContent } from './articles/first-house-sit';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'get-your-first-house-sit',
    title: 'How to Get Your First House Sit (Even With No Reviews)',
    excerpt:
      'The exact framework I used to go from zero reviews to a professional portfolio of verified stays.',
    date: 'Feb 24, 2024',
    category: 'Expertise',
    location: 'Strategy',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    ctaLabel: 'Offer: 25% Off Membership',
    ctaLink: 'https://trustedhousesitters.com/refer/raf943607',
    body: firstHouseSitContent,
  },
];
