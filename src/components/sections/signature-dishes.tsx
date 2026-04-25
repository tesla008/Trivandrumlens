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
import Autoplay from "embla-carousel-autoplay";

const dishes = [
  {
    name: "Masala Dosa",
    description: "Folded dosa served with chutneys and sambar",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri13.jpg"
  },
  {
    name: "Ghee Podi Idli",
    description: "Idlis coated with aromatic podi masala and ghee",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Idly01.png"
  },
  {
    name: "Mysore Bonda",
    description: "Crispy fried snacks served with chutney and sambar",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri9.jpg"
  },
  {
    name: "Uttapam",
    description: "Thick dosa topped with onions and vegetables",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri8.jpg"
  },
  {
    name: "Idli with Chutneys & Sambar",
    description: "Classic steamed idlis served on banana leaf with chutneys",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Idly01.png"
  },
  {
    name: "Medu Vada",
    description: "Donut-shaped fried lentil vada served with chutneys",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri6.jpg"
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
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Signature Dishes
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A taste of authentic South Indian tradition.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
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
            {dishes.map((dish, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center">
                  <Card className="overflow-hidden group rounded-lg shadow-lg max-w-lg w-full border-none bg-transparent">
                    <CardContent className="p-0 relative aspect-square">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                        sizes="(max-width: 768px) 80vw, 512px"
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-6">
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-md text-muted-foreground max-w-md mx-auto">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/50 hover:bg-background border-border text-foreground" />
          <CarouselNext className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/50 hover:bg-background border-border text-foreground" />
        </Carousel>
        
        <div className="flex justify-center gap-2 mt-8">
            {dishes.map((_, index) => (
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
