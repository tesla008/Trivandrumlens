import * as React from 'react';

const menuItems = [
  'Ghee Podi Dosa', 'Masala Dosa', 'Set Dosa', 'Plain Dosa', 'Medu Vada', 'Idli with Chutney', 'Onion Uttapam', 'Tomato Uttapam', 'Sambar Rice', 'Curd Rice', 'Veg Pulav', 'Poori Bhaji', 'Appam', 'Filter Coffee', 'Rose Milk', 'Cold Coffee', 'Buttermilk'
];

const MarqueeContent = () => (
  <>
    {menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <div className="flex-shrink-0 whitespace-nowrap px-6 py-2">
          <p className="text-2xl md:text-3xl font-semibold uppercase tracking-widest text-foreground/60 group-hover:text-primary transition-colors duration-300">
            {item}
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center px-6">
          <span className="text-2xl text-primary/50 font-sans">✦</span>
        </div>
      </React.Fragment>
    ))}
  </>
);

export function Marquee() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
          Signature South Indian Dishes
        </h2>
        <p className="mt-2 text-md text-foreground/70 max-w-2xl mx-auto">
          Authentic flavors served fresh every day
        </p>
      </div>
      <div className="relative mt-12 w-full overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex items-center">
            <MarqueeContent />
          </div>
          <div className="flex items-center" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
}