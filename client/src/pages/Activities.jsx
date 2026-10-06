import React, { useState, useEffect, useMemo, useCallback } from 'react';

import Activity from '../assets/images/Activities/Activity.jpg';
import Activity1 from '../assets/images/Activities/Activity1.jpg';
import Activity2 from '../assets/images/Activities/Activity2.jpg';
import Snokling from '../assets/images/Activities/snokling.jpg';
import Whalewatching from '../assets/images/Activities/whalewatching.jpg';
import Kitesurfing from '../assets/images/Activities/kitesurfing.jpg';
import Waterrafting from '../assets/images/Activities/waterrafting.jpg';
import Yala4by4 from '../assets/images/Activities/Yala4by4.jpg';
import ElephantGathering from '../assets/images/Activities/ElephantGathering.jpg';
import BirdwatchingTour from '../assets/images/Activities/BirdwatchingTour.jpg';
import Ellhiking from '../assets/images/Activities/ellhiking.jpg';
import Adamspeak from '../assets/images/Activities/adamspeak.jpg';
import Kandytoella from '../assets/images/Activities/kandytoella.jpg';
import sigiriDabullaballon from '../assets/images/Activities/sigiriDabullaballon.jpg';
import ParitiesBeach from '../assets/images/Activities/paritiesBeach.jpg';
import TraditionalKandy from '../assets/images/Activities/TraditionalKandy.jpg';
import streetFood from '../assets/images/Activities/streetFood.jpg';
import favfood from '../assets/images/Activities/favfood.jpg';
import teafactory from '../assets/images/Activities/teafactory.jpg';
import ayurweda from '../assets/images/Activities/ayurweda.jpg';



// Hero Slider Data (UNTOUCHED)
const heroSlides = [
  {
    id: 1,
    title: "Experience Wild Sri Lanka",
    subtitle: "Up-close leopard safaris and vast elephant gatherings in Yala & Minneriya",
    image: Activity,
    tag: "Featured Adventure"
  },
  {
    id: 2,
    title: "Conquer the Ancient Citadel",
    subtitle: "Ascend 200m above the jungle canopy at Sigiriya Lion Rock",
    image: Activity1,
    tag: "UNESCO World Heritage"
  },
  {
    id: 3,
    title: "Journey Through Cloud Forests",
    subtitle: "Take the iconic mountain train ride across Nine Arch Bridge in Ella",
    image: Activity2,
    tag: "Scenic Transport"
  }
];

const img = (id) => `https://images.unsplash.com/${id}?q=80&w=1000&auto=format&fit=crop`;

