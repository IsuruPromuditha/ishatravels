import React, { useState } from 'react';

// --- SRI LANKA DESTINATIONS DATASET ---
const DESTINATIONS_DATA = [
  {
    id: 'sigiriya-dambulla',
    title: 'Sigiriya & Dambulla',
    region: 'Cultural Triangle',
    category: 'Cultural',
    rating: 4.9,
    reviewsCount: 320,
    shortDesc: 'Ancient rock fortress citadel, royal gardens, and thousand-year-old cave temple mural complexes.',
    bestTimeToVisit: 'Dec - Apr',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    highlights: ['Lion Rock Citadel', 'Dambulla Cave Temple', 'Minneriya Elephant Gathering'],
    topAttractions: ['Sigiriya Rock Fortress', 'Golden Temple of Dambulla', 'Pidurangala Rock'],
    idealStay: '2 - 3 Days'
  },
  {
    id: 'ella-gap',
    title: 'Ella & Central Highlands',
    region: 'Badulla District',
    category: 'Hill Country',
    rating: 4.8,
    reviewsCount: 450,
    shortDesc: 'Misty mountain villages surrounded by endless tea plantations, waterfalls, and scenic railway bridges.',
    bestTimeToVisit: 'Jan - May',
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80',
    highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Demodara Loop Train'],
    topAttractions: ['Ravana Falls', 'Ella Rock Trail', 'Tea Factory Tours'],
    idealStay: '3 - 4 Days'
  },
  {
    id: 'mirissa-galle',
    title: 'Galle & Mirissa Coast',
    region: 'Southern Province',
    category: 'Coastal',
    rating: 4.9,
    reviewsCount: 510,
    shortDesc: 'Colonial Dutch forts, coconut palm groves, blue whale safari cruises, and golden surf beaches.',
    bestTimeToVisit: 'Nov - Apr',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Galle Fort Ramparts', 'Whale Watching Safaris', 'Coconut Tree Hill'],
    topAttractions: ['Galle Lighthouse', 'Mirissa Main Beach', 'Unawatuna Coral Reef'],
    idealStay: '3 - 5 Days'
  },
  {
    id: 'yala-national-park',
    title: 'Yala National Park',
    region: 'South Eastern Province',
    category: 'Wildlife',
    rating: 4.7,
    reviewsCount: 290,
    shortDesc: 'World-renowned wildlife sanctuary boasting one of the highest leopard densities on the planet.',
    bestTimeToVisit: 'Feb - Jul',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
    highlights: ['Sri Lankan Leopard Tracking', 'Wild Elephant Herd Safaris', 'Sloth Bear Sightings'],
    topAttractions: ['Block 1 Safari Zone', 'Sithulpawwa Rock Temple', 'Kirinda Beach'],
    idealStay: '1 - 2 Days'
  },
  {
    id: 'kandy-sacred-city',
    title: 'Kandy Sacred City',
    region: "Central Highlands",
    category: 'Cultural',
    rating: 4.8,
    reviewsCount: 380,
    shortDesc: 'The last royal capital of Sri Lanka, home to sacred Buddhist relics, lush botanical gardens, and lake vistas.',
    bestTimeToVisit: 'Dec - Apr',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temple of the Sacred Tooth Relic', 'Royal Botanical Gardens', 'Kandy Lake Walk'],
    topAttractions: ['Esala Perahera Procession', 'Udawatta Kele Sanctuary', 'Bahirawakanda Temple'],
    idealStay: '2 Days'
  },
  {
    id: 'trincomalee-pigeon-island',
    title: 'Trincomalee & Nilaveli',
    region: 'Eastern Province',
    category: 'Coastal',
    rating: 4.8,
    reviewsCount: 210,
    shortDesc: 'Pristine white sand beaches, coral marine national parks, and historic cliffside Hindu temples.',
    bestTimeToVisit: 'May - Sep',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    highlights: ['Pigeon Island Snorkeling', 'Koneswaram Kovil Cliff Temple', 'Swami Rock Whale Watching'],
    topAttractions: ['Nilaveli Beach', 'Marble Beach', 'Kanniya Hot Springs'],
    idealStay: '3 - 4 Days'
  }
];

const CATEGORIES = ['All', 'Cultural', 'Coastal', 'Wildlife', 'Hill Country'];

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Filter Logic
  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* --- HERO HEADER --- */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:py-24">
  <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#34d399_1px,transparent_1px)] [background-size:18px_18px]" />
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl text-center">
    <span className="mb-4 inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
      Wonder of Asia
    </span>

    <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
      Sri Lanka Destinations
    </h1>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      Explore ancient heritage kingdoms, wild national reserves, mist-covered
      mountain valleys, and pristine tropical beaches.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-300">
      <div><span className="font-bold text-emerald-400">8+</span> UNESCO Sites</div>
      <div><span className="font-bold text-emerald-400">1,340 KM</span> Coastline</div>
      <div><span className="font-bold text-emerald-400">26</span> National Parks</div>
    </div>
  </div>
</section>

      {/* --- SEARCH & CATEGORY FILTER BAR --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search location, region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
              />
              <span className="absolute left-3.5 top-3 text-slate-400">🔍</span>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeCategory === category
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- DESTINATIONS GRID --- */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-lg font-semibold text-slate-600">No destinations match your search.</p>
            <p className="text-sm text-slate-400 mt-1">Try resetting filters or typing a different keyword.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {dest.category}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                      ⭐ {dest.rating}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      📍 {dest.region}
                    </span>
                    <h2 className="text-xl font-black text-slate-900 mt-1">{dest.title}</h2>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {dest.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dest.highlights.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Info & Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Best Season</span>
                    <span className="text-xs font-bold text-slate-800">🗓️ {dest.bestTimeToVisit}</span>
                  </div>
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- DESTINATION DETAIL MODAL --- */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Image Banner */}
            <div className="relative h-64 w-full">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-emerald-900/90 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                {selectedDestination.category} • {selectedDestination.region}
              </div>
            </div>

            {/* Modal Content Details */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-900">{selectedDestination.title}</h2>
                  <span className="text-sm font-bold text-slate-800">⭐ {selectedDestination.rating} ({selectedDestination.reviewsCount} reviews)</span>
                </div>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {selectedDestination.shortDesc}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-bold block">Best Time to Visit</span>
                  <span className="font-bold text-slate-800">{selectedDestination.bestTimeToVisit}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Recommended Duration</span>
                  <span className="font-bold text-slate-800">{selectedDestination.idealStay}</span>
                </div>
              </div>

              {/* Top Attractions List */}
              <div>
                <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Top Attractions</h3>
                <ul className="mt-2 space-y-2">
                  {selectedDestination.topAttractions.map((attraction, idx) => (
                    <li key={idx} className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                      <span className="text-emerald-600">📍</span> {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Action Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedDestination(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Planning tour for ${selectedDestination.title}`);
                  setSelectedDestination(null);
                }}
                className="px-5 py-2 text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition"
              >
                Plan Trip Here
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DestinationsPage;