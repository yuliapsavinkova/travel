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
    // review:
    // 'Yulia has been the best sitter I’ve had so far! Extremely kind and always sending updates about my house and cat. Very grateful to have had her stay at my home and would love to have her stay again soon. Highly recommended.',
    sitDescription: 'South Austin Black Cat Gem',
    body: txt(
      'This assignment was verified through TrustedHousesitters, where I maintain a perfect record for reliability and property stewardship.'
    ),
    tags: ['Long-Term'],
  },
  //   {
  //     id: '2',
  //     slug: 'dallas-residence',
  //     name: 'The Henderson Family',
  //     location: 'Dallas, Texas',
  //     rating: 5,
  //     date: 'July 2024',
  //     petType: ['Dog'],
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200',
  //     text: 'A truly professional experience. Julia managed our home and high-energy rescue pointers with absolute grace.',
  //     sitDescription: 'Suburban acreage management and high-energy breed enrichment.',
  //     body: txt(`This assignment involved managing 5 acres of property and two high-energy rescue Pointers. I implemented a structured exercise routine and maintained the home's security grid during a month-long absence.

  // Sprawling suburban properties require constant vigilance. I conducted daily perimeter checks and ensured all security cameras remained online and functional, utilizing my tech toolkit for 24/7 monitoring.

  // Verified sit history available on my TrustedHousesitters profile, confirming my status as a preferred sitter for large estates.`),
  //     tags: ['Acreage', 'Rescue Specialist', 'High-Energy Breeds'],
  //   },
  //   {
  //     id: '3',
  //     slug: 'laguna-beach-coastal',
  //     name: 'Sarah & Thomas',
  //     location: 'Laguna Beach, CA',
  //     rating: 5,
  //     date: 'August 2024',
  //     petType: ['Cat'],
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  //     text: 'Exquisite eye for detail. Our art-filled coastal home and our senior cats were in the best hands.',
  //     sitDescription: 'Coastal property oversight and art conservation monitoring.',
  //     body: txt(`Coastal environments present unique challenges like humidity and salt-air exposure. I managed internal dehumidification for a private art collection while caring for two senior Siamese cats with complex needs.

  // The cats required specialized diet prep and oral medications, which were administered with zero missed doses over the month-long stay. I kept the owners updated with daily video check-ins.

  // Another successful long-term sit completed via my TrustedHousesitters network, reinforcing my expertise in high-value property management.`),
  //     tags: ['Coastal', 'Art Care', 'Senior Wellness'],
  //   },
  // {
  //   id: '4',
  //   slug: 'sf-pacific-heights',
  //   name: 'Dr. Julian W.',
  //   location: 'San Francisco, CA',
  //   rating: 5,
  //   date: 'Nov 2024',
  //   petType: ['Dog'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Reliable and deeply respectful of our historic home.',
  //   sitDescription: 'Historic Victorian stewardship.',
  //   body: txt(
  //     'Managing a historic Pacific Heights Victorian while providing urban socialization for a Standard Poodle.'
  //   ),
  //   tags: ['Historic Home', 'Urban'],
  // },
  // {
  //   id: '5',
  //   slug: 'phoenix-desert-tech',
  //   name: 'The Millers',
  //   location: 'Phoenix, AZ',
  //   rating: 5,
  //   date: 'Jan 2024',
  //   petType: ['Reptile'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Handled our bearded dragons and smart-home setup perfectly.',
  //   sitDescription: 'Reptile habitat maintenance and desert HVAC monitoring.',
  //   body: txt(
  //     'Maintaining precise UVB and humidity for reptiles during a record-breaking heatwave.'
  //   ),
  //   tags: ['Reptile Care', 'Smart HVAC'],
  // },
  // {
  //   id: '6',
  //   slug: 'seattle-high-rise',
  //   name: 'Elena R.',
  //   location: 'Seattle, WA',
  //   rating: 5,
  //   date: 'Aug 2023',
  //   petType: ['Cat'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Julia is a natural with anxious cats.',
  //   sitDescription: 'Urban high-rise_cat_care.',
  //   body: txt('Building trust with an anxious rescue cat in a minimalist urban environment.'),
  //   tags: ['Anxious Pets', 'Minimalist'],
  // },
  // {
  //   id: '7',
  //   slug: 'malibu-farm-stay',
  //   name: 'Thompson Family',
  //   location: 'Malibu, CA',
  //   rating: 5,
  //   date: 'July 2023',
  //   petType: ['Farm'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Effortlessly managed our coastal farm and dogs.',
  //   sitDescription: 'Heritage poultry and property care.',
  //   body: txt('Managing a flock of heritage chickens and three large dogs on a coastal estate.'),
  //   tags: ['Farm Care', 'Multi-Pet'],
  // },
  // {
  //   id: '8',
  //   slug: 'sedona-modern',
  //   name: 'Robert & Sarah',
  //   location: 'Sedona, AZ',
  //   rating: 5,
  //   date: 'Mar 2024',
  //   petType: ['Dog'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Impressive handling of our energetic Vizsla.',
  //   sitDescription: 'Active breed management in desert climate.',
  //   body: txt('High-activity trail running and water conservation management.'),
  //   tags: ['Active Breeds', 'Resource Management'],
  // },
  // {
  //   id: '9',
  //   slug: 'la-canyon',
  //   name: 'David P.',
  //   location: 'Los Angeles, CA',
  //   rating: 5,
  //   date: 'Jan 2024',
  //   petType: ['Cat'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Understood the indoor-outdoor flow of our home.',
  //   sitDescription: 'Canyon residence security.',
  //   body: txt('Monitoring architectural property boundaries and providing feline enrichment.'),
  //   tags: ['Modernist', 'Security'],
  // },
  // {
  //   id: '10',
  //   slug: 'portland-farm',
  //   name: 'The Kanes',
  //   location: 'Portland, OR',
  //   rating: 5,
  //   date: 'Sept 2023',
  //   petType: ['Farm'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Exceptional communication for our urban farm.',
  //   sitDescription: 'Urban farmstead and senior dog care.',
  //   body: txt('Sustainable garden maintenance and aging Terrier support.'),
  //   tags: ['Urban Farm', 'Sustainability'],
  // },
  // {
  //   id: '11',
  //   slug: 'denver-loft',
  //   name: 'Marcus T.',
  //   location: 'Denver, CO',
  //   rating: 5,
  //   date: 'Feb 2024',
  //   petType: ['Cat'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Handled our Smart Home and cat perfectly.',
  //   sitDescription: 'Industrial loft stewardship.',
  //   body: txt('Oversight of mesh Wi-Fi and industrial building access protocols.'),
  //   tags: ['Industrial', 'Smart Home'],
  // },
  // {
  //   id: '12',
  //   slug: 'chicago-winter',
  //   name: 'The O-Malleys',
  //   location: 'Chicago, IL',
  //   rating: 5,
  //   date: 'Dec 2023',
  //   petType: ['Cat'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Handled a Chicago winter with grace.',
  //   sitDescription: 'Historic brownstone winterization.',
  //   body: txt('Critical monitoring of pipe freezing and senior cat comfort during sub-zero temps.'),
  //   tags: ['Winterization', 'Historic'],
  // },
  // {
  //   id: '13',
  //   slug: 'miami-beach',
  //   name: 'Carlos V.',
  //   location: 'Miami, FL',
  //   rating: 5,
  //   date: 'May 2024',
  //   petType: ['Dog'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Efficient and professional communicator.',
  //   sitDescription: 'Beachfront condo management.',
  //   body: txt('Humidity control and French Bulldog specialized care.'),
  //   tags: ['Beachfront', 'Humidity Control'],
  // },
  // {
  //   id: '14',
  //   slug: 'boulder-mtn',
  //   name: 'The Wrights',
  //   location: 'Boulder, CO',
  //   rating: 5,
  //   date: 'June 2024',
  //   petType: ['Dog'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Professional ease with mountain protocols.',
  //   sitDescription: 'Wildlife safety and Border Collie exercise.',
  //   body: txt('Active wildlife awareness protocols in a mountain setting.'),
  //   tags: ['Mountain Safety', 'Active Dogs'],
  // },
  // {
  //   id: '15',
  //   slug: 'atlanta-residence',
  //   name: 'The Jacksons',
  //   location: 'Atlanta, GA',
  //   rating: 5,
  //   date: 'Sept 2024',
  //   petType: ['Cat'],
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
  //   text: 'Quiet and thorough with security.',
  //   sitDescription: 'Residential property monitoring.',
  //   body: txt('Daily security logs and companion enrichment for indoor cats.'),
  //   tags: ['Professional', 'Cat Care'],
  // },
];
