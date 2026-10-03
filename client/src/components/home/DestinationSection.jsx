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

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            Must-Visit Places
          </span>
          <h2 className="mt-1 text-3xl font-black uppercase text-slate-900">
            Top Destinations in Sri Lanka
          </h2>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            From golden south-coast beaches to heritage temples in the central
            cultural triangle.
          </p>
        </header>

        <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${SLIDES.length * 100}%`,
              transform: `translateX(-${activeDest * (100 / SLIDES.length)}%)`,
            }}
          >
            {SLIDES.map((destination) => (
              <article
                key={destination.id}
                className="relative h-full"
                style={{ width: `${100 / SLIDES.length}%` }}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-8 pb-24">
                  <h3 className="mb-2 text-3xl font-black text-white">
                    {destination.title}
                  </h3>
                  <p className="max-w-2xl text-sm text-slate-200">
                    {destination.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="absolute bottom-5 left-8 right-8 flex gap-3 overflow-x-auto">
            {SLIDES.map((destination, index) => (
              <button
                key={destination.id}
                type="button"
                onClick={() => setActiveDest(index)}
                aria-label={`Show ${destination.title}`}
                aria-pressed={index === activeDest}
                className={`shrink-0 rounded-lg px-4 py-2 text-xs font-bold uppercase transition-colors ${
                  index === activeDest
                    ? 'bg-amber-500 text-emerald-950'
                    : 'bg-white/20 text-white hover:bg-white/40'
                }`}
              >
                {destination.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationSection