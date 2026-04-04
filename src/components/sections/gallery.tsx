import Image from 'next/image';
import { Card } from '@/components/ui/card';

// Section 1: Menu
const menuImages = [
    { id: 'gallery-set-dosa', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Setdosa01.png', alt: 'A plate of Set Dosa', title: 'Set Dosa' },
    { id: 'gallery-idli', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Idly01.png', alt: 'Idli with chutney and sambar', title: 'Idli Platter' },
    { id: 'gallery-masala-dosa', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri13.jpg', alt: 'Crispy Masala Dosa', title: 'Masala Dosa' },
    { id: 'gallery-vada', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri6.jpg', alt: 'Crispy Medu Vada', title: 'Medu Vada' },
    { id: 'gallery-breakfast', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri9.jpg', alt: 'A full South Indian breakfast spread', title: 'Breakfast Platter' },
    { id: 'gallery-coffee', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Tea02.png', alt: 'Traditional filter coffee', title: 'Filter Coffee' },
];

// Section 2: Trusted by Families
const familyImages = [
    { id: 'family-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family1.jpg', alt: 'Family enjoying a meal', title: 'Shared Moments' },
    { id: 'family-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family2.jpg', alt: 'Customers dining', title: 'Happy Guests' },
    { id: 'family-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family3.jpg', alt: 'Children eating', title: 'For All Ages' },
    { id: 'family-4', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family4.jpg', alt: 'Group of friends', title: 'Good Times' },
    { id: 'family-5', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family5.jpg', alt: 'Couple dining', title: 'Cozy Atmosphere' },
    { id: 'family-6', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/family6.jpg', alt: 'Family smiling', title: 'Making Memories' },
];

// Section 3: Ambience
const ambienceImages = [
    { id: 'amb-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/amb1.jpg', alt: 'Interior of the cafe', title: 'Warm & Inviting' },
    { id: 'amb-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/amb2.jpg', alt: 'Cafe seating area', title: 'Comfortable Seating' },
    { id: 'amb-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/amb3.jpg', alt: 'Cafe decor details', title: 'Authentic Touches' },
];

const GalleryGrid = ({ images }: { images: { id: string; src: string; alt: string; title: string; }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((image) => (
      <Card key={image.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="relative aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h4 className="text-white font-semibold text-lg -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h4>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">A Visual Feast</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A glimpse into the authentic and delicious world of Trivandrum Café.</p>
        </div>

        <div className="space-y-20 md:space-y-24">
            <div>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Menu</h3>
                <GalleryGrid images={menuImages} />
            </div>

            <div>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-4">Trusted by Families</h3>
                <p className="text-md text-foreground/70 max-w-2xl mx-auto text-center mb-12">Moments shared over authentic South Indian flavors</p>
                <GalleryGrid images={familyImages} />
            </div>

            <div>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-4">Ambience</h3>
                <p className="text-md text-foreground/70 max-w-2xl mx-auto text-center mb-12">Warm, inviting, and rooted in tradition</p>
                <GalleryGrid images={ambienceImages} />
            </div>
        </div>
      </div>
    </section>
  );
}