// Activities grouped into the 5 categories (given order)
const categories = [
  {
    key: "water",
    name: "Water Sports & Ocean Adventures",
    emoji: "🌊",
    items: [
      {
        title: "Surfing",
        location: "Weligama, Arugam Bay & Hikkaduwa",
        description: "World-class point breaks and reef breaks for all skill levels (beginner waves in Weligama; reef/point breaks in Arugam Bay and Hikkaduwa).",
        image: Activity1
      },
      {
        title: "Scuba Diving & Snorkeling",
        location: "Pigeon Island, Hikkaduwa & Trincomalee",
        description: "Shipwreck dives, coral reef exploration, and swimming with blacktip reef sharks or sea turtles (Pigeon Island, Hikkaduwa, Trincomalee).",
        image: Snokling
      },
      {
        title: "Whale & Dolphin Watching",
        location: "Mirissa, Kalpitiya & Trincomalee",
        description: "Spotting Blue Whales, Sperm Whales, and spinner dolphins on ocean boat charters (Mirissa, Kalpitiya, Trincomalee).",
        image: Whalewatching
      },
      {
        title: "Kitesurfing",
        location: "Kalpitiya Peninsula",
        description: "High-wind lagoon and open-ocean kitesurfing for beginners and pros (Kalpitiya Peninsula).",
        image: Kitesurfing
      },
      {
        title: "White Water Rafting",
        location: "Kitulgala",
        description: "Navigating Class II–IV rapids through jungle rivers (Kitulgala).",
        image: Waterrafting
      }
    ]
  },
  {
    key: "wildlife",
    name: "Wildlife & Nature Photography",
    emoji: "🐆",
    items: [
      {
        title: "4x4 Jeep Safaris",
        location: "Yala, Wilpattu & Udawalawe",
        description: "Wildlife tracking and telephoto photography targeting leopards, Asian elephants, sloth bears, and crocodiles (Yala, Wilpattu, Udawalawe).",
        image: Yala4by4
      },
      {
        title: "Elephant Gathering Tracking",
        location: "Minneriya & Kaudulla",
        description: "Observing herds of up to 300 wild elephants congregating around reservoir shores (Minneriya & Kaudulla).",
        image: ElephantGathering
      },
      {
        title: "Bird Watching Tours",
        location: "Sinharaja Forest Reserve & Bundala",
        description: "Spotting endemic birds, hornbills, and migratory species in tropical rainforests (Sinharaja Forest Reserve, Bundala).",
        image: BirdwatchingTour
      }
    ]
  },
  {
    key: "hiking",
    name: "Hiking, Trekking & Aerial Sports",
    emoji: "🥾",
    items: [
      {
        title: "High-Altitude Trekking",
        location: "Pekoe Trail, Ella Rock & Horton Plains",
        description: "Ridge walking and cloud-forest hiking through tea country peaks (Pekoe Trail, Ella Rock, Horton Plains / World's End).",
        image: Ellhiking
      },
      {
        title: "Night Pilgrimage Hikes",
        location: "Adam's Peak / Sri Pada",
        description: "Overnight stair climbs to catch sunrise above cloud level (Adam’s Peak / Sri Pada).",
        image: Adamspeak
      },
      {
        title: "Scenic Train Rides",
        location: "Kandy to Ella line",
        description: "Open-window train journeys winding through misty tea plantations and viaduct bridges (Kandy to Ella line).",
        image: Kandytoella
      },
      {
        title: "Hot Air Ballooning",
        location: "Sigiriya / Dambulla",
        description: "Sunrise flights over ancient rock fortresses, lakes, and jungle canopies (Sigiriya / Dambulla).",
        image: sigiriDabullaballon
      }
    ]
  },
  {
    key: "culture",
    name: "Music, Nightlife & Culture",
    emoji: "🥁",
    items: [
      {
        title: "Coastal Music Events & Beach Parties",
        location: "South Coast & East Coast",
        description: "Sun-downer DJ sets, underground progressive/organic house parties, and live acoustic beach sessions (South Coast & East Coast strips).",
        image: ParitiesBeach
      },
      {
        title: "Traditional Drumming & Kandyan Dance",
        location: "Kandy & Colombo",
        description: "Experiencing live Perahera processions, traditional drumming performances, and fire-walking rites (Kandy, Colombo).",
        image: TraditionalKandy
      },
      {
        title: "Street Food & Night Market Walks",
        location: "Night street markets",
        description: "Tasting kottu roti, hoppers, and fresh seafood cooked live at night street markets.",
        image: streetFood
      }
    ]
  },
  {
    key: "wellness",
    name: "Wellness, Culinary & Local Experiences",
    emoji: "🍵",
    items: [
      {
        title: "Ayurvedic Spa & Wellness Retreats",
        location: "Bentota, Kandy & Tangalle",
        description: "Traditional herbal steam baths, oil massages (Abhyanga), and yoga retreats.",
        image: ayurweda
      },
      {
        title: "Sri Lankan Cooking Masterclasses",
        location: "Ella, Galle & Sigiriya",
        description: "Farm-to-table culinary experiences learning to prepare authentic spice blends and clay-pot curries.",
        image: favfood
      },
      {
        title: "Tea Tasting & Factory Tours",
        location: "Nuwara Eliya & Hatton",
        description: "Plucking tea leaves with estate workers and tasting single-origin Ceylon tea grades in hill-country factories.",
        image: teafactory
      }
    ]
  }
];

// Flatten once, keeping category order and giving every card a stable id
const allActivities = categories.flatMap((cat) =>
  cat.items.map((item, i) => ({
    ...item,
    id: `${cat.key}-${i + 1}`,
    categoryKey: cat.key,
    categoryName: cat.name,
    categoryEmoji: cat.emoji
  }))
);

