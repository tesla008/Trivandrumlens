import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Anjali P.",
        quote: "The Ghee Podi Dosa is out of this world! It felt like I was back in Chennai. The ambiance is so cozy and welcoming. A must-visit for any South Indian food lover.",
        rating: 5,
    },
    {
        name: "Rohan S.",
        quote: "Finally, an authentic South Indian café in Nagpur. The filter coffee is strong and aromatic, just the way it should be. The staff is incredibly friendly.",
        rating: 5,
    },
    {
        name: "Priya K.",
        quote: "I came here with my family and we loved everything. The Medu Vadas were perfectly crispy and the sambhar was delicious. We'll definitely be back soon!",
        rating: 4,
    }
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-primary fill-current' : 'text-muted-foreground/50'}`} />
            ))}
        </div>
    )
}

export function Reviews() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">From Our Guests</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                        Hear what people are saying about their experience at Trivandrum Café.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card border-border/50 shadow-lg rounded-lg flex flex-col">
                            <CardContent className="pt-6 flex-grow">
                                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                                    <StarRating rating={testimonial.rating} />
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
