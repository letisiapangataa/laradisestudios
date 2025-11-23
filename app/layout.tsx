import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import { useState } from "react";

export const metadata: Metadata = {
  title: {
    default: "Laradise Studios | Where the magic happens. ",
    template: "%s | Laradise Studios",
  },
  description: "Next-gen worlds. Next-gen artists.",
  openGraph: {
    title: "Laradise Studios",
    description:
      "Next-gen worlds. Next-gen artists.",
    url: "https://laradisestudios.com",
    siteName: "Laradise Studios",
    images: [
      {
        url: "https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png",
        width: 1647,
        height: 1660,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Laradise Studios | Where the magic happens.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "https://res.cloudinary.com/louiy9obu/image/upload/v1712319820/LS_pnqkwp.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body
        className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
