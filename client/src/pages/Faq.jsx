import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Yala from '../assets/images/Yala.png';
import Kandy from '../assets/images/Kandy.png';
import SigiriDabullu from '../assets/images/SigiriDabullu.jpg';
import Ella from '../assets/images/ella.jpg';
/* ------------------------------------------------------------------ */
/* Hero slides (swap `image` for a real photo URL if you have one)     */
/* ------------------------------------------------------------------ */
const slides = [
  {
    emoji: '🌴',
    title: 'Everything you need to know before you go',
    text: 'Visas, weather, safety, food and money: quick answers for your Sri Lanka trip.',
    gradient: 'from-emerald-900 via-slate-950 to-slate-950',
    image: Kandy,
  },
  {
    emoji: '🛂',
    title: 'Entry made simple',
    text: 'Learn how to apply for your ETA online and how to extend your stay.',
    gradient: 'from-amber-900/70 via-slate-950 to-slate-950',
    image: SigiriDabullu,
  },
  {
    emoji: '🍛',
    title: 'Taste the island',
    text: 'From fiery curries to vegetarian favourites, find out what to expect on your plate.',
    gradient: 'from-teal-900 via-slate-950 to-slate-950',
    image: Yala,
  },
  {
    emoji: '🛡️',
    title: 'Travel with confidence',
    text: 'Safety tips, health advice and connectivity so you can explore worry-free.',
    gradient: 'from-emerald-950 via-slate-900 to-amber-950/60',
    image: Ella,
  },
]

/* ------------------------------------------------------------------ */
/* FAQ content                                                         */
/* a = array of paragraphs, list = optional bullets, links = optional  */
/* ------------------------------------------------------------------ */
const categories = ['All', 'General', 'Visa & Entry', 'Safety & Health', 'Food', 'Money & Connectivity']

