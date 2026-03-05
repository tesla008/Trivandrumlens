"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export function Visit() {
  const position = { lat: 21.1098, lng: 79.0513 }; // Approx. Chhatrapati Square, Nagpur
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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
          
          <div className="h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border-primary/20 border">
            {apiKey ? (
              <APIProvider apiKey={apiKey}>
                <Map center={position} zoom={15} mapId="trivandrum-cafe-map" disableDefaultUI={true} gestureHandling={'greedy'}>
                  <Marker position={position} />
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-center p-4">Google Maps cannot be displayed. <br />Please provide an API key.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
