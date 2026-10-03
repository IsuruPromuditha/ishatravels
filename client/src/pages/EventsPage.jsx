import React, { useState, useEffect } from 'react';

// Hero Slider Images
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80',
    title: 'Kandy Esala Perahera',
    subtitle: "Asia's Grandest Cultural & Religious Pageant"
  },
  {
    image: 'https://images.unsplash.com/photo-1578564499878-1f6305a2e5eb?auto=format&fit=crop&w=1920&q=80',
    title: 'Vesak Lantern Festival',
    subtitle: 'Illuminating the Island in Celebration of Peace & Light'
  },
  {
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80',
    title: 'Sinhala & Tamil New Year',
    subtitle: 'Harvest, Unity, and Ancient Astrological Customs'
  }
];

// Complete Festivals Dataset
const festivalEventsData = [
  {
    id: 'avurudu',
    eventName: 'Sinhala and Tamil New Year (Aluth Avurudu / Puthandu)',
    category: 'Cultural & National',
    timeOfYear: 'Mid-April (April 13th – 14th)',
    religion: 'Buddhist & Hindu Traditions',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Kiribath (Milk Rice)', 'Kevum (Oil Cakes)', 'Kokis', 'Aasmi', 'Aggala', 'Kalu Dodol', 'Sweet Pongal'],
    shortDescription: 'The largest national harvest festival marking the solar transition from Pisces to Aries with synchronized household rituals and games.',
    fullDescription: 'The Sinhala and Tamil New Year marks the movement of the sun from Meena Rashiya (Pisces) to Mesha Rashiya (Aries). It brings together Sinhala Buddhists and Tamil Hindus in nationwide unity. Celebrations follow exact astrological timings (Nekath) for lighting the hearth, boiling milk until it overflows, exchanging currency (Ganu Denu), and sharing traditional sweet tables. Villages participate in games like Kotta Pora (pillow fighting) and Raban drumming.',
    historyContent: 'The festival dates back centuries to agrarian harvest customs. Villagers expressed gratitude to the Sun God for bountiful crop yields before initiating new planting cycles. Over centuries, astrological concepts brought from South India harmonized with native Sinhalese island traditions, resulting in shared auspicious times observed by households nationwide simultaneously.'
  },
  {
    id: 'kandy-perahera',
    eventName: 'Kandy Esala Perahera (Festival of the Sacred Tooth)',
    category: 'Religious Pageant',
    timeOfYear: 'July / August (Esala Month)',
    religion: 'Buddhism & Devala Heritage',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Helapa', 'Aggala', 'Kiri Toffee', 'Beli Flower Herbal Tea', 'Traditional Kandyan Sweets'],
    shortDescription: 'A world-famous 10-night parade featuring fire-dancers, whip-crackers, Kandyan drummers, and silk-clad elephants honoring the Sacred Tooth Relic.',
    fullDescription: 'Spanning ten consecutive nights, the Kandy Esala Perahera is a grand procession featuring whip-crackers, fire-spinners, flag-bearers, traditional Kandyan drummers, and dozens of elephants dressed in embroidered silk robes. The grandest tusker carries a golden casket replica containing the Sacred Tooth Relic of Lord Buddha through Kandy streets. The festival finishes with the Diya Kepeema (water-cutting ritual) at Getambe.',
    historyContent: 'Originating in the 4th Century CE when Princess Hemamali and Prince Dantha brought the Sacred Tooth Relic to Sri Lanka from India. King Meghavanna commanded that the relic be paraded annually for public homage. In the 18th century, King Kirti Sri Rajasinha integrated the tooth relic procession with traditional pageants dedicated to guardian deities Natha, Vishnu, Skanda, and Pattini.'
  },
  {
    id: 'vesak',
    eventName: 'Vesak Full Moon Poya Festival',
    category: 'Religious & Light Festival',
    timeOfYear: 'May (May Full Moon)',
    religion: 'Theravada Buddhism',
    image: 'https://images.unsplash.com/photo-1578564499878-1f6305a2e5eb?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Dansala Offerings', 'Sago Kanji (Tapioca Porridge)', 'Manioc with Coconut', 'Free Herbal Teas & Meals'],
    shortDescription: 'Commemorating Buddha’s birth, enlightenment, and passing away with giant illuminated light displays (Pandals), paper lanterns, and free food stalls (Dansalas).',
    fullDescription: 'Vesak commemorates the Birth, Enlightenment (Nirvana), and Passing Away (Parinirvana) of Lord Buddha. The island transforms into a landscape of light with hand-crafted bamboo lanterns (Vesak Koodu), oil lamps, and multi-story electric light displays (Torana/Pandals) depicting Jataka tales. Free community food stalls (Dansalas) offer hot meals, ice cream, and drinks to pilgrims.',
    historyContent: 'Vesak has been celebrated in Sri Lanka since ancient times, recorded in chronicles like the Mahavamsa during the reign of King Dutugemunu (2nd Century BCE). Modern public Vesak displays gained nationwide cultural momentum during the late 19th-century Buddhist revival led by Anagarika Dharmapala and Colonel Henry Steel Olcott.'
  },
  {
    id: 'vel-nallur',
    eventName: 'Nallur & Colombo Vel Chariot Festivals',
    category: 'Hindu Chariot Pageant',
    timeOfYear: 'July / August',
    religion: 'Hinduism (Tamil Tradition)',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Medhu Vadai', 'Masala Vadai', 'Laddu', 'Sweet Payasam', 'Modakam', 'Panchamirtham'],
    shortDescription: 'Grand wooden chariot processions honoring Lord Murugan with traditional Nadaswaram music, Kavadi burden dances, and sacred rituals.',
    fullDescription: 'The Vel and Nallur festivals honor Lord Murugan (Skanda), the Hindu deity of wisdom and war. In Colombo, a gilded wooden chariot carrying Murugan’s sacred spear (Vel) is drawn from Pettah to Bambalapitiya. In Jaffna, the Nallur Kandaswamy Kovil annual festival spans 25 days with Kavadi dances, drumming ensembles, and thousands of barefoot devotees.',
    historyContent: 'Traces back to Hindu puranic heritage, celebrating Goddess Parvati presenting the divine spear (Vel) to her son Murugan to overcome demon forces. The Colombo Vel festival was formally established in 1888 under British colonial rule to enable urban and estate workers to join an annual chariot procession without traveling to northern temples.'
  },
  {
    id: 'thai-pongal',
    eventName: 'Thai Pongal Harvest Festival',
    category: 'Agrarian & Cultural',
    timeOfYear: 'Mid-January (January 14th – 15th)',
    religion: 'Hinduism & Tamil Culture',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Sweet Pongal (Rice boiled with jaggery & milk)', 'Vadai', 'Sugarcane', 'Fruit Offerings'],
    shortDescription: 'A Thanksgiving festival dedicated to the Sun God and cattle, centered around boiling fresh rice with jaggery in decorated earthen pots.',
    fullDescription: 'Thai Pongal expresses gratitude to Surya (the Sun God) and farm animals for a bountiful rice harvest. Families gather at sunrise outside their homes to boil fresh harvest rice with cow milk and cane jaggery in clay pots. As the milk boils over, devotees chant "Pongalo Pongal!" to welcome good fortune.',
    historyContent: 'Originating over 2,000 years ago in South India and northern Sri Lanka during the Sangam age, Thai Pongal remains an essential agricultural milestone marking the start of the Tamil month "Thai", symbolizing fresh beginnings and agricultural prosperity.'
  },
  {
    id: 'poson-poya',
    eventName: 'Poson Full Moon Poya',
    category: 'Religious & Historical',
    timeOfYear: 'June (June Full Moon)',
    religion: 'Buddhism',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Poson Dansala Rice', 'Sago Kanji', 'Herbal Beverages', 'Fruit Juices'],
    shortDescription: 'Marks the official arrival of Buddhism in Sri Lanka at Mihintale, featuring lantern displays, devotional songs, and sacred pilgrimages.',
    fullDescription: 'Poson celebrates the introduction of Theravada Buddhism to Sri Lanka in 236 BCE. While observed islandwide, the spiritual heart of Poson is Mihintale and Anuradhapura, where thousands of white-clad pilgrims ascend the sacred Mihintale rock stairs amid lantern illuminations and religious pageants.',
    historyContent: 'Commemorates the historic encounter at Mihintale sanctuary between Arahat Mahinda (son of Emperor Ashoka of India) and King Devanampiya Tissa of Sri Lanka. King Tissa embraced the Buddhist teachings, establishing it as the state religion and shaping the island’s culture, literature, and art.'
  },
  {
    id: 'navam-perahera',
    eventName: 'Gangaramaya Navam Perahera',
    category: 'Urban Buddhist Pageant',
    timeOfYear: 'February (Navam Full Moon)',
    religion: 'Buddhism',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Traditional Street Snacks', 'Kiri Toffee', 'Short Eats', 'King Coconut Water'],
    shortDescription: 'Colombo’s premier night festival featuring hundreds of performers, traditional dancers, drummers, and caparisoned elephants around Beira Lake.',
    fullDescription: 'Organized by the Gangaramaya Temple in Hunupitiya, Colombo, the Navam Perahera turns the surroundings of Beira Lake into a cultural arena. It features traditional mask dancers (Ves Natum), Low-Country drummers, flag bearers, and walking monks.',
    historyContent: 'Inaugurated in 1979 under the guidance of Venerable Galboda Gnanissara Thero (Podin Hamuduruwo) to revive traditional folk performing arts and offer urban Colombo residents a major annual cultural festival.'
  },
  {
    id: 'kataragama-esala',
    eventName: 'Kataragama Esala Festival',
    category: 'Multi-Faith Pilgrimage',
    timeOfYear: 'July / August',
    religion: 'Buddhist, Hindu, Muslim & Vedda Heritage',
    image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Kataragama Fruit Baskets', 'Murthan Rice', 'Sweet Prasad', 'Panchamirtham'],
    shortDescription: 'A multi-religious festival in southern Sri Lanka known for intense devotion rituals, fire-walking ceremonies, and Pada Yatra foot pilgrimages.',
    fullDescription: 'Located in the southern dry zone, Kataragama brings together Buddhists, Hindus, Muslims, and indigenous Vedda communities. Devotees honor God Kataragama (Skanda) through rituals including Kavadi dancing, body piercing (Thooku Kavadi), and walking barefoot over hot wooden embers.',
    historyContent: 'Deeply rooted in indigenous folklore and ancient myths, Kataragama is venerated as the abode of Lord Skanda and his consort Valli, an indigenous Vedda princess. For centuries, pilgrims have walked hundreds of miles from Jaffna down the east coast in the sacred "Pada Yatra" walk.'
  },
  {
    id: 'madhu-festival',
    eventName: 'Feast of Our Lady of Madhu',
    category: 'Christian Pilgrimage',
    timeOfYear: 'August (August 15th Peak)',
    religion: 'Roman Catholicism',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    famousFoods: ['Campfire Stews', 'Fish Curry', 'Roast Paan', 'Local Sweetmeats'],
    shortDescription: 'Sri Lanka’s largest Catholic pilgrimage, drawing hundreds of thousands of Tamil and Sinhala families to camp in the forest sanctuary of Mannar.',
    fullDescription: 'The Shrine of Our Lady of Madhu in Mannar becomes a tent city for over 400,000 pilgrims during its August feast. Sinhala and Tamil Catholic families camp together in surrounding woodlands, attending open-air masses, candlelight rosary processions, and community feasting.',
    historyContent: 'Spanning over 400 years, Catholic devotees carried the sacred statue of Our Lady of Madhu into the jungle of Mannar in 1670 to escape Dutch colonial religious persecution. The shrine became a sanctuary of peace and inter-community unity throughout modern Sri Lankan history.'
  }
];

