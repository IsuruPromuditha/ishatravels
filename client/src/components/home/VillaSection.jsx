// src/components/home/VillaSection.jsx
import React, { useState } from 'react';
import { VILLAS } from '../../models/tourData';

const VillaSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevVilla = () => {
    setActiveIndex((prev) => (prev === 0 ? VILLAS.length - 1 : prev - 1));
  };

  const nextVilla = () => {
    setActiveIndex((prev) => (prev === VILLAS.length - 1 ? 0 : prev + 1));
  };

  const villa = VILLAS[activeIndex];

  return (
    <section id="villas" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase">Luxury Accommodation</span>
          <h2 className="text-3xl font-black uppercase mt-1">Best Villas & Bungalows</h2>
          <p className="text-emerald-200 text-xs max-w-md mx-auto mt-2">
            Handpicked boutique luxury stays from palm-fringed coastlines to tea estate hills.
          </p>
        </div>

        {/* Vertical Slider Card Layout */}
        <div className="max-w-4xl mx-auto bg-emerald-950/80 rounded-2xl overflow-hidden border border-emerald-700/50 shadow-2xl grid grid-cols-1 md:grid-cols-2">
          
          {/* Villa Image */}
          <div className="relative h-64 md:h-auto">
            <img 
              src={villa.image} 
              alt={villa.name} 
              className="w-full h-full object-cover transition-all duration-700" 
            />
            <span className="absolute top-4 left-4 bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full shadow">
              ⭐ {villa.rating} Rating
            </span>
          </div>

          {/* Villa Details & Vertical Controls */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">{villa.location}</p>
              <h3 className="text-2xl font-black mt-1 mb-3">{villa.name}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {villa.tags.map((tag, idx) => (
                  <span key={idx} className="bg-emerald-800/60 text-emerald-200 text-[10px] px-2.5 py-1 rounded-md border border-emerald-700">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-lg font-bold text-amber-300">{villa.price}</p>
            </div>

            {/* Vertical Control Navigation */}
            <div className="flex items-center justify-between border-t border-emerald-800/80 pt-6 mt-6">
              <span className="text-xs text-emerald-400 font-mono">
                0{activeIndex + 1} / 0{VILLAS.length}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={prevVilla}
                  className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-amber-500 hover:text-emerald-950 transition flex items-center justify-center font-bold"
                >
                  ↑
                </button>
                <button 
                  onClick={nextVilla}
                  className="w-10 h-10 rounded-full bg-emerald-800 hover:bg-amber-500 hover:text-emerald-950 transition flex items-center justify-center font-bold"
                >
                  ↓
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VillaSection;