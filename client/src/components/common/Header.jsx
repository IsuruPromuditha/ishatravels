// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function for active NavLink styling
  const navLinkClass = ({ isActive }) =>
    `relative text-xs uppercase tracking-widest font-bold transition-colors duration-200 py-1 ${
      isActive
        ? 'text-amber-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:rounded-full'
        : 'text-emerald-100 hover:text-amber-300'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? 'bg-amber-500 text-emerald-950'
        : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
              🇱🇰
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-wider text-amber-400 block uppercase leading-none group-hover:text-amber-300 transition-colors">
                Love Sri Lanka
              </span>
              <span className="text-[10px] text-emerald-300 font-semibold tracking-widest uppercase block mt-1">
                Official Travel Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink>
            <NavLink to="/packages" className={navLinkClass}>Tour Packages</NavLink>
            <NavLink to="/itineraries" className={navLinkClass}>Itineraries</NavLink>
            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
            <NavLink to="/offers" className={navLinkClass}>Offers</NavLink>
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#booking-form" 
              className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 active:scale-95 transition-all duration-200"
            >
              Book Your Tour
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-b border-emerald-800/60 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/destinations" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Destinations</NavLink>
          <NavLink to="/packages" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Tour Packages</NavLink>
          <NavLink to="/itineraries" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Itineraries</NavLink>
          <NavLink to="/events" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Events</NavLink>
          <NavLink to="/offers" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>Offers</NavLink>
          
          <div className="pt-4 border-t border-emerald-900">
            <a 
              href="#booking-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black py-3 rounded-lg text-xs uppercase tracking-wider shadow"
            >
              Book Your Tour
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;