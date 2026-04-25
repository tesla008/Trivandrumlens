"use client";

import { useState, useEffect } from 'react';
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { VisualFeast } from "@/components/sections/visual-feast";
import { Gallery } from "@/components/sections/gallery";
import { SignatureDishes } from "@/components/sections/signature-dishes";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { LoadingScreen } from "@/components/loading-screen";
import { MissionVision } from '@/components/sections/mission-vision';
import { MenuCards } from '@/components/sections/menu-cards';

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
      <VisualFeast />
      <SignatureDishes />
      <MissionVision />
      <MenuCards />
      <div id="gallery" />
      <Gallery />
      <div id="reviews" />
      <Reviews />
      <Faq />
    </>
  );
}
