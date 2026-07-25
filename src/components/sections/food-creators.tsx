'use client';

import React, { useEffect } from 'react';

export function FoodCreators() {
  useEffect(() => {
    // Function to process Instagram embeds
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        // Load the script if it hasn't been loaded yet
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
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Media Highlights</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">
            Featured By Food Creators
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto italic">
            See what food influencers and customers are saying about our authentic South Indian flavors and satisfying dining experience.
          </p>
        </div>

        <div className="flex justify-center items-center max-w-xl mx-auto">
          {/* Video 2: Instagram Reel Embed - Now centered */}
          <div className="space-y-6 w-full">
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
            <div className="text-center">
                <p className="font-headline text-2xl font-bold text-foreground">Instagram Reel</p>
                <div className="h-1 w-12 bg-primary mx-auto mt-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Global declaration for Instagram embed window object
declare global {
  interface Window {
    instgrm: any;
  }
}
