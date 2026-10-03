import React, { useState } from 'react';

// Data structure holding all the sections and their respective packages
const tourPackagesData = [
  {
    id: '1-week-ideal',
    category: 'Multi-Day Comprehensive Itineraries',
    title: 'The Ideal 1-Week Itinerary',
    subtitle: '7 Days for First-Time Visitors',
    duration: '7 Days / 6 Nights',
    highlights: ['Sigiriya Rock', 'Temple of the Tooth', 'Scenic Train Ride', 'Galle Fort'],
    images: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80', // Sigiriya
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80', // Kandy / Train
      'https://images.unsplash.com/photo-1578564499878-1f6305a2e5eb?auto=format&fit=crop&w=1200&q=80'  // Galle Coast
    ],
    overview: 'A classic circuit covering Sri Lanka\'s iconic ancient heritage, central hill country, and southern coast.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Sigiriya / Cultural Triangle', detail: 'Transfer from Bandaranaike International Airport (CMB) to Sigiriya. Evening hike up Sigiriya Rock Fortress or Pidurangala to view ancient palace ruins.' },
      { day: 'Day 2', title: 'Ancient Ruins & Spice Gardens', detail: 'Explore the ancient city of Polonnaruwa or Dambulla Cave Temple. Stop at a spice garden in Matale en route to Kandy.' },
      { day: 'Day 3', title: 'Kandy (Cultural Capital)', detail: 'Visit the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa). Stroll around Kandy Lake and attend a traditional Kandyan dance performance.' },
      { day: 'Day 4', title: 'Scenic Train Ride to Nuwara Eliya', detail: 'Board the scenic mountain train through rolling tea plantations. Explore "Little England," visit a tea factory, and walk around Gregory Lake.' },
      { day: 'Day 5', title: 'Ella & Southern Coast Transition', detail: 'Hike Little Adam\'s Peak and view the Nine Arches Bridge in Ella. Drive south toward the coastal belt (Galle/Mirissa).' },
      { day: 'Day 6', title: 'Galle Fort & Southern Beaches', detail: 'Walk the historic ramparts of UNESCO-listed Galle Fort. Relax on the sandy beaches of Unawatuna or Mirissa.' },
      { day: 'Day 7', title: 'Colombo & Departure', detail: 'Travel to Colombo for brief city sights and souvenir shopping before heading to the airport.' }
    ]
  },
  {
    id: '2-week-comprehensive',
    category: 'Multi-Day Comprehensive Itineraries',
    title: 'Exploring Sri Lanka: Comprehensive 2-Week Itinerary',
    subtitle: '14 Days Complete Island Experience',
    duration: '14 Days / 13 Nights',
    highlights: ['Anuradhapura', 'Wildlife Safari', 'Pekoe Trail Trekking', 'Mirissa Whale Watching'],
    images: [
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80', // Elephant Safari
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80', // Hill country
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'  // Palm Beach
    ],
    overview: 'An extended, slow-paced exploration combining culture, wildlife safaris, tea country, and tropical coastlines.',
    itinerary: [
      { day: 'Days 1–3', title: 'The Cultural Triangle', detail: 'Visit stupas and ancient Bodhi Tree in Anuradhapura. Climb Sigiriya and Dambulla Caves. Wildlife safari at Minneriya National Park.' },
      { day: 'Days 4–5', title: 'Kandy & Central Highlands', detail: 'Visit Temple of the Tooth and Royal Botanical Gardens in Peradeniya. Trek through Knuckles Mountain Range or Pekoe Trail segments.' },
      { day: 'Days 6–8', title: 'Tea Country (Nuwara Eliya & Ella)', detail: 'Scenic train trip across tea estates. Hike Ella Rock, Nine Arches Bridge, and Horton Plains (World\'s End).' },
      { day: 'Days 9–10', title: 'Wildlife Safari (Yala / Udawalawe)', detail: 'Evening and morning jeep safaris targeting leopards, Asian elephants, and sloth bears.' },
      { day: 'Days 11–13', title: 'Southern Beach Belt', detail: 'Coastal relaxation, whale watching in Mirissa, surfing at Weligama, and sunset walks along Galle Fort.' },
      { day: 'Day 14', title: 'Colombo City Tour & Departure', detail: 'Explore Pettah Market, Gangaramaya Temple, and Independence Square before departure.' }
    ]
  },
  {
    id: '5-day-north-west',
    category: 'Regional & Special-Interest Packages',
    title: '5 Days Around the North-West Coast',
    subtitle: 'Off-the-Beaten-Path Adventure',
    duration: '5 Days / 4 Nights',
    highlights: ['Jaffna Fort', 'Mannar Baobab Trees', 'Wilpattu Safari', 'Kalpitiya Kitesurfing'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // Coast line
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'  // Safari/Nature
    ],
    overview: 'An off-the-beaten-path itinerary showcasing coastal ecosystems, colonial history, and unique northern cuisine.',
    itinerary: [
      { day: 'Days 1–2', title: 'Jaffna Peninsula', detail: 'Explore Jaffna Fort, Nallur Kandaswamy Kovil, and Kandarodai Temple. Taste authentic Jaffna Crab Curry.' },
      { day: 'Day 3', title: 'Mannar Island & Wilpattu', detail: 'Visit Mannar Fort and ancient baobab trees. Safari or overnight camping in Wilpattu National Park.' },
      { day: 'Days 4–5', title: 'Kalpitiya Lagoon & Coast', detail: 'Dolphin and whale watching in outer bay (Oct-Mar). Kitesurfing or relaxing on Kalpitiya peninsula.' }
    ]
  },
  {
    id: 'sailing-southern-coast',
    category: 'Regional & Special-Interest Packages',
    title: 'Sailing Tour of the Southern Coast',
    subtitle: 'Luxury Live-Aboard Ocean Cruise',
    duration: 'Flexible (1 Night to 7 Days)',
    highlights: ['Private Boat Charter', 'Whale Spotting', 'Deck Dinners', 'Snorkeling & SUP'],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', // Ocean Boat
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'  // Tropical Water
    ],
    overview: 'A luxury or adventure live-aboard itinerary along the crystal-clear southern waters of Sri Lanka.',
    itinerary: [
      { day: 'Feature 1', title: 'Whale & Dolphin Watching', detail: 'Cruise directly into deep ocean waters off Mirissa to spot blue whales without early morning transfers.' },
      { day: 'Feature 2', title: 'Onboard Dining Experience', detail: 'Deck dinners under the stars and fresh seafood beach barbecues.' },
      { day: 'Feature 3', title: 'Water Activities', detail: 'Swimming, stand-up paddleboarding (SUP), and snorkeling in quiet coves along Mirissa, Weligama, and Tangalle.' }
    ]
  }
];

