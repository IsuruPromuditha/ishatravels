// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../../models/tourData';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
      {/* Background Image Slide */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-slate-900/40 to-slate-900/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-center items-start text-white">
        <span className="bg-amber-500/90 text-emerald-950 text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest mb-4">
          Discover Wonder
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl leading-tight drop-shadow-md mb-4">
          {slide.title}
        </h1>
        <p className="text-sm sm:text-lg text-emerald-100 max-w-2xl drop-shadow mb-8 font-medium">
          {slide.tagline}
        </p>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
