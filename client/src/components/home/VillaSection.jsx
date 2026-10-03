import React, { useEffect, useState } from 'react'
import { VILLAS } from '../../models/tourData'

const VillaSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const villaCount = VILLAS.length
  const cardsToShow = Math.min(2, villaCount)

  useEffect(() => {
    if (villaCount < 2) return

    const intervalId = setInterval(() => {
      setActiveIndex((index) => (index + 1) % villaCount)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [villaCount])

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? villaCount - 1 : index - 1))
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % villaCount)
  }

  return (
    <section id="villas" className="bg-emerald-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Luxury Accommodation
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">
            Best Villas &amp; Bungalows
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-emerald-200">
            Handpicked boutique luxury stays from palm-fringed coastlines to tea
            estate hills.
          </p>
        </header>

        {villaCount > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {Array.from({ length: cardsToShow }, (_, cardIndex) => {
                const villa = VILLAS[(activeIndex + cardIndex) % villaCount]
                const description =
                  villa.description ||
                  `Enjoy a relaxing stay at ${villa.name} in ${villa.location}. ${
                    villa.tags?.length
                      ? `Experience ${villa.tags.join(', ').toLowerCase()} and`
                      : 'Enjoy'
                  } discover the best of Sri Lanka.`

                return (
                  <article
                    key={`${villa.name}-${activeIndex}-${cardIndex}`}
                    className="overflow-hidden rounded-2xl border border-emerald-700/50 bg-emerald-950/80 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-56">
                      <img
                        src={villa.image}
                        alt={villa.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-emerald-950 shadow">
                        ⭐ {villa.rating} Rating
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        {villa.location}
                      </p>
                      <h3 className="mb-3 mt-1 text-2xl font-black">{villa.name}</h3>

                      <p className="mb-5 text-sm leading-6 text-emerald-100">
                        {description}
                      </p>

                      <div className="mb-5 flex flex-wrap gap-2">
                        {villa.tags.map((tag, index) => (
                          <span
                            key={`${tag}-${index}`}
                            className="rounded-md border border-emerald-700 bg-emerald-800/60 px-2.5 py-1 text-xs text-emerald-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-lg font-bold text-amber-300">{villa.price}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            {villaCount > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-emerald-800 pt-5">
                <span className="font-mono text-sm text-emerald-300">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(villaCount).padStart(2, '0')}
                </span>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Show previous villas"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 font-bold transition-colors hover:bg-amber-500 hover:text-emerald-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Show next villas"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 font-bold transition-colors hover:bg-amber-500 hover:text-emerald-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-emerald-200">No villas are available yet.</p>
        )}
      </div>
    </section>
  )
}

export default VillaSection