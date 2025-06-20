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
import Slideshow from '../app/components/slideshow';

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
          <Link href="https://www.shopify.com/nz" target="_blank" rel="noopener noreferrer">
            Store
          </Link>
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
      <header className="pages-header-cs-intro">
        <h1 className="text-4xl font-bold">COMPANY SOLUTIONS</h1>
        <p className="pages-sub-title-cs">We empower organisations with digital solutions and innovative technologies.</p>
      </header>

      {/* Apps Showcase Section */}

      <div className="pages-apps-slideshow">
          <Slideshow
            slides={[
              { image: "https://images.pexels.com/photos/32412580/pexels-photo-32412580/free-photo-of-woman-in-black-with-white-umbrella-by-tree.jpeg", title: "App 1", description: "Description for App 1" },
              { image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "App 2", description: "Description for App 2" },
              { image: "https://images.pexels.com/photos/8762881/pexels-photo-8762881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "App 3", description: "Description for App 3" }
            ]}
            interval={2000}
            showArrows={true}
            showIndicators={true}
          />
      </div>

      <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8">
      <header className="pages-header-cs">
        <h2 className="text-4xl font-bold">GET IN TOUCH WITH US</h2>
        <p className="pages-sub-title">     
        <Link href="/contact-us">
          📩 <strong>Contact Us</strong> to explore more tailored solutions.
        </Link>
        </p>
      </header>

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
