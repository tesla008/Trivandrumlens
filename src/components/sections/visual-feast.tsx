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
import { MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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
    <section id="locations" className="pt-20 md:pt-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our outlets across Nagpur.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4500,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {outlets.map((outlet, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center">
                  <Card className="overflow-hidden group rounded-lg shadow-lg w-full border-none bg-transparent">
                    <CardContent className="p-0 relative aspect-video">
                      <Image
                        src={outlet.src}
                        alt={outlet.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 90vw, 896px"
                        quality={95}
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-6">
                    <h3 className="flex items-center justify-center gap-3 font-semibold text-2xl md:text-3xl text-foreground tracking-wide">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                      <span>{outlet.name}</span>
                    </h3>
                    <a
                      href={outlet.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-sm text-foreground/80 hover:text-primary transition-colors group/link"
                    >
                      View on Map
                      <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 mt-[-50px] h-12 w-12 rounded-full bg-background/50 hover:bg-background border-border text-foreground" />
          <CarouselNext className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 mt-[-50px] h-12 w-12 rounded-full bg-background/50 hover:bg-background border-border text-foreground" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
            {outlets.map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        current === index ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
