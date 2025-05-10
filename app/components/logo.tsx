// Laradise Studios (Logo Component / Sidebar Navigation)

import React from 'react';
import Particles from 'app/components/particles';
import Link from "next/link";
import { useState } from 'react';
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import SocialIcons from 'app/components/socialicons';
import { Metadata } from "next";

const Logo: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <> 
    <img className="ls-main-logo" src="https://res.cloudinary.com/louiy9obu/image/upload/v1712317603/LS_NoPreview_kvsyqs.png" alt="Laradise Studios Logo"></img>   
    </>
  );
};

export default Logo;
