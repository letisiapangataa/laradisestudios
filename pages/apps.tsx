// pages/about.tsx
"use client"

import React from 'react';
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";

// Load the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const Apps: React.FC = () => {
  
  return (
     <> 

    <div className={`apps-page bg-gray-50 min-h-screen ${inter.className}`}>
      
      {/* Header Section */}
      <header className={`apps-header text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-black ${calSans.className}`}>
        <h1 className="text-xl font-extrabold">Welcome to Laradise Studios Apps</h1>
        <p className="text-l mt-4">Explore our collection of innovative and creative applications.</p>
      </header>

      {/* Apps Showcase Section */}
      <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="app-card border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">App 1</h2>
          <p className="mt-4 text-gray-600">Description of App 1. This app helps you do amazing things.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
        <div className="app-card border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">App 2</h2>
          <p className="mt-4 text-gray-600">Description of App 2. This app makes your life easier.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
        <div className="app-card border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">App 3</h2>
          <p className="mt-4 text-gray-600">Description of App 3. This app is designed for productivity.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="apps-footer text-center py-6 bg-gray-200">
        <p className="text-gray-700">© 2025 Laradise Studios. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Apps;
