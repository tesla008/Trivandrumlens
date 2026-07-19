import Image from 'next/image';
import Link from 'next/link';
import { Check, Leaf, Heart, Sparkles, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image 
            src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB1.JPG" 
            alt="Authentic Ambience"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="font-headline text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            Taste Tradition.<br /> <span className="text-primary">Taste Trivandrum.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium max-w-3xl mx-auto text-white/90 leading-relaxed italic">
            A destination for authentic Kerala cuisine, traditional recipes, and hospitality that feels like home.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB3.JPG"
                alt="The Story of Trivandrum Cafe"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</h3>
                <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
                  A Legacy of <br /> <span className="text-primary">Kerala Roots.</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Trivandrum Café was born from a deep-seated passion for the culinary heritage of Kerala. Our journey began with a simple mission: to share the vibrant, unadulterated flavors of home with the people of Nagpur.
                </p>
                <p>
                  Every recipe in our kitchen is a tribute to tradition, passed down through generations. We source our spices and core ingredients directly from Kerala to ensure that every bite of our Ghee Podi Dosa or sip of Filter Coffee transports you to the South.
                </p>
                <p>
                  From our commitment to fresh ingredients to our traditional cooking methods, we strive for consistency and quality that makes every guest feel like part of the family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-24 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">The Foundation</h3>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl mb-4">Authentic Kerala Flavours</CardTitle>
              <p className="text-foreground/70">Using time-honored techniques and spices sourced from the heart of the South.</p>
            </Card>
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl mb-4">Fresh & Premium Ingredients</CardTitle>
              <p className="text-foreground/70">Quality without compromise, from farm-fresh produce to premium Kerala rice.</p>
            </Card>
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl mb-4">Hospitality from the Heart</CardTitle>
              <p className="text-foreground/70">Serving every guest with warmth and genuine care, just like we would at home.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Excellence in every bite</h3>
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Why Choose Us</h2>
              </div>
              <ul className="space-y-6">
                {[
                  "Authentic South Indian cuisine",
                  "Traditional Kerala specialties",
                  "Hygienic kitchen and fresh preparation",
                  "Comfortable and inviting ambience",
                  "Friendly and efficient service",
                  "Perfect family dining experience"
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="bg-primary/20 p-1.5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic1.png" alt="Food" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB2.jpg" alt="Ambience" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic3.png" alt="Families" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/GheePodiThatteIdli.JPG" alt="Dishes" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Invitation Section */}
      <section className="py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary leading-tight mb-8">
            Your Seat at the Table <br /> is Waiting.
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the heart of Kerala in the soul of Nagpur. We invite you to join us for a meal that celebrates tradition, flavor, and family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg px-12 h-16 uppercase font-bold tracking-widest">
              <Link href="/#contact">Visit Us Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-12 h-16 uppercase font-bold tracking-widest transition-all">
              <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank">Follow Our Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Footer Link */}
      <div className="py-12 border-t text-center">
        <Link 
          href="https://www.instagram.com/trivandrum_cafe_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors group"
        >
            <Instagram className="h-6 w-6" />
            <span className="text-lg font-semibold group-hover:underline">Follow us on Instagram</span>
        </Link>
      </div>
    </div>
  );
}
