import React from 'react';

const activitiesData = [
  {
    id: 1,
    title: "Climb Sigiriya Lion Rock",
    location: "Sigiriya, Central Province",
    description: "Ascend the 200-meter-high ancient rock fortress built by King Kashyapa in the 5th century. Discover famous mirror wall frescoes and ancient water gardens at the summit.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1000&auto=format&fit=crop",
    category: "Adventure & Heritage",
    rating: 4.9
  },
  {
    id: 2,
    title: "Safari at Yala National Park",
    location: "Yala, Southern Province",
    description: "Embark on an exciting 4x4 jeep safari through dense scrubland to spot Sri Lankan leopards, sloth bears, wild elephants, and vibrant endemic bird species.",
    image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1000&auto=format&fit=crop",
    category: "Wildlife & Nature",
    rating: 4.8
  },
  {
    id: 3,
    title: "Nine Arch Bridge & Ella Train Ride",
    location: "Ella, Uva Province",
    description: "Experience one of the world's most scenic train journeys winding through emerald tea plantations, crossing the iconic colonial-era Nine Arch Bridge in Ella.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop",
    category: "Sightseeing & Transit",
    rating: 4.9
  },
  {
    id: 4,
    title: "Surfing at Arugam Bay",
    location: "Arugam Bay, Eastern Province",
    description: "Catch world-class point break waves at Main Point or enjoy gentle beach breaks for beginners along the relaxed east coast surfing haven.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
    category: "Water Sports",
    rating: 4.7
  },
  {
    id: 5,
    title: "Hike Little Adam's Peak",
    location: "Ella, Uva Province",
    description: "A gentle yet rewarding trek winding through lush tea gardens to a spectacular mountain peak offering panoramic views of Ella Gap and valley below.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    category: "Trekking & Hiking",
    rating: 4.8
  },
  {
    id: 6,
    title: "Explore Historic Galle Fort",
    location: "Galle, Southern Province",
    description: "Walk along the 17th-century Dutch ramparts, explore cobblestone alleys filled with chic boutiques, colonial villas, cozy cafes, and sunset views over the ocean.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
    category: "Culture & History",
    rating: 4.9
  },
  {
    id: 7,
    title: "Trek Sinharaja Rain Forest",
    location: "Deniyaya / Kalawana",
    description: "Guided jungle trekking through a UNESCO World Heritage tropical rainforest, home to rare endemic birds, reptiles, amphibians, and dense canopy trails.",
    image: "https://images.unsplash.com/photo-1511497584788-876761c11969?q=80&w=1000&auto=format&fit=crop",
    category: "Eco-Adventure",
    rating: 4.8
  },
  {
    id: 8,
    title: "Night Pilgrimage up Adam's Peak",
    location: "Nallathanniya, Central Highlands",
    description: "Climb 5,500 stone steps under illuminated mountain paths to reach the sacred summit footprint before catching a breathtaking sunrise above the cloud layer.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    category: "Pilgrimage & Trekking",
    rating: 4.9
  },
  {
    id: 9,
    title: "Diyaluma Falls Natural Pool Dip",
    location: "Koslanda, Badulla District",
    description: "Hike to the top of Sri Lanka's second-highest waterfall to swim in cascading natural infinity pools perched edge-of-the-cliff above the surrounding valleys.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1000&auto=format&fit=crop",
    category: "Nature & Swimming",
    rating: 4.7
  },
  {
    id: 10,
    title: "Polonnaruwa Ancient City Bike Tour",
    location: "Polonnaruwa, North Central Province",
    description: "Rent a bicycle to explore sprawling ruins of 12th-century palaces, massive stupas, and the majestic rock-carved Buddha statues at Gal Vihara.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    category: "Heritage & Cycling",
    rating: 4.8
  },
  {
    id: 11,
    title: "Dambulla Cave Temple Exploration",
    location: "Dambulla, Matale District",
    description: "Step inside five cave sanctuaries cut into a massive granite cliff, housing over 150 serene Buddha statues and intricate ancient wall murals.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
    category: "Culture & Art",
    rating: 4.8
  },
  {
    id: 12,
    title: "Hot Air Ballooning in Sigiriya",
    location: "Dambulla / Sigiriya",
    description: "Soar above central Sri Lanka at sunrise for uninterrupted aerial views of lush forests, ancient reservoirs, and the striking silhouette of Sigiriya Rock.",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop",
    category: "Aerial & Leisure",
    rating: 4.9
  },
  {
    id: 13,
    title: "Snorkeling at Pigeon Island",
    location: "Nilaveli, Trincomalee",
    description: "Take a boat out to a marine national park to swim alongside blacktip reef sharks, hawksbill sea turtles, and vibrant coral reef ecosystems.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
    category: "Marine & Snorkeling",
    rating: 4.8
  }
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-5 py-10 font-sans">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-3 tracking-tight">
          Top 13 Outdoor Activities & Destinations
        </h1>
        <p className="text-base md:text-lg text-slate-400">
          Explore curated adventures, heritage sites, and wildlife excursions across Sri Lanka.
        </p>
      </header>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {activitiesData.map((activity) => (
          <div
            key={activity.id}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col hover:-translate-y-1 transition-transform duration-200 border border-slate-700/50"
          >
            {/* Card Image Wrapper */}
            <div className="relative h-52 w-full overflow-hidden">
              <span className="absolute top-3 left-3 bg-sky-400 text-slate-950 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm z-10 shadow-md">
                {activity.id}
              </span>
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-sky-400 text-xs font-semibold px-3 py-1 rounded-full border border-sky-400/20">
                {activity.category}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span className="font-medium truncate max-w-[70%]">
                  📍 {activity.location}
                </span>
                <span className="font-semibold text-amber-400 flex items-center gap-1">
                  ⭐ {activity.rating}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-slate-100 mb-2 line-clamp-1">
                {activity.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-grow line-clamp-3">
                {activity.description}
              </p>

              <button className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold rounded-lg shadow transition-colors duration-150">
                Explore Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;