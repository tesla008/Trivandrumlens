
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/#specialties', label: 'Specialties' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  // On subpages, we show the scrolled state (background and logo) immediately for better visibility
  const shouldShowBackground = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
      shouldShowBackground ? "bg-background/95 backdrop-blur-md border-b shadow-sm h-16" : "bg-transparent h-20"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        
        <Link 
          href="/" 
          className={cn(
            "transition-all duration-300 ease-in-out flex items-center",
            shouldShowBackground ? "opacity-100 scale-90 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
          )}
        >
          <Image
            src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
            alt="Trivandrum Café Logo"
            width={140}
            height={42}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-bold text-sm uppercase tracking-widest transition-colors",
                shouldShowBackground ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(shouldShowBackground ? "text-foreground" : "text-white")}>
                  <MenuIcon className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="p-6">
                  <Link href="/" className="flex items-center mb-10" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png"
                      alt="Trivandrum Café Logo"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-xl font-bold uppercase tracking-wider transition-colors",
                          pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
