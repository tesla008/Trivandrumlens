
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, MapPin, MessageSquare } from 'lucide-react';

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
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/40 to-transparent"
      />
      
      <div className="relative z-10 container mx-auto grid grid-cols-12 h-full px-4 md:px-6">
        <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col justify-center text-[#fffaf0]">
          
          <div className="mb-4">
            <Image
              src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
              alt="Trivandrum Café Logo"
              width={400}
              height={120}
              className="h-24 md:h-40 w-auto drop-shadow-2xl"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)'}}>
              Taste the Authentic <br /> Flavors of <span className="text-primary">South India</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-medium opacity-90 max-w-xl leading-snug" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
              Experience tradition in every bite — from crispy golden dosas to freshly brewed filter coffee.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-10 h-14 uppercase font-bold tracking-wider">
              <Link href="#contact">Visit Trivandrum Café</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 h-14 uppercase font-bold tracking-wider">
              <Link href="#locations">View Locations</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-8 text-[#fffaf0]">
         <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110"><Instagram className="h-7 w-7" /></Link>
         <Link href="https://www.google.com/maps/search/?api=1&query=Trivandrum+Café+Near+Chhatrapati+Square,Nagpur,Maharashtra" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110"><MapPin className="h-7 w-7" /></Link>
         <Link href="#" aria-label="WhatsApp" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110"><MessageSquare className="h-7 w-7" /></Link>
      </div>
    </section>
  );
}
