import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
    return (
        <section id="cta" className="py-20 md:py-32 bg-primary/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    A Satisfying Dining Experience Awaits
                </h2>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Every visit is a memorable and satisfying experience. Join us for freshly prepared food that celebrates tradition in every bite.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                        <Link href="#contact">Visit Trivandrum Café</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
