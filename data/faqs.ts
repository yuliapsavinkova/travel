import { FAQItem } from '../types';

export const MASTER_FAQS: FAQItem[] = [
  {
    id: 'ths-photo-aspect',
    question: 'What kind of photos work best on a TrustedHousesitters profile?',
    answer:
      'Clear, well-lit photos showing your face are essential. Your main photo should be in a 3:2 aspect ratio (for example, 900×600) and ideally include you with a pet. Additional photos of you interacting with animals in real settings help owners quickly picture you caring for their pet.',
  },
  {
    id: 'ths-reviews-starting',
    question: 'Do I need reviews to get my first TrustedHousesitters sit?',
    answer:
      'No. Many sitters get their first sit without reviews. What matters is that your profile clearly explains your experience, responsibility, and availability. External pet care or house care experience still counts — describe it clearly.',
    link: { label: 'First Sit Guide', href: '/journal/get-your-first-house-sit' },
  },
  {
    id: 'ths-profile-length',
    question: 'How long should my TrustedHousesitters profile be?',
    answer:
      'Short and focused. Owners skim. A few well-structured sections that explain what you do, how you care for pets, and how you treat homes work better than long personal stories.',
  },
  {
    id: 'ths-owner-priorities',
    question: 'What do pet owners look for most in a sitter profile?',
    answer:
      'Reliability, cleanliness, and clear communication. Owners want to know their pet’s routine will be followed and their home respected. Personality is secondary.',
  },
  {
    id: 'ths-cleanliness-mention',
    question: 'Should I mention cleanliness and routines explicitly?',
    answer:
      'Yes. Don’t assume it’s obvious. Saying how you keep a home clean and follow instructions builds trust faster than vague statements about being “responsible.”',
  },
  {
    id: 'ths-long-term-preference',
    question: 'Are long-term sits more attractive to owners?',
    answer:
      'It depends, but many owners prefer sitters who stay longer to reduce disruption for pets. If you prefer long-term or month-long sits, mention it clearly so the right owners find you.',
  },
  {
    id: 'ths-internet-remote',
    question: 'What phone plan do you use for remote work on sits?',
    answer:
      'Unlimited data is a must for reliable hotspotting, especially when the home WiFi is spotty. I use Visible for its unlimited hotspot feature.',
    link: { label: 'View Connectivity Kit', href: '/toolkit/visible-connectivity' },
  },
  {
    id: 'ths-beginner-difficulty',
    question: 'Is it hard to get accepted for your first house sit?',
    answer:
      'It takes strategy to beat the competition. Most beginners fail by applying to high-competition sits first. I recommend starting with shorter local sits.',
    link: { label: 'First Sit Strategy', href: '/journal/get-your-first-house-sit' },
  },
  {
    id: 'travel-wellness-gym',
    question: 'How do you stay fresh and healthy while traveling between sits?',
    answer:
      'I maintain a nationwide gym membership for consistent workouts and reliable showers during travel days. Planet Fitness is my go-to.',
    link: { label: 'Travel Wellness Kit', href: '/toolkit/planet-fitness-wellness' },
  },
  {
    id: 'best-platform-travel',
    question: 'What is the best platform for traveling long-term?',
    answer:
      'I find almost all my month-long stays through house sitting. It is by far the most sustainable way to see the country.',
    link: { label: 'My Primary Travel Tool', href: '/toolkit/trustedhousesitters-referral' },
  },
  {
    id: 'remote-work-internet',
    question: 'How do you handle remote work internet while on the road?',
    answer:
      'A reliable mobile hotspot is essential for nomadic life, as you can never fully trust public or even home WiFi in new places.',
    link: { label: 'Read My Phone Plan Guide', href: '/toolkit/visible-connectivity' },
  },
  {
    id: 'trusted-profile-tips',
    question: 'How do I make a profile that owners actually trust?',
    answer:
      'Photos and clear communication are the most important elements. You want to remove all anxiety the owner might have.',
    link: {
      label: 'Check Out My Profile Tips',
      href: '/journal/stellar-trustedhousesitters-profile-tips',
    },
  },
];

export const getFaqsByIds = (ids: string[]): FAQItem[] => {
  return ids.map((id) => MASTER_FAQS.find((f) => f.id === id)).filter(Boolean) as FAQItem[];
};
