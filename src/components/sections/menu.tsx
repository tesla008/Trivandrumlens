import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fullMenuData = {
  Dosa: [
    { name: 'Ghee Podi Dosa' }, { name: 'Ghee Masala Dosa' }, { name: 'Onion Dosa' }, { name: 'Onion Podi Dosa' }, { name: 'Cheese Podi Dosa' }, { name: 'Cheese Garlic Roast Masala Dosa' }, { name: 'Open Butter Masala Dosa' },
  ],
  Uttapam: [
    { name: 'Onion Uttapam' }, { name: 'Tomato Uttapam' }, { name: 'Onion Tomato Uttapam' }, { name: 'Onion Pepper Uttapam' },
  ],
  'Rice (Phulka Meals)': [
    { name: 'Lemon Rice' }, { name: 'Curd Rice' }, { name: 'Sambar Rice' }, { name: 'Tomato Rice' }, { name: 'Veg Pulav' },
  ],
  'South Indian Breads': [
    { name: 'Poori' }, { name: 'Appam' }, { name: 'Goda Malayalam Paratha' },
  ],
  Beverages: [
    { name: 'Filter Coffee' }, { name: 'Filter Milk' }, { name: 'Fresh Lime Soda' }, { name: 'Rose Milk' }, { name: 'Chocolate Milkshake' }, { name: 'Cold Coffee' }, { name: 'Buttermilk' },
  ],
};

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A selection of authentic dishes, prepared with traditional recipes and the freshest ingredients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(fullMenuData).map(([category, items]) => (
            <Card key={category} className="border-primary/20 bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center">
                      <span className="text-foreground">{item.name}</span>
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