const faqs = [
  {
    cat: 'General',
    q: 'What is the best time to visit Sri Lanka?',
    a: [
      'Sri Lanka is a year-round destination – yes, you read that correctly! The island enjoys a remarkably consistent climate, with temperature variations rarely exceeding 3–4°C in a given location throughout the year. While Sri Lanka experiences two monsoon seasons – the Southwest Monsoon (May–September) affecting the south-west, and the Northeast Monsoon (October–February) affecting the north and east – there’s always a region enjoying dry, pleasant weather. Even during the monsoon, rains are typically brief, mostly in the afternoons, leaving the rest of the day warm and enjoyable for exploring or relaxing.',
    ],
  },
  {
    cat: 'General',
    q: 'Which coast is best in which season?',
    a: [
      'Sri Lanka is a great year-round destination. It has two monsoons that occur at different times in different parts of the country. The weather is best in the western and southern coasts between December and April, while the best time to visit the east coast is between May and September.',
    ],
  },
  {
    cat: 'General',
    q: 'What kind of traveller would enjoy Sri Lanka most?',
    a: [
      'Sri Lanka is a destination with something for everyone. Whether you’re planning a honeymoon, a multi-generational family holiday, solo travel, group celebrations, or corporate retreats, the island caters to every style of journey. From quiet retreats and adventure-packed escapes to cultural discovery and lifestyle experiences, our passionate team ensures that every traveller’s experience is perfectly curated.',
    ],
  },
  {
    cat: 'General',
    q: 'What language will people understand in Sri Lanka?',
    a: [
      'Sinhalese and Tamil are the official languages of Sri Lanka, with the majority of Sri Lankans speaking primarily Sinhalese. English is generally understood and spoken by many, especially in the cities. There are some tour operators who can provide guides and translators in German, French, Spanish, Italian, Japanese and Chinese to visitors who require assistance.',
    ],
  },
  {
    cat: 'Visa & Entry',
    q: 'Do I need a visa to enter Sri Lanka?',
    a: [
      'Yes, you will need a visa to enter Sri Lanka. Travellers intending to visit Sri Lanka for a short stay for the purposes of tourism, business or transit, need to obtain ETA prior approval.',
    ],
    links: [{ label: 'Apply for your ETA', href: 'http://www.eta.gov.lk/slvisa/' }],
  },
  {
    cat: 'Visa & Entry',
    q: 'What is an Electronic Travel Authorization (ETA)?',
    a: [
      'The Electronic Travel Authorization (ETA) is an official authorisation for a short visit to Sri Lanka and it can be applied for online. The issuing authority of the ETA is the Department of Immigration & Emigration, Colombo, Sri Lanka. The ETA is initially limited to a validity of 30 days. However, it may be extended for up to six months.',
    ],
    links: [{ label: 'Department of Immigration & Emigration', href: 'http://www.immigration.gov.lk/web/index.php?lang=en' }],
  },
  {
    cat: 'Visa & Entry',
    q: 'How much does the ETA cost?',
    a: ['A comprehensive list of ETA processing fees can be obtained from the ETA website.'],
    links: [{ label: 'View ETA fees', href: 'http://www.eta.gov.lk/slvisa/' }],
  },
  {
    cat: 'Visa & Entry',
    q: 'How do I apply for the ETA?',
    a: ['You can submit the ETA application online through the ETA website. Select the language, click ‘Apply’ and follow the instructions.', 'You can also use one of the following options to apply:'],
    list: [
      'Through a third party',
      'Through registered agents',
      'At Sri Lanka Overseas Missions',
      'At the head office of the Department of Immigration and Emigration (DI&E), Colombo',
      'On arrival at the port of entry in Sri Lanka',
    ],
    links: [{ label: 'Go to the ETA website', href: 'http://www.eta.gov.lk/slvisa/' }],
  },
  {
    cat: 'Visa & Entry',
    q: 'My holiday is over 30 days. How can I obtain an extension to my visa?',
    a: [
      'You can apply for an extension should you wish to stay in Sri Lanka for longer than 30 days. The application for an extension should be submitted to the Visa Section of the Department of Immigration. You can do this by visiting the Department or through an authorised agent.',
    ],
    links: [{ label: 'Visit immigration.gov.lk', href: 'http://www.immigration.gov.lk/' }],
  },
  {
    cat: 'Safety & Health',
    q: 'How safe is Sri Lanka for travellers?',
    a: [
      'Sri Lanka is generally regarded as a safe travel destination. The destination has also been mentioned in multiple articles that write about safest destinations for solo women travelers over the years. Additionally, under the care of a reputed travel partner, your safety will always be a priority. The travel partner will ensure all resorts, experience partners, vehicles, yachts, domestic airplanes and helicopters, hosts and guides are qualified, licensed and maintain the highest safety and quality standards.',
    ],
  },
  {
    cat: 'Safety & Health',
    q: 'What safety precautions must I take when travelling?',
    a: [
      'As with any destination, you need to take precautions to safeguard your belongings when travelling in Sri Lanka. It is advisable to lock your valuables in the hotel safety locker (usually available in all rooms). Do not leave your belongings unattended on the beach or any other public spaces. If you are travelling by public transport, ensure that your bags are locked and that you take your belongings with you when you disembark. There is no guarantee that you will be able to recover any belongings left behind on a public bus or train.',
    ],
  },
  {
    cat: 'Safety & Health',
    q: 'What health issues should I be concerned with?',
    a: [
      'Sri Lanka prides itself on its state-run healthcare system, which is considered a good model for many nations in the region. Although all cities have a government run hospital, they may not all have emergency medical facilities. Severe medical situations will need to be treated at larger hospitals in the main cities. There are a number of privately operated hospitals which also provide good care. It is advisable to procure a comprehensive health/travel insurance when you plan your trip.',
      'Mosquito borne diseases such as dengue, chikungunya and malaria are common in the country. You can purchase effective mosquito repellents at local supermarkets.',
    ],
  },
  {
    cat: 'Safety & Health',
    q: 'Do I need to worry about mosquitoes and other pests?',
    a: [
      'Most hotels will provide you with a plug-in mosquito repellent which will usually be switched on during turn down. Mosquito nets in hotels are a rarity. It would be wise to apply some mosquito repellent lotion if you plan to spend time outdoors. You can easily purchase mosquito repellent from local supermarkets or pharmacies if you forget to bring some with you.',
      'If you are planning to go trekking or hiking in the mountains or rainforests, you will most likely encounter leeches. Carry a pair of leech socks as a precaution. If you do find a leech on your body, do not pull it off. Wait for it to fall off, or apply some salt or soap to the area, this will release the leech.',
      'If you have discomfort such as itching and redness due to insect bites, it would be best to visit a pharmacy and purchase an over the counter topical medication. If the bites continue to be an issue it would be advisable to seek medical attention.',
    ],
  },
  {
    cat: 'Food',
    q: 'What food will I find?',
    a: [
      'Sri Lanka has a great cuisine which includes rice, bread, vegetables, fruits, fish and meat. The island’s culinary scene is a great example of the wide variety of cultures that have influenced Sri Lankan society. Traditional Sri Lankan food may be rather spicy, so be mindful to always request for less spice in your food. If you are not adventurous with your gastronomic experiences, you can opt for international dining options, which are available in all major hotels and restaurants. Don’t be afraid to ask for your preference, as people are generally willing to accommodate your needs. A number of popular fast food franchises can be found in the larger cities.',
      'Always ask for bottled mineral water. If you are carrying your own reusable water bottle, you can ask your hotel to refill it with filtered water.',
    ],
  },
  {
    cat: 'Food',
    q: 'Can I find vegetarian food?',
    a: [
      'Many of the larger hotels and restaurants have a vegetarian section in their menus. Smaller local food shops will also provide vegetarian meals if you request it. There are a number of South Indian style vegetarian restaurants in more urban areas that serve 100% vegetarian fare.',
    ],
  },
  {
    cat: 'Money & Connectivity',
    q: 'What is the currency used in Sri Lanka?',
    a: [
      'The currency used in Sri Lanka is the Rupee (Rs.) and it is divided into 100 cents. Notes come in denominations of 20, 50, 100, 500, 1000 & 5000. Coins come in denominations of 1, 2, 5 & 10.',
      'Some larger hotels may accept US$ / Euro, but this is not common.',
    ],
  },
  {
    cat: 'Money & Connectivity',
    q: 'Are ATMs widely available and do they issue cash against my debit/credit card?',
    a: [
      'ATMs are widely available in the main cities. You can use your Visa and Mastercard to withdraw cash from local ATMs. However, make sure you have informed your bank that you will be using your card in Sri Lanka for cash withdrawals.',
    ],
  },
  {
    cat: 'Money & Connectivity',
    q: 'How are the telecommunication facilities in Sri Lanka?',
    a: [
      'Much of the island is covered by telecommunication operators, meaning you will have connectivity wherever you go. However, do not expect to have connectivity if you venture out into very remote, uninhabited areas. It would be advisable to procure a local phone and data package during your stay in the country. There are many options available from local mobile network operators such as Dialog, Mobitel, Airtel and Hutch. Make sure that your mobile phone is ‘dual band’ and unlocked.',
    ],
  },
  {
    cat: 'Money & Connectivity',
    q: 'What mobile technology is supported in Sri Lanka?',
    a: [
      'All mobile network operators support GSM technology on GSM 900/1800 bands. WAP & GPRS is widely supported. 3G and wireless broadband is available in Colombo and other major cities.',
    ],
  },
]

