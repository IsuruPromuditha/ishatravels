// src/components/booking/BookingForm.jsx
import React from 'react';
import { useBookingController } from '../../../../server/controller/useBookingController';

const inputClass =
  'w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none';
const labelClass = 'block text-xs font-bold text-slate-700 uppercase mb-1';

const BookingForm = () => {
  const { bookingData, submitted, loading, error, handleChange, handleSubmit } = useBookingController();

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot (hidden from humans) */}
            <input
              type="text"
              name="website"
              value={bookingData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Full Name</label>
                <input type="text" name="fullName" required placeholder="e.g. John Smith"
                  value={bookingData.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" name="email" required placeholder="you@example.com"
                  value={bookingData.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone / WhatsApp</label>
                <input type="tel" name="phone" placeholder="+44 7700 900123"
                  value={bookingData.phone} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Trip details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className={labelClass}>Pickup Location</label>
                <input type="text" name="pickupLocation" required placeholder="e.g. CMB Airport / Colombo"
                  value={bookingData.pickupLocation} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Drop Location</label>
                <input type="text" name="dropLocation" required placeholder="e.g. Ella / Galle / Kandy"
                  value={bookingData.dropLocation} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Start Date</label>
                <input type="date" name="startDate" required
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingData.startDate} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Duration (Days)</label>
                <select name="daysCount" value={bookingData.daysCount} onChange={handleChange} className={inputClass}>
                  {[1, 2, 3, 5, 7, 10, 14, 21].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Day' : 'Days'}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-md"
                >
                  {loading ? 'Sending...' : 'Find Packages'}
                </button>
              </div>
            </div>

            {error && (
              <p className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-semibold">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
