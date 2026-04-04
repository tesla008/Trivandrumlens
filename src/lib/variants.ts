export type Variant = {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    themeColor: string; // Hex or HSL string for accent
    sequenceUrl: string;
    frameCount: number;
};

export const variants: Variant[] = [
    {
        id: 'restaurant',
        name: 'Trivandrum Café',
        subtitle: 'Authentic South Indian Restaurant',
        description: 'Traditional South Indian flavors served fresh with crispy dosas, flavorful sambhar, and a cozy café experience in Nagpur.',
        themeColor: 'hsl(var(--accent))', // Banana Leaf Green
        sequenceUrl: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/TrivandrumHero/frame_000_delay-0.041s.webp',
        frameCount: 240
    },
    {
        id: 'vada',
        name: 'Trivandrum Café',
        subtitle: 'Crispy Lentil Delight',
        description: 'Golden crispy medu vada served hot with coconut chutney and flavorful sambhar — a classic South Indian favorite.',
        themeColor: '#EAB308', // A warm yellow
        sequenceUrl: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Vada/frame_000_delay-0.041s.webp',
        frameCount: 240
    },
    {
        id: 'coffee',
        name: 'Trivandrum Café',
        subtitle: 'South Indian Classic',
        description: 'Freshly brewed South Indian filter coffee with rich aroma and smooth foam, served in a traditional brass tumbler.',
        themeColor: '#A16207', // A coffee brown
        sequenceUrl: 'https://exlaucgslmfiakllbtnq.supabase.co/storage/v1/object/public/Filtercoffee/frame_000_delay-0.041s.webp',
        frameCount: 240
    },
];
