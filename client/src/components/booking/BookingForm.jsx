// src/components/booking/BookingForm.jsx
import React from 'react';
import { useBookingController } from '../../controllers/useBookingController';

const BookingForm = () => {
  const { bookingData, submitted, handleChange, handleSubmit } = useBookingController();

  return (
    <section id="booking-form" className="relative -mt-16 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-100">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h3 className="text-xl font-black text-emerald-950 uppercase tracking-wide">
              Plan Your Sri Lankan Adventure
            </h3>
            <p className="text-xs text-slate-500">Fill in details for a customized tour estimate</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">
            Instant Quote
          </span>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-center font-bold text-sm">
            🎉 Thank you! Your tour inquiry has been submitted. Our local travel expert will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                required
                placeholder="e.g. CMB Airport / Colombo"
                value={bookingData.pickupLocation}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Drop Location</label>
              <input
                type="text"
                name="dropLocation"
                required
                placeholder="e.g. Ella / Galle / Kandy"
                value={bookingData.dropLocation}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                value={bookingData.startDate}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Duration (Days)</label>
              <select
                name="daysCount"
                value={bookingData.daysCount}
                onChange={handleChange}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {[1, 2, 3, 5, 7, 10, 14, 21].map((num) => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Day' : 'Days'}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-md"
              >
                Find Packages
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;