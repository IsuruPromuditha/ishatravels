// src/pages/HomePage.jsx
import React from 'react';

// 1. Make sure all component imports are present:
import HeroSection from '../components/home/HeroSection';
import BookingForm from '../components/booking/BookingForm';
import CategorySection from '../components/home/CategorySection';
import VillaSection from '../components/home/VillaSection';
import DestinationSection from '../components/home/DestinationSection';
import OfferSection from '../components/home/OfferSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BookingForm />
      <CategorySection />
      <VillaSection />
      <DestinationSection />
      <OfferSection />
    </div>
  );
};

export default HomePage;