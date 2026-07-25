import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[hsl(var(--background))] border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
                alt="Trivandrum Café Logo"
                width={300}
                height={90}
                className="h-32 w-auto drop-shadow-lg"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 font-semibold text-lg text-foreground">
              Trivandrum Café
            </p>
            <p className="text-foreground/80">Authentic South Indian Cuisine<br/>Nagpur, Maharashtra</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">Our Locations</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <p className="text-foreground/80">Chhatrapati Square</p>
                <p className="text-foreground/80">Trimurti Nagar</p>
                <p className="text-foreground/80">Tukdoji Putla Square</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <a href="tel:+919529658611" className="text-foreground/80 hover:text-primary transition-colors">+91 95296 58611</a>
                <a href="tel:+918605585051" className="text-foreground/80 hover:text-primary transition-colors">+91 86055 85051</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/80 hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="https://www.google.com/maps/search/?api=1&query=Trivandrum+Café+Near+Chhatrapati+Square,Nagpur,Maharashtra" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-foreground/80 hover:text-primary transition-colors"><MapPin className="h-6 w-6" /></Link>
              <Link href="#" aria-label="WhatsApp" className="text-foreground/80 hover:text-primary transition-colors"><MessageSquare className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
            <div className="text-center">
                <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">Franchise Enquiry</h4>
                <p className="text-foreground/80 max-w-md mx-auto mb-6">
                    Interested in opening a Trivandrum Cafe franchise? Get in touch with us.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                    <Link href="https://forms.gle/42hVF8SDbmEg9MLG7" target="_blank" rel="noopener noreferrer">
                    Apply for Franchise
                    </Link>
                </Button>
            </div>
            <div className="mt-12 text-center text-sm text-foreground/60">
                <p>&copy; {year} Trivandrum Café. All rights reserved.</p>
            </div>
        </div>

      </div>
    </footer>
  );
}
