// pages/about.tsx
"use client";

import React from "react";
import "../global.css";
import Head from "next/head";
import Particles from "app/components/particles";
import Link from "next/link";
import { useState } from "react";
import SocialIcons from "app/components/socialicons";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
// Update the path below if the actual file is named 'Slideshow.tsx' or located elsewhere
import Slideshow from "../app/components/slideshow";

// Load the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const AI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div lang="en" className={[inter.variable, calSans.variable].join(" ")}>
        <Head>
          {/* FONTS & ICONS */}
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png"
            type="image/png"
          />

          {/* BASIC SEO */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>MUSIC × A.I. | AI-Generated Music | Laradise Studios</title>
          <meta
            name="description"
            content="Explore MUSIC × A.I. by Laradise Studios – a new dimension of sound shaped by intelligent technology, blending Y2K aesthetics, EDM, and futuristic digital production."
          />
          <meta
            name="keywords"
            content="Laradise Studios, AI music, AI-generated music, MUSIC x AI, electronic music, Y2K EDM, digital soundscapes"
          />

          {/* OPEN GRAPH / SOCIAL SHARING */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="MUSIC × A.I. | Laradise Studios"
          />
          <meta
            property="og:description"
            content="A new era of digital music from Laradise Studios – each track shaped by intelligent technology into expressive, evolving soundscapes."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/louiy9obu/image/upload/v1763366575/ChatGPT_Image_Nov_17_2025_at_09_02_46_PM_p7i2t6.png"
          />
          <meta
            property="og:url"
            content="https://www.laradisestudios.com/ai-music"
          />

          {/* TWITTER CARD */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="MUSIC × A.I. | Laradise Studios"
          />
          <meta
            name="twitter:description"
            content="Experience AI-crafted, future-leaning digital music from Laradise Studios."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/louiy9obu/image/upload/v1763366575/ChatGPT_Image_Nov_17_2025_at_09_02_46_PM_p7i2t6.png"
          />

          {/* CANONICAL – adjust if needed */}
          <link
            rel="canonical"
            href="https://www.laradisestudios.com/ai-music"
          />

          {/* JSON-LD: MUSIC × A.I. as a MusicGroup / project */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MusicGroup",
                name: "MUSIC × A.I. – Laradise Studios",
                url: "https://www.laradisestudios.com/ai-music",
                genre: ["Electronic", "AI-generated music", "EDM"],
                description:
                  "MUSIC × A.I. by Laradise Studios is a collection of AI-generated digital music, blending Y2K aesthetics, EDM, and futuristic production.",
                image:
                  "https://res.cloudinary.com/louiy9obu/image/upload/v1763366575/ChatGPT_Image_Nov_17_2025_at_09_02_46_PM_p7i2t6.png",
              }),
            }}
          />
        </Head>

        {/* NAV / SIDEBAR */}
        <nav
          className={`sidebar fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Main navigation"
        >
          <div className="p-8">
            <p className="text-xl font-bold mt-4">
              <Link href="/">
                <img
                  className="ls-logo"
                  src="https://res.cloudinary.com/louiy9obu/image/upload/fl_preserve_transparency/v1712562804/LaradiseStudios_LOGO_2_kwdbcp.jpg?_s=public-apps"
                  alt="Laradise Studios logo – Where the magic happens."
                  width="100%"
                />
              </Link>
            </p>
            <li className="li-menu">
              <Link href="/">Home</Link>
            </li>
            <li className="li-menu">☁️ 💗 ☁️</li>
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
            <li className="li-menu">☁️ 💗 ☁️</li>
            <li className="li-menu-sm">
              <Link href="mailto:contact@laradisestudios.com">Contact Us</Link>
            </li>
            <SocialIcons />
          </div>
        </nav>

        <Link href="" onClick={toggleSidebar}>
          <Particles className="particles" quantity={500} />
        </Link>

        {/* MAIN CONTENT */}
        <main
          className={`apps-page bg-gray-50 min-h-screen ${inter.className}`}
          role="main"
        >
          {/* Header Section */}
          <header className="pages-header">
            <h1 className="text-4xl font-bold">MUSIC × A.I.</h1>
            <p className="pages-sub-title">
              A new dimension of sound, shaped by intelligent technology.
            </p>
          </header>

          {/* Hero Visual */}
          <div className="flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1763366575/ChatGPT_Image_Nov_17_2025_at_09_02_46_PM_p7i2t6.png"
              alt="MUSIC x A.I. hero artwork in Y2K Pixar-style 3D, representing Laradise Studios digital sound."
              style={{
                width: "40%",
                height: "auto",
                maxWidth: "40%",
              }}
            />
          </div>

          {/* Apps Showcase Section */}
          <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* A.I Music - Published with Modern Technologies */}
            <header className="pages-header-apps">
              {/* h2 to keep only a single h1 on the page */}
              <h1 className="text-4xl font-bold">A NEW ERA OF DIGITAL MUSIC</h1>
              <p className="pages-sub-title">
                Each melody is shaped by intelligent technology, turning raw
                ideas into expressive, evolving soundscapes.
              </p>
            </header>

            <section className="pages-apps-published mt-16 text-center">
              <h2 className="text-4xl font-bold mb-6">Available Soon</h2>

              <div className="flex items-center justify-center gap-10">
                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763367730/Spotify_logo_with_text_rzpgoa.svg"
                  alt="Laradise Studios AI music coming soon to Spotify"
                  className="h-14"
                />

                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763368214/Apple_Music_Logo_0_uayzbu.svg"
                  alt="Laradise Studios AI music coming soon to Apple Music"
                  className="h-10"
                />

                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763368511/youtube-music-seeklogo_kjf1v2.svg"
                  alt="Laradise Studios AI music coming soon to YouTube Music"
                  className="h-14"
                />
              </div>
            </section>
          </section>

          {/* Footer Section */}
          <footer className="pages-footer text-center py-2 bg-gray-800 text-white">
            <p>© 2025 Laradise Studios. All Rights Reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default AI;
