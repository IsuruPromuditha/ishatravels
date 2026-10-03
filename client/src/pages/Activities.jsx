import React, { useState, useEffect } from 'react';

import Activity from '../assets/images/Activities/Activity.jpg';
import Activity1 from '../assets/images/Activities/Activity1.jpg';
import Activity2 from '../assets/images/Activities/Activity2.jpg';

// Hero Slider Data (Featured highlights - UNTOUCHED)
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

// Reusable Image Carousel Component for Individual Activity Cards
const CardImageCarousel = ({ images, title }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-56 w-full overflow-hidden group">
      {images.map((imgUrl, idx) => (
        <img
          key={idx}
          src={imgUrl}
          alt={`${title} - view ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            idx === activeImgIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Carousel Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-900 text-white p-1.5 rounded-full backdrop-blur-xs border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-xs"
            aria-label="Previous Image"
          >
            ❮
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-900 text-white p-1.5 rounded-full backdrop-blur-xs border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-xs"
            aria-label="Next Image"
          >
            ❯
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(dotIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImgIndex === dotIdx ? "w-4 bg-sky-500" : "w-1.5 bg-white/60"
                }`}
                aria-label={`Go to image ${dotIdx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Structured Activities Data grouped into 5 requested categories
const activityCategories = [
  {
    categoryName: "1. Water Sports & Ocean Adventures",
    description: "High-energy water excursions, reef diving, and marine encounters along Sri Lanka's coastline.",
    items: [
      {
        id: "ws-1",
        title: "Surfing Coastal Point Breaks",
        location: "Weligama, Arugam Bay & Hikkaduwa",
        rating: 4.9,
        description: "Catch world-class point breaks and reef breaks tailored for all skill levels—from smooth beginner beach breaks in Weligama to famous eastern point breaks in Arugam Bay.",
        images: [
          "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1455729552865-3658a5d3a092?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ws-2",
        title: "Scuba Diving & Coral Snorkeling",
        location: "Pigeon Island, Hikkaduwa & Trincomalee",
        rating: 4.8,
        description: "Explore historic underwater shipwrecks, rich coral gardens, and swim alongside gentle blacktip reef sharks and sea turtles in crystalline coastal waters.",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ws-3",
        title: "Whale & Dolphin Watching Safaris",
        location: "Mirissa, Kalpitiya & Trincomalee",
        rating: 4.9,
        description: "Charter ocean boat tours to spot massive Blue Whales, Sperm Whales, and acrobatic pods of spinner dolphins along deep offshore trenches.",
        images: [
          "https://images.unsplash.com/photo-1568430462629-a861758d7839?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ws-4",
        title: "Kitesurfing Kalpitiya Lagoon",
        location: "Kalpitiya Peninsula",
        rating: 4.7,
        description: "Harness stable coastal trade winds across expansive flat-water lagoons and open ocean waves, perfect for freestyle kiters and beginners alike.",
        images: [
          "https://images.unsplash.com/photo-1516834474-48c0abc2a902?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ws-5",
        title: "Kitulgala White Water Rafting",
        location: "Kitulgala, Kelani River",
        rating: 4.8,
        description: "Navigate thrill-packed Class II to IV river rapids carving through dense rainforest canyons along the picturesque Kelani River.",
        images: [
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    categoryName: "2. Wildlife & Nature Photography",
    description: "Immersive wilderness expeditions tracking apex predators, megafauna, and rare endemic species.",
    items: [
      {
        id: "wn-1",
        title: "4x4 Wilderness Jeep Safaris",
        location: "Yala, Wilpattu & Udawalawe",
        rating: 4.9,
        description: "Track elusive Sri Lankan leopards, sloth bears, wild Asian elephants, and marsh crocodiles across dry-zone scrublands and natural lakes.",
        images: [
          "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "wn-2",
        title: "The Great Elephant Gathering",
        location: "Minneriya & Kaudulla National Parks",
        rating: 4.8,
        description: "Witness the world's largest recurring gathering of Asian elephants, where hundreds of wild herds congregate around ancient reservoir shores during dry season.",
        images: [
          "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "wn-3",
        title: "Sinharaja Rainforest Bird Watching",
        location: "Sinharaja Forest Reserve & Bundala",
        rating: 4.8,
        description: "Embark on guided canopy treks through UNESCO virgin rainforests to photograph rare endemic birds, Malabar Pied Hornbills, and colorful mixed-species flocks.",
        images: [
          "https://images.unsplash.com/photo-1511497584788-876761c11969?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    categoryName: "3. Hiking, Trekking & Aerial Sports",
    description: "Panoramic mountain trails, overnight summits, scenic railways, and high-altitude flight experiences.",
    items: [
      {
        id: "ht-1",
        title: "High-Altitude Tea Country Trails",
        location: "Pekoe Trail, Ella & Horton Plains",
        rating: 4.9,
        description: "Hike world-class ridge lines including Ella Rock and World's End precipices, winding through cloud forests and terraced emerald tea plantations.",
        images: [
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ht-2",
        title: "Night Pilgrimage up Adam's Peak",
        location: "Sri Pada / Nallathanniya",
        rating: 4.9,
        description: "Ascend 5,500 illuminated stone steps under starry skies to reach the sacred summit footprint, catching a breathtaking sunrise over a sea of clouds.",
        images: [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ht-3",
        title: "Kandy to Ella Scenic Train Ride",
        location: "Central Highlands & Nine Arch Bridge",
        rating: 4.9,
        description: "Ride one of the world's most breathtaking scenic railways, crossing colonial stone viaducts and misty mountain passes with open-window views.",
        images: [
          "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "ht-4",
        title: "Hot Air Ballooning Over Sigiriya",
        location: "Sigiriya & Dambulla",
        rating: 4.9,
        description: "Float gracefully above central Sri Lanka at sunrise for uninterrupted aerial vistas of ancient rock fortresses, forest canopies, and historic reservoirs.",
        images: [
          "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    categoryName: "4. Music, Nightlife & Culture",
    description: "Vibrant beachside soundscapes, ancient rhythmic arts, and energetic nocturnal street markets.",
    items: [
      {
        id: "mc-1",
        title: "Coastal Music Events & Beach Parties",
        location: "Mirissa, Hiriketiya & Arugam Bay",
        rating: 4.8,
        description: "Experience vibrant sundowner DJ sessions, underground progressive & organic house dance events, and acoustic beach gatherings along golden coastlines.",
        images: [
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "mc-2",
        title: "Kandyan Dance & Cultural Rituals",
        location: "Kandy, Galle Fort & Colombo",
        rating: 4.9,
        description: "Witness captivating live drumming rituals, fire-walking performances, and elaborate traditional Kandyan dance processions echoing centuries of heritage.",
        images: [
          "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "mc-3",
        title: "Night Markets & Street Food Walks",
        location: "Colombo Galle Face Green & Kandy",
        rating: 4.7,
        description: "Savor sizzled kottu roti, crispy egg hoppers, and freshly grilled ocean seafood prepared live at bustling nocturnal street stalls and night markets.",
        images: [
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    categoryName: "5. Wellness, Culinary & Local Experiences",
    description: "Rejuvenating traditional healing, authentic culinary masterclasses, and single-origin tea heritage.",
    items: [
      {
        id: "wc-1",
        title: "Ayurvedic Spa & Wellness Retreats",
        location: "Bentota, Kandy & Tangalle",
        rating: 4.8,
        description: "Restore mind and body with ancient Ayurvedic remedies, warm Abhyanga herbal oil massages, steam baths, and sunset yoga sessions set in serene natural surroundings.",
        images: [
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "wc-2",
        title: "Sri Lankan Cooking Masterclasses",
        location: "Ella, Galle & Sigiriya",
        rating: 4.9,
        description: "Join local chefs in farm-to-table culinary lessons, hand-grinding aromatic spice blends and crafting authentic clay-pot coconut curries.",
        images: [
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: "wc-3",
        title: "Tea Tasting & Factory Heritage Tours",
        location: "Nuwara Eliya & Hatton",
        rating: 4.8,
        description: "Pluck fresh tea leaves alongside local estate artisans and tour historic high-country factories to sample world-renowned single-origin Ceylon tea grades.",
        images: [
          "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  }
];

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      
      {/* Large Hero Slider Section (3000ms Timer - UNTOUCHED) */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-950">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Dark Gradient Overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/30" />

            {/* Slide Content Overlay */}
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

        {/* Navigation Arrows */}
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

        {/* Slide Indicator Dots */}
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

      {/* Main White Content Area After Hero Slider */}
      <main className="bg-white text-slate-900 py-16 pb-24">
        
        {/* Page Title & Intro */}
        <header className="text-center max-w-4xl mx-auto mb-14 px-5">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Curated Outdoor Activities & Experiences
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Explore Sri Lanka through 5 curated adventure pillars—featuring wave surfing, wildlife tracking, mountain ascents, cultural beats, and holistic culinary traditions.
          </p>
        </header>

        {/* Categorized Activities Sections */}
        <div className="max-w-7xl mx-auto px-5 space-y-16">
          {activityCategories.map((section, sectionIdx) => (
            <section key={sectionIdx} className="scroll-mt-6">
              
              {/* Category Section Header */}
              <div className="border-b border-slate-200 pb-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-sky-700 tracking-wide mb-1">
                  {section.categoryName}
                </h3>
                <p className="text-slate-500 text-sm md:text-base">
                  {section.description}
                </p>
              </div>

              {/* Grid of Activity Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {section.items.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl flex flex-col hover:-translate-y-1.5 transition-all duration-300 border border-slate-200"
                  >
                    {/* Card Image Carousel */}
                    <CardImageCarousel images={activity.images} title={activity.title} />

                    {/* Card Body */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                        <span className="font-medium truncate max-w-[70%] text-slate-600">
                          📍 {activity.location}
                        </span>
                        <span className="font-semibold text-amber-600 flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          ⭐ {activity.rating}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
                        {activity.title}
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed flex-grow line-clamp-3">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Activities;