import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Phone, MessageSquare } from 'lucide-react';

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
                className="h-24 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 font-semibold text-lg text-foreground">
              Trivandrum Café
            </p>
            <p className="text-foreground/80">Authentic South Indian Cuisine<br/>Nagpur, Maharashtra</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">Find Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <p className="text-foreground/80">Near Chhatrapati Square,<br/>Nagpur, Maharashtra</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground/80">+91 095296 58611</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="text-foreground/80 hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Google Maps" className="text-foreground/80 hover:text-primary transition-colors"><MapPin className="h-6 w-6" /></Link>
              <Link href="#" aria-label="WhatsApp" className="text-foreground/80 hover:text-primary transition-colors"><MessageSquare className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {year} Trivandrum Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
