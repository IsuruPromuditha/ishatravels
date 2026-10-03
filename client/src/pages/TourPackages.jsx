import React, { useState, useEffect } from 'react';

// Hero slideshow images
const heroImages = [
  'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80', // Sigiriya
  'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80', // Kandy Train
  'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1920&q=80'  // Palm Coast
];

// Complete dataset for all tour packages
const tourPackagesData = [
  {
    id: '1-week-ideal',
    category: 'Multi-Day Circuit',
    title: 'The Ideal 1-Week Itinerary',
    subtitle: '7 Days for First-Time Visitors',
    duration: '7 Days / 6 Nights',
    price: '$850',
    highlights: ['Sigiriya Rock', 'Temple of the Tooth', 'Scenic Train Ride', 'Galle Fort'],
    images: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578564499878-1f6305a2e5eb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: "A classic high-impact circuit covering Sri Lanka's iconic ancient heritage, central hill country, and southern coast in one week.",
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Sigiriya / Cultural Triangle', detail: 'Transfer from CMB airport to Sigiriya. Hike Sigiriya Rock Fortress or Pidurangala for sunset.' },
      { day: 'Day 2', title: 'Ancient Ruins & Spice Gardens', detail: 'Explore Polonnaruwa ruins or Dambulla Cave Temple. Visit Matale spice garden en route to Kandy.' },
      { day: 'Day 3', title: 'Kandy Cultural Heart', detail: 'Visit Temple of the Sacred Tooth Relic, stroll Kandy Lake, and watch traditional Kandyan dance.' },
      { day: 'Day 4', title: 'Scenic Mountain Train to Nuwara Eliya', detail: 'Board the mountain train through tea estates. Tour Little England, a tea factory, and Gregory Lake.' },
      { day: 'Day 5', title: 'Ella & Southern Transit', detail: "Hike Little Adam's Peak and Nine Arches Bridge in Ella. Head south to Mirissa/Galle." },
      { day: 'Day 6', title: 'Galle Fort & Beaches', detail: 'Walk the UNESCO Galle Fort ramparts. Relax on Unawatuna or Mirissa beach.' },
      { day: 'Day 7', title: 'Colombo & Departure', detail: 'City tour and shopping in Colombo before airport transfer.' }
    ]
  },
  {
    id: '2-week-comprehensive',
    category: 'Full Island Tour',
    title: 'Comprehensive 2-Week Journey',
    subtitle: '14 Days Complete Island Experience',
    duration: '14 Days / 13 Nights',
    price: '$1,650',
    highlights: ['Anuradhapura Stupas', 'Leopard Safari', 'Pekoe Trail Trek', 'Whale Watching'],
    images: [
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'An extended, relaxed-pace exploration merging ancient kingdoms, wildlife safaris, highland tea trails, and tropical coastal retreats.',
    itinerary: [
      { day: 'Days 1–3', title: 'The Cultural Triangle', detail: 'Anuradhapura stupas, Sigiriya Rock, Dambulla Caves, and Minneriya elephant safari.' },
      { day: 'Days 4–5', title: 'Kandy & Central Highlands', detail: 'Temple of the Tooth, Peradeniya Gardens, and Knuckles Mountain Range trekking.' },
      { day: 'Days 6–8', title: 'Tea Country (Nuwara Eliya & Ella)', detail: 'Mountain train trip, Horton Plains (World\'s End), and Nine Arches Bridge.' },
      { day: 'Days 9–10', title: 'Yala / Udawalawe Wildlife Safaris', detail: 'Morning and evening jeep safaris for leopards, Asian elephants, and sloth bears.' },
      { day: 'Days 11–13', title: 'Southern Coast', detail: 'Beach stays in Mirissa & Tangalle, whale watching, surfing at Weligama, and Galle Fort.' },
      { day: 'Day 14', title: 'Colombo City Tour & Departure', detail: 'Pettah Market, Gangaramaya Temple, and airport transfer.' }
    ]
  },
  {
    id: '5-day-north-west',
    category: 'Off the Beaten Track',
    title: '5 Days North-West & Jaffna Trail',
    subtitle: 'Heritage, Ecosystems & Northern Culture',
    duration: '5 Days / 4 Nights',
    price: '$680',
    highlights: ['Jaffna Fort', 'Mannar Baobab Trees', 'Wilpattu Camping', 'Kalpitiya Lagoon'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Discover Sri Lanka’s untamed north-western coast, historic Portuguese and Dutch fortresses, remote sanctuaries, and distinct northern cuisine.',
    itinerary: [
      { day: 'Days 1–2', title: 'Jaffna Peninsula Discovery', detail: 'Explore Jaffna Fort, Nallur Kovil, and Kandarodai. Sample authentic Jaffna Crab Curry.' },
      { day: 'Day 3', title: 'Mannar Island & Wilpattu Safari', detail: 'Visit ancient Baobab trees and Mannar Fort. Overnight camping safari in Wilpattu.' },
      { day: 'Days 4–5', title: 'Kalpitiya Waters & Departure', detail: 'Dolphin watching in outer bay, kitesurfing on Kalpitiya lagoon, and return to Colombo.' }
    ]
  },
  {
    id: 'sailing-southern-coast',
    category: 'Luxury Cruise',
    title: 'Sailing Tour of the Southern Coast',
    subtitle: 'Live-Aboard Ocean Catamaran Cruise',
    duration: 'Flexible (1–7 Days)',
    price: '$420 / day',
    highlights: ['Private Catamaran', 'Blue Whale Watching', 'Seafood Barbecues', 'Snorkeling & SUP'],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience the Indian Ocean in style. Sail alongside blue whales, anchor in hidden southern coves, and enjoy gourmet dining on deck.',
    itinerary: [
      { day: 'Feature 1', title: 'Deep Sea Blue Whale Watching', detail: 'Wake up on the ocean to spot blue whales off Mirissa without early shore transfers.' },
      { day: 'Feature 2', title: 'Onboard Dining & Beach BBQ', detail: 'Sunset deck dinners under the stars and fresh seafood beach barbecues in quiet bays.' },
      { day: 'Feature 3', title: 'Water Sports & Coves', detail: 'Snorkeling, paddleboarding (SUP), and swimming in secluded coastal lagoons along Tangalle.' }
    ]
  }
];

// Reusable Image Carousel for Item Cards
const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl group bg-slate-900">
      <img
        src={images[currentIndex]}
        alt={`${title} view ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous photo"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next photo"
          >
            &#10095;
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Main Page Component
const TourPackages = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  // Auto-advance Hero Slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleItinerary = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* 1. HERO SECTION WITH AUTOMATED SLIDESHOW */}
      <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden flex items-center justify-center bg-slate-950">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === heroIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transform transition-transform duration-[6000ms]`}
          >
            <img
              src={img}
              alt="Sri Lanka Travel Highlights"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Hero Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            🌴 Discover Paradise
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Explore Sri Lanka Tour Packages
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
            From ancient UNESCO fortresses and tea-draped mountain peaks to wild elephant safaris and pristine Indian Ocean coasts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#package-cards"
              className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-lg shadow-emerald-900/30"
            >
              View All Packages
            </a>
            <a
              href="#overview-guide"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-full backdrop-blur-md transition-all duration-200 border border-white/20"
            >
              Read Travel Guide
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/15 text-left text-white/90 text-xs sm:text-sm">
            <div>
              <div className="font-bold text-base text-emerald-400">8 UNESCO</div>
              <div className="text-slate-300">World Heritage Sites</div>
            </div>
            <div>
              <div className="font-bold text-base text-emerald-400">26 National</div>
              <div className="text-slate-300">Parks & Reserves</div>
            </div>
            <div>
              <div className="font-bold text-base text-emerald-400">1,340 km</div>
              <div className="text-slate-300">Tropical Coastline</div>
            </div>
            <div>
              <div className="font-bold text-base text-emerald-400">Year-Round</div>
              <div className="text-slate-300">Sunshine & Warmth</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ITEM CARDS GRID SECTION */}
      <section id="package-cards" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Curated Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Select Your Tour Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Click on any package card to view the complete day-by-day itinerary breakdown.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {tourPackagesData.map((pkg) => {
            const isExpanded = expandedId === pkg.id;

            return (
              <article
                key={pkg.id}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Carousel */}
                <ImageCarousel images={pkg.images} title={pkg.title} />

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-md border border-emerald-100">
                        {pkg.category}
                      </span>
                      <span className="text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-md">
                        ⏱️ {pkg.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {pkg.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pkg.overview}
                    </p>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pkg.highlights.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-medium"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Day-by-Day Section */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <button
                      onClick={() => toggleItinerary(pkg.id)}
                      className="w-full flex items-center justify-between text-left text-sm font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 p-3 rounded-xl transition-colors duration-150"
                    >
                      <span className="flex items-center gap-2">
                        <span>📍</span> View Day-by-Day Itinerary ({pkg.itinerary.length} Steps)
                      </span>
                      <span className="text-lg leading-none">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="space-y-2.5 pt-2 animate-fadeIn">
                        {pkg.itinerary.map((step, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-xs"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded text-[10px] uppercase">
                                {step.day}
                              </span>
                              <span className="font-bold text-slate-800">{step.title}</span>
                            </div>
                            <p className="text-slate-600 text-[11px] leading-relaxed pl-1">
                              {step.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer Action */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-bold block">Starting From</span>
                        <span className="text-xl font-extrabold text-emerald-600">{pkg.price}</span>
                      </div>
                      <button className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl transition-colors duration-200">
                        Book This Package
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. OVERALL SRI LANKA TRAVEL GUIDE DESCRIPTION */}
      <section id="overview-guide" className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="border-b border-slate-800 pb-8 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Destination Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Travel Sri Lanka?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              A comprehensive introduction to navigating Sri Lanka's geography, monsoon seasons, cultural etiquette, and signature experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">01.</span> Geographic Diversity in Small Footprint
              </h3>
              <p>
                Sri Lanka compresses unmatched geographic variety into a compact island. Within a single 5-hour drive, travelers can transition from warm, coconut-fringed coastal beaches to misty highland tea plantations positioned at over 1,800 meters elevation.
              </p>
              <p>
                The central core features steep granite mountains, cascading waterfalls, and damp cloud forests, while the surrounding plains host dense dry-zone forests, ancient artificial reservoirs (wewas), and wildlife sanctuaries.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">02.</span> Year-Round Sunshine & Monsoons
              </h3>
              <p>
                Because Sri Lanka experiences two distinct monsoon seasons affecting opposite sides of the island, it is a true year-round destination:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><strong className="text-slate-200">South & West Coast (Galle, Bentota, Colombo):</strong> Best from November to April.</li>
                <li><strong className="text-slate-200">East Coast & North (Trincomalee, Arugam Bay, Jaffna):</strong> Best from May to September.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">03.</span> Ancient Heritage & Cultural Triangle
              </h3>
              <p>
                Sri Lanka holds eight UNESCO World Heritage Sites. The Cultural Triangle in the north-central plains forms the heart of ancient Sinhalese civilization.
              </p>
              <p>
                Iconic landmarks include the 5th-century rock citadel of Sigiriya, the sprawling ruin complexes of Anuradhapura and Polonnaruwa, the subterranean Dambulla Cave Temples, and the sacred city of Kandy.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">04.</span> Wildlife & Safari Experience
              </h3>
              <p>
                Sri Lanka is widely considered one of Asia's premier wildlife destinations outside of Africa. Yala National Park hosts one of the highest leopard densities in the world, while Udawalawe and Minneriya are famed for large Asian elephant gatherings.
              </p>
              <p>
                Off the southern shore at Mirissa, the deep continental shelf brings blue whales, sperm whales, and dolphin pods remarkably close to land.
              </p>
            </div>

          </div>

          {/* Travel Tips Callout Box */}
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 sm:p-8 space-y-4">
            <h4 className="text-base font-bold text-emerald-400 flex items-center gap-2">
              💡 Essential Traveler Tips for Sri Lanka
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div>
                <strong className="text-white block mb-1">Cultural Etiquette</strong>
                When visiting temples, cover shoulders and knees, remove hats and shoes, and never turn your back directly to Buddha statues for photographs.
              </div>
              <div>
                <strong className="text-white block mb-1">Transit & Trains</strong>
                Reserve seats on the Kandy-to-Ella mountain train at least 30 days in advance, as tickets sell out rapidly during peak seasons.
              </div>
              <div>
                <strong className="text-white block mb-1">Currency & Payments</strong>
                Carry Sri Lankan Rupees (LKR) in smaller denominations for local tuk-tuks, fruit stalls, and regional entry tickets.
              </div>
            </div>
          </div>

          <div className="text-center pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Love Sri Lanka Experiences. All tour packages are fully customizable.
          </div>

        </div>
      </section>

    </div>
  );
};

export default TourPackages;