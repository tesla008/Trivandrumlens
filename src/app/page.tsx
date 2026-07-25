"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SignatureDishes } from "@/components/sections/signature-dishes";
import { MenuCards } from "@/components/sections/menu-cards";
import { VisualFeast } from "@/components/sections/visual-feast";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Marquee } from "@/components/sections/marquee";
import { InfluencerVideos } from "@/components/sections/influencer-videos";
import { FoodCreators } from "@/components/sections/food-creators";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <div id="about">
        <About />
      </div>
      <FoodCreators />
      <div id="specialties">
        <SignatureDishes />
      </div>
      <InfluencerVideos />
      <MenuCards />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="locations">
        <VisualFeast />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <Faq />
    </>
  );
}
