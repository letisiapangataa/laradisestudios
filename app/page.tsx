"use client";

import React from "react";
import Particles from "./components/particles";
import Logo from "./components/logo";
import { useState } from "react";
import Link from "next/link";
import Apps from "@/pages/ai-artists"
import SocialIcons from "./components/socialicons";
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";


export default function Home() {
  
      const [isOpen, setIsOpen] = useState(false);
  
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
  
  return (
    <>
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
          <Link href="/laradise-universe">
            <strong>UNIVERSE</strong>
          </Link>
        </li>
        <li className="li-menu">
          <Link href="/ai-music">
            <strong>MUSIC x A.I.</strong>
          </Link>
        </li>
           <li className="li-menu">
          <Link href="/ai-artists">
            <strong>ARTISTS x A.I.</strong>
          </Link>
        </li>
        <li className="li-menu">
          ☁️ 💗 ☁️
        </li>
        <li className="li-menu-sm">
          <Link href="mailto:contact@laradisestudios.com">
            Contact Us
          </Link>
        </li>
        <SocialIcons />
      </div>
    </div>

    <div className="animate-fade-in">
        <h2 className="ls-copyright">
            Tap anywhere to get started.
        </h2>
     </div>

    <Link href="" onClick={toggleSidebar}>
        <Particles
            className="particles"
            quantity={500} />
    </Link>

     <Logo />

        <div className="my-16 text-center animate-fade-in">
        <h2 className="ls-copyright">
            © 2025 Laradise Studios.
        </h2>
    </div>
    </>
  );

}
