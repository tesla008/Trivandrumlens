import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Cta } from '@/components/sections/cta';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trivandrum Café',
  description: 'Authentic South Indian Flavors in Nagpur',
  icons: {
    icon: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo.jpeg',
    apple: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/logo.jpeg',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Cta />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
