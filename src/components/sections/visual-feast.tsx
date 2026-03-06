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

const outlets = [
  {
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/chtrapatisqlocation.png",
    alt: "Trivandrum Café at Chhatrapati Square",
    width: 900,
    height: 675,
  },
  {
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/trimurtinagar.png",
    alt: "Trivandrum Café at Trimurti Nagar",
    width: 900,
    height: 600,
  },
  {
    src: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tukdojilocation.png",
    alt: "Trivandrum Café at Tukdoji Square",
    width: 808,
    height: 385,
  },
];

export function VisualFeast() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const autoplayInterval = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = React.useCallback(() => {
    stopAutoplay();
    autoplayInterval.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 4500);
  }, [api]);

  const stopAutoplay = React.useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const handleReInit = () => {
      startAutoplay();
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);
    api.on("pointerDown", stopAutoplay);
    api.on("reInit", handleReInit);

    startAutoplay();

    return () => {
      api.off("select", handleSelect);
      api.off("pointerDown", stopAutoplay);
      api.off("reInit", handleReInit);
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

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

        <div 
          className="relative"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <Carousel setApi={setApi} className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {outlets.map((outlet, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden group rounded-lg shadow-lg">
                    <CardContent className="p-0 relative">
                      <Image
                        src={outlet.src}
                        alt={outlet.alt}
                        width={outlet.width}
                        height={outlet.height}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 768px"
                        quality={90}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-[-50px]" />
            <CarouselNext className="hidden md:flex right-[-50px]" />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        current === index + 1 ? "w-6 bg-primary" : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
