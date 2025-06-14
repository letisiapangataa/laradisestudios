// pages/about.tsx
"use client"

import React from 'react';
import "../global.css";
import Head from 'next/head';
import Particles from 'app/components/particles';
import Link from "next/link";
import { useState } from 'react';
import SocialIcons from 'app/components/socialicons';
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

const CompanySolutions: React.FC = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
     <> 
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
         <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
       <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Company Solutions | Laradise Studios</title>
        <link rel="icon" href="https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png" type="image/png" />
        <meta name="description" content="Explore our company solutions that empower organisations with digital solutions and innovative technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className={`sidebar fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Sidebar content */}
      <div className="p-8">
        <p className="text-xl font-bold mt-4">
            <Link href="/">
            <img
              className="ls-logo"
              src="https://res.cloudinary.com/louiy9obu/image/upload/fl_preserve_transparency/v1712562804/LaradiseStudios_LOGO_2_kwdbcp.jpg?_s=public-apps"
              alt="Laradise Studios Logo"
              width="100%"
            />
          </Link>        
        </p>
        <li className="li-menu">
          <Link href="/">Home</Link>
        </li>
        <li className="li-menu">
          <Link href="/apps">Apps</Link>
        </li>
        <li className="li-menu">
          <Link href="/games">Games</Link>
        </li>
        <li className="li-menu">
          <Link href="/store">Store</Link>
        </li>
        <li className="li-menu">-</li>
        <li className="li-menu-sm">
          <Link href="/our-story">Our Story</Link>
        </li>
        <li className="li-menu-sm">
          <Link href="/company-solutions">Company Solutions</Link>
        </li>
        <li className="li-menu-sm">
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <SocialIcons />
      </div>
    </div>

    <Link href="" onClick={toggleSidebar}>
        <Particles
            className="particles"
            quantity={500} />
    </Link>

   
    <div className={`apps-page bg-gray-50 min-h-screen ${inter.className}`}>
      
      {/* Header Section */}
      <header className="pages-header">
        <h1 className="text-4xl font-bold">&lt; COMPANY SOLUTIONS &gt;</h1>
        <p className="pages-sub-title">We empower organisations with digital solutions and innovative technologies.</p>
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
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-microsoft_dylyi4.png"
              alt="Microsoft"
            />
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-apple_ycf1hx.png"
              alt="Apple"
            />
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1746868743/laradisestudios-apps-google_mo4gwo.png"
              alt="Google"
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

export default CompanySolutions;