const catEmoji = {
  General: '🌏',
  'Visa & Entry': '🛂',
  'Safety & Health': '🛡️',
  Food: '🍛',
  'Money & Connectivity': '💳',
}

/* ------------------------------------------------------------------ */
/* Hero slider                                                         */
/* ------------------------------------------------------------------ */
const HeroSlider = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((i) => setIndex((i + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 8000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="FAQ highlights"
    >
      <div className="h-[340px] overflow-hidden sm:h-[400px] lg:h-[440px]">
        <div
          className="flex h-full transition-transform duration-[2000ms] ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
        {slides.map((s, i) => (
          <div key={s.title} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
            {s.image && <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/15 text-3xl ring-1 ring-emerald-400/30">
                {s.emoji}
              </span>
              <h1 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {s.title}
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">{s.text}</p>
              <a
                href="#faq-list"
                className="mt-6 inline-flex items-center rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                Browse questions
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-200 backdrop-blur transition hover:border-emerald-400/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:flex"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-200 backdrop-blur transition hover:border-emerald-400/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:flex"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              i === index ? 'w-7 bg-amber-300' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Single accordion item                                               */
/* ------------------------------------------------------------------ */
const FaqItem = ({ item, id, open, onToggle }) => (
  <div
    className={`rounded-2xl border transition-colors ${
      open ? 'border-emerald-500 bg-emerald-50/60' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'
    }`}
  >
    <h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="flex w-full items-start justify-between gap-4 rounded-2xl px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-6 sm:py-5"
      >
        <span className="flex items-start gap-3">
          <span className="mt-0.5 text-lg" aria-hidden="true">{catEmoji[item.cat]}</span>
          <span className={`text-base font-bold leading-snug sm:text-lg ${open ? 'text-emerald-700' : 'text-slate-900'}`}>
            {item.q}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition-transform duration-300 ${
            open ? 'rotate-180 border-emerald-500 bg-emerald-100 text-emerald-700' : 'border-slate-300 text-slate-500'
          }`}
        >
          ▾
        </span>
      </button>
    </h3>

    <div
      id={`${id}-panel`}
      role="region"
      aria-labelledby={`${id}-button`}
      className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <div className="space-y-3 px-5 pb-5 pl-14 pr-5 text-sm leading-relaxed text-slate-600 sm:pb-6 sm:pl-[3.75rem] sm:pr-8 sm:text-base">
          {item.a.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {item.list && (
            <ul className="space-y-1.5">
              {item.list.map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          )}
          {item.links && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const Faq = () => {
  const [activeCat, setActiveCat] = useState('All')
  const [query, setQuery] = useState('')
  const [openIds, setOpenIds] = useState(new Set([0]))

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs
      .map((f, id) => ({ ...f, id }))
      .filter((f) => activeCat === 'All' || f.cat === activeCat)
      .filter((f) => !q || f.q.toLowerCase().includes(q) || f.a.join(' ').toLowerCase().includes(q))
  }, [activeCat, query])

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const allOpen = filtered.length > 0 && filtered.every((f) => openIds.has(f.id))
  const toggleAll = () =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      filtered.forEach((f) => (allOpen ? next.delete(f.id) : next.add(f.id)))
      return next
    })

  return (
    <div className="min-h-screen bg-white text-slate-600">
      <HeroSlider />

      <main id="faq-list" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Frequently asked questions</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Search for a topic or pick a category to find your answer quickly.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. visa, ATM, vegetarian, mosquitoes…"
            aria-label="Search frequently asked questions"
            className="h-12 w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
        </div>

        {/* Category tabs */}
        <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0" role="tablist" aria-label="FAQ categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={activeCat === c}
              onClick={() => setActiveCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                activeCat === c
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-950/30'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results bar */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <span aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'question' : 'questions'}
          </span>
          {filtered.length > 0 && (
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-md px-2 py-1 font-semibold text-emerald-700 transition hover:text-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          )}
        </div>

        {/* List */}
        <div className="mt-3 space-y-3">
          {filtered.map((f) => (
            <FaqItem key={f.id} id={`faq-${f.id}`} item={f} open={openIds.has(f.id)} onToggle={() => toggle(f.id)} />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <p className="text-lg font-bold text-slate-900">No questions match your search</p>
              <p className="mt-2 text-sm text-slate-500">Try a different word, or clear the search to see everything.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveCat('All')
                }}
                className="mt-4 rounded-full bg-emerald-400 px-5 py-2 text-xs font-black uppercase tracking-wider text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-amber-50 p-8 text-center sm:p-10">
          <h2 className="text-xl font-black text-emerald-800 sm:text-2xl">Still have a question?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 sm:text-base">
            Our travel team is happy to help you plan the perfect Sri Lanka trip.
          </p>
          <a
            href="/#booking-form"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book Your Tour <span className="ml-1.5" aria-hidden="true">→</span>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Faq