// Reusable activity card
const ActivityCard = ({ activity, isFavourite, onToggleFavourite, onOpen }) => (
  <article className="group bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
    {/* Image */}
    <div className="relative h-56 overflow-hidden bg-slate-200">
      <img
        src={activity.image}
        alt={activity.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Category badge */}
      <span className="absolute top-3 left-3 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
        {activity.categoryEmoji} {activity.categoryName.split(" & ")[0]}
      </span>

      {/* Favourite toggle */}
      <button
        onClick={() => onToggleFavourite(activity.id)}
        aria-pressed={isFavourite}
        aria-label={isFavourite ? `Remove ${activity.title} from favourites` : `Save ${activity.title} to favourites`}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 shadow flex items-center justify-center text-lg hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <span className={isFavourite ? "text-red-500" : "text-black/50"}>
          {isFavourite ? "♥" : "♡"}
        </span>
      </button>

      {/* Location on image */}
      <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium drop-shadow truncate">
        📍 {activity.location}
      </span>
    </div>

    {/* Body */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-black mb-2">{activity.title}</h3>
      <p className="text-sm text-black/80 leading-relaxed mb-5 flex-grow">
        {activity.description}
      </p>
      <button
        onClick={() => onOpen(activity)}
        className="w-full py-2.5 bg-black hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
      >
        Explore Details
      </button>
    </div>
  </article>
);

// Pop-up window with full activity details
const ActivityModal = ({ activity, isFavourite, onToggleFavourite, onClose }) => {
  // Close on Escape + lock background scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const places = activity.location.split(/,|&|\//).map((p) => p.trim()).filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-modal-title"
    >
      <div
        className="relative bg-white text-black w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/95 shadow flex items-center justify-center text-xl text-black hover:bg-black hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 bg-slate-200">
          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-5 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
            {activity.categoryEmoji} {activity.categoryName}
          </span>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8">
          <h3 id="activity-modal-title" className="text-2xl md:text-3xl font-bold mb-4">
            {activity.title}
          </h3>

          <div className="mb-5">
            <p className="text-sm font-semibold mb-2">📍 Where</p>
            <div className="flex flex-wrap gap-2">
              {places.map((place) => (
                <span key={place} className="text-sm border border-black/20 rounded-full px-3 py-1">
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold mb-2">About this experience</p>
            <p className="text-base leading-relaxed text-black/80">{activity.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onToggleFavourite(activity.id)}
              aria-pressed={isFavourite}
              className="flex-1 py-3 rounded-lg border border-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            >
              {isFavourite ? "♥ Saved to favourites" : "♡ Save to favourites"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-lg bg-black text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [favourites, setFavourites] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const closeModal = useCallback(() => setSelectedActivity(null), []);

  // 3000ms Hero Slider Auto-slide timer (UNTOUCHED)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const toggleFavourite = (id) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const visibleActivities = useMemo(
    () => (activeCategory === "all" ? allActivities : allActivities.filter((a) => a.categoryKey === activeCategory)),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-white text-black pb-20 font-sans">

      {/* Large Hero Slider Section (UNTOUCHED) */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-950 mb-12">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/30" />

            <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
              <span className="bg-sky-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {slide.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 max-w-2xl drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-slate-200 max-w-xl drop-shadow mb-6">
                {slide.subtitle}
              </p>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                Discover Experience
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-slate-900 text-white p-3 rounded-full backdrop-blur-sm border border-slate-700 transition-colors"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-900/60 hover:bg-slate-900 text-white p-3 rounded-full backdrop-blur-sm border border-slate-700 transition-colors"
          aria-label="Next Slide"
        >
          ❯
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-sky-400" : "w-2.5 bg-slate-400/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Section Header */}
      <header className="text-center max-w-3xl mx-auto mb-8 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight">
          Outdoor Activities & Experiences
        </h2>
        <p className="text-sm md:text-base text-black/70">
          Explore adventures, wildlife, mountain trails, culture, and local flavours across Sri Lanka.
        </p>
      </header>

      {/* Category filter chips */}
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <div className="overflow-x-auto pb-2">
        <div className="flex flex-nowrap gap-2.5 w-max mx-auto" role="tablist" aria-label="Filter activities by category">
          {[{ key: "all", name: "All Activities", emoji: "✨" }, ...categories].map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/20 hover:border-black"
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            );
          })}
        </div>
        </div>
        <p className="text-center text-sm text-black/60 mt-4">
          Showing {visibleActivities.length} activities
          {favourites.length > 0 && ` · ${favourites.length} saved`}
        </p>
      </div>

      {/* Card grid */}
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {visibleActivities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            isFavourite={favourites.includes(activity.id)}
            onToggleFavourite={toggleFavourite}
            onOpen={setSelectedActivity}
          />
        ))}
      </div>

      {/* Details pop-up */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          isFavourite={favourites.includes(selectedActivity.id)}
          onToggleFavourite={toggleFavourite}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Activities;