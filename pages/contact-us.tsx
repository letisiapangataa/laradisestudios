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

const ContactUs: React.FC = () => {
  
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
        <title>Contact Us | Laradise Studios</title>
        <link rel="icon" href="https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png" type="image/png" />
        <meta name="description" content="Get in touch with Laradise Studios for inquiries, support, or collaboration opportunities." />
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
            quantity={100} />
    </Link>

   
    <div className={`apps-page bg-gray-50 min-h-screen ${inter.className}`}>
      
      {/* Header Section */}
      <header className="pages-header-contact">
        <h1 className="text-4xl font-bold">CONTACT US</h1>
        <p className="pages-sub-title">Get in touch with us for questions, feedback, or partnership opportunities.</p>
      </header>

      {/* Contact Us Form Section*/}

      <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="contact-form-container flex items-center justify-center min-h-screen bg-gray-100">
            <form
            className="contact-form flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const data = {
              name: formData.get("name") as string,
              email: formData.get("email") as string,
              message: formData.get("message") as string,
              };

              // Send form data to an API route that will use nodemailer
              const response = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
              });

              if (response.ok) {
              alert(`We've received your message and will get back to you shortly.`);
              (form as HTMLFormElement).reset();
              } else {
              alert("Sorry, there was an error sending your message.");
              }
            }}
            >
            <label className="font-semibold">
              Name
              <input
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              required
              autoComplete="name"
              />
            </label>
            <label className="font-semibold">
              Email Address
              <input
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              required
              autoComplete="email"
              />
            </label>
            <label className="font-semibold">
              Message
              <textarea
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              name="message"
              rows={4}
              required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            </form>
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

export default ContactUs;
