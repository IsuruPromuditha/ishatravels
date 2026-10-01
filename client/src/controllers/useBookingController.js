// src/controllers/useBookingController.js
import { useState } from 'react';

export const useBookingController = () => {
  const [bookingData, setBookingData] = useState({
    pickupLocation: '',
    dropLocation: '',
    startDate: '',
    daysCount: 1,
    guestsCount: 2,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted successfully:', bookingData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return {
    bookingData,
    submitted,
    handleChange,
    handleSubmit,
  };
};