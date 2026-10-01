// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import DestinationsPage from '../pages/DestinationsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="packages" element={<DestinationsPage />} />
        <Route path="itineraries" element={<DestinationsPage />} />
        <Route path="events" element={<DestinationsPage />} />
        <Route path="offers" element={<DestinationsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;