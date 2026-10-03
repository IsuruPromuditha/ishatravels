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

// Rich, Expanded Festivals Dataset
const festivalEventsData = [
  {
    id: 'avurudu',
    eventName: 'Sinhala and Tamil New Year (Aluth Avurudu / Puthandu)',
    category: 'Cultural & National',
    timeOfYear: 'Mid-April (April 13th – 14th)',
    religion: 'Buddhist & Hindu Traditions',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Kiribath (Milk Rice)', 
      'Kevum (Oil Cakes)', 
      'Kokis (Crispy Rosettes)', 
      'Aasmi (Honey Treacle Funnel Cake)', 
      'Aggala (Roasted Rice Balls)', 
      'Kalu Dodol (Jaggery Fudge)', 
      'Aluwa (Sweet Flour Halwa)',
      'Sweet Pongal'
    ],
    shortDescription: 'Sri Lanka’s largest national holiday celebrating the solar transition (Sankranti) from Pisces to Aries. It unifies Sinhalese and Tamil communities through nationwide household rituals strictly timed to astrological hours (Nekath), traditional drumming, and village folk games.',
    fullDescription: 'The Sinhala and Tamil New Year marks the conclusion of the spring harvest and the sun’s journey into the constellation of Aries (Mesha Rashiya). The festival begins with "Punya Kalaya" (a period of neutral astrological time dedicated to spiritual reflection), followed by synchronized rituals across the country. Every household lights the hearth, boils milk until it overflows to signal prosperity, exchanges goodwill payments (Ganu Denu), and gathers around an elaborate "Avurudu Kæmæthi" sweet table. Rural communities celebrate with traditional folk games such as Kotta Pora (pillow fights on horizontal poles), Raban drumming by village matriarchs, and grease pole climbing.',
    historyContent: 'Ancient agrarian Sri Lanka celebrated the spring harvest by giving thanks to the Sun God (Surya) for bountiful crop yields prior to the new planting cycle. Over centuries, astrological concepts brought through historic interactions with South India harmonized with indigenous Sinhalese customs, resulting in a unique national celebration where millions of citizens perform identical domestic rituals at the exact same minute.'
  },
  {
    id: 'kandy-perahera',
    eventName: 'Kandy Esala Perahera (Festival of the Sacred Tooth)',
    category: 'Religious Pageant',
    timeOfYear: 'July / August (Esala Month)',
    religion: 'Buddhism & Devala Heritage',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Helapa (Finger Millet & Coconut Steamed Treats)', 
      'Aggala (Spiced Roasted Rice Balls)', 
      'Kiri Toffee (Condensed Milk Fudge)', 
      'Beli Flower & Ranawara Herbal Teas', 
      'Traditional Kandyan Rice Sweets',
      'King Coconut Water'
    ],
    shortDescription: 'Asia’s premier Buddhist pageant featuring 10 consecutive nights of intense ritual processions through historic Kandy. Features hundreds of whip-crackers, fire-spinners, Ves dancers, temple drummers, and silk-robed elephants honoring the Sacred Tooth Relic of Lord Buddha.',
    fullDescription: 'The Kandy Esala Perahera is a magnificent 10-night cultural spectacle where ancient royal rituals come alive around the UNESCO World Heritage city of Kandy. The pageant progresses through phases—starting with the internal Kumbal Perahera and escalating to the majestic Randoli Perahera processions. Led by the Maligawa Tusker draped in embroidered gold cloth carrying the Golden Casket, the parade includes four separate processions from the devales dedicated to guardian deities Natha, Vishnu, Skanda, and Pattini. The festival concludes with the sacred "Diya Kepeema" (water-cutting ritual) at the Mahaweli River in Getambe.',
    historyContent: 'The festival traces back to the 4th Century CE when Princess Hemamali and Prince Dantha smuggled the Sacred Tooth Relic from Kalinga, India to Sri Lanka hidden inside her hair. King Meghavanna decreed that the relic be displayed publicly once a year. In 1753 CE, under King Kirti Sri Rajasinha, the Buddhist procession was fused with ancient rituals honoring Hindu guardian deities, creating the unified royal pageant seen today.'
  },
  {
    id: 'vesak',
    eventName: 'Vesak Full Moon Poya Festival',
    category: 'Religious & Light Festival',
    timeOfYear: 'May (May Full Moon)',
    religion: 'Theravada Buddhism',
    image: 'https://images.unsplash.com/photo-1578564499878-1f6305a2e5eb?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Dansala Charity Feasts (Free Meals)', 
      'Sago Kanji (Tapioca & Coconut Milk Porridge)', 
      'Boiled Manioc with Fresh Coconut & Chili Sambal', 
      'Free Herbal Teas (Belimal & Ranawara)',
      'Free Ice Creams & Fruit Juices'
    ],
    shortDescription: 'The most sacred day in the Buddhist calendar, celebrating the Birth, Enlightenment, and Passing Away (Parinirvana) of Lord Buddha. The island transforms into a glowing landscape of hand-crafted paper lanterns, towering illuminated story-boards (Pandals), and free food stalls (Dansalas).',
    fullDescription: 'Vesak is an islandwide religious and cultural festival characterized by profound devotion and public charity. Devotees dress in clean white garments to spend the day in meditation at local temples (Sil). By nightfall, streets illuminate with thousands of octagonal bamboo lanterns (Vesak Koodu), oil lamps, and multi-story electric light structures called Torana (Pandals) that depict Jataka tales set to audio narration. A defining pillar of Vesak is the "Dansala"—thousands of community-funded stalls providing free meals, drinks, and desserts to passersby as an act of selfless generosity (Dana).',
    historyContent: 'Historical chronicles like the Mahavamsa document Vesak celebrations as far back as the 2nd Century BCE during the reign of King Dutugemunu. The modern tradition of public lighting, elaborate Pandals, and islandwide street decorations gained massive momentum during the 19th-century Buddhist revival spearheaded by Anagarika Dharmapala and Colonel Henry Steel Olcott.'
  },
  {
    id: 'vel-nallur',
    eventName: 'Nallur & Colombo Vel Chariot Festivals',
    category: 'Hindu Chariot Pageant',
    timeOfYear: 'July / August',
    religion: 'Hinduism (Tamil Tradition)',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Medhu Vadai (Savory Lentil Fritters)', 
      'Masala Vadai', 
      'Laddu & Mysore Pak', 
      'Sweet Payasam (Milk Pudding)', 
      'Modakam (Sweet Rice Dumplings)', 
      'Panchamirtham (5-Fruit Temple Prasadam)'
    ],
    shortDescription: 'Vibrant, energy-filled Hindu festivals dedicated to Lord Murugan (Skanda). Features massive carved wooden chariots (Rathams), rhythmic Nadaswaram horn music, Thavil drumming, and devotional Kavadi burden dances performed by thousands of barefoot pilgrims.',
    fullDescription: 'The Vel and Nallur festivals represent the spiritual heart of Sri Lankan Tamil Hindu heritage. In Jaffna, the Nallur Kandaswamy Kovil hosts an incredible 25-day festival culminating in the Ther (Chariot) procession, where a multi-story carved wooden chariot is pulled through red-and-white walled streets by thousands of shirtless male devotees. Simultaneously in Colombo, the Vel Festival features a gilded chariot bearing the sacred spear (Vel) of Lord Murugan traveling from Pettah to Bambalapitiya, accompanied by traditional musicians and ecstatic Kavadi dancers.',
    historyContent: 'Rooted in ancient Puranic heritage, the festival honors Goddess Parvati presenting the invincible divine spear (Vel) to her son Lord Murugan to vanquish dark forces. The Nallur temple was founded in 948 CE and served as the focal point of the Jaffna Kingdom. The Colombo Vel procession was formally established in 1888 under British colonial rule to enable plantation and urban workers to celebrate the chariot tradition locally.'
  },
  {
    id: 'thai-pongal',
    eventName: 'Thai Pongal Harvest Festival',
    category: 'Agrarian & Cultural',
    timeOfYear: 'Mid-January (January 14th – 15th)',
    religion: 'Hinduism & Tamil Culture',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Sweet Thai Pongal (Boiled Rice with Jaggery, Cashews & Raisins)', 
      'Ven Pongal (Savory Pepper & Ghee Rice)', 
      'Medhu Vadai', 
      'Fresh Sugarcane Stalks', 
      'Banana & Fruit Offerings'
    ],
    shortDescription: 'A joyful Tamil thanksgiving harvest festival dedicated to Surya (the Sun God) and agricultural cattle. Families gather at dawn to boil fresh rice with milk and jaggery in decorated earthen pots until it overflows, signaling abundance.',
    fullDescription: 'Thai Pongal marks the solar movement northward into the month of Thai, representing fresh beginnings, agricultural prosperity, and gratitude toward nature. Families decorate courtyard entrances with colorful Kolam patterns made from rice flour. At sunrise, fresh harvest rice is boiled in traditional clay pots decorated with turmeric plants. As the milk boils over, family members joyous shout "Pongalo Pongal!" ("May this rice boil over with prosperity!"). The second day, Mattu Pongal, is dedicated to honoring farm cattle with floral garlands and painted horns for their hard work in tilling fields.',
    historyContent: 'Thai Pongal has been celebrated for over two millennia across Southern India and Northern Sri Lanka, dating back to the Sangam literature era. It remains an essential cultural milestone that bridges humans, livestock, and natural elements in gratitude for the food cycle.'
  },
  {
    id: 'poson-poya',
    eventName: 'Poson Full Moon Poya',
    category: 'Religious & Historical',
    timeOfYear: 'June (June Full Moon)',
    religion: 'Buddhism',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Poson Dansala Rice & Curry Feasts', 
      'Sago & Coconut Milk Porridge', 
      'Herbal Beverages (Belimal Tea)', 
      'Fresh Fruit Juices & King Coconut'
    ],
    shortDescription: 'Commemorates the historic arrival of Buddhism in Sri Lanka at Mihintale in the 3rd Century BCE. Millions of white-clad pilgrims journey to the ancient ruins of Anuradhapura and climb the sacred rock stairs of Mihintale under illuminated night skies.',
    fullDescription: 'Poson Poya is second in religious importance only to Vesak. It marks the civilizational turning point when Arahat Mahinda converted King Devanampiya Tissa to Buddhism. The epicenter of Poson is Mihintale—the "Cradle of Buddhism in Sri Lanka"—where thousands of pilgrims ascend the 1,840 granite steps to the sanctuary peak. Cities nationwide feature illuminated archways, devotional songs (Bhakthi Geetha), paper lanterns, and generous community-run Dansalas serving hot meals to pilgrims journeying north.',
    historyContent: 'In 236 BCE, Arahat Mahinda (son of Indian Emperor Ashoka) met King Devanampiya Tissa while the king was hunting deer at Mihintale. After testing the king’s intelligence with a famous riddle about mango trees, Mahinda preached the Chullahastipadopama Sutta. The king embraced Buddhism, leading to the establishment of the Monastic order, advanced hydraulics, stone architecture, and written literature across Sri Lanka.'
  },
  {
    id: 'navam-perahera',
    eventName: 'Gangaramaya Navam Perahera',
    category: 'Urban Buddhist Pageant',
    timeOfYear: 'February (Navam Full Moon)',
    religion: 'Buddhism',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Street Food Eats (Isso Vadai / Prawn Cakes)', 
      'Kiri Toffee', 
      'Roasted Gram & Peanuts', 
      'Fresh King Coconut Water',
      'Short Eats & Pastries'
    ],
    shortDescription: 'Colombo’s flagship cultural festival organized by the Gangaramaya Temple. Over two nights, Beira Lake comes alive with over 100 decorated elephants, masked dancers, traditional fire-spinners, and performers representing every regional dance discipline of Sri Lanka.',
    fullDescription: 'The Navam Perahera transforms downtown Colombo into a vibrant arena of island folk culture. Organized by the famous Gangaramaya Temple, the procession parades around the scenic perimeter of Beira Lake and the Seema Malaka shrine. Spectators witness a rare collection of Low-Country Pahatharata dancers, Up-Country Kandyan Ves performers, Sabaragamuwa dancers, stilt walkers, whip crackers, and Buddhist monks moving in disciplined succession alongside majestic decorated tuskers.',
    historyContent: 'Inaugurated in 1979 under the vision of the late Venerable Galboda Gnanissara Thero (affectionately known as Podi Hamuduruwo), the festival was established to preserve traditional Sri Lankan performing arts that were declining in urban areas while giving residents of Colombo a grand annual cultural festival.'
  },
  {
    id: 'kataragama-esala',
    eventName: 'Kataragama Esala Festival',
    category: 'Multi-Faith Pilgrimage',
    timeOfYear: 'July / August',
    religion: 'Buddhist, Hindu, Muslim & Vedda Heritage',
    image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Kataragama Worship Fruit Baskets', 
      'Murthan Rice (Sacred Temple Rice)', 
      'Sweet Prasadam', 
      'Panchamirtham',
      'Fresh Woodapple Juice'
    ],
    shortDescription: 'A intense multi-religious pilgrimage held in the southern dry zone forest. Unites Buddhists, Hindus, Muslims, and indigenous Vedda communities through extreme devotion rituals, barefoot fire-walking ceremonies, and the ancient Pada Yatra foot trek.',
    fullDescription: 'Kataragama is one of Sri Lanka’s most sacred and mystically charged sanctuaries. Dedicated to God Kataragama (Skanda / Murugan), the two-week festival draws thousands who undertake the historic "Pada Yatra"—a 45-day barefoot trek from Northern Jaffna down the eastern coast through national parks to the shrine. Devotees perform intense acts of faith including carrying heavy peacock Kavadi frames, suspending themselves with hooks through their skin, and walking barefoot across pits of red-hot wooden embers during the famous fire-walking ceremony.',
    historyContent: 'Kataragama has been venerated for thousands of years as the realm of Lord Skanda and his consort Valli, a local indigenous Vedda princess. Kings of Sri Lanka—including King Dutugemunu in the 2nd Century BCE—built and endowed shrines at Kataragama in gratitude for divine intervention in battle, cementing its status as a shared sacred sanctuary for all ethnicities.'
  },
  {
    id: 'madhu-festival',
    eventName: 'Feast of Our Lady of Madhu',
    category: 'Christian Pilgrimage',
    timeOfYear: 'August (August 15th Peak)',
    religion: 'Roman Catholicism',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    famousFoods: [
      'Campfire Stews & Coconut Curries', 
      'Fried Fish with Chili Sambal', 
      'Crusty Woodfired Roast Paan', 
      'Local Homemade Sweetmeats',
      'Hot Spiced Milk Tea'
    ],
    shortDescription: 'Sri Lanka’s largest Catholic pilgrimage, drawing over 400,000 Sinhala and Tamil believers to camp together in the dense forest sanctuary of Mannar for communal prayer, open-air masses, and candlelight rosary processions.',
    fullDescription: 'The Shrine of Our Lady of Madhu in the northern Mannar district transforms into a massive tent city every August for the Feast of the Assumption. Families build temporary campsites beneath the dry zone jungle trees, sharing cooking fires and communal meals across ethnic lines. The festival features solemn outdoor masses recited in both Sinhala and Tamil, candlelight evening processions carrying the miraculous statue of Our Lady of Madhu, and heartfelt intercession prayers.',
    historyContent: 'The pilgrimage dates back over 400 years to 1670 CE, when local Catholic devotees fled Dutch religious persecution in Mantota, carrying the wooden statue of the Virgin Mary deep into the royal forest territory of Kandy at Madhu. Throughout modern Sri Lankan history—even during decades of civil conflict—Madhu served as a neutral sanctuary of peace and reconciliation.'
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
      <section className="relative w-full h-[75vh] min-h-[480px] overflow-hidden bg-slate-950 flex items-center justify-center">
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

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/30" />

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
            🎉 Sri Lanka Cultural & Heritage Calendar
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
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover the rich historical origins, vibrant rituals, and mouthwatering festive foods associated with Sri Lanka’s most iconic celebrations throughout the year.
          </p>

          {/* Filter Navigation Bar */}
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

        {/* Vertical Stack of Festival Cards */}
        <div className="space-y-10">
          {filteredEvents.map((festival) => (
            <article
              key={festival.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Image Display */}
              <div className="lg:col-span-5 relative w-full h-64 sm:h-80 lg:h-full min-h-[320px] bg-slate-900 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.eventName}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-black uppercase px-3.5 py-1.5 rounded-md shadow z-10">
                  {festival.timeOfYear}
                </span>
              </div>

              {/* Right Column: Complete Details (Strictly Enforcing Requested Order) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Category & Religion Metadata Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                      {festival.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      🙏 {festival.religion}
                    </span>
                  </div>

                  {/* 1. EVENT NAME */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {festival.eventName}
                  </h3>

                  {/* 2. DESCRIPTION */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {festival.shortDescription}
                  </p>

                  {/* 3. OVERVIEW */}
                  <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-1">
                    <span className="font-bold text-slate-900 uppercase tracking-wider block text-[11px] text-amber-600">
                      Festival Overview & Customs
                    </span>
                    <p className="text-slate-700 font-normal leading-relaxed">
                      {festival.fullDescription}
                    </p>
                  </div>
                </div>

                {/* 4. EVENT FAVOURITE FOODS */}
                <div className="bg-amber-50/40 p-4 rounded-2xl border border-amber-100/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <span>🍲</span> Famous Festive Foods:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {festival.famousFoods.map((food, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white text-slate-800 font-medium px-2.5 py-1 rounded-lg border border-amber-200/50 shadow-2xs"
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. ACTION BUTTON */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedFestival(festival)}
                    className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Read Full History & Rituals</span>
                    <span>→</span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </main>

      {/* 3. MODAL POPUP FOR HISTORICAL & RITUAL DETAILS */}
      {selectedFestival && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-56 bg-slate-900">
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

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>📜</span> Historical Roots & Antiquity
                </h4>
                <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/60 text-slate-800 leading-relaxed">
                  {selectedFestival.historyContent}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>🪔</span> Celebration Customs & Modern Observances
                </h4>
                <p className="leading-relaxed">{selectedFestival.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span>🍛</span> Traditional Festive Delicacies
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFestival.famousFoods.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
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
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} Sri Lanka Cultural & Festival Directory. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Events;