import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Target, Heart } from "lucide-react";

const sections = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "VISION",
    subtitle: "Santhosham Aagattum, Swasthyam Thagattum",
    content: "Our vision is to promote a healthier lifestyle across India through the goodness of South Indian cuisine. By offering dishes that are both nutritious and delicious, we aim to make a positive impact on our customers’ health and well-being. We believe in “Santhosham Aagattum, Swasthyam Thagattum” (May there be happiness, may there be health), dedicating Trivandrum Cafe to serving food that doesn't just satisfy hunger but also nurtures the body and soul.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "WHY TRIVANDRUM CAFE?",
    subtitle: "Suvaiyum Sugamum Sangamam - The blend of taste and pleasure",
    content: "At Trivandrum Cafe, we believe in preserving the authenticity of South Indian cuisine. To maintain the rich, traditional flavors, we source our key ingredients like rice, coffee, and lentils directly from South India. We believe in “Suvaiyum Sugamum Sangamam” (A blend of taste and wellness), ensuring that each dish is crafted with carefully chosen ingredients that honor the roots of South Indian culinary heritage.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "MISSION",
    subtitle: "Annam Parabrahma Swaroopam - There is divinity in every food",
    content: "To bring the essence of traditional South Indian flavors to every plate, ensuring each meal is both nourishing and flavorful. We believe in “Annam Parabrahma Swaroopam” — that food is divine, and our mission is to treat each meal with this reverence.",
  },
];

export function MissionVision() {
  return (
    <section id="about-cafe" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            About Trivandrum Café
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-lg rounded-lg text-center flex flex-col">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {section.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold text-foreground/80 italic mb-4">"{section.subtitle}"</p>
                <p className="text-foreground/70 text-left leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