// Reusable Image Carousel Component
const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden rounded-2xl group bg-gray-900 shadow-md">
      {/* Active Image */}
      <img
        src={images[currentIndex]}
        alt={`${title} - image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Left Navigation Arrow */}
      {images.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
      )}

      {/* Right Navigation Arrow */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      )}

      {/* Carousel Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
const TourPackages = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
            Love Sri Lanka Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curated Sri Lanka Tour Packages
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Explore carefully crafted itineraries designed to showcase Sri Lanka's heritage, tea country, wildlife, and pristine southern coastline.
          </p>
        </div>

        {/* Vertical Stack of Tour Packages */}
        <div className="space-y-16">
          {tourPackagesData.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6"
            >
              {/* 1st: Image Carousel */}
              <ImageCarousel images={pkg.images} title={pkg.title} />

              {/* Package Header Information */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100 rounded-full">
                    {pkg.category}
                  </span>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    ⏱️ {pkg.duration}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {pkg.title}
                </h2>
                <p className="text-sm font-medium text-slate-500">
                  {pkg.subtitle}
                </p>

                <p className="text-slate-700 text-base leading-relaxed pt-1">
                  {pkg.overview}
                </p>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pkg.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary / Features Breakdown */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>📍</span> Day-by-Day Itinerary Breakdown
                </h3>

                <div className="grid gap-3">
                  {pkg.itinerary.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100"
                    >
                      <span className="inline-block sm:w-28 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md text-center border border-emerald-100 shrink-0">
                        {step.day}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-2 flex justify-end">
                <button className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-colors duration-200 shadow-sm">
                  Book This Tour Package
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TourPackages;