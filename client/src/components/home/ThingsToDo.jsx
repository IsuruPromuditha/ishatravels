import React from 'react'
import { Link } from 'react-router-dom'

const ACTIVITIES = [
  {
    title: 'Relax on the beaches',
    description: 'Discover the island’s beautiful southern and eastern coastlines.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    path: '/destinations',
  },
  {
    title: 'Explore ancient sites',
    description: 'Visit historic landmarks including Sigiriya and the cultural triangle.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=80',
    path: '/destinations',
  },
  {
    title: 'Experience wildlife',
    description: 'Take a safari and look for elephants and other native wildlife.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80',
    path: '/destinations',
  },
  {
    title: 'Taste local food',
    description: 'Find Sri Lankan flavours, markets, and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    path: '/events',
  },
]

const ThingsToDo = () => (
  <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
    <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <article className="flex flex-col items-center justify-center rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900 to-slate-900/70 p-6 text-center shadow-xl shadow-emerald-950/20 sm:p-8 lg:min-h-[560px] lg:p-10">
        <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
          Explore the island
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
  Things to do in
  <span className="block text-emerald-400">Sri Lanka</span>
</h2>

        <p className="mt-6 text-justify text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mt-10">
          Sri Lanka is a land of endless discovery, with something to captivate
          every traveller. From sun-kissed beaches to misty hills, bustling
          markets to serene temples, every corner tells a story. We’re here to
          help you explore it all: local insights, expert tips, the best food,
          hidden gems, and experiences that turn every day into your next
          unforgettable memory. No matter your pace or passion, there’s always
          something new to see, taste, do, or experience—so you’ll never run
          out of ways to fall in love with our home.
        </p>

        <span className="mt-8 text-sm font-bold text-emerald-300 lg:text-base">
          Find your next unforgettable experience <span aria-hidden="true">→</span>
        </span>
      </article>

      <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 lg:min-h-[560px]">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
          Make the most of your trip
        </span>
        <h3 className="mb-5 mt-3 text-2xl font-extrabold">
          Popular things to do
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {ACTIVITIES.map((activity) => (
            <Link
              key={activity.title}
              to={activity.path}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition hover:-translate-y-1 hover:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="relative h-28 overflow-hidden sm:h-32">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-sm font-bold text-white">
                  {activity.title}
                </span>
              </div>
              <p className="p-3 text-justify text-xs leading-5 text-slate-400">
                {activity.description}
              </p>
            </Link>
          ))}
        </div>
      </article>
    </div>
  </section>
)

export default ThingsToDo