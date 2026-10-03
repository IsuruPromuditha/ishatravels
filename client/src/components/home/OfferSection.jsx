import React, { useRef } from 'react'
import { OFFERS } from '../../models/tourData'

const OfferSection = () => {
  const carouselRef = useRef(null)

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return

    carouselRef.current.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <section id="offers" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Limited-time getaways
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Find your next <span className="text-emerald-400">adventure</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Handpicked Sri Lankan experiences, thoughtfully planned and ready to explore.
            </p>
          </div>

          {OFFERS.length > 1 && (
            <div className="flex items-center gap-3">
              <span className="mr-1 hidden text-sm text-slate-500 sm:inline">
                Swipe to explore
              </span>
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Previous tour packages"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-emerald-400/50 hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Next tour packages"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-emerald-400/50 hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                →
              </button>
            </div>
          )}
        </header>

        {OFFERS.length > 0 ? (
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
          >
            {OFFERS.map((offer, index) => (
              <article
                key={offer.id ?? offer.title ?? index}
                className="group flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-950/40 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title || 'Sri Lanka tour package'}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                  {offer.discount && (
                    <span className="absolute left-4 top-4 rounded-full bg-amber-300 px-3 py-1.5 text-xs font-black text-slate-950 shadow-lg">
                      {offer.discount}
                    </span>
                  )}

                  {offer.duration && (
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      ◷ {offer.duration}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {offer.validTill || 'Special tour package'}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-white">
                    {offer.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {offer.description ||
                      'Discover Sri Lanka with this specially curated tour package.'}
                  </p>

                  {offer.itinerary?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                        Destinations
                      </h4>
                      <p className="text-sm leading-6 text-slate-400">
                        {offer.itinerary.join('  ·  ')}
                      </p>
                    </div>
                  )}

                  <div className="my-5 flex items-baseline gap-3 border-y border-white/10 py-4">
                    <span className="text-2xl font-black text-white">
                      {offer.offerPrice}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        {offer.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-bold text-white">
                      Package includes
                    </h4>

                    {offer.includes?.length ? (
                      <ul className="space-y-2.5">
                        {offer.includes.map((item, itemIndex) => (
                          <li
                            key={`${item}-${itemIndex}`}
                            className="flex items-start gap-2.5 text-sm leading-5 text-slate-400"
                          >
                            <span
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-bold text-emerald-400"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-500">
                        Package inclusions coming soon.
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="mt-auto w-full rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Explore Package <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
            No tour packages are available yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default OfferSection