import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryImages = [
    { id: 'gallery-dosa', src: 'https://picsum.photos/seed/gallery-dosa/600/400', alt: 'A delicious dosa on a plate.', hint: 'dosa plate' },
    { id: 'gallery-idli', src: 'https://picsum.photos/seed/gallery-idli/600/400', alt: 'A serving of idli.', hint: 'idli plate' },
    { id: 'gallery-vada', src: 'https://picsum.photos/seed/gallery-vada/600/400', alt: 'A close-up of crispy vadas.', hint: 'vada snack' },
    { id: 'gallery-uttapam', src: 'https://picsum.photos/seed/gallery-uttapam/600/400', alt: 'A freshly made uttapam.', hint: 'uttapam breakfast' },
    { id: 'gallery-coffee', src: 'https://picsum.photos/seed/gallery-coffee/600/400', alt: 'Filter coffee being poured.', hint: 'indian coffee' },
    { id: 'gallery-thali', src: 'https://picsum.photos/seed/gallery-thali/600/400', alt: 'A complete South Indian thali meal.', hint: 'thali meal' },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">A Visual Feast</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A glimpse into the authentic and delicious world of Trivandrum Café.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  data-ai-hint={image.hint}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
