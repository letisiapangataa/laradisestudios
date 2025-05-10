// pages/about.tsx
"use client"

import React from 'react';
import "../global.css";
import Head from 'next/head';
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
      <header className="pages-header">
        <img
          className="ls-pages-logo mx-auto my-auto"
          src="https://res.cloudinary.com/louiy9obu/image/upload/v1746865968/laradisestudios-pages-logo_u6uc0u.png"
          alt="Laradise Studios Logo"
          width="100%"
        />

        <h1 style={{ fontFamily: '"ocr-a-std", monospace' }}>
        </h1>
        <p className="pages-sub-title" style={{ fontFamily: '"ocr-a-std", monospace' }}> &lt; APPLICATIONS &gt;</p>
        <p className="pages-sub-title-sm" style={{ fontFamily: '"ocr-a-std", monospace' }}>Explore our collection of innovative and creative applications.</p>
      </header>

      {/* Apps Showcase Section */}

      <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Apps - Slideshow #1*/}
        <div className="pages-apps-slideshow">
          <h2 className="text-2xl font-semibold text-gray-800">Apps - Slideshow #1</h2>
        </div>

      {/* Apps - Published with Modern Technologies */}
        <div className="pages-apps-published">
          <h2>PUBLISHED WITH MODERN TECHNOLOGIES</h2>
          <div>
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-google_mo4gwo.png"
              alt="Google"
            />
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-microsoft_dylyi4.png"
              alt="Microsoft"
            />
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-apple_ycf1hx.png"
              alt="Apple"
            />
          </div>
        </div>

        {/* Apps - App Preview */}
        <div className="pages-apps-preview">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/louiy9obu/image/upload/v1746869549/laradisestudios-apps-preview_zs1fhd.png"
            alt="Preview 1"
          />
          <img
            src="https://res.cloudinary.com/louiy9obu/image/upload/v1746869549/laradisestudios-apps-preview_zs1fhd.png"
            alt="Preview 2"
          />
          <img
            src="https://res.cloudinary.com/louiy9obu/image/upload/v1746869549/laradisestudios-apps-preview_zs1fhd.png"
            alt="Preview 3"
          />
        </div>
      </div>

        {/* Apps - Slideshow #2 */}
        <div className="pages-apps-slideshow">
          <h2 className="text-2xl font-semibold text-gray-800">Apps - Slideshow #2</h2>
        </div>

      </section>

      {/* Footer Section */}
      <footer className="pages-footer text-center py-2 bg-gray-800 text-white">
        <p>© 2025 Laradise Studios. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Apps;
