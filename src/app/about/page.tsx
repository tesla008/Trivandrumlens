import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Sparkles, UtensilsCrossed, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-50">
           <Image 
            src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB1.JPG" 
            alt="Authentic Trivandrum Ambience"
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
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto text-white/90 leading-relaxed italic">
            Bringing authentic Kerala flavours and warm hospitality from the heart of the South to the soul of Nagpur.
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
                alt="The Story of Akhil and Vandana"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Our Journey</h3>
                <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
                  From Passion <br /> <span className="text-primary">to Plate.</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Trivandrum Café is the realization of a shared dream by Akhil and Vandana. Driven by a deep-seated passion for the vibrant culinary heritage of Kerala, they set out to create more than just a restaurant—they wanted to share the soulful, unadulterated flavours of home.
                </p>
                <p>
                  What started as a small, dedicated food counter has blossomed into the Trivandrum Café you see today. Their journey is fueled by a love for authentic ingredients and the genuine joy of serving hospitality that feels like family.
                </p>
                <div className="pt-4 border-l-4 border-primary pl-6">
                  <h4 className="font-headline text-2xl font-bold mb-2 text-foreground">Why Trivandrum?</h4>
                  <p className="italic">
                    The name is a tribute to Akhil's childhood memories. It was in the streets of Trivandrum that he first fell in love with the aromatic spices and traditional recipes of the South. This café is his tribute to those unforgettable flavours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">What We Stand For</h3>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl mb-4 uppercase tracking-tight">Authentic Kerala Flavours</CardTitle>
              <p className="text-foreground/70 text-sm">Time-honored recipes sourced directly from the heart of the South.</p>
            </Card>
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl mb-4 uppercase tracking-tight">Fresh Ingredients</CardTitle>
              <p className="text-foreground/70 text-sm">Quality without compromise, from farm-fresh produce to premium spices.</p>
            </Card>
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl mb-4 uppercase tracking-tight">Warm Hospitality</CardTitle>
              <p className="text-foreground/70 text-sm">Serving every guest with genuine care, making you feel right at home.</p>
            </Card>
            <Card className="bg-card border-none shadow-lg text-center p-8 rounded-2xl">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UtensilsCrossed className="text-primary h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-xl mb-4 uppercase tracking-tight">Quality & Consistency</CardTitle>
              <p className="text-foreground/70 text-sm">A commitment to excellence in every bite, every single day.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Women's Day Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Community & Appreciation</h3>
                <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
                  Celebrating <br /> <span className="text-primary">Women's Day.</span>
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                At Trivandrum Café, we believe in the power of community and the strength of the individuals within it. Our Women's Day celebrations are a reflection of our deep appreciation for the incredible women who inspire us every day. We are proud to foster a warm, inclusive space where every story is celebrated and every contribution is valued.
              </p>
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Women'sDayPic.jpeg"
                  alt="Women's Day Celebration at Trivandrum Cafe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Womens'dayvideo.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="py-24 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary leading-tight mb-8">
            Experience the Heart <br /> of Kerala.
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your seat at the table is waiting. We invite you to join us for a meal that celebrates tradition, flavour, and family.
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
