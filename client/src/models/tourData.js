import SigiriyaSlideImg from '../assets/images/Sigirya_Slide.jpg';
import YalaSlideImg from '../assets/images/Yala_Slide.jpg';
import MirissaSlideImg from '../assets/images/SouthCost_Slide.jpg'; 
export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Ayubowan! Welcome to Paradise Island Sri Lanka',
    tagline: 'Golden beaches, misty mountains, ancient kingdoms & timeless hospitality.',
    image: MirissaSlideImg,
  },
  {
    id: 2,
    title: 'Explore Sigiriya — The 8th Wonder of the World',
    tagline: 'Discover an ancient rock fortress and the history of King Kashyapa.',
    image: SigiriyaSlideImg,
  },
  {
    id: 3,
    title: 'Witness Wildlife in Yala National Park',
    tagline: 'Look for elephants, leopards, and other wildlife on a guided safari.',
    image: YalaSlideImg,
  },
]

export const VILLAS = [
  {
    id: 1,
    name: 'Cape Weligama Luxury Resort',
    location: 'Weligama, Southern Coast',
    rating: 4.9,
    price: '$350 / night',
    description:
      'Relax above the Indian Ocean at this coastal resort, with spacious rooms, scenic views, and easy access to nearby beaches.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Ocean View', 'Private Pool', '5-Star'],
  },
  {
    id: 2,
    name: 'Nine Skies Bungalow',
    location: 'Ella, Hill Country',
    rating: 4.8,
    price: '$280 / night',
    description:
      'Enjoy a peaceful countryside stay surrounded by tea country, mountain scenery, and the charm of a restored bungalow.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['Tea Garden', 'Historic', 'Luxury'],
  },
  {
    id: 3,
    name: 'Amanwella Villa',
    location: 'Tangalle, South',
    rating: 4.95,
    price: '$450 / night',
    description:
      'Unwind by the southern coast with a secluded beach, relaxing spa experiences, and peaceful tropical surroundings.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    tags: ['Private Beach', 'Spa', 'Ocean View'],
  },
]

export const DESTINATIONS = [
  {
    id: 1,
    title: 'Ella & Nine Arch Bridge',
    description:
      'Explore misty highland views, hiking trails, tea plantations, and the iconic Nine Arch Bridge.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Galle Dutch Fort',
    description:
      'Walk the historic ramparts, discover colonial-era architecture, and visit independent shops and cafés.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Mirissa Coral Coast',
    description:
      'Spend time by the beach, enjoy local cafés, and explore the southern coastline.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Sigiriya Rock Fortress',
    description:
      'Visit the ancient rock fortress, its surrounding gardens, and nearby cultural sites.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Yala National Park',
    description:
      'Explore diverse habitats and look for Sri Lankan wildlife during a guided park safari.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
  },
]

export const OFFERS = [
  {
    id: 1,
    title: 'Cultural Triangle & Hill Country',
    duration: '7 days / 6 nights',
    discount: '25% OFF',
    originalPrice: '$1,200',
    offerPrice: '$899',
    validTill: 'November 30, 2026',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    description:
      'Discover ancient heritage, scenic tea country, and memorable highland landscapes on a week-long guided trip.',
    itinerary: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella'],
    includes: [
      '6 nights of accommodation',
      'Daily breakfast',
      'Private air-conditioned transport',
      'English-speaking guide',
      'Kandy and hill-country sightseeing',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Some entrance fees and personal expenses',
    ],
  },
  {
    id: 2,
    title: 'Wild Safari & Southern Coast Escape',
    duration: '6 days / 5 nights',
    discount: '20% OFF',
    originalPrice: '$950',
    offerPrice: '$760',
    validTill: 'December 15, 2026',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    description:
      'Combine a guided wildlife experience with time to relax along Sri Lanka’s southern coast.',
    itinerary: ['Yala', 'Tangalle', 'Mirissa', 'Galle'],
    includes: [
      '5 nights of accommodation',
      'Daily breakfast',
      'Private transfers between destinations',
      'One guided Yala safari',
      'Galle Fort visit',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Meals not listed',
      'Personal expenses',
    ],
  },
  {
    id: 3,
    title: 'Classic Sri Lanka Highlights',
    duration: '8 days / 7 nights',
    discount: '15% OFF',
    originalPrice: '$1,400',
    offerPrice: '$1,190',
    validTill: 'December 31, 2026',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    description:
      'A first-time visitor itinerary connecting cultural landmarks, hill-country scenery, and the coast.',
    itinerary: ['Negombo', 'Sigiriya', 'Kandy', 'Ella', 'Galle'],
    includes: [
      '7 nights of accommodation',
      'Daily breakfast',
      'Private air-conditioned transport',
      'English-speaking guide',
      'Train journey in the hill country, subject to availability',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Lunches and dinners',
      'Optional activities',
    ],
  },
  {
    id: 4,
    title: 'Beaches, Whales & Galle',
    duration: '5 days / 4 nights',
    discount: '10% OFF',
    originalPrice: '$780',
    offerPrice: '$702',
    validTill: 'January 15, 2027',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description:
      'Enjoy a relaxed coastal getaway with beach time, a Galle visit, and an optional seasonal whale-watching trip.',
    itinerary: ['Galle', 'Unawatuna', 'Mirissa'],
    includes: [
      '4 nights of accommodation',
      'Daily breakfast',
      'Private coastal transfers',
      'Galle Fort visit',
      'Whale-watching trip, subject to season and weather',
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Meals not listed',
      'Personal expenses',
    ],
  },
]

export const CATEGORIES = [
  { id: 'destinations', name: 'Destinations', icon: '📍', path: '/destinations', count: '50+ Places' },
  { id: 'packages', name: 'Tour Packages', icon: '🌴', path: '/packages', count: '20+ Tours' },
  { id: 'itineraries', name: 'Itineraries', icon: '🗺️', path: '/itineraries', count: '15+ Guides' },
  { id: 'events', name: 'Events & Culture', icon: '🪘', path: '/events', count: 'Monthly Events' },
  { id: 'offers', name: 'Special Offers', icon: '🏷️', path: '/offers', count: 'Hot Deals' },
]