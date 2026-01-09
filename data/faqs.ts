import { FAQItem } from '../types';

export const MASTER_FAQS: FAQItem[] = [
  {
    id: 'ths-rejection-personal',
    question: 'Should I take a Trusted-Housesitters rejection personally?',
    answer:
      'Absolutely not. Most rejections are due to factors outside your control, such as returning sitters or specific demographic preferences the owner hasn’t listed. Always move on to the next opportunity immediately.',
  },
  {
    id: 'ths-rejection-resemblance',
    question: 'Why do owners pick sitters who look like them?',
    answer:
      'It is a common psychological factor. Homeowners often believe their pets will adjust faster to someone who resembles their own appearance or energy levels, creating a sense of familiarity for the animal.',
  },
  {
    id: 'ths-rejection-fix',
    question: 'How can I stop getting rejected on Trusted-Housesitters?',
    answer:
      'Focus on what you can control: get at least 3 reviews through short local sits, update your photos to a 3:2 ratio, and ensure your application mentions the pets by name.',
    link: {
      label: 'Improve Your Profile',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
  },
  {
    id: 'ths-rejection-common',
    question: 'Is it normal to get rejected on Trusted-Housesitters?',
    answer:
      'Extremely normal. Even top-tier sitters with dozens of reviews get rejected. It is often a matter of timing, demographics (e.g., the owner prefers a couple), or a returning sitter applying.',
  },
  {
    id: 'ths-photo-aspect',
    question: 'What kind of photos work best on a Trusted-Housesitters profile?',
    answer:
      'Clear, well-lit photos showing your face are essential. Your main photo should be in a 3:2 aspect ratio (for example, 900×600) and ideally include you with a pet.',
  },
  {
    id: 'ths-reviews-starting',
    question: 'Do I need reviews to get my first Trusted-Housesitters sit?',
    answer:
      'No. Many sitters get their first sit without reviews. What matters is that your profile clearly explains your experience, responsibility, and availability.',
    link: { label: 'First Sit Guide', href: '/blog/how-to-get-your-first-house-sit-no-reviews' },
  },
  {
    id: 'ths-profile-length',
    question: 'How long should my Trusted-Housesitters profile be?',
    answer:
      'Short and focused. Owners skim. A few well-structured sections that explain what you do, how you care for pets, and how you treat homes work better than long personal stories.',
  },
  {
    id: 'ths-owner-priorities',
    question: 'What do pet owners look for most in a sitter profile?',
    answer:
      'Reliability, cleanliness, and clear communication. Owners want to know their pet’s routine will be followed and their home respected.',
  },
  {
    id: 'ths-cleanliness-mention',
    question: 'Should I mention cleanliness and routines explicitly?',
    answer:
      'Yes. Don’t assume it’s obvious. Saying how you keep a home clean and follow instructions builds trust faster than vague statements.',
  },
  {
    id: 'ths-long-term-preference',
    question: 'Are long-term sits more attractive to owners?',
    answer:
      'It depends, but many owners prefer sitters who stay longer to reduce disruption for pets. If you prefer long-term sits, mention it clearly.',
  },
  {
    id: 'ths-internet-remote',
    question: 'What phone plan do you use for remote work on sits?',
    answer:
      'Unlimited data is a must for reliable hotspotting. I use Visible for its unlimited hotspot feature.',
    link: { label: 'View Connectivity Kit', href: '/resources/visible-review' },
  },
  {
    id: 'ths-beginner-difficulty',
    question: 'Is it hard to get accepted for your first house sit?',
    answer:
      'It takes strategy to beat the competition. Most beginners fail by applying to high-competition sits first. Start with shorter local sits.',
    link: { label: 'First Sit Strategy', href: '/blog/how-to-get-your-first-house-sit-no-reviews' },
  },
  {
    id: 'travel-wellness-gym',
    question: 'How do you stay fresh and healthy while traveling between sits?',
    answer:
      'I maintain a nationwide gym membership for consistent workouts and reliable showers during travel days. Planet Fitness is my go-to.',
    link: { label: 'Travel Wellness Kit', href: '/resources/planet-fitness-review' },
  },
  {
    id: 'best-platform-travel',
    question: 'What is the best platform for traveling long-term?',
    answer:
      'I find almost all my month-long stays through house sitting. It is by far the most sustainable way to see the country.',
    link: { label: 'My Primary Travel Tool', href: '/resources/trusted-housesitters-review' },
  },
  {
    id: 'remote-work-internet',
    question: 'How do you handle remote work internet while on the road?',
    answer:
      'A reliable mobile hotspot is essential for nomadic life, as you can never fully trust public WiFi.',
    link: { label: 'Read My Phone Plan Guide', href: '/resources/visible-review' },
  },
  {
    id: 'trusted-profile-tips',
    question: 'How do I make a profile that owners actually trust?',
    answer:
      'Photos and clear communication are the most important elements. You want to remove all anxiety the owner might have.',
    link: {
      label: 'Check Out My Profile Tips',
      href: '/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
  },
];

export const getFaqsByIds = (ids: string[]): FAQItem[] => {
  return ids.map((id) => MASTER_FAQS.find((f) => f.id === id)).filter(Boolean) as FAQItem[];
};
