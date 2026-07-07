
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MapPin, Navigation } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const outlets = [
  {
    name: "Chhatrapati Nagar",
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Chatrapatinagar.jpg",
    alt: "Trivandrum Café at Chhatrapati Nagar",
    mapLink: "https://share.google/ToUQyxq0HIRIeBjBv"
  },
  {
    name: "Trimurti Nagar",
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Trimurtinagar.jpg",
    alt: "Trivandrum Café at Trimurti Nagar",
    mapLink: "https://share.google/oSKHFNqxD08S5USFi"
  },
  {
    name: "Tukdoji Putla",
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Tukdojiputla.jpg",
    alt: "Trivandrum Café at Tukdoji Putla",
    mapLink: "https://share.google/JW3BEx5yWbAPqroBe"
  },
];

export function VisualFeast() {
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
    <section id="locations" className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Where to find us</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the same authentic taste across all our outlets in Nagpur.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4500,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {outlets.map((outlet, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="overflow-hidden group rounded-2xl shadow-xl border-none h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={outlet.src}
                      alt={outlet.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow bg-card">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <h3 className="font-bold text-xl text-foreground tracking-tight">
                        {outlet.name}
                      </h3>
                    </div>
                    <Button asChild variant="default" className="w-full mt-auto bg-primary hover:bg-primary/90">
                      <a href={outlet.mapLink} target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background border-primary/20 text-primary" />
          <CarouselNext className="hidden md:flex -right-12 bg-background border-primary/20 text-primary" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-12">
            {outlets.map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        current === index ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
