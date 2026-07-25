import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What makes the Trivandrum Café experience unique?",
        answer: "Every meal at Trivandrum Café is crafted to leave you completely satisfied. We focus on authentic South Indian heritage, using premium quality ingredients and traditional preparation methods to ensure a premium dining experience for every guest."
    },
    {
        question: "Is the food freshly prepared?",
        answer: "Absolutely. We believe that freshly prepared food is the key to a satisfying experience. Our kitchen maintains the highest standards of hygiene and quality, ensuring that every visit is a memorable one."
    },
    {
        question: "Where can I enjoy the Trivandrum Café experience?",
        answer: "We are proud to serve our guests at three convenient locations in Nagpur: Trimurti Nagar, Chhatrapati Nagar, and Tukdoji Putla. You can expect the same consistent taste and welcoming atmosphere at all our outlets."
    },
    {
        question: "Is the environment family-friendly?",
        answer: "Yes, we have designed our cafes to provide a warm and welcoming ambience perfect for families. Every visit is a satisfying experience where guests of all ages can enjoy authentic flavors together."
    },
    {
        question: "What is your commitment to quality?",
        answer: "Our mission is to provide authentic South Indian cuisine with generous portions and consistent taste. From our sourcing to our service, every detail is managed to keep you coming back for a truly satisfying meal."
    }
]

export function Faq() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto italic">
                        Ensuring a satisfying dining experience for every guest.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/80">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
