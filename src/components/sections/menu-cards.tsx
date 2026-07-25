"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { X, Eye, ImageOff } from 'lucide-react';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const menuImages = [
  { id: 'menu-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu001.png', alt: 'Menu Card Page 1' },
  { id: 'menu-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu002.png', alt: 'Menu Card Page 2' },
  { id: 'menu-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu003.png', alt: 'Menu Card Page 3' },
  { id: 'menu-4', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu004.png', alt: 'Menu Card Page 4' },
  { id: 'menu-5', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu005.png', alt: 'Menu Card Page 5' },
  { id: 'menu-6', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu006.png', alt: 'Menu Card Page 6' },
];

export function MenuCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const openModal = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section id="menu" className="py-20 md:py-32 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary uppercase">Explore Our Menu</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto italic">
              Authentic South Indian flavors, crafted for a satisfying dining experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {menuImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[380px]"
              >
                <CardContent className="p-0 relative aspect-[4/5] bg-card">
                  {imageErrors[image.id] ? (
                    <div className="flex flex-col items-center justify-center h-full w-full bg-muted text-muted-foreground p-4 text-center">
                      <ImageOff className="h-10 w-10 mb-2 opacity-50" />
                      <p className="text-sm">Menu image not available</p>
                    </div>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      onError={() => handleImageError(image.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="text-foreground bg-white/80 backdrop-blur-sm hover:bg-white rounded-full border-transparent font-bold uppercase tracking-wider"
                      onClick={() => openModal(index)}
                    >
                      <Eye className="mr-2" />
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-none w-screen h-screen bg-black/95 border-0 shadow-none p-0 flex items-center justify-center">
            <VisuallyHidden>
              <DialogTitle>Menu Image Viewer</DialogTitle>
              <DialogDescription>Full screen view of our menu cards.</DialogDescription>
            </VisuallyHidden>
            <Carousel 
                key={startIndex}
                opts={{ loop: true, startIndex: startIndex }} 
                className="w-full h-full max-w-5xl"
            >
                <CarouselContent className="h-full" viewportClassName="h-full">
                {menuImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                        {imageErrors[image.id] ? (
                          <div className="flex flex-col items-center justify-center h-full w-full text-white/50 text-center">
                            <ImageOff className="h-20 w-20 mb-4 opacity-50" />
                            <p className="text-xl">Menu image not available</p>
                          </div>
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            quality={100}
                            priority={startIndex === index}
                            onError={() => handleImageError(image.id)}
                          />
                        )}
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 text-white bg-black/50 hover:bg-black/80 border-white/20 h-12 w-12" />
                <CarouselNext className="absolute right-4 text-white bg-black/50 hover:bg-black/80 border-white/20 h-12 w-12" />
            </Carousel>
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors z-[60] min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
            </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
