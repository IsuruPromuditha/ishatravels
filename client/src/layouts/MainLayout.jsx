// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow:1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;