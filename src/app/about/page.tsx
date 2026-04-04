import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        
        <section className="mb-16 md:mb-24">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            About Trivandrum Café
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 leading-relaxed">
            Authentic South Indian flavors, served with warmth in the heart of Nagpur.
          </p>
        </section>

        <section className="mb-12 md:mb-20">
          <p className="text-lg text-foreground/90 leading-loose">
            Trivandrum Café in Nagpur shines for its authentic South Indian flavors — from crisp dosas and soft idlis to flavorful sambar and aromatic filter coffee. Known for its cozy ambiance, reasonable prices, and welcoming service, it has become a go-to destination for lovers of traditional South Indian cuisine.
          </p>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full max-w-[350px] mx-auto my-8 md:my-12 block rounded-2xl shadow-lg"
            preload="auto"
          >
            <source src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/coffeevideo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mb-12 md:mb-20">
          <p className="text-lg text-foreground/90 leading-loose">
            Located at Chhatrapati Square, Nagpur, Trivandrum Café offers a perfect blend of tradition and taste. From signature Ghee Podi Dosa to freshly brewed filter coffee, every dish reflects authenticity and quality. The menu includes idlis, vadas, uttapams, and more—crafted to deliver a true South Indian experience.
          </p>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full max-w-[350px] mx-auto my-8 md:my-12 block rounded-2xl shadow-lg"
            preload="metadata"
          >
            <source src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Influencervideo1.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mb-12 md:mb-20">
          <p className="text-lg text-foreground/90 leading-loose">
            With the opening of its Trimurti Nagar outlet, Trivandrum Café brings the authentic taste of South India even closer—continuing its promise of quality, flavor, and a welcoming dining experience.
          </p>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full max-w-[350px] mx-auto my-8 md:my-12 block rounded-2xl shadow-lg"
            preload="metadata"
          >
            <source src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/TrimurtiVideo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="py-12 md:py-16 my-12 md:my-20 bg-primary/5 rounded-2xl">
          <div className="mb-8 px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Celebrating Women’s Day
            </h2>
            <p className="mt-2 text-md md:text-lg text-foreground/70">
              Honoring strength, grace, and inspiration.
            </p>
          </div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full max-w-md mx-auto block rounded-2xl shadow-xl"
            preload="metadata"
          >
            <source src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Womens'dayvideo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mt-16 md:mt-24">
            <Link 
              href="https://www.instagram.com/trivandrum_cafe_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
            >
                <Instagram className="h-6 w-6" />
                <span className="text-lg font-semibold group-hover:underline">Follow us on Instagram</span>
            </Link>
        </section>

      </div>
    </div>
  );
}
