"use client";

import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Visit() {
  return (
    <section id="visit" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Visit Trivandrum Café</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We're waiting to serve you the best of South India. Find us near Chhatrapati Square, Nagpur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Address</h3>
                <p className="text-foreground/80">Near Chhatrapati Square, Nagpur, Maharashtra, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Opening Hours</h3>
                <p className="text-foreground/80">Mon - Sun: 9:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Contact</h3>
                <p className="text-foreground/80">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Follow Us</h3>
                <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  @trivandrum_cafe_official
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full group">
            <div className="h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border-primary/20 border transition-all duration-300 group-hover:shadow-2xl">
              <Image 
                src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Screenshot%202026-03-05%20at%204.12.16%20PM.png"
                alt="Map location of Trivandrum Cafe"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
             <Button asChild size="lg" className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                <Link href="https://www.google.com/maps/search/?api=1&query=Trivandrum+Café+Near+Chhatrapati+Square,Nagpur,Maharashtra" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