const Events = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Automatic Hero Slide Rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const filteredEvents = activeTab === 'all' 
    ? festivalEventsData 
    : festivalEventsData.filter(e => e.category.toLowerCase().includes(activeTab));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* 1. HERO SECTION WITH WIDE SLIDESHOW */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-slate-950 flex items-center justify-center">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transform transition-transform duration-[7000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
            🎉 Sri Lanka Cultural Calendar
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="text-lg sm:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            {heroSlides[activeSlide].subtitle}
          </p>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-2 pt-6">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN FESTIVALS SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Heritage & Traditions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Major Cultural & Religious Festivals
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
            Explore Sri Lanka’s major celebrations, featuring event descriptions, famous festive foods, and historical origins.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['all', 'cultural', 'religious', 'pageant'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Stack of Item Cards */}
        <div className="space-y-10">
          {filteredEvents.map((festival) => (
            <article
              key={festival.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Festival Image Container with Fixed Standard Height & Aspect Ratio */}
              <div className="lg:col-span-5 relative w-full h-64 sm:h-72 lg:h-full min-h-[280px] bg-slate-900 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.eventName}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-md shadow z-10">
                  {festival.timeOfYear}
                </span>
              </div>

              {/* Right Column: Complete Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                      {festival.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      🙏 {festival.religion}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    {festival.eventName}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {festival.shortDescription}
                  </p>
                </div>

                {/* Famous Foods List */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <span>🍲</span> Famous Festive Foods:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {festival.famousFoods.map((food, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white text-slate-800 font-medium px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Narrative Snippet */}
                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 leading-relaxed">
                  <p><strong className="text-slate-800">Overview:</strong> {festival.fullDescription}</p>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedFestival(festival)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors duration-200 shadow"
                  >
                    Read Full History & Rituals →
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </main>

      {/* 3. MODAL POPUP FOR FULL HISTORICAL CONTENT */}
      {selectedFestival && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-48 bg-slate-900">
              <img
                src={selectedFestival.image}
                alt={selectedFestival.eventName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedFestival(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-900 w-8 h-8 rounded-full font-bold flex items-center justify-center shadow transition"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  {selectedFestival.category} • {selectedFestival.timeOfYear}
                </span>
                <h3 className="text-2xl font-black">{selectedFestival.eventName}</h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>📜</span> Historical Origin & Roots
                </h4>
                <p className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-slate-800">
                  {selectedFestival.historyContent}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>🪔</span> Celebration Customs & Ceremonies
                </h4>
                <p>{selectedFestival.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>🍛</span> Authentic Festive Foods
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFestival.famousFoods.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedFestival(null)}
                className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. FOOTER OVERVIEW */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} Sri Lanka Cultural & Festival Directory. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Events;