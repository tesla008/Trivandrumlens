import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const experienceImages = [
    // 1. Celebrity Visit - Moved to Top
    { id: 'amb-cel', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/celebrity01.jpeg', alt: 'Celebrity Visit', title: 'Celebrity Choice' },
    
    // 2. Ambience & Interiors
    { id: 'amb-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB1.JPG', alt: 'Interior of the cafe', title: 'Warm & Inviting' },
    { id: 'amb-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB2.jpg', alt: 'Cafe seating area', title: 'Comfortable Seating' },
    { id: 'amb-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/AMB3.JPG', alt: 'Cafe decor details', title: 'Authentic Touches' },
    { id: 'amb-loc1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Chatrapatinagar.jpg', alt: 'Chhatrapati Nagar Outlet', title: 'Chhatrapati Nagar' },
    { id: 'amb-loc2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Trimurtinagar.jpg', alt: 'Trimurti Nagar Outlet', title: 'Trimurti Nagar' },
    { id: 'amb-loc3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Tukdojiputla.jpg', alt: 'Tukdoji Putla Outlet', title: 'Tukdoji Putla' },
    
    // 3. Other restaurant moments (Families / Atmosphere)
    { id: 'fam-1', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic1.png', alt: 'Family enjoying a meal', title: 'Quality Time' },
    { id: 'fam-2', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic2.png', alt: 'Happy customers at the cafe', title: 'Shared Moments' },
    { id: 'fam-3', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic3.png', alt: 'Guests dining together', title: 'Making Memories' },
    { id: 'fam-4', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/pic4.png', alt: 'A group of friends at the cafe', title: 'Good Company' }
];

const GalleryGrid = ({ images }: { images: typeof experienceImages }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {images.map((image) => (
      <Card key={image.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]">
        <div className="relative aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
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
    <section className="py-20 md:py-32 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-headline text-3xl md:text-5xl font-bold text-primary uppercase">Moments at Trivandrum Cafe</h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">A visual journey through tradition, flavour, and family atmosphere.</p>
        </div>

        {/* Outlet Ambience Videos moved from Experience section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="space-y-4">
            <Card className="overflow-hidden rounded-[2rem] shadow-xl border-none">
              <CardContent className="p-0 aspect-[16/9] bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/TukdojiPutla.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
            <p className="text-center font-headline text-xl font-bold">Tukdoji Putla Ambiance</p>
          </div>
          <div className="space-y-4">
            <Card className="overflow-hidden rounded-[2rem] shadow-xl border-none">
              <CardContent className="p-0 aspect-[16/9] bg-black">
                <video
                  src="https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/SambhajiSqaure.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </CardContent>
            </Card>
            <p className="text-center font-headline text-xl font-bold">Sambhaji Square Moments</p>
          </div>
        </div>

        <GalleryGrid images={experienceImages} />
      </div>
    </section>
  );
}
