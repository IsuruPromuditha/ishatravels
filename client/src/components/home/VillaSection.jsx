import React from 'react'
import { VILLAS } from '../../models/tourData'

const VillaSection = () => {
  return (
    <section id="villas" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Luxury Accommodation
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Best Villas &amp; <span className="text-emerald-400">Bungalows</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base lg:max-w-none lg:whitespace-nowrap">
  Handpicked boutique stays, from palm-fringed coastlines to peaceful tea-country hills.
</p>
        </header>

        {VILLAS.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VILLAS.slice(0, 3).map((villa, index) => (
              <article
                key={villa.id ?? villa.name ?? index}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-950/40"
              >
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
                  {villa.rating != null && (
                    <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-amber-300 backdrop-blur-md">
                      ★ {villa.rating} Rating
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {villa.location}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-white">
                    {villa.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {villa.description ||
                      `Enjoy a relaxing stay at ${villa.name} in ${villa.location}.`}
                  </p>

                  {villa.tags?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {villa.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Starting from
                    </p>
                    <p className="mt-1 text-xl font-black text-amber-300">
                      {villa.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400">No villas are available yet.</p>
        )}
      </div>
    </section>
  )
}

export default VillaSection