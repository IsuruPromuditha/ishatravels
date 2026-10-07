import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ------------------------------------------------------------------ */
/* Hero slides (swap `image` for a real photo URL if you have one)     */
/* ------------------------------------------------------------------ */
const slides = [
  {
    emoji: '🛂',
    title: 'Visa to Sri Lanka',
    text: 'Everything you need to know about the Electronic Travel Authorization (ETA) before you fly.',
    gradient: 'from-emerald-900 via-slate-950 to-slate-950',
    image: '',
  },
  {
    emoji: '💻',
    title: 'Apply online in minutes',
    text: 'Fill in the form, pay the fee and print your confirmation at eta.gov.lk.',
    gradient: 'from-amber-900/70 via-slate-950 to-slate-950',
    image: '',
  },
  {
    emoji: '🌴',
    title: 'Want to stay longer?',
    text: 'A 30-day tourist visa can be renewed twice, for 30 days each time.',
    gradient: 'from-teal-900 via-slate-950 to-slate-950',
    image: '',
  },
]

/* ------------------------------------------------------------------ */
/* Page content                                                        */
/* ------------------------------------------------------------------ */
const ETA = 'https://www.eta.gov.lk'

const visaTypes = [
  {
    emoji: '🏖️',
    title: 'Tourist Visit Visa',
    text: 'This visa is eligible for tourists who wish to enter Sri Lanka for sightseeing, relaxation, excursions, visiting relatives, etc. for a short duration.',
  },
  {
    emoji: '💼',
    title: 'Business Purpose Visa',
    text: 'This visa is eligible for foreign nationals who wish to enter Sri Lanka for business purposes, for a short duration. Applications for group visas are also provided at',
    link: { label: 'www.eta.gov.lk', href: ETA },
  },
]

const steps = [
  { text: 'Apply through the Sri Lanka electronic visa website', link: { label: 'www.eta.gov.lk', href: ETA } },
  { text: 'Follow the online application process and pay the fees.' },
  { text: 'Tourist Visa to Sri Lanka costs, please visit', link: { label: 'www.eta.gov.lk', href: ETA }, after: 'for more information.' },
  { text: 'Various types of Visas are listed under fees:', link: { label: 'View visa fees', href: 'https://www.eta.gov.lk/slvisa/visainfo/fees' } },
  { text: 'Once approved, print out the visa confirmation.', link: { label: 'Check status page', href: 'https://www.eta.gov.lk/etaslvisa/pages/checkStatus.jsp' } },
  { text: 'To check the status of the visa you can check it online once submitted using the reference number.' },
  { text: 'Visas applications can be submitted to Sri Lankan Missions in your country or online.' },
  { text: 'On Arrival Visas are also processed based on the nationality of the applicant.' },
]

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */
const ExtLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2 transition hover:text-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
  >
    {children}
  </a>
)

const SectionHeading = ({ emoji, children }) => (
  <h2 className="flex items-center gap-3 text-xl font-black text-slate-900 sm:text-2xl">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl" aria-hidden="true">
      {emoji}
    </span>
    {children}
  </h2>
)

/* ------------------------------------------------------------------ */
/* Hero slider (same as Faq page: slow slide, pauses on hover)         */
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
      aria-label="Visa highlights"
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
                {i === 0 ? (
                  <h1 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{s.title}</h1>
                ) : (
                  <p className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{s.title}</p>
                )}
                <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">{s.text}</p>
                <a
                  href="#visa-content"
                  className="mt-6 inline-flex items-center rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  Read the guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

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
/* Page                                                                */
/* ------------------------------------------------------------------ */
const VisaToSriLanka = () => {
  return (
    <div className="min-h-screen bg-white text-slate-600">
      <HeroSlider />

      <main id="visa-content" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="font-semibold text-emerald-700 hover:text-emerald-900">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>Planning a Trip to Sri Lanka</li>
            <li aria-hidden="true">›</li>
            <li className="font-semibold text-slate-700" aria-current="page">Visa and Entry Requirements</li>
          </ol>
        </nav>

        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Visa and Entry Requirements</h2>
        </div>

        {/* Intro notice */}
        <div className="rounded-2xl border border-emerald-500 bg-emerald-50/60 p-5 sm:p-6">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            <span className="text-xl" aria-hidden="true">📌</span>
            <span>
              All holiday and business travellers applying for a visa to Sri Lanka must have an Electronic Travel
              Authorization (ETA) to enter the island. For more information visit{' '}
              <ExtLink href="http://www.eta.gov.lk">www.eta.gov.lk</ExtLink>
            </span>
          </p>
        </div>

        {/* Visit visa types */}
        <section className="mt-12" aria-labelledby="visa-types">
          <div id="visa-types">
            <SectionHeading emoji="🗂️">What are the visit visa types?</SectionHeading>
          </div>
          <p className="mt-3 text-sm sm:text-base">There are two types of Visit Visas that travellers can apply for:</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {visaTypes.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-500 sm:p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span aria-hidden="true">{v.emoji}</span>
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base">
                  {v.text}
                  {v.link && (
                    <>
                      {' '}
                      <ExtLink href={v.link.href}>{v.link.label}</ExtLink>.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to obtain */}
        <section className="mt-14" aria-labelledby="how-to">
          <div id="how-to">
            <SectionHeading emoji="📝">How to obtain a visa</SectionHeading>
          </div>
          <p className="mt-3 text-sm sm:text-base">
            Before you travel to Sri Lanka, for a <strong className="text-slate-900">30-day visa</strong>:
          </p>

          <ol className="mt-5 space-y-3">
            {steps.map((s, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-slate-950"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed sm:text-base">
                  {s.text}
                  {s.link && (
                    <>
                      {' '}
                      <ExtLink href={s.link.href}>{s.link.label}</ExtLink>
                      {s.after ? ` ${s.after}` : s.text.endsWith(':') ? '' : '.'}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Stay longer */}
        <section className="mt-14" aria-labelledby="stay-longer">
          <div id="stay-longer">
            <SectionHeading emoji="⏳">Want to stay longer?</SectionHeading>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-relaxed sm:text-base">
              If you’ve fallen in love with Sri Lanka and want to extend your stay, you can! You can renew a 30-day
              tourist visa twice, for 30 days each time. Contact the{' '}
              <ExtLink href="https://www.immigration.gov.lk/web/index.php?option=com_content&view=article&id=152%3Atourist-visit-visa&catid=41&Itemid=180&lang=en">
                Department of Immigration and Emigration
              </ExtLink>{' '}
              for further information.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-amber-50 p-8 text-center sm:p-10">
          <h2 className="text-xl font-black text-emerald-800 sm:text-2xl">Ready to plan your trip?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 sm:text-base">
            Our travel team can help with your itinerary while you sort out your visa.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#booking-form"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book Your Tour <span className="ml-1.5" aria-hidden="true">→</span>
            </a>
            <Link
              to="/faqs"
              className="inline-flex items-center justify-center rounded-full border border-emerald-600/30 bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Read the FAQs
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VisaToSriLanka