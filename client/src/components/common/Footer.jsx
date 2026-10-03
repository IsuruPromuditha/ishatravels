import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="group mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-xl shadow-lg shadow-emerald-950/40 transition-transform group-hover:scale-105">
              🇱🇰
            </span>
            <span className="text-lg font-black uppercase tracking-wider text-amber-300">
              Love Sri Lanka
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Discover the pearl of the Indian Ocean. Unforgettable wildlife,
            serene beaches, ancient heritage, and world-renowned tea gardens await.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Explore
          </h2>
          <ul className="space-y-3 text-sm">
            <li><Link to="/destinations" className="transition-colors hover:text-emerald-300">Popular Destinations</Link></li>
            <li><Link to="/packages" className="transition-colors hover:text-emerald-300">Tour Packages</Link></li>
            <li><Link to="/itineraries" className="transition-colors hover:text-emerald-300">Travel Itineraries</Link></li>
            <li><Link to="/events" className="transition-colors hover:text-emerald-300">Cultural Events</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#villas" className="transition-colors hover:text-emerald-300">Villas &amp; Bungalows</a></li>
            <li><a href="#offers" className="transition-colors hover:text-emerald-300">Special Offers</a></li>
            <li><a href="#booking-form" className="transition-colors hover:text-emerald-300">Book Your Tour</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Stay Inspired
          </h2>
          <p className="mb-4 text-sm leading-6 text-slate-400">
            Subscribe for travel deals and local guides.
          </p>
          <form className="flex">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="rounded-r-xl bg-emerald-400 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-colors hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Love Sri Lanka Tourism Portal.</p>
          <p>Designed with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer