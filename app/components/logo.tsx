// pages/example.tsx
import React from 'react';
import Particles from './particles';

const Logo: React.FC = () => {
  return (
    <>
    <Particles
          className="particles"
          quantity={1300} />
              <img className="ls-main-logo" src="https://res.cloudinary.com/louiy9obu/image/upload/v1712317603/LS_NoPreview_kvsyqs.png" alt="Laradise Studios Logo"></img>
          
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /><div className="my-16 text-center animate-fade-in">
              <h2 className="ls-copyright">
                  © 2024 Laradise Studios
              </h2>
          </div>
    </>
  );
};

export default Logo;
