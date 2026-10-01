// src/components/home/OfferSection.jsx
import React, { useState } from 'react';
import { OFFERS } from '../../models/tourData';

const OfferSection = () => {
  const [offerIndex, setOfferIndex] = useState(0);

  const nextOffer = () => {
    setOfferIndex((prev) => (prev + 1) % OFFERS.length);
  };

  const prevOffer = () => {
    setOfferIndex((prev) => (prev === 0 ? OFFERS.length - 1 : prev - 1));
  };

  const offer = OFFERS[offerIndex];

  return (
    <section id="offers" className="py-20 bg-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold text-xs tracking-widest uppercase">Promotions</span>
          <h2 className="text-3xl font-black text-slate-900 uppercase mt-1">Latest Tour Package Offers</h2>
        </div>

        {/* Vertical Offer Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-xl border border-amber-200 flex flex-col md:flex-row gap-6 items-center">
          <img 
            src={offer.image} 
            alt={offer.title} 
            className="w-full md:w-1/2 h-56 object-cover rounded-xl"
          />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="bg-red-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                {offer.discount}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2 mb-2">{offer.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{offer.validTill}</p>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-black text-emerald-700">{offer.offerPrice}</span>
                <span className="text-xs text-slate-400 line-through">{offer.originalPrice}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow">
                Book This Deal
              </button>
              
              {/* Vertical control buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={prevOffer}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-500 text-slate-800 transition flex items-center justify-center font-bold text-xs"
                >
                  ↑
                </button>
                <button 
                  onClick={nextOffer}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-500 text-slate-800 transition flex items-center justify-center font-bold text-xs"
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

export default OfferSection;