import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Cta } from '@/components/sections/cta';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trivandrum Café',
  description: 'Authentic South Indian Flavors in Nagpur',
  icons: {
    icon: [
      { url: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png' },
      { url: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png',
    apple: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
          <Header />
          <main>{children}</main>
          <Cta />
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
