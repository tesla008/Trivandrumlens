import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const galleryImageIds = [
  'gallery-dosa', 'gallery-idli', 'gallery-vada',
  'gallery-uttapam', 'gallery-thali', 'gallery-coffee',
];

const galleryImages = galleryImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Food Gallery</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A glimpse into the authentic and delicious world of Trivandrum Café.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            image && (
              <Card key={image.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
