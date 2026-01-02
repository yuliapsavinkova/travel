import { BlogPost, ReferralCategory, Review, SiteStrings, TravelGuide } from './types';

const now = new Date();
export const CURRENT_YEAR = now.getFullYear();
export const ACTIVE_YEAR =
  now.getMonth() === 11 && now.getDate() >= 25 ? CURRENT_YEAR + 1 : CURRENT_YEAR;
export const NEXT_YEAR = ACTIVE_YEAR + 1;

/**
 * GLOBAL SITE STATISTICS
 */
export const SITE_STATS = {
  sitsCount: '32',
  statesCount: '28',
  countriesCount: '37',
  clientRating: '5.0',
  satisfactionRate: '100%',
};

export const SITE_CONFIG = {
  name: 'Sitter Journey',
  tagline: 'Professional Estate Stewardship & Nomadic Life',
  email: 'sitterjourney@gmail.com',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};

const BODY_THS = `<p>TrustedHousesitters is a global network that connects homeowners with pet sitters, allowing travelers to stay in unique homes for free in exchange for caring for pets and property. It features a robust insurance policy and a community-driven review system that ensures safety and quality for all participants worldwide.</p><p>I rely on this platform because it provides a verified, secure environment for both parties, allowing me to enter high-end homes with a professional reputation already established. The thorough verification process gives homeowners the implicit trust they need to hand over their keys for long-term seasonal stays.</p><p>If you are ready to start your own professional house sitting journey, use my vetted link to get a 25% discount on your annual membership. This helps you save on your nomadic overhead while supporting my continued travels through a membership credit.</p>`;

const BODY_ROVER = `<p>Rover is the leading digital network for on-demand pet services, offering verified drop-in visits, dog walking, and overnight boarding across the United States. It is a critical tool for travelers who need reliable, localized support with the backing of the Rover Guarantee for peace of mind.</p><p>I use Rover as my "transitional bridge" between long-term housesitting assignments when I am moving between states. It allows me to maintain my high professional standards and ensures that localized pet care is always just a few taps away if I need a backup sitter or a temporary gig during travel days.</p><p>Use my referral link to book your first service and get a special credit towards your pet's care. It is the most secure way to ensure your companions are in good hands with a verified professional like me while you are away.</p>`;

const BODY_VISIBLE = `<p>Visible is a modern, digital-first wireless carrier that offers unlimited talk, text, and data on Verizon’s reliable 5G and 4G LTE networks across the United States. It’s designed for mobile professionals who need strong, consistent coverage without the overhead, hidden fees, or long-term contracts that come with traditional carriers.</p><p>Consistent connectivity is the backbone of my business, not a “nice to have.” I work remotely while moving between cities, often relying on my phone as my primary internet connection. Visible’s unlimited hotspot is what makes this possible — whether I’m working from a rental, a client’s home, or on the road. I don’t have to hunt for Wi-Fi, manage multiple plans, or worry about hitting data caps that slow me down mid-workday.</p><p>If you switch to Visible using my referral link, we both receive a discount on our monthly bill. It’s one of the most cost-effective ways to stay connected, secure, and professional while living a nomadic, work-from-anywhere lifestyle within the US.</p>`;

const BODY_PLANET = `<p>Planet Fitness is a large gym franchise known for its "Judgement Free Zone" and affordable nationwide access to wellness facilities. With thousands of locations across the United States, it provides a consistent environment for health and hygiene regardless of which state you are in.</p><p>This membership is my "home base" for wellness and practical needs on travel days between house sitting assignments. With a Black Card membership, I always have a clean, safe place to shower, work out, and recharge my energy while navigating the nomadic lifestyle solo.</p><p>Join using my referral link to receive a special rate on your membership with no long-term commitment. It is an essential tool for any long-term traveler who wants to maintain a healthy routine and stay refreshed on the road.</p>`;

