// components/Sidebar.tsx
import React, { useState } from 'react';
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>


<svg className="sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#FFF" stroke-width=".8" fill="rgba(0,0,0,0)" stroke-linecap="" style={{cursor: 'pointer'}} onClick={toggleSidebar}>
  <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
    <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
    <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
  </path>
  <rect width="10" height="10" stroke="none">
    <animate dur="2s" id="reverse" attributeName="width" begin="click" />
  </rect>
  <rect width="10" height="10" stroke="none">
    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
  </rect>
</svg>


<div className={`sidebar fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Sidebar content */}
      <div className="p-8">
        <p className="text-xl font-bold mt-4">
        <img className='ls-logo' src="https://res.cloudinary.com/louiy9obu/image/upload/v1712560322/B_LaradiseStudios_Logo_uet5gq.png" alt="Laradise Studios Logo" width="100%" />
        </p>
        <li className='li-menu'><Link href="/">Home</Link></li>
        <li className='li-menu'><Link href="/">Apps</Link></li>
        <li className='li-menu'><Link href="/">Games</Link></li>
        <li className='li-menu'><Link href="/">Store</Link></li>
        <li className='li-menu'>-</li>
        <li className='li-menu-sm'><Link href="/">Our Story</Link></li>
        <li className='li-menu-sm'><Link href="/">Company Solutions</Link></li>
        <li className='li-menu-sm'><Link href="/">Contact Us</Link></li>
      </div>
    </div>
    
    </>
  );
};

export default Sidebar;
