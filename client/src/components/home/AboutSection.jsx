import React from 'react'

const AboutSection = () => {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-12">
      <h2 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
        Love Sri Lanka, Always
      </h2>

      <div>
        <p className="mb-6 text-lg leading-8 text-gray-700">
          An island just 65,610 square kilometres, yet Sri Lanka feels like the world
          within your reach. Drive from sun-drenched beaches to misty tea hills,
          wander lush rainforests, and explore ancient cities steeped in history and
          wonder. Savour vibrant cuisine—from spicy curries to fresh seafood—while
          soaking in the rhythm of local life and colourful traditions. Meet warm,
          welcoming people whose smiles and stories make every journey unforgettable.
          Encounter elephants roaming freely, leopards in the wild, and birds hidden
          in emerald forests. Every day here is a new adventure, a feast for the
          senses, and a trip of a lifetime, a place to fall in love again and again.
        </p>

        <button
          type="button"
          className="rounded-md bg-emerald-800 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
        >
          Discover Sri Lanka
        </button>
      </div>
    </section>
  )
}

export default AboutSection