'use client';

import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function FoodCreators() {
  useEffect(() => {
    // Function to process Instagram embeds
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.instagram.com/embed.js';
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      }
    };

    processEmbeds();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Discover the Vibe</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">
            Experience Trivandrum Cafe
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto italic">
            A glimpse into the authentic flavours, warm ambience, and the satisfying dining experience that awaits you.
          </p>
        </div>

        {/* Ambience Videos Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <Card className="overflow-hidden rounded-[2rem] shadow-xl border-none">
              <CardContent className="p-0 aspect-[16/9] bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/TukdojiPutla.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
            <p className="text-center font-headline text-xl font-bold">Tukdoji Putla Ambiance</p>
          </div>
          <div className="space-y-4">
            <Card className="overflow-hidden rounded-[2rem] shadow-xl border-none">
              <CardContent className="p-0 aspect-[16/9] bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/SambhajiSqaure.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
            <p className="text-center font-headline text-xl font-bold">Sambhaji Square Moments</p>
          </div>
        </div>

        {/* Featured Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Instagram Reel */}
          <div className="space-y-4">
            <div className="flex justify-center items-center w-full min-h-[500px] md:min-h-[600px] bg-card/50 rounded-[2.5rem] p-2 shadow-xl border border-primary/10">
              <div className="w-full max-w-[400px]">
                <blockquote 
                  className="instagram-media w-full" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DXYfK6zjH6J/" 
                  data-instgrm-version="14"
                  style={{ 
                    background: 'transparent', 
                    border: '0', 
                    borderRadius: '2rem', 
                    margin: '0 auto', 
                    padding: '0', 
                    width: '100%' 
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a href="https://www.instagram.com/reel/DXYfK6zjH6J/" style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                      <div style={{ padding: '40px 0' }} />
                      <p className="text-muted-foreground animate-pulse">Loading Instagram Reel...</p>
                      <div style={{ padding: '40px 0' }} />
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
            <p className="text-center font-headline text-xl font-bold">Food Creator Review</p>
          </div>

          {/* Celebrity Promotion Video */}
          <div className="space-y-4">
            <Card className="overflow-hidden rounded-[2.5rem] shadow-xl border-none h-full">
              <CardContent className="p-0 aspect-[9/16] bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/celebvideo.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
            <p className="text-center font-headline text-xl font-bold">Celebrity Promotion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    instgrm: any;
  }
}
