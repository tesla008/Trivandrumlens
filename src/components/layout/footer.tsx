import Link from 'next/link';
import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#262626] text-background/80">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-headline font-bold text-background">Trivandrum Café</h3>
            <p className="mt-2 text-sm">Authentic South Indian Flavors in Nagpur</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-background/90 uppercase tracking-wider text-sm">Contact & Visit</h4>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Near Chhatrapati Square, Nagpur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 12345 67890</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-background/90 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="mt-2 flex space-x-4">
              <Link href="https://www.instagram.com/trivandrum_cafe_official/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {year} Trivandrum Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
