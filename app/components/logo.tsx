// Laradise Studios (Logo Component / Sidebar Navigation)

import React from 'react';
import Particles from './particles';
import Link from "next/link";
import { useState } from 'react';
import SocialIcons from './socialicons';

const Logo: React.FC = () => {

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
        <img className='ls-logo' src="https://res.cloudinary.com/louiy9obu/image/upload/fl_preserve_transparency/v1712562804/LaradiseStudios_LOGO_2_kwdbcp.jpg?_s=public-apps" alt="Laradise Studios Logo" width="100%" />
        </p>
        <li className='li-menu'><Link href="/">Home</Link></li>
        <li className='li-menu'><Link href="/apps">Apps</Link></li>
        <li className='li-menu'><Link href="/">Games</Link></li>
        <li className='li-menu'><Link href="/">Store</Link></li>
        <li className='li-menu'>-</li>
        <li className='li-menu-sm'><Link href="/">Our Story</Link></li>
        <li className='li-menu-sm'><Link href="/">Company Solutions</Link></li>
        <li className='li-menu-sm'><Link href="/">Contact Us</Link></li>
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
    
    <img className="ls-main-logo" src="https://res.cloudinary.com/louiy9obu/image/upload/v1712317603/LS_NoPreview_kvsyqs.png" alt="Laradise Studios Logo"></img>
          
    <div className="my-16 text-center animate-fade-in">
        <h2 className="ls-copyright">
            © 2025 Laradise Studios
        </h2>
    </div>

    </>
  );
};

export default Logo;
