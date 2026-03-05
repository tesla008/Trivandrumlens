"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const heroItemIds = ['hero-dosa', 'hero-vada', 'hero-coffee'];

export function Hero() {
  const [activeItem, setActiveItem] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % heroItemIds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = heroItemIds.map(id =>
    PlaceHolderImages.find(img => img.id === id)
  ).filter(Boolean);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        image && (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt={image.description}
            fill
            priority={index === 0}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              activeItem === index ? "opacity-100" : "opacity-0"
            )}
            style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
            data-ai-hint={image.imageHint}
          />
        )
      ))}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-center items-center text-center px-4 md:px-6">
        <div className="text-white max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-lg">
            TRIVANDRUM CAFÉ
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-white/90 drop-shadow-md">
            Authentic South Indian Flavors in Nagpur
          </p>
          <p className="mt-6 max-w-lg mx-auto text-base md:text-lg text-white/80">
            Experience the rich taste of South India with crispy dosas, soft idlis, flavorful sambhar, and freshly brewed filter coffee served in a warm and welcoming atmosphere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 shadow-lg backdrop-blur-sm transition-transform hover:scale-105">
              <Link href="#visit">Visit Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
         <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
