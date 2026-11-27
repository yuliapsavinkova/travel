import { type FAQItem, REFERRALS } from '../types';

// =====================================================
// 1. FOR HOUSE SITTERS
// =====================================================
export const SITTER_FAQS: FAQItem[] = [
  // Starting With No Reviews
  {
    id: 'ths-beginner-difficulty',
    audience: 'sitters',
    question: 'Is it hard to get accepted for your first house sit?',
    answer:
      'Your first sit is the hardest because you do not have any platform reviews yet. Starting with short stays, local sits, or off-season locations makes getting accepted much easier.',
    link: { label: 'First Sit Guide', href: '/how-to-get-your-first-house-sit-no-reviews' },
  },
  {
    id: 'travel-experience-needed',
    audience: 'sitters',
    question: 'Do you need prior experience to start house sitting?',
    answer:
      'Not necessarily. You can start with zero reviews by asking friends, neighbors, or past employers for references, choosing local sits, and starting with short cat sits.',
    link: { label: 'First Sit Strategy', href: '/how-to-get-your-first-house-sit-no-reviews' },
  },
  {
    id: 'first-sit-easy',
    audience: 'sitters',
    question: 'What type of first sit is easiest to get?',
    answer:
      'Short cat sits, local stays where you can meet owners in person, and off-season or holiday dates with fewer applicants are easiest to land first.',
    link: {
      label: 'First Sit Guide',
      href: '/how-to-get-your-first-house-sit-no-reviews',
    },
  },
  {
    id: 'ths-reviews-starting',
    audience: 'sitters',
    question: 'Do I need reviews to get my first TrustedHousesitters sit?',
    answer:
      'No. You can land your first sit without platform reviews by adding personal references, writing a focused message that mentions the pets by name, and applying early.',
    link: { label: 'How to Get Started', href: '/how-to-get-your-first-house-sit-no-reviews' },
  },

  // Building a Trusted Profile
  {
    id: 'trusted-profile-tips',
    audience: 'sitters',
    question: 'How do I make a profile that owners actually trust?',
    answer:
      'Focus on showing you can care for their home and pets reliably. Use clear photos with animals, state your daily routine, and be specific about cleanliness and communication.',
    link: {
      label: 'Profile Tips',
      href: '/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
  },
  {
    id: 'ths-photo-aspect',
    audience: 'sitters',
    question: 'What kind of photos work best on a TrustedHousesitters profile?',
    answer:
      'Use clear, well-lit photos showing your face and at least one photo with a pet. TrustedHousesitters displays landscape 3:2 images best (such as 900x600 or 1500x1000).',
    link: {
      label: 'Photo Rules & Examples',
      href: '/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
  },
  {
    id: 'ths-cleanliness-mention',
    audience: 'sitters',
    question: 'Should I mention cleanliness and routines explicitly?',
    answer:
      'Yes. Stating clearly that you keep homes clean, follow feeding routines as instructed, and send daily photo updates builds trust much faster than vague statements.',
    link: {
      label: 'Trust Building Tips',
      href: '/trusted-housesitters-profile-tips-how-to-secure-more-sits',
    },
  },

  // Competition & Rejections
  {
    id: 'ths-rejection-common',
    audience: 'sitters',
    question: 'Is it normal to get rejected on TrustedHousesitters?',
    answer:
      'Yes. Even experienced sitters with dozens of completed sits still get rejected. Do not take it personally, as it often comes down to returning sitters, local preferences, or timing.',
    link: {
      label: 'Why Applications Get Rejected',
      href: '/why-trusted-housesitters-applications-get-rejected',
    },
  },
  {
    id: 'ths-rejection-resemblance',
    audience: 'sitters',
    question: 'Why do owners sometimes pick sitters based on lifestyle or demographics?',
    answer:
      'Many homeowners look for a specific fit they already picture in their head, such as a solo sitter, a couple, a certain age range, or someone local they can meet in person.',
    link: {
      label: 'Understanding Rejection',
      href: '/why-trusted-housesitters-applications-get-rejected',
    },
  },
  {
    id: 'ths-rejection-fix',
    audience: 'sitters',
    question: 'What rejection factors can I actually control?',
    answer:
      'Focus on what is in your hands: build early reviews with local sits, apply quickly to new listings, use clear profile photos, and tailor every application to the specific pets and home.',
    link: {
      label: 'Improve Your Odds',
      href: '/why-trusted-housesitters-applications-get-rejected',
    },
  },

  // Cost, Savings & Membership Tiers
  {
    id: 'ths-worth-breakeven',
    audience: 'sitters',
    question: 'Is the TrustedHousesitters membership fee actually worth it?',
    answer:
      'If you do more than a couple of nights per year, yes. Even on the Basic tier ($129/year), one weekend in a hotel covers the annual fee, and every stay after that saves on lodging.',
    link: {
      label: 'See The Breakeven Math',
      href: '/is-trusted-housesitters-worth-it-for-sitters',
    },
  },
  {
    id: 'ths-worth-competition',
    audience: 'sitters',
    question: 'How do I deal with competition on popular sits?',
    answer:
      'Desirable sits fill fast because listings often pause after five applications. Setting up alerts and using a reusable template lets you apply quickly while still keeping your message personal.',
    link: {
      label: 'Fast Application Strategy',
      href: '/trusted-housesitters-how-to-apply-for-competitive-sits-fast-using-ai',
    },
  },
  {
    id: 'ths-worth-not-for',
    audience: 'sitters',
    question: 'Who should NOT join TrustedHousesitters?',
    answer:
      'People who do not genuinely love pets. House sitting works best when caring for animals adds warmth and companionship to your stay rather than feeling like a chore.',
    link: {
      label: 'Read Honest Assessment',
      href: '/is-trusted-housesitters-worth-it-for-sitters',
    },
  },
  {
    id: 'travel-savings',
    audience: 'sitters',
    question: 'How much can you actually save with house sitting?',
    answer:
      'Accommodation is typically 40 to 70% of travel costs. In 6 months (180 days), I paid for only 6 hotel nights, saving roughly $16,600 compared to $100 per night hotels.',
    link: {
      label: 'Real Examples & Math',
      href: '/can-you-really-travel-for-free-house-sitting-math',
    },
  },
  {
    id: 'travel-math-hidden-costs',
    audience: 'sitters',
    question: 'What are the hidden costs of house sitting?',
    answer:
      'Flights or fuel, groceries, your annual membership, and the time spent applying. House sitting removes accommodation costs, not transportation or everyday living expenses.',
    link: {
      label: 'Full Cost Breakdown',
      href: '/can-you-really-travel-for-free-house-sitting-math',
    },
  },
  {
    id: 'travel-math-compound',
    audience: 'sitters',
    question: 'Why do most people fail at house sitting?',
    answer:
      'They treat it like Airbnb, browsing casually and applying randomly. Consistent success requires a strong profile, flexible dates or locations, and strategic applications.',
    link: {
      label: 'Why Most People Fail',
      href: '/can-you-really-travel-for-free-house-sitting-math',
    },
  },
  {
    id: 'membership-which-tier',
    audience: 'sitters',
    question: 'Which TrustedHousesitters membership level should I choose?',
    answer:
      'Basic ($129/year) fits 1 to 2 sits a year, Standard ($169/year) adds liability protection and a 24/7 vet line, and Premium ($259/year) removes per-sit booking fees and adds cancellation coverage.',
    link: {
      label: 'Membership Decision Guide',
      href: '/trusted-housesitters-membership-cost-levels',
    },
  },
  {
    id: 'membership-basic-fees',
    audience: 'sitters',
    question: 'What are the per-sit booking fees for Basic and Standard?',
    answer: `Both Basic and Standard charge a $12 booking fee for each confirmed sit. Premium has no booking fees and usually becomes cheaper starting at your 8th sit (or 6th sit with a ${REFERRALS.THS.ratePercent} discount).`,
    link: {
      label: 'Fee Structure Explained',
      href: '/trusted-housesitters-membership-cost-levels',
    },
  },
  {
    id: 'ths-membership-discounts',
    audience: 'sitters',
    question: 'Are there discounts or free trials for new TrustedHousesitters members?',
    answer: `There is no free membership to message owners, though new members can get ${REFERRALS.THS.ratePercent} off their first year using a referral link.`,
    link: {
      label: 'Membership Tiers & Pricing',
      href: '/trusted-housesitters-membership-cost-levels',
    },
  },

  // Safety, Disputes & Tools
  {
    id: 'ths-reporting-safety',
    audience: 'sitters',
    question: 'When do sitters or homeowners usually report a sit?',
    answer:
      'Most reports involve mismatched expectations, such as pet routines, home cleanliness, alone-time limits, or undisclosed cameras, rather than emergencies.',
    link: {
      label: 'What Happens If a Sit Goes Wrong',
      href: '/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    },
  },
  {
    id: 'ths-reporting-documentation',
    audience: 'sitters',
    question: 'How do I protect myself and document a problem during a sit?',
    answer:
      'Keep key agreements inside TrustedHousesitters messages before confirming, and take photos or videos if an issue comes up during the sit.',
    link: {
      label: 'Documentation Tips',
      href: '/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    },
  },
  {
    id: 'ths-reporting-resolution',
    audience: 'sitters',
    question: 'How can I reduce the risk of a sit going wrong?',
    answer:
      'Read listings carefully for vague wording, ask direct questions about routines and boundaries upfront, and confirm expectations in writing before accepting.',
    link: {
      label: 'Prevention Tips',
      href: '/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it',
    },
  },
  {
    id: 'ths-internet-remote',
    audience: 'sitters',
    question: 'What phone plan do you use for remote work on sits?',
    answer:
      'I use Visible because it includes unlimited mobile hotspot data on Verizon’s network, which gives me a dependable backup when working from quiet rural or mountain homes.',
    link: { label: 'Read My Visible Review', href: '/visible-review' },
  },
  {
    id: 'visible-hotspot-caps',
    audience: 'sitters',
    question: 'Does Visible cap mobile hotspot data?',
    answer:
      'No. Unlike many unlimited plans with hidden hotspot limits, Visible includes unlimited mobile hotspot data for a flat monthly rate.',
    link: { label: 'Visible Wireless Review', href: '/visible-review' },
  },
  {
    id: 'rover-between-sits',
    audience: 'sitters',
    question: 'How does Rover fit alongside house sitting?',
    answer:
      'Rover is a paid pet-care marketplace rather than an exchange. I use it for overnight sitting and drop-in visits to earn income during gaps between longer house sits.',
    link: { label: 'Read My Rover Review', href: '/rover-review' },
  },
];

// =====================================================
// 2. FOR HOMEOWNERS
// =====================================================
export const HOMEOWNER_FAQS: FAQItem[] = [
  // Preparing Your Home
  {
    id: 'homeowner-how-to-prepare',
    audience: 'homeowners',
    question: 'How do I prepare my home before a house sitter arrives?',
    answer:
      'Focus on clean basics: fresh sheets and towels, cleared fridge and closet space, stocked pet food and medications, and a clear Welcome Guide with house quirks and vet details.',
    link: {
      label: 'Home Prep Checklist',
      href: '/how-to-prepare-your-home-for-a-house-sitter',
    },
  },
  {
    id: 'homeowner-living-space-prep',
    audience: 'homeowners',
    question: 'What living and kitchen space should I clear for a house sitter?',
    answer:
      'Set out fresh linens and bath towels, clear a shelf in the fridge and freezer, leave a small section of closet or drawer space, and start with an empty sink and trash bin.',
    link: {
      label: 'Home Prep Checklist',
      href: '/how-to-prepare-your-home-for-a-house-sitter',
    },
  },
  {
    id: 'homeowner-pet-supplies-buffer',
    audience: 'homeowners',
    question: 'How much pet food and medication should I leave for a house sitter?',
    answer:
      'Stock enough kibble, wet food, litter, and medications to cover your entire trip plus a few extra buffer days in case your return travel is delayed.',
    link: {
      label: 'Pet Supply Check',
      href: '/how-to-prepare-your-home-for-a-house-sitter',
    },
  },

  // Welcome Guide
  {
    id: 'homeowner-what-to-leave',
    audience: 'homeowners',
    question: 'What should I include in a welcome guide for my house sitter?',
    answer:
      'Include emergency vet authorization, feeding and medication schedules, Wi-Fi and lock instructions, trash pickup days, shut-off valve locations, and any pet triggers or appliance quirks.',
    link: {
      label: 'Welcome Guide Checklist',
      href: '/what-to-include-in-a-house-sitter-welcome-guide',
    },
  },
  {
    id: 'homeowner-when-to-send-welcome-guide',
    audience: 'homeowners',
    question: 'When should I share the welcome guide with my house sitter?',
    answer:
      'Send a digital copy a few days before arrival, either as a shared Google Doc or inside TrustedHousesitters, so your sitter can review the details and ask questions before you leave.',
    link: {
      label: 'Welcome Guide Checklist',
      href: '/what-to-include-in-a-house-sitter-welcome-guide',
    },
  },
  {
    id: 'homeowner-emergency-vet-auth',
    audience: 'homeowners',
    question: 'What emergency information belongs on page one of a welcome guide?',
    answer:
      'Put your reachable phone number, your primary vet and nearest 24-hour clinic with a pre-authorized card or signed note, a local backup contact with a spare key, and home repair numbers.',
    link: {
      label: 'Page-One Safety Info',
      href: '/what-to-include-in-a-house-sitter-welcome-guide',
    },
  },

  // Interviewing & Vetting Sitters
  {
    id: 'homeowner-interview-questions',
    audience: 'homeowners',
    question: 'What questions should I ask before hiring a house sitter?',
    answer:
      'Ask about specific experience with pets like yours, how their daily schedule fits your pet’s routine, how they handle urgent vet visits or flight delays, and how often they send photo updates.',
    link: {
      label: 'Sitter Interview Questions',
      href: '/questions-to-ask-before-hiring-a-house-sitter',
    },
  },
  {
    id: 'homeowner-green-red-flags',
    audience: 'homeowners',
    question: 'What are green flags and red flags when interviewing a house sitter?',
    answer:
      'Green flags include asking thoughtful questions about your pet’s routine, replying clearly about availability, and communicating promptly. Red flags include vague answers or pushing against simple home rules.',
    link: {
      label: 'Green Flags vs. Red Flags',
      href: '/questions-to-ask-before-hiring-a-house-sitter',
    },
  },
  {
    id: 'homeowner-house-rules-boundaries',
    audience: 'homeowners',
    question: 'What house rules should I confirm before booking a sitter?',
    answer:
      'Clarify expectations upfront around visitors or guests, smoking, any security cameras on the property, off-limit rooms, and how many hours a day your pets can be left alone.',
    link: {
      label: 'Vetting a House Sitter',
      href: '/questions-to-ask-before-hiring-a-house-sitter',
    },
  },

  // Exchange vs. Professional Sitting
  {
    id: 'homeowner-exchange-vs-pro',
    audience: 'homeowners',
    question: 'Should I use an exchange site or hire a professional house sitter?',
    answer:
      'An exchange platform works well for longer trips if you want to avoid daily sitting fees and your pets are easygoing. A professional sitter is better if you want firm dates, extra privacy, or consistent care for anxious or senior pets.',
    link: {
      label: 'Exchange vs. Professional Sitting',
      href: '/trusted-housesitters-exchange-vs-professional-house-sitting',
    },
  },
  {
    id: 'homeowner-exchange-cost',
    audience: 'homeowners',
    question: 'How does payment work on TrustedHousesitters compared to hiring privately?',
    answer:
      'On TrustedHousesitters, homeowners pay an annual membership plus a per-sit booking fee, with no daily sitting rate. When you hire a professional sitter privately, you pay a daily or per-stay rate with no membership fee.',
    link: {
      label: 'Compare Costs & Models',
      href: '/trusted-housesitters-exchange-vs-professional-house-sitting',
    },
  },
  {
    id: 'homeowner-when-professional-better',
    audience: 'homeowners',
    question: 'When is hiring a professional house sitter better than using an exchange?',
    answer:
      'Hiring privately is often the better choice when your dates are fixed, your pets are senior, anxious, or on medication, or you prefer to keep your home photos and travel dates off public listings.',
    link: {
      label: 'How to Choose',
      href: '/trusted-housesitters-exchange-vs-professional-house-sitting',
    },
  },
];

export const MASTER_FAQS: FAQItem[] = [...SITTER_FAQS, ...HOMEOWNER_FAQS];

export const getFaqsByIds = (ids: string[]): FAQItem[] => {
  return ids.map((id) => MASTER_FAQS.find((f) => f.id === id)).filter(Boolean) as FAQItem[];
};
