import React, { useEffect, useState } from 'react'
import { DESTINATIONS } from '../../models/tourData'

const SLIDES = DESTINATIONS.slice(0, 5)

const DestinationSection = () => {
  const [activeDest, setActiveDest] = useState(0)

  useEffect(() => {
    if (SLIDES.length < 2) return

    const intervalId = setInterval(() => {
      setActiveDest((current) => (current + 1) % SLIDES.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  if (SLIDES.length === 0) return null

  const destination = SLIDES[activeDest]
  const highlights = Array.isArray(destination.highlights)
    ? destination.highlights
    : Array.isArray(destination.tags)
      ? destination.tags
      : []

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
    Must-Visit Places
  </span>
  <h2 className="mt-2 text-3xl font-black uppercase text-slate-900 sm:text-4xl">
    Top Destinations in Sri Lanka
  </h2>
  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
    Discover unforgettable places, local culture, and beautiful scenery
    across the island.
  </p>
</header>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
          {/* Automatically advancing image carousel */}
          <div className="relative min-h-[320px] overflow-hidden bg-slate-900 sm:min-h-[460px]">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeDest * 100}%)` }}
            >
              {SLIDES.map((slide, index) => (
                <div
                  key={slide.id ?? slide.title ?? index}
                  className="relative h-full min-w-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
                </div>
              ))}
            </div>
          </div>

          {/* Destination details */}
          <article className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">
              Explore Sri Lanka
            </span>

            <h3 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              {destination.title}
            </h3>

            {destination.location && (
              <p className="mt-2 text-sm font-semibold text-amber-700">
                {destination.location}
              </p>
            )}

            <p className="mt-5 text-base leading-7 text-slate-600">
              {destination.description ||
                `Discover ${destination.title}, a memorable stop on your Sri Lankan journey. Explore the local scenery, culture, and experiences at your own pace.`}
            </p>

            {(destination.bestTimeToVisit || destination.duration) && (
              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-200 py-5">
                {destination.bestTimeToVisit && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Best time to visit
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {destination.bestTimeToVisit}
                    </p>
                  </div>
                )}

                {destination.duration && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Suggested duration
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {destination.duration}
                    </p>
                  </div>
                )}
              </div>
            )}

            {highlights.length > 0 ? (
              <div className="mt-6">
                <h4 className="font-bold text-slate-900">Highlights</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <li
                      key={`${highlight}-${index}`}
                      className="rounded-full border border-emerald-700/15 bg-emerald-700/5 px-3 py-1.5 text-sm font-medium text-emerald-800"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-6 border-l-2 border-emerald-600 pl-4 text-sm leading-6 text-slate-600">
                Make time to explore the surrounding area, enjoy local food, and
                experience the destination at a relaxed pace.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Choose a destination">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.id ?? slide.title ?? index}
                  type="button"
                  onClick={() => setActiveDest(index)}
                  aria-label={`Show ${slide.title}`}
                  aria-pressed={index === activeDest}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeDest
                      ? 'w-8 bg-emerald-700'
                      : 'w-2.5 bg-slate-300 hover:bg-emerald-500'
                  }`}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DestinationSection