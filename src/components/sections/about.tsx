
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB1.JPG"
              alt="Trivandrum Café Ambience"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</h3>
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Rooted in Tradition, <br /> Served with <span className="text-primary">Love.</span>
              </h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Trivandrum Café was born from a simple mission: to bring the true, unadulterated flavors of South Indian homes to the heart of Nagpur. Every recipe is a celebration of heritage, crafted with ingredients sourced directly from the South to maintain that signature authenticity.
            </p>
            
            <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <Check className="text-primary h-4 w-4" />
                    </div>
                    <span className="text-lg"><strong>Authentic Sourcing:</strong> Rice, coffee, and spices from Southern India.</span>
                </li>
                <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <Check className="text-primary h-4 w-4" />
                    </div>
                    <span className="text-lg"><strong>Generational Recipes:</strong> Time-honored cooking methods.</span>
                </li>
            </ul>

            <div className="pt-4 flex items-center gap-6">
              <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground font-bold px-8 uppercase tracking-wide">
                <Link href="/about">Our Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
