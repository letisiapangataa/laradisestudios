// pages/example.tsx
import React from 'react';
import Particles from './particles';

const Logo: React.FC = () => {
  return (
    <>
    <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    <Particles
          className="grid inset-0 animate-fade-in width-200 height-200"
          quantity={200} />
          <h1 className="text-4xl text-transparent duration-900 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              <img className="ls-width" src="https://res.cloudinary.com/louiy9obu/image/upload/v1712317603/LS_NoPreview_kvsyqs.png" alt="Laradise Studios Logo"></img>
          </h1>
          
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /><div className="my-16 text-center animate-fade-in">
              <h2 className="text-sm text-zinc-500 ">
                  © 2024 Laradise Studios
              </h2>
          </div>
    </>
  );
};

export default Logo;
