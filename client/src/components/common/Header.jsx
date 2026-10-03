import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
      isActive
        ? 'text-amber-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-amber-300'
        : 'text-slate-300 hover:text-emerald-300'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? 'bg-emerald-400/10 text-amber-300'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" onClick={closeMobileMenu} className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-xl shadow-lg shadow-emerald-950/40 transition-transform group-hover:scale-105">
              🇱🇰
            </span>
            <span>
              <span className="block text-base font-black uppercase leading-none tracking-wider text-amber-300 transition-colors group-hover:text-amber-200 sm:text-lg">
                Love Sri Lanka
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Official Travel Portal
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink>
            <NavLink to="/packages" className={navLinkClass}>Tour Packages</NavLink>
            <NavLink to="/itineraries" className={navLinkClass}>Itineraries</NavLink>
            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
            <NavLink to="/offers" className={navLinkClass}>Offers</NavLink>
          </nav>

          <a
            href="#booking-form"
            className="hidden rounded-full bg-emerald-400 px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 md:inline-flex"
          >
            Book Your Tour <span className="ml-2" aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4Z" />
              ) : (
                <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="border-t border-white/10 bg-slate-950 px-4 py-4 shadow-2xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-1">
            <NavLink to="/" onClick={closeMobileMenu} className={mobileNavLinkClass}>Home</NavLink>
            <NavLink to="/destinations" onClick={closeMobileMenu} className={mobileNavLinkClass}>Destinations</NavLink>
            <NavLink to="/packages" onClick={closeMobileMenu} className={mobileNavLinkClass}>Tour Packages</NavLink>
            <NavLink to="/itineraries" onClick={closeMobileMenu} className={mobileNavLinkClass}>Itineraries</NavLink>
            <NavLink to="/events" onClick={closeMobileMenu} className={mobileNavLinkClass}>Events</NavLink>
            <NavLink to="/offers" onClick={closeMobileMenu} className={mobileNavLinkClass}>Offers</NavLink>

            <a
              href="#booking-form"
              onClick={closeMobileMenu}
              className="mt-3 block rounded-xl bg-emerald-400 px-4 py-3 text-center text-xs font-black uppercase tracking-wider text-slate-950 transition hover:bg-emerald-300"
            >
              Book Your Tour →
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header