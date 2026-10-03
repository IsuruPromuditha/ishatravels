// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import DestinationsPage from '../pages/DestinationsPage';
import TourPackages from '../pages/TourPackages';
import EventsPage from '../pages/EventsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="packages" element={<TourPackages />} />
        <Route path="itineraries" element={<DestinationsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="offers" element={<DestinationsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;