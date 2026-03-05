import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What are your specialties?",
        answer: "We specialize in authentic South Indian cuisine, with our Ghee Podi Dosa, Medu Vada, and traditional Filter Coffee being customer favorites. We use recipes passed down through generations."
    },
    {
        question: "Do you serve breakfast?",
        answer: "Yes, we serve breakfast all day! Enjoy classic South Indian breakfast items like Idli, Dosa, and Uttapam anytime you visit."
    },
    {
        question: "Where are you located?",
        answer: "We are conveniently located near Chhatrapati Square in Nagpur, Maharashtra. You can find our exact location on the map in the 'Contact' section."
    },
    {
        question: "Do you offer takeaway or delivery?",
        answer: "Currently, we focus on providing the best dine-in experience. We plan to introduce takeaway and delivery services soon."
    },
    {
        question: "Is there parking available?",
        answer: "Yes, there is public parking available near the café. We recommend arriving a little early during peak hours to find a spot easily."
    }
]

export function Faq() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                        Have questions? We have answers.
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
