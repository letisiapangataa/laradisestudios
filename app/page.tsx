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
    <div className="animate-fade-in">
  <h2 className="ls-copyright">
    <a href="https://www.instagram.com/laradisestudios" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
    {" x "}
    <a href="https://www.linkedin.com/company/laradisestudios" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    {" x "}
    <a href="https://www.tiktok.com/@laradisestudios" target="_blank" rel="noopener noreferrer">
      TikTok
    </a>
    {" x "}
    <a href="https://www.youtube.com/@laradisestudios" target="_blank" rel="noopener noreferrer">
      YouTube
    </a>
  </h2>
</div>



        <Particles
            className="particles"
            quantity={500} />

     <Logo />

        <div className="my-16 text-center animate-fade-in">
        <h2 className="ls-copyright">
            © 2025 Laradise Studios Limited.
        </h2>
    </div>
    </>
  );

}