export const REFERRALS: ReferralCategory[] = [
  {
    title: 'Nomadic Framework',
    items: [
      {
        id: 'ths',
        slug: 'trustedhousesitters-referral',
        name: 'TrustedHousesitters',
        description: 'The global gold standard for house and pet sitting. Claim your 25% discount.',
        body: BODY_THS,
        discountText: '25% Off Membership',
        link: 'https://trustedhousesitters.com/refer/raf943607',
        icon: 'home',
        imageUrl:
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'Claim your 25% discount via my vetted link!',
      },
      {
        id: 'rover',
        slug: 'rover-pet-care',
        name: 'Rover',
        description: 'Vetted localized pet care and boarding backup for transitional periods.',
        body: BODY_ROVER,
        discountText: '$20 First Booking',
        link: 'https://www.rover.com/sit/yulias92191',
        icon: 'heart',
        imageUrl:
          'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'A vital backup for nomadic pet care standards.',
      },
      {
        id: 'visible',
        slug: 'visible-connectivity',
        name: 'Visible',
        description: 'Unlimited premium data on Verizon’s 5G and 4G LTE networks with hotspot for reliable remote work.',
        body: BODY_VISIBLE,
        discountText: '$20 First Month',
        link: 'https://www.visible.com/get/?66LWM29',
        icon: 'smartphone',
        imageUrl:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'The foundation of my communication standard.',
      },
      {
        id: 'planet-fitness',
        slug: 'planet-fitness-wellness',
        name: 'Planet Fitness',
        description: 'Nationwide access to wellness and reliable amenities while on the road.',
        body: BODY_PLANET,
        discountText: '$1 Down Deal',
        link: 'https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ',
        icon: 'award',
        imageUrl:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
        promoNote: 'My mobile home base for wellness and amenities.',
      },
    ],
  },
];

const thsReferral = REFERRALS[0].items[0];

