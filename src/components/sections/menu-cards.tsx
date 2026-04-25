"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { X, Eye } from 'lucide-react';

const menuImages = [
  { id: 'menu-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu1.jpg', alt: 'Menu Card Page 1' },
  { id: 'menu-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu2.jpg', alt: 'Menu Card Page 2' },
  { id: 'menu-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu3.jpg', alt: 'Menu Card Page 3' },
  { id: 'menu-5', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu5.jpg', alt: 'Menu Card Page 5' },
  { id: 'menu-6', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu6.jpg', alt: 'Menu Card Page 6' },
  { id: 'menu-9', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/menu9.jpg', alt: 'Menu Card Page 9' },
];

export function MenuCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openModal = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Explore Our Menu</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Authentic South Indian flavors, thoughtfully curated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {menuImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <CardContent className="p-0 relative aspect-[4/5] bg-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="text-foreground bg-white/80 backdrop-blur-sm hover:bg-white rounded-full border-transparent"
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
        <DialogContent className="max-w-none w-screen h-screen bg-black/80 border-0 shadow-none p-4 flex items-center justify-center">
            <Carousel 
                opts={{ loop: true, startIndex: startIndex }} 
                className="w-full h-full max-w-lg md:max-w-xl"
            >
                <CarouselContent className="h-full">
                {menuImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            quality={95}
                        />
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 md:-left-16 text-white bg-black/30 hover:bg-black/50 border-white/50" />
                <CarouselNext className="absolute right-2 md:-right-16 text-white bg-black/30 hover:bg-black/50 border-white/50" />
            </Carousel>
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
