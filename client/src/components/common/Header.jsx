import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlanningMenuOpen, setIsPlanningMenuOpen] = useState(false)
  const location = useLocation()

  // Automatically close menus on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsPlanningMenuOpen(false)
  }, [location.pathname])

  // Desktop link class with standard 12px (text-xs) nav font size
  const navLinkClass = ({ isActive }) =>
    `relative inline-flex h-9 items-center rounded-md px-2.5 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
      isActive
        ? 'text-amber-300 after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:bg-amber-300'
        : 'text-slate-300 hover:text-emerald-300'
    }`

  // Mobile navigation link class
  const mobileNavLinkClass = ({ isActive }) =>
    `flex min-h-[44px] items-center rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
      isActive
        ? 'bg-emerald-400/10 text-amber-300'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  // Dropdown link class for the "Planning a Trip" submenu
  const dropdownNavLinkClass = ({ isActive }) =>
    `flex min-h-[38px] items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
      isActive
        ? 'bg-emerald-400/10 text-amber-300'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsPlanningMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-2">
          
          {/* Brand Logo & Title (Far Left) */}
          <Link 
            to="/" 
            onClick={closeMobileMenu} 
            className="group flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shrink-0"
          >
            <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-lg sm:text-xl shadow-lg shadow-emerald-950/40 transition-transform group-hover:scale-105">
              🇱🇰
            </span>
            <span>
              <span className="block text-sm font-black uppercase leading-none tracking-wider text-amber-300 transition-colors group-hover:text-amber-200 sm:text-base">
                Love Sri Lanka
              </span>
              <span className="mt-1 block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Official Travel Portal
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Centered & Standard Web Size) */}
          <nav className="hidden items-center justify-center gap-0.5 xl:gap-1.5 lg:flex mx-auto" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink>
            <NavLink to="/packages" className={navLinkClass}>Packages</NavLink>
            <NavLink to="/itineraries" className={navLinkClass}>Itineraries</NavLink>
            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
            <NavLink to="/activities" className={navLinkClass}>Activities</NavLink>

            {/* Desktop Dropdown: Planning a Trip */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsPlanningMenuOpen((open) => !open)}
                className="inline-flex h-9 items-center gap-1 rounded-md px-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-expanded={isPlanningMenuOpen}
                aria-haspopup="true"
              >
                Planning <span aria-hidden="true" className="text-[9px]">▾</span>
              </button>

              {isPlanningMenuOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-white/10 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-md">
                  <NavLink to="/faqs" onClick={() => setIsPlanningMenuOpen(false)} className={dropdownNavLinkClass}>
                    FAQs
                  </NavLink>
                  <NavLink to="/visa-entry-requirements" onClick={() => setIsPlanningMenuOpen(false)} className={dropdownNavLinkClass}>
                    Visa & Entry Requirements
                  </NavLink>
                  <NavLink to="/media-coverage" onClick={() => setIsPlanningMenuOpen(false)} className={dropdownNavLinkClass}>
                    Recent Media Coverage
                  </NavLink>
                  <NavLink to="/budget" onClick={() => setIsPlanningMenuOpen(false)} className={dropdownNavLinkClass}>
                    Budget
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Action Button (Far Right) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#booking-form"
              className="hidden items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 md:inline-flex"
            >
              Book Your Tour <span className="ml-1.5" aria-hidden="true">→</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4Z" />
                ) : (
                  <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10 bg-slate-950 px-4 py-3 shadow-2xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-1">
            <NavLink to="/" onClick={closeMobileMenu} className={mobileNavLinkClass}>Home</NavLink>
            <NavLink to="/destinations" onClick={closeMobileMenu} className={mobileNavLinkClass}>Destinations</NavLink>
            <NavLink to="/packages" onClick={closeMobileMenu} className={mobileNavLinkClass}>Tour Packages</NavLink>
            <NavLink to="/itineraries" onClick={closeMobileMenu} className={mobileNavLinkClass}>Itineraries</NavLink>
            <NavLink to="/events" onClick={closeMobileMenu} className={mobileNavLinkClass}>Events</NavLink>
            <NavLink to="/offers" onClick={closeMobileMenu} className={mobileNavLinkClass}>Offers</NavLink>
            <NavLink to="/activities" onClick={closeMobileMenu} className={mobileNavLinkClass}>Activities</NavLink>

            {/* Mobile Dropdown Button */}
            <button
              type="button"
              onClick={() => setIsPlanningMenuOpen((open) => !open)}
              className={`${mobileNavLinkClass({ isActive: isPlanningMenuOpen })} w-full justify-between`}
              aria-expanded={isPlanningMenuOpen}
            >
              <span>Planning a Trip</span>
              <span aria-hidden="true" className="text-xs">▾</span>
            </button>

            {/* Mobile Submenu */}
            {isPlanningMenuOpen && (
              <div className="my-1 ml-4 border-l-2 border-emerald-400/20 pl-2 space-y-1">
                <NavLink to="/faqs" onClick={closeMobileMenu} className={mobileNavLinkClass}>FAQs</NavLink>
                <NavLink to="/visa-entry-requirements" onClick={closeMobileMenu} className={mobileNavLinkClass}>Visa and Entry Requirements</NavLink>
                <NavLink to="/media-coverage" onClick={closeMobileMenu} className={mobileNavLinkClass}>Recent Media Coverage</NavLink>
                <NavLink to="/budget" onClick={closeMobileMenu} className={mobileNavLinkClass}>Budget</NavLink>
              </div>
            )}

            {/* Mobile CTA */}
            <a
              href="#booking-form"
              onClick={closeMobileMenu}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-400 px-4 py-2.5 text-center text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg transition hover:bg-emerald-300"
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