
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const dishes = [
  {
    name: "Punugulu",
    description: "Crispy deep-fried rice and lentil batter balls, a perfect tea-time snack.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Punugulu.jpeg"
  },
  {
    name: "Idli Sambhar",
    description: "Piping hot, fluffy steamed rice cakes served with our signature vegetable stew.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/idliSambhar.JPG"
  },
  {
    name: "Ghee Podi Thatte Idli",
    description: "Plate-sized idlis soaked in golden ghee and sprinkled with aromatic spicy podi.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/GheePodiThatteIdli.JPG"
  },
  {
    name: "Sambhar Vada",
    description: "Crispy, savory lentil donuts perfectly paired with tangy sambar.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Sambharvada.JPG"
  },
  {
    name: "Lemon Rice",
    description: "Zesty, peanut-infused rice that's both comforting and flavorful.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Lemontice.JPG"
  }
];

export function SignatureDishes() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="specialties" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Chef's Recommendations</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Our Signature Dishes
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Each dish is crafted with time-honored techniques and authentic spices.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {dishes.map((dish, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <div className="flex flex-col h-full bg-background rounded-3xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 text-center flex flex-col flex-grow">
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                      {dish.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary/20" />
          <CarouselNext className="hidden md:flex -right-12 border-primary/20" />
        </Carousel>
        
        <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-10 h-14 uppercase font-bold tracking-widest">
                <Link href="/#gallery">View Full Menu</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
