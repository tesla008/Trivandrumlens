"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const dishes = [
  {
    name: "Dosa",
    description: "Thin, crispy South Indian crepes served with aromatic sambar and a variety of chutneys.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Dosa.jpeg"
  },
  {
    name: "Punugulu",
    description: "Crispy deep-fried rice and lentil batter balls, a perfect tea-time snack.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Punugulu.jpeg"
  },
  {
    name: "Mushroom Curry with Malabari Paratha",
    description: "A rich, creamy, and spicy mushroom delicacy prepared with traditional South Indian spices, served with soft parathas.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/mushroomcurry.jpeg"
  },
  {
    name: "Ghee Roast Paneer with Malabari Paratha",
    description: "Succulent paneer cubes tossed in a fiery, aromatic ghee-based spice mix, served with flaky Malabari parathas.",
    image: "https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/gheeroast.jpeg"
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
  }
];

export function SignatureDishes() {
  return (
    <section id="specialties" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Chef's Recommendations</h3>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Signature Specials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafted with time-honored techniques and authentic spices sourced directly from South India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {dishes.map((dish, index) => (
            <Card key={index} className="group border-none bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 space-y-6">
                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 pt-0 space-y-3 text-center">
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[90%] mx-auto">
                    {dish.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 h-14 uppercase font-bold tracking-widest transition-all">
                <Link href="/#menu">View Full Menu</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
