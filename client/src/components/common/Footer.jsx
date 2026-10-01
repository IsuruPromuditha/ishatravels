// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-200 border-t border-emerald-800/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🇱🇰</span>
            <span className="text-lg font-bold text-amber-400 tracking-wide uppercase">Love Sri Lanka</span>
          </div>
          <p className="text-xs text-emerald-300 leading-relaxed">
            Discover the pearl of the Indian Ocean. Unforgettable wildlife, serene beaches, ancient heritage, and world-renowned tea gardens await.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-amber-400 font-bold uppercase text-xs tracking-wider mb-4">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/destinations" className="hover:text-amber-300 transition">Popular Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-amber-300 transition">Tailor-Made Tour Packages</Link></li>
            <li><Link to="/itineraries" className="hover:text-amber-300 transition">Travel Itineraries</Link></li>
            <li><Link to="/events" className="hover:text-amber-300 transition">Cultural Festivals & Events</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-amber-400 font-bold uppercase text-xs tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#villas" className="hover:text-amber-300 transition">Luxury Villas & Bungalows</a></li>
            <li><a href="#offers" className="hover:text-amber-300 transition">Special Deals & Offers</a></li>
            <li><a href="#booking-form" className="hover:text-amber-300 transition">Instant Booking</a></li>
          </ul>
        </div>

        {/* Contact / Newsletter */}
        <div>
          <h4 className="text-amber-400 font-bold uppercase text-xs tracking-wider mb-4">Stay Inspired</h4>
          <p className="text-xs text-emerald-300 mb-3">Subscribe for travel deals & local guides.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-emerald-900 border border-emerald-700 text-xs px-3 py-2 rounded-l-lg text-white focus:outline-none w-full"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs px-4 py-2 rounded-r-lg uppercase">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-emerald-900 pt-6 text-center text-xs text-emerald-400">
        © {new Date().getFullYear()} Love Sri Lanka Tourism Portal. Designed with ReactJS & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;