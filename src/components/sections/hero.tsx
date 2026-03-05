"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, MapPin, MessageSquare, ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { variants, Variant } from '@/lib/variants';

const getFrameUrl = (baseUrl: string, frame: number): string => {
  if (!baseUrl) return '';
  // Assumes URL format like ".../frame_000_...".
  return baseUrl.replace(/frame_\d{3}/, `frame_${String(frame).padStart(3, '0')}`);
};

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [frame, setFrame] = useState(0);

  const currentVariant = variants[currentIndex];
  const { frameCount, sequenceUrl, themeColor: accentColor } = currentVariant;

  const imageUrl = getFrameUrl(sequenceUrl, frame);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // Animate over the first 100vh of scrolling
    const scrollFraction = Math.min(1, scrollY / window.innerHeight);
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );
    
    window.requestAnimationFrame(() => {
        setFrame(frameIndex);
    });
  }, [frameCount]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  // Preload first frame of each variant
  useEffect(() => {
    variants.forEach(variant => {
      const img = new window.Image();
      img.src = getFrameUrl(variant.sequenceUrl, 0);
    });
  }, []);

  const changeVariant = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Reset scroll and frame for the new animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFrame(0);

    setCurrentIndex(newIndex);
    
    // Simulate loading time for new assets
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevVariant = () => {
    changeVariant((currentIndex - 1 + variants.length) % variants.length);
  };

  const nextVariant = () => {
    changeVariant((currentIndex + 1) % variants.length);
  };

  return (
    <section id="home" className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <AnimatePresence>
          <motion.div
            key={currentVariant.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeIn' } }}
          >
            <Image
              src={imageUrl}
              alt={currentVariant.subtitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 container mx-auto grid grid-cols-12 h-full px-4 md:px-6">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVariant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                className="max-w-xl"
              >
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase drop-shadow-lg">
                  {currentVariant.name}
                </h1>
                <h2 className="mt-2 text-lg md:text-xl font-medium text-white/90 drop-shadow-md uppercase tracking-widest">
                  {currentVariant.subtitle}
                </h2>
                <p className="mt-6 text-base md:text-lg text-white/80">
                  {currentVariant.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="outline" className="text-white bg-transparent hover:bg-white/10 shadow-lg backdrop-blur-sm transition-transform hover:scale-105" style={{ borderColor: accentColor }}>
                <Link href="#menu">View Menu</Link>
              </Button>
              <Button asChild size="lg" className="text-white shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: accentColor }}>
                <Link href="#contact">Visit Us</Link>
              </Button>
            </div>
          </div>

          <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 text-white">
            <AnimatePresence mode="out-in">
               <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.5 } }}
                  className="font-headline text-5xl md:text-7xl font-bold"
               >
                  0{currentIndex + 1}
               </motion.div>
            </AnimatePresence>
            <div className="flex flex-col items-center gap-2">
              <button onClick={prevVariant} className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50" disabled={isAnimating}><ChevronLeft /></button>
              <div className="h-16 w-px bg-white/30" />
               {isAnimating ? (
                  <div className="h-10 w-10 flex items-center justify-center">
                      <Loader className="animate-spin" />
                  </div>
              ) : (
                  <button onClick={nextVariant} className="p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50" disabled={isAnimating}><ChevronRight /></button>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-6 text-white">
           <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 opacity-80 hover:opacity-100 transition-opacity" /></Link>
           <Link href="#" aria-label="Google Maps"><MapPin className="h-6 w-6 opacity-80 hover:opacity-100 transition-opacity" /></Link>
           <Link href="#" aria-label="WhatsApp"><MessageSquare className="h-6 w-6 opacity-80 hover:opacity-100 transition-opacity" /></Link>
        </div>
      </div>
    </section>
  );
}
