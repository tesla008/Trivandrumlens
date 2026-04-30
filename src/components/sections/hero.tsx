
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0 filter brightness-[.75] blur-[1.5px]"
        preload="metadata"
      >
        <source
          src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Filter_coffee_steam_reveal_b1a735e887.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(60, 30, 10, 0.65), rgba(60, 30, 10, 0.35), rgba(60, 30, 10, 0.15))',
        }}
      />
      
      {/* Large Centered Logo */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
            alt="Trivandrum Café Logo"
            width={400}
            height={120}
            className="h-24 md:h-36 w-auto drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-12 h-full px-4 md:px-6">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center" style={{ color: '#fffaf0' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
            className="max-w-2xl"
          >
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)'}}>
              Trivandrum Café
            </h1>
            <h2 className="mt-2 text-lg md:text-xl font-medium opacity-90 uppercase tracking-wide" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)'}}>
              Authentic South Indian Cuisine
            </h2>
            <p className="mt-6 text-base md:text-lg opacity-80 leading-relaxed" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)'}}>
              Experience the authentic flavors of South Indian with crispy dosas, soft idlis, flavorful sambhar, and freshly brewed filter coffee served in a warm and welcoming café atmosphere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">Visit Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-6" style={{ color: '#fffaf0' }}>
         <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition-opacity"><Instagram className="h-6 w-6" /></Link>
         <Link href="https://www.google.com/maps/search/?api=1&query=Trivandrum+Café+Near+Chhatrapati+Square,Nagpur,Maharashtra" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="opacity-80 hover:opacity-100 transition-opacity"><MapPin className="h-6 w-6" /></Link>
         <Link href="#" aria-label="WhatsApp" className="opacity-80 hover:opacity-100 transition-opacity"><MessageSquare className="h-6 w-6" /></Link>
      </div>
    </section>
  );
}
