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
          <title>ARTISTS × A.I. | Laradise Studios</title>
          <meta
            name="description"
            content="Next-generation artists, born for tomorrow."
          />
          <meta
            name="keywords"
            content="Laradise Studios, AI music, AI artists, ARTISTS x AI, TATI LIVE, DJ Tati, electronic music, digital artists"
          />

          {/* OPEN GRAPH / SOCIAL SHARING */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="ARTISTS × A.I. | Laradise Studios"
          />
          <meta
            property="og:description"
            content="Next-generation artists, born for tomorrow."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/louiy9obu/image/upload/v1763860388/artistsxai_laradisestudios_zyfp62.png"
          />
          <meta
            property="og:url"
            content="https://www.laradisestudios.com/ai-artists"
          />

          {/* TWITTER CARD */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="ARTISTS × A.I. | Laradise Studios"
          />
          <meta
            name="twitter:description"
            content="Next-generation artists, born for tomorrow."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/louiy9obu/image/upload/v1763860388/artistsxai_laradisestudios_zyfp62.png"
          />

          {/* CANONICAL */}
          <link
            rel="canonical"
            href="https://www.laradisestudios.com/ai-artists"
          />

          {/* JSON-LD: ARTISTS × A.I. + TATI (LIVE) */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MusicGroup",
                name: "ARTISTS × A.I. – Laradise Studios",
                url: "https://www.laradisestudios.com/ai-artists",
                genre: ["Electronic", "Pop", "AI-generated music"],
                description:
                  "Next-generation artists, born for tomorrow.",
                image:
                  "https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png",
                member: [
                  {
                    "@type": "Person",
                    name: "TATI",
                    description:
                      "Pretty beats, pretty energy.",
                  },
                ],
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
            <h1 className="text-4xl font-bold">ARTISTS × A.I.</h1>
            <p className="pages-sub-title">
              Next-generation artists, born for tomorrow.
            </p>
          </header>

          {/* Hero Visual */}
          <div className="flex items-center justify-center p-4">
            <img
              src="https://res.cloudinary.com/louiy9obu/image/upload/v1763524874/ChatGPT_Image_Nov_19_2025_at_05_00_13_PM_ulqota.png"
              alt="DJ Tati, an AI-powered Laradise Studios artist."
              style={{
                width: "40%",
                height: "auto",
                maxWidth: "40%",
                paddingTop: "2em",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          <section className="apps-showcase grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TATI – AI Artist Block */}
            <header className="pages-header-apps">
              {/* h2 to keep a clean hierarchy under the main h1 */}
              <h1 className="text-4xl font-bold">TATI (LIVE)</h1>
              <p className="pages-sub-title">First Lady of Laradise Studios.</p>
              <p className="pages-sub-title">
                &quot;Pretty beats, pretty energy&quot;
              </p>
            </header>

            <section className="pages-apps-published mt-16 text-center">
              <h2 className="text-4xl font-bold mb-6">Powered by 💗</h2>

              <div className="flex items-center justify-center gap-10">
                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763367730/Spotify_logo_with_text_rzpgoa.svg"
                  alt="Listen to TATI (LIVE) from Laradise Studios on Spotify"
                  className="h-14"
                />

                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763368214/Apple_Music_Logo_0_uayzbu.svg"
                  alt="Stream Laradise Studios AI music on Apple Music"
                  className="h-10"
                />

                <img
                  src="https://res.cloudinary.com/louiy9obu/image/upload/v1763368511/youtube-music-seeklogo_kjf1v2.svg"
                  alt="Watch and listen to Laradise Studios releases on YouTube Music"
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
