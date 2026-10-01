// src/components/home/CategorySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../models/tourData';

const CategorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-extrabold text-xs tracking-widest uppercase">Explore By Category</span>
          <h2 className="text-3xl font-black text-slate-900 uppercase mt-1">Plan Your Experience</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="p-6 bg-emerald-50/50 hover:bg-emerald-600 group rounded-2xl border border-emerald-100 transition-all duration-300 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-xl"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-white text-sm uppercase">
                {cat.name}
              </h3>
              <span className="text-[10px] text-slate-500 group-hover:text-emerald-100 font-medium mt-1">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;