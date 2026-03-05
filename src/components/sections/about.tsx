import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";

export function About() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'about-exterior');

  return (
    <section id="about" className="relative py-20 md:py-32">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">About Trivandrum Café</h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Nestled in the heart of Nagpur, Trivandrum Café is a sanctuary for lovers of authentic South Indian cuisine. Our journey began with a simple mission: to bring the traditional flavors and warm hospitality of Southern India to our community.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Every dish is a celebration of age-old recipes, prepared with passion and the finest ingredients. From our crispy, golden-brown dosas to our fluffy idlis and aromatic filter coffee, we are dedicated to providing a dining experience that is both memorable and deeply satisfying.
            </p>
          </div>
          <div className="p-8 bg-primary/10 rounded-lg shadow-lg backdrop-blur-sm">
            <h3 className="font-headline text-2xl text-primary mb-4">Our Promise</h3>
            <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                    <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span><strong>Authentic Recipes:</strong> Honoring the culinary traditions passed down through generations.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span><strong>Fresh Ingredients:</strong> Sourcing the best local and seasonal produce for vibrant flavors.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span><strong>Warm Hospitality:</strong> Creating a cozy and welcoming environment for all our guests.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
