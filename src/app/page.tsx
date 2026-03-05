"use client";

import { useState, useEffect } from 'react';
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulate loading time for assets

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Hero />
      <Marquee />
      <div id="specialties" className="pt-20 md:pt-32" />
      {/* Specialties could be a featured subset of the menu or another unique section */}
      <div id="gallery" />
      <Gallery />
      <div id="reviews" />
      <Reviews />
      <Faq />
    </>
  );
}