export const GLOBAL_STRINGS: SiteStrings = {
  toolkitSectionTitle: 'Nomad Essentials',
  toolkitSectionDescription: `The exact tools, connectivity, and memberships I rely on to maintain a professional standard while traveling solo across ${SITE_STATS.countriesCount} countries.`,
  travelPromoTitle: 'Start Your Own Journey',
  travelPromoText: `Inspired to explore? Use my vetted link to join the TrustedHousesitters community. Claim your ${thsReferral.discountText}!`,
  travelPromoLink: thsReferral.link,
  travelPromoBtn: thsReferral.discountText || 'Claim Discount',
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    slug: 'austin-stewardship',
    name: 'Jessica & Mark',
    location: 'Austin, Texas',
    rating: 5,
    date: 'Oct 2023',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    text: 'Julia was absolutely incredible. The house was cleaner than we left it, and we got daily photo updates.',
    sitDescription: 'Luxury residence stewardship and senior Golden Retriever care.',
    body: `<p>Managing this high-end Austin property required a mix of technical home maintenance and compassionate senior pet care. I was responsible for twice-daily insulin injections and monitoring a complex automated landscaping system.</p><p>My stay ensured the owners could travel with total peace of mind, knowing their home was occupied and their pets were on a strict medical schedule. I provided detailed daily reports and high-resolution photos through my nomad data plan.</p><p>This assignment was verified through TrustedHousesitters, where I maintain a perfect record for reliability and property stewardship.</p>`,
    tags: ['Long-Term', 'Smart Home', 'Senior Care'],
  },
  {
    id: '2',
    slug: 'dallas-residence',
    name: 'The Henderson Family',
    location: 'Dallas, Texas',
    rating: 5,
    date: 'July 2024',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200',
    text: 'A truly professional experience. Julia managed our home and high-energy rescue pointers with absolute grace.',
    sitDescription: 'Suburban acreage management and high-energy breed enrichment.',
    body: `<p>This assignment involved managing 5 acres of property and two high-energy rescue Pointers. I implemented a structured exercise routine and maintained the home's security grid during a month-long absence.</p><p>Sprawling suburban properties require constant vigilance. I conducted daily perimeter checks and ensured all security cameras remained online and functional, utilizing my tech toolkit for 24/7 monitoring.</p><p>Verified sit history available on my TrustedHousesitters profile, confirming my status as a preferred sitter for large estates.</p>`,
    tags: ['Acreage', 'Rescue Specialist', 'High-Energy Breeds'],
  },
  {
    id: '3',
    slug: 'laguna-beach-coastal',
    name: 'Sarah & Thomas',
    location: 'Laguna Beach, CA',
    rating: 5,
    date: 'August 2024',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    text: 'Exquisite eye for detail. Our art-filled coastal home and our senior cats were in the best hands.',
    sitDescription: 'Coastal property oversight and art conservation monitoring.',
    body: `<p>Coastal environments present unique challenges like humidity and salt-air exposure. I managed internal dehumidification for a private art collection while caring for two senior Siamese cats with complex needs.</p><p>The cats required specialized diet prep and oral medications, which were administered with zero missed doses over the month-long stay. I kept the owners updated with daily video check-ins.</p><p>Another successful long-term sit completed via my TrustedHousesitters network, reinforcing my expertise in high-value property management.</p>`,
    tags: ['Coastal', 'Art Care', 'Senior Wellness'],
  },
  {
    id: '4',
    slug: 'sf-pacific-heights',
    name: 'Dr. Julian W.',
    location: 'San Francisco, CA',
    rating: 5,
    date: 'Nov 2024',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200',
    text: 'Reliable and deeply respectful of our historic home.',
    sitDescription: 'Historic Victorian stewardship.',
    body: '<p>Managing a historic Pacific Heights Victorian while providing urban socialization for a Standard Poodle.</p>',
    tags: ['Historic Home', 'Urban'],
  },
  {
    id: '5',
    slug: 'phoenix-desert-tech',
    name: 'The Millers',
    location: 'Phoenix, AZ',
    rating: 5,
    date: 'Jan 2024',
    petType: ['Reptile'],
    imageUrl:
      'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&q=80&w=1200',
    text: 'Handled our bearded dragons and smart-home setup perfectly.',
    sitDescription: 'Reptile habitat maintenance and desert HVAC monitoring.',
    body: '<p>Maintaining precise UVB and humidity for reptiles during a record-breaking heatwave.</p>',
    tags: ['Reptile Care', 'Smart HVAC'],
  },
  {
    id: '6',
    slug: 'seattle-high-rise',
    name: 'Elena R.',
    location: 'Seattle, WA',
    rating: 5,
    date: 'Aug 2023',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200',
    text: 'Julia is a natural with anxious cats.',
    sitDescription: 'Urban high-rise_cat_care.',
    body: '<p>Building trust with an anxious rescue cat in a minimalist urban environment.</p>',
    tags: ['Anxious Pets', 'Minimalist'],
  },
  {
    id: '7',
    slug: 'malibu-farm-stay',
    name: 'Thompson Family',
    location: 'Malibu, CA',
    rating: 5,
    date: 'July 2023',
    petType: ['Farm'],
    imageUrl:
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200',
    text: 'Effortlessly managed our coastal farm and dogs.',
    sitDescription: 'Heritage poultry and property care.',
    body: '<p>Managing a flock of heritage chickens and three large dogs on a coastal estate.</p>',
    tags: ['Farm Care', 'Multi-Pet'],
  },
  {
    id: '8',
    slug: 'sedona-modern',
    name: 'Robert & Sarah',
    location: 'Sedona, AZ',
    rating: 5,
    date: 'Mar 2024',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&q=80&w=1200',
    text: 'Impressive handling of our energetic Vizsla.',
    sitDescription: 'Active breed management in desert climate.',
    body: '<p>High-activity trail running and water conservation management.</p>',
    tags: ['Active Breeds', 'Resource Management'],
  },
  {
    id: '9',
    slug: 'la-canyon',
    name: 'David P.',
    location: 'Los Angeles, CA',
    rating: 5,
    date: 'Jan 2024',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200',
    text: 'Understood the indoor-outdoor flow of our home.',
    sitDescription: 'Canyon residence security.',
    body: '<p>Monitoring architectural property boundaries and providing feline enrichment.</p>',
    tags: ['Modernist', 'Security'],
  },
  {
    id: '10',
    slug: 'portland-farm',
    name: 'The Kanes',
    location: 'Portland, OR',
    rating: 5,
    date: 'Sept 2023',
    petType: ['Farm'],
    imageUrl:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    text: 'Exceptional communication for our urban farm.',
    sitDescription: 'Urban farmstead and senior dog care.',
    body: '<p>Sustainable garden maintenance and aging Terrier support.</p>',
    tags: ['Urban Farm', 'Sustainability'],
  },
  {
    id: '11',
    slug: 'denver-loft',
    name: 'Marcus T.',
    location: 'Denver, CO',
    rating: 5,
    date: 'Feb 2024',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    text: 'Handled our Smart Home and cat perfectly.',
    sitDescription: 'Industrial loft stewardship.',
    body: '<p>Oversight of mesh Wi-Fi and industrial building access protocols.</p>',
    tags: ['Industrial', 'Smart Home'],
  },
  {
    id: '12',
    slug: 'chicago-winter',
    name: 'The O-Malleys',
    location: 'Chicago, IL',
    rating: 5,
    date: 'Dec 2023',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200',
    text: 'Handled a Chicago winter with grace.',
    sitDescription: 'Historic brownstone winterization.',
    body: '<p>Critical monitoring of pipe freezing and senior cat comfort during sub-zero temps.</p>',
    tags: ['Winterization', 'Historic'],
  },
  {
    id: '13',
    slug: 'miami-beach',
    name: 'Carlos V.',
    location: 'Miami, FL',
    rating: 5,
    date: 'May 2024',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    text: 'Efficient and professional communicator.',
    sitDescription: 'Beachfront condo management.',
    body: '<p>Humidity control and French Bulldog specialized care.</p>',
    tags: ['Beachfront', 'Humidity Control'],
  },
  {
    id: '14',
    slug: 'boulder-mtn',
    name: 'The Wrights',
    location: 'Boulder, CO',
    rating: 5,
    date: 'June 2024',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    text: 'Professional ease with mountain protocols.',
    sitDescription: 'Wildlife safety and Border Collie exercise.',
    body: '<p>Active wildlife awareness protocols in a mountain setting.</p>',
    tags: ['Mountain Safety', 'Active Dogs'],
  },
  {
    id: '15',
    slug: 'nashville-cottage',
    name: 'Emily H.',
    location: 'Nashville, TN',
    rating: 5,
    date: 'Oct 2023',
    petType: ['Dog'],
    imageUrl:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200',
    text: 'Wonderful with both our home and pets.',
    sitDescription: 'Historic cottage multi-pet management.',
    body: '<p>Coordinating schedules for a three-dog household in a historic neighborhood.</p>',
    tags: ['Historic', 'Multi-Pet'],
  },
  {
    id: '16',
    slug: 'atlanta-residence',
    name: 'The Jacksons',
    location: 'Atlanta, GA',
    rating: 5,
    date: 'Sept 2024',
    petType: ['Cat'],
    imageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    text: 'Quiet and thorough with security.',
    sitDescription: 'Residential property monitoring.',
    body: '<p>Daily security logs and companion enrichment for indoor cats.</p>',
    tags: ['Professional', 'Cat Care'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-get-your-first-house-sit',
    title: 'How to Land Your First Luxury Housesit (SEO Guide)',
    excerpt:
      'The exact framework I used to build a 5-star reputation and secure high-end assignments.',
    date: 'Feb 10, 2024',
    category: 'Expertise',
    location: 'Strategy',
    imageUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
    body: `<p>Entering the luxury housesitting market is a masterclass in professional branding. I started by treating my profile not as a traveler's bio, but as an estate manager's resume, highlighting technical oversight and specific medical care capabilities that high-value homeowners prioritize.</p><p>Vetting homeowners is just as important as being vetted yourself. I always look for platforms that offer comprehensive insurance and a verified identity system to ensure the safety of both the property and the sitter during long-term seasonal stays.</p><p>Joining the right community is the shortcut to success. You can start your own professional journey by joining TrustedHousesitters with a 25% discount using my vetted link below to ensure you have the best start possible.</p>`,
  },
  {
    id: '2',
    slug: 'smart-home-stewardship',
    title: 'Smart Home Stewardship: A Professional Protocol',
    excerpt: 'Why mastering Ring, Lutron, and Nest is the new standard for estate care.',
    date: 'Feb 15, 2024',
    category: 'Technical',
    location: 'Home Tech',
    imageUrl:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
    body: `<p>Modern residency stewardship is increasingly defined by its digital infrastructure. As homes become "smarter," the responsibility of the house sitter evolves to include technical oversight of security grids, environmental controls, and automated landscaping systems.</p><p>My protocol includes a detailed technical walkthrough of Nest, Ring, and Lutron systems before any sit begins. Ensuring these tools remain online and correctly calibrated is essential for maintaining property security and energy efficiency during month-long homeowner absences.</p><p>To maintain 24/7 connectivity for these systems and my daily updates, I rely on the unlimited nomadic data provided by Visible, ensuring I can monitor and update homeowners regardless of the property's local Wi-Fi status.</p>`,
  },
  {
    id: '3',
    slug: 'solo-female-nomad-safety',
    title: 'Solo Female Nomad Safety: The Vetted Framework',
    excerpt: 'Practical, high-intent safety protocols for traveling the USA solo.',
    date: 'Jan 20, 2024',
    category: 'Safety',
    location: 'Nomadic Life',
    imageUrl:
      'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&q=80&w=1200',
    body: `<p>Safety is the primary barrier for many aspiring solo travelers. Over the course of 35+ countries and 16 assignments, I have developed a multi-layered framework that prioritizes verified accommodation and redundant communication to mitigate risk.</p><p>My redundant safety kit includes a 24/7 accessible membership like Planet Fitness for safe harbor on travel days and a high-bandwidth data plan through Visible to ensure I am never truly "off-grid" while navigating between states.</p><p>Building your nomadic life on a foundation of trust starts with vetting your platforms. I recommend starting with TrustedHousesitters for secure, community-vetted stays across the United States that provide a safe and stable environment.</p>`,
  },
  {
    id: '4',
    slug: 'senior-pet-medication-guide',
    title: 'Professional Senior Pet Care: A Clinical Approach',
    excerpt: 'The exact methodology I use for medical administration and palliative support.',
    date: 'Jan 15, 2024',
    category: 'Pet Care',
    location: 'Wellness',
    imageUrl:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200',
    body: '<p>Specializing in senior pet care requires more than just affection; it requires clinical precision. I utilize digital medical logs to track every dose of insulin or oral medication, providing homeowners with data-backed peace of mind that their companions are thriving.</p><p>Patience is the core of palliative care. I spend significant time bonding with senior pets, respecting their specific mobility needs and ensuring their environment remains stress-free and familiar while their family is away.</p><p>If you need localized backup during a transition sit or a verified professional in a pinch, I recommend using Rover to find vetted pet professionals who share this commitment to high-standard care.</p>',
  },
  {
    id: '5',
    slug: 'pet-emergency-protocol',
    title: 'The Pet Emergency Protocol: A Steward’s Guide',
    excerpt: 'Mitigating risk and managing veterinary emergencies with calm precision.',
    date: 'Jan 10, 2024',
    category: 'Expertise',
    location: 'Emergency',
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    body: '<p>Preparation is the antidote to emergency. Before every sit, I pre-vet the nearest 24-hour clinic and establish a signed veterinary directive with the homeowner to ensure no delays in care if an urgent situation arises.</p><p>Communication in a crisis must be immediate and clear. Having an unlimited data plan via Visible allows me to provide real-time video consultations with owners or clinics during stressful situations, ensuring the best decisions are made quickly.</p><p>By treating housesitting as a professional stewardship, I ensure that the unexpected is managed with a calm, pre-determined plan that protects the pets and the property.</p>',
  },
  {
    id: '6',
    slug: 'urban-farming-housesitting',
    title: 'Stewardship of the Urban Farmstead',
    excerpt: 'Managing gardens and heritage poultry in metropolitan environments.',
    date: 'Dec 28, 2023',
    category: 'Sustainability',
    location: 'Portland/Seattle',
    imageUrl:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    body: '<p>Urban farmsteads require a rhythmic approach to chores that differs from standard residential sits. I manage heritage poultry and seasonal garden maintenance alongside my indoor duties to keep the ecosystem thriving.</p><p>Sustainability is a shared value between many of my hosts and myself. I take pride in keeping their garden ecosystems productive and their animals healthy while they are exploring the world.</p><p>These specialized skills have allowed me to experience unique farm-to-table lifestyles in the heart of major US cities like Portland and Seattle.</p>',
  },
  {
    id: '7',
    slug: 'housesitting-contracts-safety',
    title: 'The Business of Trust: Housesitting Agreements',
    excerpt: 'Why clear documentation is the hallmark of a professional steward.',
    date: 'Dec 20, 2023',
    category: 'Professionalism',
    location: 'Business',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    body: '<p>Clear expectations are the foundation of every 5-star sit. I use professional agreements to document everything from emergency contacts to specific property rules for guests, utilities, and pet schedules.</p><p>Documentation protects both parties and ensures there is no ambiguity during the stay. It is a hallmark of a professional sitter who takes their responsibility to the homeowner seriously and maintains a standard of excellence.</p><p>By treating housesitting as a professional engagement, I’ve maintained a perfect track record of satisfaction across 16 assignments throughout the USA.</p>',
  },
  {
    id: '8',
    slug: 'becoming-digital-nomad-2024',
    title: 'The 2024 Roadmap to Digital Nomadism',
    excerpt: 'How to transition to a life of global exploration through housesitting.',
    date: 'Dec 15, 2023',
    category: 'Lifestyle',
    location: 'Global',
    imageUrl:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200',
    body: '<p>Transitioning to nomadic life is primarily about reducing overhead and building remote streams of income. Housesitting is the ultimate hack for living well while exploring new cities without the burden of high rent costs.</p><p>I recommend starting with a clear 6-month plan to downsize and vet your essential tools. Reliability in connectivity and wellness is what makes this lifestyle sustainable in the long run across different states.</p><p>Join the movement by using my TrustedHousesitters referral link to find your first home-away-from-home and start your adventure today.</p>',
  },
  {
    id: '9',
    slug: 'essential-nomad-apps',
    title: 'The Digital Architect: Top 5 Nomad Apps',
    excerpt: 'The software stack that powers my nomadic property management.',
    date: 'Dec 10, 2023',
    category: 'Tech',
    location: 'Digital',
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    body: '<p>From navigation to pet medical trackers, these apps are essential for my daily nomadic workflow. I rely on them to organize my schedule, track expenses, and keep my clients informed with professional reports.</p><p>Efficiency is key when you are moving between sits every few weeks. Having your documents, maps, and schedules synced across your devices ensures you never miss a beat during a transition in a new city.</p><p>Combined with my Visible data plan, these apps ensure I am a high-functioning nomad capable of handling any property request or emergency with technical precision.</p>',
  },
  {
    id: '10',
    slug: 'housesitting-for-retirees',
    title: 'The New Retirement: Global Stewardship',
    excerpt: 'How my hosts use the platform to travel the world for free.',
    date: 'Dec 5, 2023',
    category: 'Community',
    location: 'Perspective',
    imageUrl:
      'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200',
    body: "<p>Many of my hosts are fellow travelers who swap homes globally. It is a beautiful ecosystem of trust and adventure that isn't just for the young, but for the young-at-heart looking for meaningful travel experiences.</p><p>Retirees often have the flexibility that slow travel requires. They use housesitting to stay in local neighborhoods rather than tourist traps, experiencing a city as it truly is through the lens of home care.</p><p>It’s a community I am proud to be a part of, where the exchange of value is built on mutual respect for home, companionship, and the spirit of global exploration.</p>",
  },
];

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
    body: '<p>Ubud is where slow travel becomes a lifestyle. I spent a month reflecting on architecture and intentionality while living in a traditional bamboo home, learning the rhythm of the local community and the art of presence.</p><p>The morning light in Bali dictates the pace of the day. It taught me the importance of being fully present in a destination, a skill that translates directly to the attentive care and technical stewardship I provide on every sit.</p><p>Exploring the intersection of ancient traditions and modern nomadic life has been a defining chapter of my global journey across 35+ countries and continues to influence my professional standards.</p>',
  },
  {
    id: '2',
    slug: 'iceland-road-trip',
    title: 'Iceland: Resilience in the Highlands',
    location: 'Iceland',
    excerpt: 'A solo road trip through the volcanic landscapes of the North Atlantic.',
    imageUrl:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    tags: ['Adventure', 'Nature'],
    body: "<p>Navigating the Ring Road solo taught me resilience and the profound beauty of silence. The Icelandic landscape is a raw, powerful reminder of the earth's strength and our own adaptability in harsh environments.</p><p>Respecting the elements is non-negotiable here. I spent my days photographing volcanic peaks and my nights monitoring the skies for the aurora borealis, a process that requires the same technical preparation I bring to estate stewardship.</p><p>It was a masterclass in self-reliance and the importance of having the right tools for the environment, which is why I never travel without my vetted nomadic toolkit to ensure I am always prepared.</p>",
  },
  {
    id: '3',
    slug: 'kyoto-minimalism',
    title: 'Kyoto: The Zen Aesthetic',
    location: 'Kyoto, Japan',
    excerpt: 'Minimalism and centuries-old craftsmanship.',
    imageUrl:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Minimalism', 'Culture'],
    body: '<p>Kyoto is a city of layers, where modern life hums alongside 1,000-year-old temples. I focused on the Zen aesthetic of gardens and the quiet precision of Japanese design that values both form and function.</p><p>The attention to detail in even the smallest objects is inspiring. It reinforced my own commitment to the "eye for detail" that homeowners value in my stewardship when managing their most precious assets.</p><p>Walking through the philosopher\'s path, I found a deep appreciation for the intentionality that defines Japanese culture and have integrated that philosophy into my nomadic lifestyle.</p>',
  },
  {
    id: '4',
    slug: 'swiss-alps-guide',
    title: 'Swiss Alps: High-Altitude Focus',
    location: 'Switzerland',
    excerpt: 'Luxury and remote work in the Bernese Oberland.',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
    tags: ['Luxury', 'Mountains'],
    body: "<p>Finding focus at 2,000 meters above sea level is surprisingly easy when you have the Swiss Alps as your office view. The Bernese Oberland is a pinnacle of natural beauty and precision engineering.</p><p>Remote work requires discipline, especially when surrounded by world-class hiking trails. I balanced my professional duties with high-altitude exploration and alpine wellness, maintaining a high standard of productivity.</p><p>Switzerland's commitment to quality mirrors my own approach to property management—everything has a place, and everything works as intended to ensure a seamless living experience.</p>",
  },
  {
    id: '5',
    slug: 'amalfi-coast-guide',
    title: 'Amalfi Coast: Historic Rhythms',
    location: 'Italy',
    excerpt: 'Cliffs, lemons, and the art of slow living.',
    imageUrl:
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200',
    tags: ['History', 'Coastal'],
    body: '<p>Navigating the ancient paths of the Tyrrhenian coast is a lesson in beauty and endurance. Italy is about the art of slow eating, slow moving, and appreciating the historical weight of every stone.</p><p>Finding quiet moments in world-famous destinations is a skill I have refined over years of travel. I spent my time exploring the vertical architecture of the Amalfi cliffs and the vibrant lemon groves that define the region.</p><p>A beautiful chapter in my Mediterranean travels that reinforced my love for coastal stewardship and the unique challenges of maintaining properties in salt-air environments.</p>',
  },
  {
    id: '6',
    slug: 'tulum-design-guide',
    title: 'Tulum: Jungle Brutalism',
    location: 'Mexico',
    excerpt: 'Sustainable luxury and jungle architecture.',
    imageUrl:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&q=80&w=1200',
    tags: ['Eco-Design', 'Beaches'],
    body: '<p>Where brutalist architecture meets lush jungle foliage, Tulum offers a unique study in eco-conscious design. Exploring sustainable luxury in the footer section of the site has shown me how modern life can blend with nature.</p><p>Design that respects the environment is a core value of mine. I spent time documenting how these properties manage resource conservation while providing high-end comfort to their residents.</p><p>The vibrant energy of the jungle and the serene Caribbean coast provide the perfect backdrop for a deep dive into wellness-centric architectural stewardship.</p>',
  },
  {
    id: '7',
    slug: 'cape-town-guide',
    title: 'Cape Town: Southern Energy',
    location: 'South Africa',
    excerpt: 'Where the mountains meet the ocean.',
    imageUrl:
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=1200',
    tags: ['Urban', 'Hiking'],
    body: '<p>Cape Town is a guide to the most visually stunning city in the southern hemisphere. Table Mountain provides a constant anchor for exploration, casting long shadows over the vibrant urban landscape.</p><p>Where the city meets the ocean with raw intensity, you find a culture built on resilience and natural wonder. I spent my days hiking the peaks and my nights reflecting on the unique history of the Cape.</p><p>A masterclass in urban wilderness, Cape Town is a must-visit for any nomad who seeks the perfect balance between cosmopolitan life and rugged nature.</p>',
  },
  {
    id: '8',
    slug: 'lisbon-light',
    title: 'Lisbon: Tile and Glow',
    location: 'Portugal',
    excerpt: 'Atlantic vibes and historic urban texture.',
    imageUrl:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1200',
    tags: ['Art', 'City Life'],
    body: "<p>A masterclass in urban texture and historical resilience, Lisbon is a city of light and tile. The Atlantic glow reflects off the cobblestone streets, creating a unique atmosphere that has captivated nomads for decades.</p><p>The tilework of Lisbon is a visual history of the city, telling stories of its past through intricate designs and vibrant colors. Portugal is a nomad's paradise for a reason, offering high-quality living at an accessible pace.</p><p>Navigating the seven hills, I found a deep appreciation for the community spirit and the architectural preservation that makes Lisbon a truly timeless destination.</p>",
  },
  {
    id: '9',
    slug: 'vancouver-nature',
    title: 'Vancouver: Urban Wilderness',
    location: 'Canada',
    excerpt: 'Fjords, forests, and cosmopolitan living.',
    imageUrl:
      'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&q=80&w=1200',
    tags: ['Sustainability', 'Nature'],
    body: '<p>Design that respects the forest and the sea is the hallmark of Vancouver. It is the perfect synthesis of urban and wild, where you can move from a high-rise downtown to a rugged fjord in minutes.</p><p>Sustainability is woven into the fabric of the city, from its green building initiatives to its extensive transit network. I documented how urban planning can successfully integrate with sensitive coastal ecosystems.</p><p>The clean air and majestic mountains provide a constant reminder of the importance of environmental stewardship in both our personal and professional lives.</p>',
  },
  {
    id: '10',
    slug: 'moab-desert-guide',
    title: 'Moab: Red Rock Silence',
    location: 'Utah, USA',
    excerpt: 'The power of high desert landscapes.',
    imageUrl:
      'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&q=80&w=1200',
    tags: ['Adventure', 'National Parks'],
    body: '<p>A landscape carved by time and the elements, Moab is where I go to reconnect with the raw power of the earth. The red rocks hold a silent power that is unmatched, offering a sanctuary for reflection and adventure.</p><p>National Parks like Arches and Canyonlands provide a playground for the solo traveler who respects the desert. I spent my time navigating the stone arches and watching the sunset over the vast canyons.</p><p>The high desert requires a unique type of preparation and resilience, qualities that have become fundamental to my approach as a professional nomad and property steward.</p>',
  },
];
