// src/components/home/DestinationSection.jsx
import React, { useState } from 'react';
import { DESTINATIONS } from '../../models/tourData';

const DestinationSection = () => {
  const [activeDest, setActiveDest] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase">Must-Visit Places</span>
            <h2 className="text-3xl font-black text-slate-900 uppercase mt-1">Top Destinations in Sri Lanka</h2>
          </div>
          <p className="text-slate-500 text-xs max-w-md mt-2 md:mt-0">
            From golden south-coast beaches to heritage temples in the central cultural triangle.
          </p>
        </div>

        {/* Featured Destination Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
          <img 
            src={DESTINATIONS[activeDest].image} 
            alt={DESTINATIONS[activeDest].title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-3xl font-black text-white mb-2">
              {DESTINATIONS[activeDest].title}
            </h3>
            <p className="text-slate-200 text-sm max-w-2xl mb-6">
              {DESTINATIONS[activeDest].description}
            </p>

            {/* Thumbnail selector */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {DESTINATIONS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDest(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${
                    idx === activeDest 
                      ? 'bg-amber-500 text-emerald-950' 
                      : 'bg-white/20 text-white hover:bg-white/40'
                  }`}
                >
                  {item.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationSection;