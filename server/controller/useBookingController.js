// src/controllers/useBookingController.js
import { useState } from 'react';

// Vite: import.meta.env.VITE_API_URL | CRA: process.env.REACT_APP_API_URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  pickupLocation: '',
  dropLocation: '',
  startDate: '',
  daysCount: 1,
  website: '', // honeypot, must stay empty
};

export const useBookingController = () => {
  const [bookingData, setBookingData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setBookingData(initialState);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { bookingData, submitted, loading, error, handleChange, handleSubmit };
};
