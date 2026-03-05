import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuData = {
  Dosa: [
    { name: 'Ghee Podi Dosa' }, { name: 'Ghee Masala Dosa' }, { name: 'Onion Dosa' }, { name: 'Cheese Podi Dosa' }, { name: 'Open Butter Masala Dosa' },
  ],
  Idli: [
    { name: 'Steamed Idli (2 pcs)' }, { name: 'Ghee Podi Idli' }, { name: 'Kanchipuram Idli' },
  ],
  Vada: [
    { name: 'Medu Vada' }, { name: 'Sambar Vada' }, { name: 'Curd Vada (Dahi Vada)' },
  ],
  Uttapam: [
    { name: 'Onion Uttapam' }, { name: 'Tomato Uttapam' }, { name: 'Mixed Veg Uttapam' },
  ],
  'Rice & Meals': [
    { name: 'Lemon Rice' }, { name: 'Curd Rice' }, { name: 'Sambar Rice' }, { name: 'South Indian Thali' },
  ],
  Beverages: [
    { name: 'Filter Coffee' }, { name: 'Rose Milk' }, { name: 'Fresh Lime Soda' }, { name: 'Buttermilk' },
  ],
};

export function Menu() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Explore Our Menu</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A selection of authentic dishes, prepared with traditional recipes and the freshest ingredients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(menuData).map(([category, items]) => (
            <Card key={category} className="border-border/50 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.name}>
                      <p className="font-semibold text-foreground">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
