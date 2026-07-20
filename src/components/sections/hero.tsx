"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Background Video - Optimized with metadata preloading */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0 filter brightness-[.7] blur-[0.5px]"
        preload="metadata"
      >
        <source
          src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Filter_coffee_steam_reveal_b1a735e887.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      />
      
      <div className="relative z-10 container mx-auto flex items-center h-full px-4 md:px-8">
        <div className="w-full max-w-4xl text-[#fffaf0]">
          
          <div className="mb-4">
            <Image
              src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
              alt="Trivandrum Café Logo"
              width={500}
              height={150}
              className="h-32 md:h-56 w-auto drop-shadow-2xl transition-all"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)'}}>
              Taste Tradition, <br /> Taste <span className="text-primary">Trivandrum</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium opacity-90 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
              Experience tradition in every bite — from crispy golden dosas to freshly brewed filter coffee served in the heart of Nagpur.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 sm:px-12 h-16 uppercase font-bold tracking-wider">
              <Link href="#contact">Visit Trivandrum Café</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground bg-background hover:bg-white backdrop-blur-sm text-lg px-8 sm:px-12 h-16 uppercase font-bold tracking-wider transition-colors">
              <Link href="#locations">View Locations</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 sm:px-12 h-16 uppercase font-bold tracking-wider">
              <a href="https://forms.gle/42hVF8SDbmEg9MLG7" target="_blank" rel="noopener noreferrer">Apply Franchise</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
