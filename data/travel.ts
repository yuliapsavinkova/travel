import { TravelGuide } from '../types';
import { txt } from '../utils/content';

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: '1',
    slug: 'bali-ubud-slow-travel',
    title: 'Bali: Ubud Slow Travel Narrative',
    location: 'Bali, Indonesia',
    excerpt: 'A month of intentional living among the terraced rice fields.',
    imageUrl:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    tags: ['Slow Travel', 'Design'],
    body: txt(`Ubud is where slow travel becomes a lifestyle. I spent a month reflecting on architecture and intentionality while living in a traditional bamboo home, learning the rhythm of the local community and the art of presence.

The morning light in Bali dictates the pace of the day. It taught me the importance of being fully present in a destination, a skill that translates directly to the attentive care and technical stewardship I provide on every sit.

Exploring the intersection of ancient traditions and modern nomadic life has been a defining chapter of my global journey across 35+ countries and continues to influence my professional standards.`),
  },
  //   {
  //     id: '2',
  //     slug: 'iceland-road-trip',
  //     title: 'Iceland: Resilience in the Highlands',
  //     location: 'Iceland',
  //     excerpt: 'A solo road trip through the volcanic landscapes of the North Atlantic.',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2400',
  //     tags: ['Adventure', 'Nature'],
  //     body: txt(`Navigating the Ring Road solo taught me resilience and the profound beauty of silence. The Icelandic landscape is a raw, powerful reminder of the earth's strength and our own adaptability in harsh environments.

  // Respecting the elements is non-negotiable here. I spent my days photographing volcanic peaks and my nights monitoring the skies for the aurora borealis, a process that requires the same technical preparation I bring to estate stewardship.

  // It was a masterclass in self-reliance and the importance of having the right tools for the environment, which is why I never travel without my vetted nomadic toolkit to ensure I am always prepared.`),
  //   },
];
