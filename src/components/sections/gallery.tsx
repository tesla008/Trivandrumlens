import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryImages = [
    { id: 'gallery-set-dosa', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Setdosa01.png', alt: 'A plate of Set Dosa', title: 'Set Dosa', hint: 'set dosa', width: 512, height: 512 },
    { id: 'gallery-idli', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Idly01.png', alt: 'Idli with chutney and sambar', title: 'Idli with Chutney', hint: 'idli chutney', width: 512, height: 512 },
    { id: 'gallery-vada', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri13.jpg', alt: 'Crispy Medu Vada', title: 'Medu Vada', hint: 'medu vada', width: 600, height: 400 },
    { id: 'gallery-uttapam', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri6.jpg', alt: 'A delicious Uttapam plate', title: 'Uttapam Plate', hint: 'uttapam plate', width: 600, height: 400 },
    { id: 'gallery-breakfast', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/tri9.jpg', alt: 'A full South Indian breakfast spread', title: 'South Indian Breakfast', hint: 'breakfast spread', width: 600, height: 400 },
    { id: 'gallery-coffee', src: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Additional/Tea02.png', alt: 'Traditional filter coffee', title: 'Filter Coffee', hint: 'filter coffee', width: 512, height: 512 },
];


export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">A Visual Feast</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A glimpse into the authentic and delicious world of Trivandrum Café.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  data-ai-hint={image.hint}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-headline text-lg font-semibold -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
