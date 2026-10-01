// src/models/tourData.js

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Ayubowan! Welcome to Paradise Island Sri Lanka",
    tagline: "Golden beaches, misty mountains, ancient kingdoms & timeless hospitality.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Explore Sigiriya - The 8th Wonder of the World",
    tagline: "Ascend the ancient rock fortress built by King Kashyapa in 5th Century AD.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Witness Wildlife in Yala National Park",
    tagline: "Home to the highest density of leopards in the world and majestic wild elephants.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
  }
];

export const VILLAS = [
  {
    id: 1,
    name: "Cape Weligama Luxury Resort",
    location: "Weligama, Southern Coast",
    rating: 4.9,
    price: "$350 / night",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    tags: ["Ocean View", "Private Pool", "5-Star"]
  },
  {
    id: 2,
    name: "Nine Skies Bungalow",
    location: "Ella, Hill Country",
    rating: 4.8,
    price: "$280 / night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    tags: ["Tea Garden", "Historic", "Luxury"]
  },
  {
    id: 3,
    name: "Amanwella Villa",
    location: "Tangalle, South",
    rating: 4.95,
    price: "$450 / night",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Beach", "Spa", "Aman Experience"]
  }
];

export const DESTINATIONS = [
  {
    id: 1,
    title: "Ella & Nine Arch Bridge",
    description: "Nestled in the central highlands, Ella offers misty mountain vistas, epic hiking trails, and iconic colonial railway bridges.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Galle Dutch Fort",
    description: "A UNESCO World Heritage site boasting 17th-century ramparts, cobblestone streets, boutique hotels, and rich colonial heritage.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Mirissa Coral Coast",
    description: "Famous for blue whale watching expeditions, coconut hill vistas, vibrant beach cafes, and legendary sunset surfing spots.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  }
];

export const OFFERS = [
  {
    id: 1,
    title: "7-Day Cultural Triangle & Hill Country",
    discount: "25% OFF",
    originalPrice: "$1200",
    offerPrice: "$899",
    validTill: "Valid till Nov 30",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Wild Safari & Southern Coast Escape",
    discount: "20% OFF",
    originalPrice: "$950",
    offerPrice: "$760",
    validTill: "Valid till Dec 15",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80"
  }
];

export const CATEGORIES = [
  { id: 'destinations', name: 'Destinations', icon: '📍', path: '/destinations', count: '50+ Places' },
  { id: 'packages', name: 'Tour Packages', icon: '🌴', path: '/packages', count: '20+ Tours' },
  { id: 'itineraries', name: 'Itineraries', icon: '🗺️', path: '/itineraries', count: '15+ Guides' },
  { id: 'events', name: 'Events & Culture', icon: '🪘', path: '/events', count: 'Monthly Events' },
  { id: 'offers', name: 'Special Offers', icon: '🏷️', path: '/offers', count: 'Hot Deals' }
];